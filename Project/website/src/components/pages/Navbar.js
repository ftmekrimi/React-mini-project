import { Link } from 'react-router-dom';
import {FaBars ,FaTimes} from 'react-icons/fa';
import {RiVipDiamondFill} from 'react-icons/ri';
import React, { useState } from 'react';
import {Button} from './Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';

function Navbar (){  

	const [click , setclick ] = useState(false);
	const [button , setButton] = useState(true);
	const handleClick = () => setclick (!click);
	const closeMobileMenu = () => setclick(false);

	const showButton = () =>{
		if (window.innerWidth <= 960) {
			setButton(false);
		}else{
			setButton(true);
		}
	}
	window.addEventListener('resize' , showButton);
	return(
		<>
	<IconContext.Provider value={{color : '#fff'}}>
	<div className="navbar">
		<div className="navbar-container container">
			<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
				<RiVipDiamondFill className='navbar-icon' />
				F :) me
			</Link>
			<div className='menu-icon' onClick={handleClick} >
			{click ? <FaTimes /> : <FaBars />}
			</div>
			<ul className = {click ? 'nav-menu active' : 'nav-menu '}>
				<li className='nav-item'>
					<Link to='/' className='nav-links' onClick={closeMobileMenu}>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/product' className='nav-links' onClick={closeMobileMenu}>
						Products
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/services' className='nav-links' onClick={closeMobileMenu}>
						Services
					</Link>
				</li>
				<li className='nav-btn'>
					{ button ? (
						<Link to='/sign-up' className='btn-Link'>
							<Button  buttonStyle='btn--outline'>SIGN UP</Button>
						</Link>
					) : (
						<Link to='/sign-up' className='btn-Link'
						 onClick={closeMobileMenu}>
							<Button  buttonStyle='btn--outline'
									buttonSize='btn--mobile'>
								SIGN UP
							</Button>
						</Link>
					)}
				</li>
			</ul>
		</div>
	</div> 
	</IconContext.Provider>	
	</>
	  );
	}

export default Navbar;
	