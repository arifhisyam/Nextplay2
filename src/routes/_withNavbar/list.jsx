import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GameList from '../../components/GameList'

export const Route = createFileRoute('/_withNavbar/list')({
  component: () => (
    <>
      <Header />
      <GameList />
      <Footer />
    </>
  ),
})
