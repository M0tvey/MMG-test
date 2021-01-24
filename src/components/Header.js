import React, { useState } from 'react';
import logo from './../logo.svg';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';
import LoginModal from './loginModal';
import HeaderSlider from './headerSlider';

export default function Header (props) {
  const [menu] = useState({
    items: [
      { id: 1, title: 'Home', url: '/' },
      { id: 2, title: 'Link1', url: '/page-1' },
      { id: 3, title: 'Link2', url: '/page-2' },
      { id: 4, title: 'Link3', url: '/page-3' }
    ],
    classes: {
      naw: 'header_menu menu_wrap',
      item: 'header_menu_item',
      link: 'header_menu_link'
    }
  });

  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = e => {
    e.preventDefault();

    setShowMenu(!showMenu);
  }

  return (
    <header className="header">
      <div className="header_top">
        <div className="container">
          <div className="header_top_wrap row between-xl middle-xl">
            <div className="header_logo">
              <NavLink to="/" exact className="header_logo_link">
                <img src={logo} className="header_logo_image" alt="logo" />
              </NavLink>
            </div>

            <div className="header_menu_warp">
              <button className={'toggle_menu hidden-xl shown-sm' + (showMenu? ' on': '')} onClick={toggleMenu}>
                <span></span>
              </button>

              <Menu menu={menu} showMenu={showMenu} />
            </div>
          </div>
        </div>
      </div>

      <div className="header_bottom page_block">
        <div className="container">
          <div className="row middle-xl">
            <div className="header_bottom_logo cell-xl-4 cell-sm-12 text-center-sm">
              <h1 className="page_logo">Header</h1>

              <LoginModal />
            </div>

            <div className="cell-xl-8 cell-sm-12">
              <HeaderSlider />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}