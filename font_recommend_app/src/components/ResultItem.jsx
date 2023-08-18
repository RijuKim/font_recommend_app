import React from 'react';

export default function ResultItem(props) {
    const {itemNum, fontSize, userInput, fontName} = props;

    return (
        <div className='result-item-wrapper'>
            <div className='result-item-container'>
                <div className='result-item-number'>{itemNum}</div>
                <div 
                    className='result-item-title'>
                        {fontName}
                </div>
                <div 
                    className='result-item-context'
                    style={{ fontSize: `${fontSize}px`, fontFamily: `${fontName}`}}>
                    {userInput ? userInput : '예시 문구를 입력하세요'}
                </div>
            </div>
            <hr className='result-hr-line'/>
        </div>
    );
}

