import { Routes, Route } from 'react-router-dom'
import { RecipeListing } from './pages/recipes-listing'
import { CreateRecipe } from './pages/create-recipe'
import { DefaultLayout } from './layouts/DefaultLayout'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { Profile } from './pages/user/profile'
import { MyRecipes } from './pages/user/my-recipes'
import { LikedRecipes } from './pages/user/liked-recipes'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<RecipeListing />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
        <Route path="/liked-recipes" element={<LikedRecipes />} />
      </Route>
      <Route path="/login" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}
