import { createFileRoute } from '@tanstack/react-router'
import GamePopuler from '../../components/GamePopuler'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const Route = createFileRoute('/_withNavbar/')({
  component: () => (
    <>
      <Header />
      <GamePopuler />
      <Footer />
    </>
  ),
})
