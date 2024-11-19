import { useState, useEffect } from 'react'
import axios from 'axios'

type Recipe = {
  id: number
  title: string
  description: string
}

export function RecipeListing() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    axios.get('http://localhost:3333/recipes').then((response) => {
      setRecipes(response.data)
      console.log(response.data)
    })
  }, [])

  console.log('Recipes:', recipes)

  return (
    <div>
      <h1>Lista de Receitas</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
