// 팝업 카드 클릭하면 콘솔에 타이틀 찍히도록 수정
import React, { useState } from 'react';

function PopupCardItem(props) {
    const { category, children, userInput, getFontDataFromItem } = props;

    //폰트 선택여부 상태 관리
    const [isSelected, setIsSelected] = useState(false);
    const modifiedChildren = /^[0-9]/.test(children) ? `_${children}` : children;

    const handleCardClick = () => {
        const confirmMessage = `${children} 폰트를 선택하시겠습니까?`;
        const confirmedMessage = `${children} 폰트가 선택되었습니다. '조절'탭에서 확인하세요.`;

        if (window.confirm(confirmMessage)){
            setIsSelected(true);
            getFontDataFromItem(props.children);
            window.alert(confirmedMessage);
        }
    };

    return (
        <>
            <li className='pop_cards__item' onClick={handleCardClick}>
                <div className='pop_cards__item__title'>
                    {category && <h2 className='pop_cards__item__title_text' style={{fontFamily: modifiedChildren}}>{category}</h2>}
                </div>
                <div>
                    <hr className='hr_line'></hr>
                </div>
                <div className='pop_cards__item__info'>
                    <h5 className='pop_cards__item__info' style={{fontFamily: modifiedChildren}}>{userInput || '예시 문구를 적어보세요'}</h5>
                </div>
            </li>
        </>
    );
}

export default PopupCardItem;


