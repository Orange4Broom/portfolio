import { Link } from 'react-router-dom';
import './navigation.css';
import Icon from '../icon/Icon';

function Navigation() {
    return (
        <div className="Navigation">
            <h1 className='logo'>LOGO</h1>   
            <div className='links'>
                <ul>
                    <li className='show'><Link to='/'>Home </Link></li>
                    <li className='show'><Link to='About'>Home </Link></li>
                    <li className='show'><a href="#">Contatct</a></li>

                    <li className='hidden'><a href="#"><Icon name='bars' type='fas' /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;