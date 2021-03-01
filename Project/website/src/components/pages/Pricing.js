import {FaFire } from 'react-icons/fa';
import {Button} from './Button';
import { Link } from 'react-router-dom';
import { BsXDiamondFill } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';
import './Pricing.css';

function Pricing() {
	return(
		<IconContext.Provider value={{color: '#fff' , size:64}} >
		<div>
			<div className='pricing__section'>
				<div className='pricing__wrapper'>
					<h1 className='pricing__heading'>pricing</h1>
					<div className='pricing__container'>
						<Link to='/sign-up' className='pricing__container-card'>
							<div className='pricing__container-cardInfo'>
								<div className='icon'>
									<FaFire />
								</div>
								<h3>Starter</h3>
								<h4>$888</h4>
								<p>per month</p>
								<ul className='pricing__container-features'>
									<li>100 Trancation</li>
									<li>100 Trancation</li>
									<li>100 Trancation</li>
								</ul>
								<Button buttonSize='btn--wide'
								buttonColor='primary'>Choose Plan</Button>
							</div>

						</Link>
						<Link to='/sign-up' className='pricing__container-card'>
							<div className='pricing__container-cardInfo'>
								<div className='icon'>
									<BsXDiamondFill />
								</div>
								<h3>Starter</h3>
								<h4>$888</h4>
								<p>per month</p>
								<ul className='pricing__container-features'>
									<li>100 Trancation</li>
									<li>100 Trancation</li>
									<li>100 Trancation</li>
								</ul>
								<Button buttonSize='btn--wide'
								buttonColor='primary'>Choose Plan</Button>
							</div>

						</Link>
						<Link to='/sign-up' className='pricing__container-card'>
							<div className='pricing__container-cardInfo'>
								<div className='icon'>
									<BsXDiamondFill />
								</div>
								<h3>Starter</h3>
								<h4>$888</h4>
								<p>per month</p>
								<ul className='pricing__container-features'>
									<li>100 Trancation</li>
									<li>100 Trancation</li>
									<li>100 Trancation</li>
								</ul>
								<Button buttonSize='btn--wide'
								buttonColor='primary'>Choose Plan</Button>
							</div>

						</Link>

				
					</div>
				</div>
			</div>
		</div>
		</IconContext.Provider>
	)
}

export default Pricing;