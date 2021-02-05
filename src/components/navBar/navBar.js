import React from 'react';
import logo from '../../logo192.png';
import bars from '../../menu.png';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';

export const NavBar = () => {

    

    return (
        <div className='container-nav'>
            <nav className='links-nav'>
                
                <div className='nav-logo'> 
                    <img 
                        src={logo}
                        alt={logo}
                    />
                    <a href='/'>E-Commerce</a>
                </div>
                <div className='container-link'>
                    <ul className='link'>
                            <li>
                                <Link to='/login-register'>LOGIN/REGISTER</Link>
                            </li>
                            <li>
                                <Link to='/shop'>SHOP</Link>
                            </li>
                            <li>
                                <Link to='/contacts'>CONTACTS</Link>
                            </li>
                            <li>    
                                <SearchBar />
                            </li>
                            
                    </ul>
                </div>
                <img className='menu' src={bars} alt={bars}></img>
            </nav>
            
        </div>
    )
};

export default NavBar;
