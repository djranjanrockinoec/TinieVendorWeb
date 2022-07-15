import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
                    <Link className="navbar-brand" href="/"><Image src="/logo.png" alt="Tinie Logo" width={106} height={51} /></Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    {/* <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Page 1-1</a></li>
                    <li><a href="#">Page 1-2</a></li>
                    <li><a href="#">Page 1-3</a></li>
                  </ul>
                </li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
              </ul> */}
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