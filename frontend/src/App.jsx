import './App.css'
import Header from './Header'
import Footer from './companets/footer/Footer'
import Pl from './companets/popularLocation/Pl'
import Services from './companets/services/Services.jsx'
import Tur from './companets/tur/Tur'

export default function App() {
    return (
        <>
            <Header />
            <Services />
            <Pl />
            <Tur />
            <Footer />
        </>
    )
}