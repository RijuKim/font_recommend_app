// Result.jsx
import React, { useState } from 'react';
import './Result.css';
import ResultItem from './ResultItem';

export default function Result(props) {
    const { userInput } = props;

    // 글자 크기 상태 관리, 초기 글자 크기는 30px로 설정
    const [fontSize, setFontSize] = useState(30);

    // 글자 크기 조절 핸들러
    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
    };

    
    return (
        <div className='results'>
            <div className='result_inform_wrapper'>
                <div className='result_page_inform'>
                    <div className='result_page_title'>3. 폰트 검색 결과</div>
                    <div className='result_page_title2'>
                        원하는 폰트 결과를 확인하세요!
                    </div>
                </div>
                {/* 글자 크기 조절기 */}
                <div className='font-size-adjuster2'>
                    <input
                        className='font-size-input2'
                        type='range'
                        id='font-size-input'
                        min='10'
                        max='50'
                        step='1'
                        value={fontSize}
                        onChange={handleFontSizeChange} 
                        />
                    <span>{fontSize}px</span>
                </div>
            </div>
            {/* 10개의 ResultItem 생성 */}
            {[...Array(10)].map((_, index) => (
                <ResultItem key={index} itemNum={index+1} fontSize={fontSize} userInput={userInput} />
            ))}
        </div>
    );
}
