import Icon from '../icon/Icon';
import { Link } from 'react-router-dom';

import './navigation.css';

function Navigation() {
    return (
        <div className="Navigation">
            <h1 className='logo'>LOGO</h1>   
            <div className='links'>
                <ul>
                    <li className='show'><Link to='/'>Home </Link></li>
                    <li className='show'><Link to='About'>About </Link></li>
                    <li className='show'><Link to='Contact'>Contact </Link></li>

                    <li className='hidden'><a href="#"><Icon name='bars' type='fas' /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;