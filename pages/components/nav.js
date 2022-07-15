import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'

const Nav = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/"><img src="/logo.png" alt="Tinie Logo" /></a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Get to Know Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Login</a></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav