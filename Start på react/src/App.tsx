import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { HeaderText } from './components/HeaderText/HeaderText'
import CssDropdown from './components/CssDropdown/CssDropdown'



function App() {
   return (
      <>
        <CssDropdown />
        <Header />
        <HeaderText headerText="Props er cool" />
        <Main />
        <Footer />
      </>
   )
}

export default App
