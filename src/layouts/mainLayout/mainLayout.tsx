
import { Header, Footer } from '../../components'
export const MainLayout: React.FC = ({ children }) => {

  return (
    <>
      <Header></Header>
      <> {children} </>
      <Footer></Footer>
    </>

  )

}