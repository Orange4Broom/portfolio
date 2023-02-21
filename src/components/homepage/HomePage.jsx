import AOS from 'aos';
import 'aos/dist/aos.css';
import './homepage.css';

function Homepage() {
    AOS.init();
      
    return (
        <div className="content-wrapper">
            <div data-aos="fade-left" className='content-text' >
                <h1 className='name-header'>Jakub <span className='padding-text'>Trnčák</span></h1>
                <p className='info-paragraf'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Sed ac dolor sit amet purus. </p>
            </div>
            <button data-aos="fade-up" className='next-button'>Find out more</button>
        </div>
    )
}

export default Homepage;