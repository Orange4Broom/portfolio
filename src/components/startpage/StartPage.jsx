import AOS from 'aos';
import LinkButton from '../linkbutton/LinkButton';
import 'aos/dist/aos.css';
import './startpage.css';

function StartPage() {
    AOS.init();
      
    return (
        <div className="content-wrapper">
            <div className='content-text' >
                <h1 data-aos="fade-left" className='name-header'>Jakub <span className='padding-text'>Trnčák</span></h1>
                <p data-aos="fade-left" className='info-paragraf'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Sed ac dolor sit amet purus. </p>
                <div className='button-div'>
                    <LinkButton />
                </div>
            </div>
        </div>
    )
}

export default StartPage;