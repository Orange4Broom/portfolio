import AOS from 'aos';
import Navigation from '../../navigation/Navigation';
import Icon from '../../icon/Icon';
import 'aos/dist/aos.css';
import './contact.css';

function Contact() {
    AOS.init();

    return (
        <>
        <section className="Contact">
            <Navigation />
            <div className='links-wrapper'>
                <div className='contact-links'>                  
                    <a data-aos="fade-up" href="https://discord.com/users/519971592076394531" target="_blank" rel='noreferrer' className='discord'><Icon name='discord' type='fab' /><span className='icon-tag'>Discord</span></a>
                    <a data-aos="fade-right" href="https://github.com/Orange4Broom" target="_blank" rel='noreferrer' className='github'><Icon name='github' type='fab' /><span className='icon-tag'>GitHub</span></a>
                    <a data-aos="fade-left" href="https://twitter.com/Orange4Broom" target="_blank" rel='noreferrer' className='twitter'><Icon name='twitter' type='fab' /><span className='icon-tag'>Twitter</span></a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;