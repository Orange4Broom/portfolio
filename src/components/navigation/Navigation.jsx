import './navigation.css';
import Icon from '../icon/Icon';

function Navigation() {
    return (
        <div className="Navigation">
            <h1 className='logo'>LOGO</h1>   
            <div className='links'>
                <ul>
                    <li className='show'><a href="#">Home</a></li>
                    <li className='show'><a href="#">About</a></li>
                    <li className='show'><a href="#">Contatct</a></li>

                    <li className='hidden'><a href="#"><Icon name='bars' type='fas' /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;