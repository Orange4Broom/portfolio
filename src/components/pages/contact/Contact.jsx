import Navigation from '../../navigation/Navigation';
import Icon from '../../icon/Icon';
import './contact.css';

function Contact() {
    return (
        <>
        <section className="Contact">
            <Navigation />
            <div className='links-wrapper'>
                <div className='contact-links'>
                    <a href="https://github.com/Orange4Broom" target="_blank" rel='noreferrer' className='github'><Icon name='github' type='fab' /></a>
                    <a href="https://discord.com/users/519971592076394531" target="_blank" rel='noreferrer' className='discord'><Icon name='discord' type='fab' /></a>
                    <a href="https://twitter.com/Orange4Broom" target="_blank" rel='noreferrer' className='twitter'><Icon name='twitter' type='fab' /></a>
                </div>

            </div>
        </section>
        </>
    )
}

export default Contact;