
import { Header, Footer } from '../../components'
export const UserLayout: React.FC = ({ children }) => {

  return (
    <>
      <Header></Header>
      <> {children} </>
      <Footer></Footer>
    </>

  )

}