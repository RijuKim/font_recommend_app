//PopupCarditem.jsx
// 팝업 카드 클릭하면 콘솔에 타이틀 찍히도록 수정
import React, { useState } from 'react';

function PopupCardItem(props) {
    const { category, children, userInput, getFontDataFromItem, selectedFonts } = props;

    //폰트 선택여부 상태 관리
    const [isSelected, setIsSelected] = useState(false);
    const modifiedChildren = /^[0-9]/.test(children) ? `_${children}` : children;

    const handleCardClick = () => {
        const confirmMessage = `${children} 폰트를 선택하시겠습니까?`;
        const confirmedMessage = `${children} 폰트가 선택되었습니다. '조절' 탭에서 확인하세요.`;
        const duplicateMessage = '이미 같은 폰트를 선택하셨습니다.'; // 추가: 중복 선택 알림 메시지

        if (selectedFonts.some((selectedFont) => selectedFont === props.children)) { // 중복 선택 확인
            alert(duplicateMessage);
        } else if (window.confirm(confirmMessage)) {
            if (selectedFonts.length >= 3) {
                alert('최대 3개까지 선택이 가능합니다');
            } else {
                setIsSelected(true);
                getFontDataFromItem(props.children)
                console.log('ddDdsklsljdlfskjdfsldfkj', props.children, selectedFonts);
                window.alert(confirmedMessage);
            }
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


