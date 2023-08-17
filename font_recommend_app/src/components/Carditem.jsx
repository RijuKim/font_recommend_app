//Carditem.jsx
import React from 'react';
import '../fonts.css'

function CardItem(props) {
    // props에서 필요한 값들을 추출
    const { category, titlefont, children, children2, children3, children4, children5, children6, children7, children8, onClick, fontSize } = props;

    // 각 카테고리와 children들에 대한 폰트를 정의
    // 일단 임의로 넣어놓음!!
    // !!! category, children에 대한 font 결정 후 font를 추가해야 함 !!!
    const fontFamilies = {
        '고딕': '고딕, sans-serif',
        '명조': '명조, sans-serif',
        '손글씨': '손글씨, sans-serif',
        '장식체': '장식체, sans-serif',
        '픽셀체': '픽셀체, sans-serif',
        '고전체': '고전체, sans-serif',
        '탈네모': '탈네모, sans-serif',
        '캘리폰트': '캘리폰트, sans-serif',
    };

    const setFontFamilies = {
        titlefont: titlefont,
        children: children,
        children2: children2,
        children3: children3,
        children4: children4,
        children5: children5,
        children6: children6,
        children7: children7,
        children8: children8,
    };

    // 카테고리와 children에 해당하는 폰트 패밀리를 설정
    // 각 children에 해당하는 실제 폰트 패밀리를 설정
    const childrenFontFamilies = [children, children2, children3, children4, children5, children6, children7, children8];
    const titleFontFamily = setFontFamilies[titlefont] || 'sans-serif';
    const childrenFontFamily = setFontFamilies[children] || 'sans-serif';

    // Card 아이템을 클릭했을 때 처리하는 함수를 정의
    const handleCardItemClick = () => {
        onClick();
    };

        // 콘솔에 정보 출력
        console.log('Category Font Family:', titleFontFamily);
        console.log('Children Font Family:', childrenFontFamilies[0]);

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



