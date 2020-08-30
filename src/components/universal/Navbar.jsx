import React from 'react';
import '../../css/index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className='navbarContainer'>
				<div className='headerTitleContainer'>
					<h1 className='headerTitleText'>Brian Bagrov's Art Portfolio</h1>
				</div>
				<div className='navContainer'>
					<nav>
						<Link className='navLinks' to='/'>
							Home
						</Link>
						<Link className='navLinks' to='/about'>
							About
						</Link>
						<Link className='navLinks' to='/recent'>
							Recent Works
						</Link>
						<Link className='navLinks' to='/pricing'>
							Pricing
						</Link>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Navbar;
