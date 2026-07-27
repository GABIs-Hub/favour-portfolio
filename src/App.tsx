import { Analytics } from '@vercel/analytics/react'
import FavourPortfolio from './components/portfolio/FavourPortfolio'

export default function App() {
  return (
    <>
      <FavourPortfolio />
      <Analytics />
    </>
  )
}
