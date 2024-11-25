import { createBrowserRouter } from 'react-router-dom'
import { RecipeListing } from './pages/recipes-listing'
import { CreateRecipe } from './pages/create-recipe'
import { DefaultLayoutWithSearch } from './layouts/DefaultLayoutWithSearch'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { Profile } from './pages/user/profile'
import { MyRecipes } from './pages/user/my-recipes'
import { LikedRecipes } from './pages/user/liked-recipes'
import { DefaultLayout } from './layouts/DefaultLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayoutWithSearch />,
    children: [{ path: '/', element: <RecipeListing /> }],
  },
  {
    path: '/user',
    element: <DefaultLayout />,
    children: [
      { path: 'profile', element: <Profile /> },
      { path: 'create-recipe', element: <CreateRecipe /> },
      { path: 'my-recipes', element: <MyRecipes /> },
      { path: 'liked-recipes', element: <LikedRecipes /> },
    ],
  },
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
])
