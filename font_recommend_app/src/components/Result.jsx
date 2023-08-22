// Result.jsx
import React, { useState } from 'react';
import './Result.css';
import ResultItem from './ResultItem';

export default function Result(props) {
    const { apiResponse,goBackButtonClick } = props;

    // 글자 크기 상태 관리, 초기 글자 크기는 30px로 설정
    const [fontSize, setFontSize] = useState(30);

    // 사용자가 입력한 값을 상태로 관리
    const [userInput, setUserInput] = useState('');

    // 글자 크기 조절 핸들러
    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
    };

    // 사용자가 입력한 값이 변경될 때마다 상태 업데이트
    const handleUserInputChange = (event) => {
        setUserInput(event.target.value);
    };

   //선택 탭으로 돌아가기 버튼 클릭 핸들러
   const handleGoBackClick = () => {
    goBackButtonClick(); // Tab(부모 컴포넌트)로 클릭이벤트 전달
};
    //폰트 적용테스트용
    const testFont = ['116앵무부리','116수박화체','12롯데마트드림Bold'];
   
    
    return (
        <div className='results'>
            <div className='result_inform_wrapper'>
                <div className='result_page_inform'>
                    <div className='result_page_title'>3. 폰트 검색 결과</div>
                    <div className='result_page_title2'>
                        원하는 폰트 결과를 확인하세요!
                    </div>
                </div>
                
            </div>
            
            <div className='boxs'>
                {/* 카드 제목 변경 입력란 */}
                <div className='change_title_box'>
                    <input
                        className='change_title_box_input'
                        type='text'
                        value={userInput}
                        onChange={handleUserInputChange}
                        placeholder='예시 문구를 입력하세요'
                    />
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
                {/*선택 탭으로 돌아가는 버튼 */}
            <div className='go-back-button-wrapper'>
                    <button className='go-back-button' onClick={handleGoBackClick}>
                    다시 선택하기
                        </button>    
                </div>
            </div>
            {/* 10개의 ResultItem 생성 */}
            {apiResponse.map((fontName, index) => (
                <ResultItem key={index} fontName={fontName} itemNum={index+1} fontSize={fontSize} userInput={userInput} />
            ))}
            <div>
                <h1>테스트 글꼴</h1>
            {testFont.map((fontName, index) => (
                <ResultItem key={index} fontName={fontName} itemNum={index+10} fontSize={fontSize} userInput={userInput} />
            ))}
            </div>
            
           
        </div>
    );
}
