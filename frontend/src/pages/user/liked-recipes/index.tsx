import { useEffect, useState } from 'react'
import { RecipesContainer } from './styles'
import axios from 'axios'
import { RecipeCard } from '../../../components/RecipeCard'
import { LikeService } from '../../../services/like'
import { ILike } from '../../../interfaces/schema'

export function LikedRecipes() {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState<ILike[]>([])
  const [signedUrls, setSignedUrls] = useState<Record<number, string>>({})

  useEffect(() => {
    const fetchSignedUrls = async () => {
      const urls: Record<number, string> = {}
      for (const recipe of recipes) {
        if (recipe.recipe.photoKey) {
          const response = await axios.get(
            `http://localhost:3333/recipes/signed_url/${recipe.recipe.id}`,
          )
          urls[recipe.recipe.id] = response.data.signedUrl
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
        const data = await LikeService.getRecipeLikes()
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
      <h1>Receitas Curtidas</h1>
      {recipes.length > 0 ? (
        <RecipesContainer>
          {recipes.map((ilike) => (
            <RecipeCard
              key={ilike.recipe.id}
              image={signedUrls[ilike.recipe.id]}
              recipe={ilike.recipe}
              screenLikes
            />
          ))}
        </RecipesContainer>
      ) : (
        <p>Você ainda não curtiu receitas.</p>
      )}
    </>
  )
}
