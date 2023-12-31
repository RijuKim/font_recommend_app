// 팝업 카드 클릭하면 콘솔에 타이틀 찍히도록 수정
import React from 'react';

function PopupCardItem(props) {
    const { title, children, getFontDataFromItem } = props;

    const handleCardClick = () => {
        // console.log(children); // 클릭한 카드의 타이틀을 콘솔에 출력
        getFontDataFromItem(props.children);
    };

    return (
        <>
            <li className='pop_cards__item' onClick={handleCardClick}>
                <div className='pop_cards__item__title'>
                    {title && <h2 className='pop_cards__item__title_text'>{title}</h2>}
                </div>
                <div>
                    <hr className='hr_line'></hr>
                </div>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{children}</h5>
                </div>
            </li>
        </>
    );
}

export default PopupCardItem;


