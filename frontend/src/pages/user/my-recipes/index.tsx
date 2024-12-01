import { useEffect, useState } from 'react'
import { RecipeService } from '../../../services/recipe'
import { RecipeCard } from '../../../components/RecipeCard'
import axios from 'axios'
import { Paragraph, RecipesContainer } from './styles'
import { Recipe } from '../../../types/models'

export function MyRecipes() {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [signedUrls, setSignedUrls] = useState<Record<number, string>>({})

  useEffect(() => {
    const fetchSignedUrls = async () => {
      const urls: Record<number, string> = {}
      for (const recipe of recipes) {
        if (recipe.photoKey) {
          const response = await axios.get(
            `http://localhost:3333/recipes/signed_url/${recipe.id}`,
          )
          urls[recipe.id] = response.data.signedUrl
        }
      }
      setSignedUrls(urls)
    }
    if (recipes.length > 0) {
      fetchSignedUrls()
    }
  }, [recipes])

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const data = await RecipeService.getMyRecipes()
        setRecipes(data)
      } catch (error) {
        console.error('Erro ao buscar receitas:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchRecipes()
  }, [])

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <h1>Minhas Receitas</h1>
      {recipes.length > 0 ? (
        <>
          <Paragraph>
            Ao clicar na lixeira, você apagará <b>permanentemente</b> a sua
            receita!
          </Paragraph>
          <RecipesContainer>
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                image={signedUrls[recipe.id]}
                recipe={recipe}
                isOwner
              />
            ))}
          </RecipesContainer>
        </>
      ) : (
        <Paragraph>Você ainda não tem receitas cadastradas.</Paragraph>
      )}
    </>
  )
}
