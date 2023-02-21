import Navigation from "../../navigation/Navigation";
import StartPage from '../../startpage/StartPage'

import './home.css'

function Home() {
    return (
        <section className='Home'>
            <Navigation />
            <StartPage />
        </section>
    )
}

export default Home;