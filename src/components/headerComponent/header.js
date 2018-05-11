import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          LOGO
        </div>
        <nav>
          <ul>
            <li className = "first">
              <a href="h">Home</a>
            </li>
            <li>
              <a href="p">Product</a>
            </li>
            <li className = "last">
              <a href="c">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
