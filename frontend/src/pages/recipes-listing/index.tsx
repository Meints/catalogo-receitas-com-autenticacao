import { useState, useEffect } from 'react'
import axios from 'axios'
import { Recipe } from '../../types/models'
import { RecipeCard } from '../../components/RecipeCard'
import { RecipesContainer } from './styles'

export function RecipeListing() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [signedUrls, setSignedUrls] = useState<Record<number, string>>({})

  useEffect(() => {
    axios.get('http://localhost:3333/recipes').then((response) => {
      setRecipes(response.data)
    })
  }, [])

  useEffect(() => {
    const fetchSignedUrls = async () => {
      const urls: Record<number, string> = {}
      for (const recipe of recipes) {
        if (recipe.id) {
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

  return (
    <div>
      <h1>Lista de Receitas</h1>
      <RecipesContainer>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={signedUrls[recipe.id]}
            difficulty={recipe.difficulty}
            preparationTime={recipe.preparationTime}
            tags={recipe.tags}
          />
        ))}
      </RecipesContainer>
    </div>
  )
}
