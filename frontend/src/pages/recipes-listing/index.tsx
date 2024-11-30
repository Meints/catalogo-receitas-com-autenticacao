import { useState, useEffect } from 'react'
import axios from 'axios'
import { Recipe } from '../../types/models'
import { RecipeCard } from '../../components/RecipeCard'
import { RecipesContainer } from './styles'
import { EmptyRecipes } from '../empty-recipes'
import { useSearchParams } from 'react-router-dom'

export function RecipeListing() {
  const [searchParams] = useSearchParams()

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

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/recipes?${searchParams.toString()}`,
        )
        setRecipes(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchRecipes()
  }, [searchParams])

  return (
    <>
      {recipes.length > 0 ? (
        <RecipesContainer>
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              image={signedUrls[recipe.id]}
              recipe={recipe}
            />
          ))}
        </RecipesContainer>
      ) : (
        <EmptyRecipes />
      )}
    </>
  )
}
