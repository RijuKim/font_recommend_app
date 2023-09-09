//ControllerCard.jsx
import React, { useState, useEffect } from 'react';
import './Controllers.css'
import { AiOutlineMinusCircle, AiOutlineCheckCircle } from 'react-icons/ai'

export default function ControllerCard(props) {
    const { isSelectChecked, index, controller_weights,selectedFont, getFontCheck, getWeightFromControllerCard, onRemoveCard, userInput } = props;

    // controller_weights prop이 변경될 때 로컬 weight 상태를 업데이트
    useEffect(() => {
        setWeight(controller_weights.length > 0 ? controller_weights[index] : 5);
    }, [controller_weights, index]);

    // 폰트별 가중치 조절 상태 관리
    const [weight, setWeight] = useState(controller_weights.length>0?controller_weights[index]:5);

    // 체크 버튼 클릭 상태 관리
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(isSelectChecked);
    }, [isSelectChecked]);
    
    // 가중치 조절 핸들러(기존코드)
    /*const handleWeightChange = (event) => {
        setWeight(event.target.value);
        getWeightFromControllerCard(index, event.target.value);
        console.log(weight);
    };  */  

    // 가중치 조절 핸들러(기존코드랑 동일)
    const handleWeightChange = (event) => {
        const newWeight = parseInt(event.target.value);
        setWeight(newWeight); // 로컬 상태로 가중치 업데이트
        getWeightFromControllerCard(index, newWeight); // 부모 컴포넌트로 가중치 업데이트 전달
        console.log(newWeight); // 로컬 상태로 업데이트된 가중치 출력
    };

    
    // 체크 버튼 클릭 핸들러
    const handleCheckButtonClick = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            // 체크 버튼이 선택되었을 때 selectedFonts에 폰트 추가
            // 선택된 폰트에 대한 처리를 할 수 있도록 부모 컴포넌트의 함수 호출
            getFontCheck(selectedFont, false);
        } else {
            // 체크 버튼이 취소되었을 때 selectedFonts에서 폰트 삭제
            // 선택된 폰트에 대한 처리를 할 수 있도록 부모 컴포넌트의 함수 호출
            getFontCheck(selectedFont, true);
        }
    };

    // 삭제 버튼 클릭 핸들러
    const handleMinusButtonClick = () => {
        if (typeof onRemoveCard === 'function') {
            onRemoveCard();
        }
    }; 

    // 만약 fontName이 숫자로 시작하는 경우에 _를 붙여 fontFamily를 지정
    const modifiedSelectedFont = /^[0-9]/.test(selectedFont) ? `_${selectedFont}` : selectedFont;

    // 만약 fontName이 공백 + 숫자로 끝나는 경우에 공백과 숫자를 제거한 fontFamily를 사용
    const trimmedFontName = modifiedSelectedFont.replace(/ (\d+(\.\d+)?)$/, '');


    return (

        <div className='controller-container'>
            <div className={`controller-wrapper ${isChecked ? 'checked' : ''}`}>
                <div className='check-button-wrapper'>
                    <button className={`check-button ${isChecked ? 'checked' : ''}`} onClick={handleCheckButtonClick}>
                        <AiOutlineCheckCircle className={`check-icon ${isChecked ? 'checked' : ''}`}/></button>
                </div>
                {/* 폰트별 가중치 조절기 */}
                {console.log("컨트롤러 카드에서의 가중치", weight)}
                <div className='controller-bars'>
                    <div className='controller-weight'>
                        <span>가중치</span>
                        <input
                            className='controller-weight-input'
                            type='range'
                            min='1'
                            max='10'
                            step='1'
                            value={weight}
                            onChange={handleWeightChange}
                        />
                        <span>{weight}</span>

                    </div>
                </div>
                <hr className='hr_line'/>
                <div className='control-inform'>
                    {/* Todo - 선택한 폰트 style로 font-family 변경해줘야함 */}
                    <div>{selectedFont}</div>
                    <div style={{fontFamily: `${trimmedFontName}`}}>{userInput ? userInput : '예시 문구를 입력하세요'}</div>
                </div>
            </div>
            {/* 선택한 폰트 취소 */}
            <div className='minus-button-wrapper'>
                <button className='minus-button' onClick={handleMinusButtonClick}>
                    <AiOutlineMinusCircle className='minus-icon'/>
                </button>
            </div>
        </div>
    );
}

