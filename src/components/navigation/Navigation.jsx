import './navigation.css';
import Icon from '../icon/Icon';

function Navigation() {
    return (
        <div className="Navigation">
            <h1 className='logo'>LOGO</h1>   
            <div className='links'>
                <ul>
                    <a href="#" className='show'><Icon name='home' type='fas' /><li>Home</li></a>
                    <a href="#" className='show'><Icon name='address-card' type='fas' /><li>About</li></a>
                    <a href="#" className='show'><Icon name='share' type='fas' /><li>Contact</li></a>
                    <a href="#" className='hidden'><Icon name='bars' type='fas' /></a>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;