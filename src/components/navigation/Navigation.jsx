import Icon from '../icon/Icon';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import './navigation.css';

function Navigation() {

    const [menuIsClosed, setMenuIsClosed] = useState(true);

    const toggleMenu = () => {
        setMenuIsClosed(!menuIsClosed);
      };

    return (
        <>
        <div className="Navigation">
            <h1><Link className='logo' to='/'><img className='logo-image' src="/images/logo-new.svg" alt="Logo" /></Link></h1>   
            <div className='links'>
                <ul>
                    <li className='show activeline'><Link to='/'>Home </Link></li>
                    <li className='show activeline'><Link to='/about'>About </Link></li>
                    <li className='show activeline'><Link to='/contact'>Contact </Link></li>

                    <li className={`hidden ${menuIsClosed ? '' : 'closed'}`}><button className='menu-button' onClick={toggleMenu}><Icon name='bars' type='fas' /></button></li>
                </ul>
            </div>
        </div>
        <div className={`menu ${menuIsClosed ? 'closed' : ''}`}>
            <button className='close-button' onClick={toggleMenu}><Icon name='xmark' type='fas' /></button>
            <ul>
                    <li><Link to='/'><Icon name='artstation' type='fab' /> Home </Link></li>
                    <li><Link to='/about'><Icon name='terminal' type='fas' />About </Link></li>
                    <li><Link to='/contact'><Icon name='signal' type='fas' />Contact </Link></li>
            </ul>
        </div>
        </>
    )
}

export default Navigation;