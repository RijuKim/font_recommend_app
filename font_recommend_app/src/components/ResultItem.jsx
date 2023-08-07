import React from 'react';

export default function ResultItem(props) {
    const {itemNum, fontSize, userInput} = props;

    return (
        <div className='result-item-wrapper'>
            <div className='result-item-container'>
                <div className='result-item-number'>{itemNum}</div>
                <div 
                    className='result-item-title'>
                        폰트 제목
                </div>
                <div 
                    className='result-item-context'
                    style={{ fontSize: `${fontSize}px` }}>
                    {userInput ? userInput : '예시 문구를 입력하세요'}
                </div>
            </div>
            <hr className='result-hr-line'/>
        </div>
    );
}

