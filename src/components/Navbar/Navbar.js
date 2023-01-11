import React from 'react'
import logo from '../../images/logo.svg'
import avatar from '../../images/image-avatar.png'
import cart from '../../images/icon-cart.svg'
import menu from '../../images/icon-menu.svg'
import close from '../../images/icon-close.svg'
import './Navbar.css'

const Navbar = ({ active, setActive }) => {
    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div className="Navbar">
            <img src={menu} alt="menu" className="menu" onClick={handleClick}/>
            <img src={logo} alt="logo" className="logo"/>
            <div className="nav">
                <div className={ active ? "navigation active" : "navigation"}>
                    <img src={close} alt="close" className="close" onClick={handleClick}/>
                    <div>Collections</div>
                    <div>Men</div>
                    <div>Women</div>
                    <div>About</div>
                    <div>Contact</div>
                </div>
                <div className="images">
                    <img src={cart} alt="cart" className="cart"/>
                    <img src={avatar} alt="profile" className="avatar" />
                </div>
            </div>
        </div>
    )
}

export default Navbar