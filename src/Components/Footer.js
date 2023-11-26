import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import facebook from '../assets/facebook.png'
import git from '../assets/github.png'
import twitter from '../assets/twitter.png'
const Footer = () => {
    return (
        <>
            <div className='row footer'>
                <div className='col-2'>
                    <h6>CONTACT US</h6>
                    <p>Find a Store</p>

                </div>

                <div className='col-2'>
                    <h6>CUSTOMER SERVICE</h6>
                    <p>Contact Us</p>
                    <p>ordering & Payment</p>
                    <p>Shopping</p>
                    <p>CReturns</p>
                    <p>FAQ</p>

                </div>

                <div className='col-2'>
                    <h6>information</h6>
                    <p>About</p>
                    <p>Work With US</p>
                    <p>Privacy Policy</p>
                    <p>terms & Conditions</p>
                    <p>Press Enquiries</p>

                </div>

                <div className='col-4'>
                    <h6>Subscribe</h6>
                    <p>Excepteor sint occaecat cupidata non proident, sunt in culpa qui offica</p>
                    <input className='email' placeholder='Email Address'></input>
                    <div className='btn btn-dark'>Subscribe</div>
                </div>

            </div>
            <div className='social'>
                <a href="www.facebook.com" >
                    <img src={facebook} />
                </a>
                <a href="www.twitter.com" >
                    <img src={twitter} />
                </a>
                <a href="www.gihub.com" >
                    <img src={git} />
                </a>
            </div>

        </>
    )
}

export default Footer