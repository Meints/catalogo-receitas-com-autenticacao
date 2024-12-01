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
  const [pagination, setPagination] = useState({
    currentPage: 1,
    lastPage: 1,
    next: null,
    prev: null,
  })
  const [loading, setLoading] = useState(false)

  const fetchRecipes = async (page: number = 1) => {
    setLoading(true)
    try {
      const response = await axios.get(`http://localhost:3333/recipes`, {
        params: { page, ...Object.fromEntries(searchParams.entries()) },
      })
      setRecipes(response.data.data)
      setPagination(response.data.meta)
      console.log(pagination)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecipes(pagination.currentPage)
  }, [searchParams])

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

  const handleNextPage = () => {
    if (pagination.next) {
      fetchRecipes(pagination.next)
    }
  }

  const handlePrevPage = () => {
    if (pagination.prev) {
      fetchRecipes(pagination.prev)
    }
  }

  let content
  if (loading) {
    content = <p>Carregando...</p>
  } else if (recipes.length > 0) {
    content = (
      <RecipesContainer>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            image={signedUrls[recipe.id]}
            recipe={recipe}
          />
        ))}
      </RecipesContainer>
    )
  } else {
    content = <EmptyRecipes />
  }

  return (
    <>
      {content}

      <div>
        <button onClick={handlePrevPage} disabled={!pagination.prev}>
          Anterior
        </button>
        <button onClick={handleNextPage} disabled={!pagination.next}>
          Próxima
        </button>
      </div>

      <p>
        Página {pagination.currentPage} de {pagination.lastPage}
      </p>
    </>
  )
}
