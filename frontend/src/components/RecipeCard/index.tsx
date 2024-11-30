import { TrashSimple, ThumbsUp } from '@phosphor-icons/react'
import { DifficultyRecipe, Recipe, TagsRecipe } from '../../types/models'
import { ModalRecipeDetails } from '../ModalRecipeDetails'
import {
  Card,
  Image,
  ImageContainer,
  OverlayContainer,
  OverlayText,
  PrepTime,
  Content,
  Title,
  ListTags,
  Tag,
  DialogContainer,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  IconContainer,
} from './styles'
import { LikeService } from '../../services/like'
import { toast } from 'react-toastify'
import { RecipeService } from '../../services/recipe'

interface RecipeCardProps {
  image: string
  recipe: Recipe
  isOwner?: boolean
}

export function RecipeCard({
  image,
  recipe,
  isOwner,
}: Readonly<RecipeCardProps>) {
  const handleLike = async () => {
    try {
      const data = await LikeService.toggleLike(recipe.id)
      if (data) {
        toast.warning('Receita descurtida com sucesso!')
      } else {
        toast.success('Receita curtida com sucesso!')
      }
    } catch (error) {
      console.error(error)
      toast.error('Erro ao curtir a receita.')
    }
  }

  const handleDelete = async () => {
    try {
      await RecipeService.remove(recipe.id)
      toast.success('Receita deletada com sucesso!')
    } catch (error) {
      console.error(error)
      toast.error('Erro ao deletar a receita.')
    }
  }

  return (
    <DialogContainer>
      <DialogTrigger>
        <Card>
          <ImageContainer>
            <IconContainer>
              {isOwner ? (
                <button onClick={() => handleDelete()}>
                  <TrashSimple size={40} />
                </button>
              ) : (
                <button onClick={() => handleLike()}>
                  <ThumbsUp size={40} />
                </button>
              )}
            </IconContainer>
            <Image src={image} alt={recipe.title} />
            <OverlayContainer>
              <OverlayText variant={DifficultyRecipe[recipe.difficulty]}>
                {DifficultyRecipe[recipe.difficulty].toUpperCase()}
              </OverlayText>
              <PrepTime>{recipe.preparationTime} min</PrepTime>
            </OverlayContainer>
          </ImageContainer>
          <Content>
            <Title>{recipe.title}</Title>
            <ListTags>
              {recipe.tags.map((tag) => (
                <Tag key={tag}>{TagsRecipe[tag]}</Tag>
              ))}
            </ListTags>
          </Content>
        </Card>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <ModalRecipeDetails recipe={recipe} image={image} />
        </DialogContent>
      </DialogPortal>
    </DialogContainer>
  )
}
