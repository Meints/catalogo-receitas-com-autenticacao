import Comida from '../../assets/prato-comida.jpg'
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
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

interface RecipeCardProps {
  image: string
  recipe: Recipe
  isOwner?: boolean
  screenLikes?: boolean
}

export function RecipeCard({
  image,
  recipe,
  isOwner,
  screenLikes,
}: Readonly<RecipeCardProps>) {
  const { isAuthenticated } = useAuth()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkIfLiked = async () => {
      try {
        const likedRecipes = await LikeService.getRecipeLikes()

        const liked = likedRecipes.some((like) => like.recipeId === recipe.id)
        setIsLiked(liked)
      } catch (error) {
        console.error(error)
      }
    }

    checkIfLiked()
  }, [recipe.id])

  const handleLike = async () => {
    try {
      const liked = !isLiked
      await LikeService.toggleLike(recipe.id)

      setIsLiked(liked)

      if (liked) {
        recipe._count.likes += liked ? 1 : -1
        toast.success('Receita curtida com sucesso!')
      } else {
        toast.warning('Receita descurtida com sucesso!')
        if (screenLikes) {
          window.location.reload()
        }
      }
    } catch (error) {
      if (!isAuthenticated) {
        toast.error('Você precisa estar logado para curtir uma receita.')
        return
      }
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
    } finally {
      window.location.reload()
    }
  }

  const handleRecipeClick = () => {
    if (isOwner) {
      navigate(`/user/edit-recipe/${recipe.id}`)
    }
  }

  return (
    <DialogContainer>
      <DialogTrigger onClick={handleRecipeClick}>
        <Card>
          <ImageContainer>
            <IconContainer>
              {isOwner ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDelete()
                  }}
                >
                  <TrashSimple size={40} />
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleLike()
                  }}
                >
                  {isLiked ? (
                    <ThumbsUp size={40} color="#3A1763" weight="fill" />
                  ) : (
                    <ThumbsUp size={40} />
                  )}
                </button>
              )}
            </IconContainer>
            <Image src={image ?? Comida} alt={recipe.title} />
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
