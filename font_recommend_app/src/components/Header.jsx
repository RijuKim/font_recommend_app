import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img className="dotoriicon" alt="도토리아이콘" src="img/dotori_icon.png"></img>
            <h1 className="header__title">DOTORI</h1>
        </div >
    );
}

export default Header;
