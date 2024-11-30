import { DifficultyRecipe, Recipe, TagsRecipe } from '../../types/models'
import {
  DialogClose,
  ImageContainer,
  BasicInformation,
  ModalContainer,
  ModalContent,
  ModalImage,
  ModalInfo,
  Tag,
  TitleRecipe,
  LikesQtd,
  EssentialInformation,
  Span,
  Box,
  GroupTags,
} from './styles'

type ModalRecipeDetailsProps = {
  recipe: Recipe
  image: string
}

export function ModalRecipeDetails({
  recipe,
  image,
}: Readonly<ModalRecipeDetailsProps>) {
  return (
    <ModalContainer>
      <ImageContainer>
        <ModalImage src={image} alt={recipe.title} />
      </ImageContainer>
      <ModalContent>
        <ModalInfo>
          <TitleRecipe>{recipe.title}</TitleRecipe>
          <LikesQtd>{recipe?._count?.likes} curtidas</LikesQtd>
          <BasicInformation>
            <p>
              <Span>Dificuldade:</Span>
              {DifficultyRecipe[recipe.difficulty]}
            </p>
            <p>
              <Span>Tempo prep:</Span>
              {recipe.preparationTime} min
            </p>
          </BasicInformation>
          <EssentialInformation>
            <Span>Ingredientes:</Span>
            <Box>{recipe.ingredients}</Box>
          </EssentialInformation>
          <EssentialInformation>
            <Span>Modo de preparo:</Span> <Box>{recipe.instructions}</Box>
          </EssentialInformation>
          <EssentialInformation>
            <Span>Tags:</Span>
            <GroupTags>
              {recipe.tags.map((tag) => (
                <Tag key={tag}>{TagsRecipe[tag]}</Tag>
              ))}
            </GroupTags>
          </EssentialInformation>
        </ModalInfo>
      </ModalContent>
      <DialogClose>X</DialogClose>
    </ModalContainer>
  )
}
