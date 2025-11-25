import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TopUpPage from '../../TopUp/ML'

export const Route = createFileRoute('/_withNavbar/ml')({
  component: () => (
    <>
      <Header />
      <TopUpPage />
      <Footer />
    </>
  ),
})
