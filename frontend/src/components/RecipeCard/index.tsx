import { DifficultyRecipe, TagsRecipe } from '../../types/models'
import {
  Card,
  Image,
  ImageConatiner,
  OverlayContainer,
  OverlayText,
  PrepTime,
  Content,
  Title,
  ListTags,
  Tag,
} from './styles'

interface RecipeCardProps {
  image: string
  title: string
  preparationTime: number
  difficulty: keyof typeof DifficultyRecipe
  tags: (keyof typeof TagsRecipe)[]
}

export function RecipeCard({
  image,
  title,
  preparationTime,
  difficulty,
  tags,
}: Readonly<RecipeCardProps>) {
  return (
    <Card>
      <ImageConatiner>
        <Image src={image} alt={title} />
        <OverlayContainer>
          <OverlayText variant={DifficultyRecipe[difficulty]}>
            {DifficultyRecipe[difficulty].toUpperCase()}
          </OverlayText>
          <PrepTime>{preparationTime} min</PrepTime>
        </OverlayContainer>
      </ImageConatiner>
      <Content>
        <Title>{title}</Title>
        <ListTags>
          {tags.map((tag) => (
            <Tag key={tag}>{TagsRecipe[tag]}</Tag>
          ))}
        </ListTags>
      </Content>
    </Card>
  )
}
