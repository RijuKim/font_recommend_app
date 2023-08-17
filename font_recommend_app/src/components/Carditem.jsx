//Carditem.jsx
import React from 'react';
import '../fonts.css'

function CardItem(props) {
    // props에서 필요한 값들을 추출
    const { category, titlefont, children, children2, children3, children4, children5, children6, children7, children8, onClick, fontSize } = props;

    // 각 카테고리와 children에 해당하는 폰트 패밀리를 설정
    const childrenFontFamilies = [children, children2, children3, children4, children5, children6, children7, children8] || 'sans-serif';; 

    // Card 아이템을 클릭했을 때 처리하는 함수를 정의
    const handleCardItemClick = () => {
        onClick();
    };

    // console.log('Children Font Family:', childrenFontFamilies[0]);

    return (
        <>
            <li className='cards__item' onClick={handleCardItemClick}>
                <div className='cards__item__title'>
                    {/* 타이틀이 있을 경우에만 보여줌 */}
                    {category && <h3 className='cards__item__title_text' style={{ fontSize: `${fontSize}px`, fontFamily: titlefont }}>{category}</h3>}
                </div>
                <div>
                    {/* 수평선 */}
                    <hr className='hr_line'></hr>
                </div>
                <div className='cards__item__info'>
                    {/* children들 */}
                    <div className='cards__item__text'>
                    {childrenFontFamilies.map((font, index) => (
                        <div key={index} style={{ fontFamily: font }}>{font}</div>
                    ))}
                    </div>  
                </div>
            </li>
        </>
    );
}

export default CardItem;



