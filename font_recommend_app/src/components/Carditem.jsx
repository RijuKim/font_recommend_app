import React from 'react';

function CardItem(props) {
    // props에서 필요한 값들을 추출
    const { title, titlefont, children, children2, children3, children4, children5, children6, children7, children8, onClick, fontSize } = props;

    // 각 타이틀과 children들에 대한 폰트를 정의
    // 일단 임의로 넣어놓음!!
    // !!! title, children에 대한 font 결정 후 font를 추가해야 함 !!!
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
    // 타이틀과 children에 해당하는 폰트 패밀리를 설정
    const titleFontFamily = fontFamilies[titlefont] || 'sans-serif';
    const childrenFontFamily = fontFamilies[children] || 'sans-serif';

    // Card 아이템을 클릭했을 때 처리하는 함수를 정의
    const handleCardItemClick = () => {
        onClick();
    };

    return (
        <>
            <li className='cards__item' onClick={handleCardItemClick}>
                <div className='cards__item__title'>
                    {/* 타이틀이 있을 경우에만 보여줌 */}
                    {title && <h5 className='cards__item__title_text' style={{ fontSize: `${fontSize}px`, fontFamily: titleFontFamily }}>{title}</h5>}
                </div>
                <div>
                    {/* 수평선 */}
                    <hr className='hr_line'></hr>
                </div>
                <div className='cards__item__info'>
                    {/* children들 */}
                    <h5 className='cards__item__text'>{children}, {children2}, {children3}, {children4} <br></br><br></br><br></br>
                        {children5}, {children6}, {children7}, {children8}</h5>
                </div>
            </li>
        </>
    );
}

export default CardItem;




