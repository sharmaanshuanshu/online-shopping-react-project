import React from 'react';
import '../navbar/NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div  className='main'>
        <div className='start-secton'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSy7xkmzOvhp3VOXhoV3Af7d7JV_0MCPI9FQ&s'></img>
        </div>
        <div className='middle-secton'>
            <ul>
                <Link to ='/' ><li>HOME</li></Link>
                <Link to ='/men-fashion' ><li>MEN'S</li></Link>
                <Link to ='/women-fashion' ><li>WOMEN'S</li></Link>
                <Link to ='/shop' ><li>SHOP</li></Link>
            </ul>
        </div>
        <div className='end-secton'>
            <button>Login</button>
            <button>Registration</button>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTb0YZTK2me0K-u23mI8LfDHgmjR0wsG6x6A&s'></img>
        </div>
    </div>
  )
}

export default NavBar