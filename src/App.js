import React, { useState } from 'react';
import './App.css';
import { menu } from './data/Menu.js'

function NavBar({menu}) {
  return <nav id="primary_nav_wrap">
    <Menu items={menu} />
  </nav>
}

function Menu({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.title}>
            <a href="#">{item.title}</a>
            {item.children && <Menu items={item.children} />}
          </li>
        );
      })}
    </ul>
  );
}

const App = () => {
  return (
    <div>
      <h1>Simple Pure CSS Drop Down Menu</h1>
      <NavBar menu={menu} />
    </div>
  );
};

export default App;
