import React from 'react';
import '../home/Home.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import { faFacebookSquare, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; */

function Home() {
  return (
      <>
        <div className='top-center-image-box'>
            <div className='box box-1 link-btn-border'>
                <div className='boxInner'>
                    <h1>Women's Fashion</h1>
                    <p className='box-1-center-text'>dfsadfsadfsadfsadfdsafdsafadsfjdsafkjsakdfjksadjflksadjfkdsajfkjdskfjdsjfkldsajfkadsjfksajdflkjdsalkfjdsalkfjsakdfjkdsajfkdsajfksajdfkjdsakfjdsakfjaksdjfaksdjfkasdjfkads </p>  
                    <Link>SHOP NOW</Link> 
                </div>         
            </div>

            <div className='box  box-2 link-btn-border'>
                <div className='boxInner'>
                    <h1>Men's Fashion</h1>
                    <p className='box-1-center-text'>dfsadfsadfsadfsadfdsafdsaf </p>  
                    <Link>SHOP NOW</Link>
                </div>  
            </div>

            <div className='box  box-3 link-btn-border' >
                <div className='boxInner'>
                    <h1>Women's Fashion</h1>
                    <p className='box-1-center-text'>dfsadfsadfsadfsadfdsaf</p>  
                    <Link>SHOP NOW</Link> 
                </div> 
            </div>

            <div className='box  box-4 link-btn-border' >
                <div className='boxInner'>
                    <h1>Women's Fashion</h1>
                    <p className='box-1-center-text link-btn-border'>dfsadfsadfsadfsadfdsafdsafad</p>  
                    <Link>SHOP NOW</Link>
                </div>  
            </div>
            
            <div className='box  box-5 link-btn-border'>
                <div className='boxInner'>
                    <h1>Women's Fashion</h1>
                    <p className='box-1-center-text'>dfsadfsadfsadfsadfdsafdsafadsf</p>  
                    <Link>SHOP NOW</Link>  
                </div>
            </div>
        </div>


        <div  className='footer'>
            <div className='width400'>
                <div className='footer-left-logo'>
                    <i className="fas fa-map-marker-alt"></i>
                    <div>Sdp labs It park chandigarh (NetStmartz)</div>
                </div>
                <div className='footer-left-logo'>
                    <i className="fas fa-phone"></i>
                    <div>+12345678910</div>
                </div>
                <div className='footer-left-logo'>
                    <i className="fas fa-envelope"></i>          
                    <div>@sdplabs.com</div>
                </div>      
            </div>

            <div className='width400'>
              <h2>About The Company</h2>
              <p className='box-1-center-text'>Lorem Ipsum is simple specimen book.</p>

              <div className='footer-right-logo'>            
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>               
            </div>
            </div>          
        </div>
        
      </>
    
  )
}

export default Home