import { BrowserRouter } from 'react-router-dom'

import Header from './Components/Header'
import { EstiloGlobal } from './styles'
import Rotas from './routes'
import Footer from './Components/Footer'

function App() {
    return (
        <BrowserRouter>
            <EstiloGlobal />
            <div className="container">
                <Header />
            </div>
            <Rotas />
            <Footer />
        </BrowserRouter>
    )
}

export default App
