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
} from './styles'

interface RecipeCardProps {
  image: string
  recipe: Recipe
}

export function RecipeCard({ image, recipe }: Readonly<RecipeCardProps>) {
  return (
    <DialogContainer>
      <DialogTrigger>
        <Card>
          <ImageContainer>
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
