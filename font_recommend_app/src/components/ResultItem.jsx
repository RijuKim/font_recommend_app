import React from 'react';

export default function ResultItem(props) {
    const { itemNum, fontSize, userInput, fontName } = props;

    // 만약 fontName이 숫자로 시작하는 경우에 _를 붙여 fontFamily를 지정
    const modifiedFontName = /^[0-9]/.test(fontName) ? `_${fontName}` : fontName;
    // 만약 fontName이 공백 + 숫자로 끝나는 경우에 공백과 숫자를 제거한 fontFamily를 사용
    const trimmedFontName = modifiedFontName.replace(/ (\d+(\.\d+)?)$/, '');

    return (
        <div className='result-item-wrapper'>
            <div className='result-item-container'>
                <div className='result-item-number'>{itemNum}</div>

                <div
                    className='result-item-title'
                    style={{ fontFamily: `${trimmedFontName}` }}>
                    {fontName}
                </div>

                <div
                    className='result-item-context'
                    style={{ fontSize: `${fontSize}px`, fontFamily: `${trimmedFontName}` }}>
                    {userInput ? userInput : '예시 문구를 입력하세요'}
                </div>
            </div>
            <hr className='result-hr-line' />
        </div>
    );
}

