import React from 'react'
import './Header.scss'
import FontAwesome from 'react-fontawesome'
import userIcon from './user.png'
const Header = (props) => {
  return (
    <div className='header-container px2'>
      <div className='left-navs'>
        <div className='feeds inline-block align-middle pr2 py2'>
          <span className="circle-wrapper ">
            <FontAwesome name='twitter' inverse/>
          </span>
        </div>
        <ul className='navs list-reset inline-block px1'>
          <li className='inline-block px1 py2'>
            <span className="circle-wrapper">
              <FontAwesome className='color-dark-grey' name='bell-o'/>
            </span>
          </li>

          <li className='inline-block py2  px1'>
            <span className="circle-wrapper ">
              <FontAwesome className='color-dark-grey' name='envelope-o'/>
            </span>
          </li>
          <li className='inline-block py2 px1 active'>
            <span className="circle-wrapper ">
              <FontAwesome className='color-dark-grey' name='hashtag'/>
            </span>
          </li>
        </ul>

      </div>
      <div className='logo-container text-center'>
        <FontAwesome className='logo' name='twitter' size='2x'/>
      </div>
      <div className='right-navs'>
        <div className='search-wrapper left pl3 sm-col-8'>
          <input name="username" className='search' placeholder="Search"/>
          <FontAwesome name='search' size='2x' className='placeholder-icon'/>
        </div>
        <span className="circle-wrapper right user-icon ">
          <img src={userIcon} height='80%' alt="userIcon"/>
        </span>
      </div>
    </div>
  )
}

export default Header
