import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Menu(props) {

  const itemsList = props.menu.items.map(el => {
    return (
      <li key={el.id} className={props.menu.classes.item}>
        <NavLink to={el.url} exact className={props.menu.classes.link} activeClassName={props.menu.classes.link + '-active'}>{el.title}</NavLink>
      </li>
    )
  })

  return (
    <nav className={'list ' + props.menu.classes.naw + (props.showMenu? ' show': '')}>
      { itemsList }
    </nav>
    )
}