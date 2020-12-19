import React from 'react'
import { Link } from 'react-router-dom'

    const Header = () => (
      <nav className="navbar navbar-default navbar-static-top m-b-0">
        <div className="navbar-header"> <a className="navbar-toggle hidden-sm hidden-md hidden-lg " href="#" onClick={e => e.preventDefault()} data-toggle="collapse" data-target=".navbar-collapse"><i className="ti-menu" /></a>
          <div className="top-left-part"><Link className="logo" to="/"><b><img src="./public/app_assets/plugins/images/eliteadmin-logo.png" alt="home" /></b><span className="hidden-xs"><strong>elite</strong>hospital</span></Link></div>
          <ul className="nav navbar-top-links navbar-left hidden-xs">
            <li><a href="#" onClick={e => e.preventDefault()} className="open-close hidden-xs waves-effect waves-light"><i className="icon-arrow-left-circle ti-menu" /></a></li>
          </ul>
          <ul className="nav navbar-top-links navbar-right pull-right">
        
            <li className="dropdown">
              <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img src="./public/app_assets/plugins/images/users/d1.jpg" alt="user-img" width={36} className="img-circle" /><b className="hidden-xs">Thanh Sang</b> </a>
            
            
            </li>
            <li className="right-side-toggle"> </li>
         
          </ul>
        </div>
    
      </nav>
    )

    export default Header