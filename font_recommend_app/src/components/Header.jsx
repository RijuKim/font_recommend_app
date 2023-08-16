import React from 'react';
import './Header.css';

function Header() {
     // 페이지 새로고침 함수
    const handleTitleClick = () => {
        window.location.reload();
    };

    return (
        <div className="header">
            <div className='title-wrapper' onClick={handleTitleClick}>
                <img className="dotoriicon" alt="도토리아이콘" src="img/dotori_icon.png"></img>
                <div className='title-inform-wrapper'>
                    <div className="header-title">MINDFONT</div>
                    <div className="header-title2">내 마음 속 폰트 찾기 AI 시스템</div>
                </div>
            </div>
        </div >
    );
}

export default Header;
