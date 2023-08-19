//Controller.jsx
import React, { useState, useEffect } from 'react';
import './Cards.css';
import './Controllers.css';
import ControllerCard from './ControllerCard';
import { AiOutlineCheck } from 'react-icons/ai'

export default function Controller(props) {
    const {onResultButtonClick, selectedFonts, getWeightFromController, onRemoveFont, userInput} = props;

    //전체 선택 상태 관리
    const [selectAllChecked, setSelectAllChecked] = useState(true);

    //단일 선택 상태 관리
    const [checkFonts, setCheckFonts] = useState(selectedFonts);

    //ControllerCard로부터 사용자 입력 가중치 상태 관리
    const initialWeights = new Array(selectedFonts.length).fill(5); // 사용자가 선택한 폰트의 개수에 맞춰서 초기 가중치 배열 생성
    const [weights, setWeights] = useState(initialWeights);

    //전체 선택 이벤트 핸들러
    const handleSelectAllClick = () => {
        setSelectAllChecked(!selectAllChecked);
    };

    //삭제 버튼 클릭 핸들러
    const handleMinusButtonClick = (index) => {
        onRemoveFont(index, selectedFonts[index]);
    };

    //폰트 혼합하기 버튼 클릭 핸들러
    const handleMixFontsClick = () => {
        onResultButtonClick(); // Tab(부모 컴포넌트)로 클릭이벤트 전달
    };

    //ControllerCard로부터 사용자 입력 가중치 가져오기&Tab으로 보내기 핸들러
    const getWeightFromControllerCard = (index, weight) => {
        setWeights(prevWeights => {
            const newWeights = [...prevWeights];
            newWeights[index] = parseInt(weight);
            return newWeights;
        });

        // 부모 컴포넌트로 가중치 배열 전달
        getWeightFromController(weights);
    }


    //체크 버튼 클릭 핸들러
    const getFontCheck = (font, isSelected) => {
        if (isSelected) {
            setCheckFonts([...checkFonts, font]);
            console.log(checkFonts);
        } else {
            setCheckFonts(checkFonts.filter(selectedFont => selectedFont !== font));
            console.log(checkFonts);
        }
    }


    return (
        <div className='controls'>
            {/* 폰트 조절 설명 */}
            <div className='control_inform_wrapper'>
                <div className='control_page_inform'>
                    <div className='control_page_title'>2. 선택된 폰트 조절</div>
                    <div className='control_page_title2'>
                        각 폰트마다 굵기, 골격, 가중치를 조절하세요.
                    </div>
                </div>
            </div>
            {/* 선택한 폰트 조절 컨테이너 */}
            <button className='select-all-button' onClick={handleSelectAllClick}>
                <AiOutlineCheck/>전체 선택
            </button>
            <div className='control-container'>
                <div className='control-wrapper'>
                    <ul className='control-items'>
                        {/* 폰트가 선택되는 만큼 해당 폰트의 ControllerCard 생성 */}
                        {selectedFonts.length === 0 ? (
                            <div className='initial-message'>먼저 폰트를 선택해주세요!</div>
                        ) : (
                            selectedFonts.map((font, index) => (
                                <ControllerCard
                                    key={index}
                                    index={index}
                                    selectedFont={font}
                                    userInput={userInput}
                                    getFontCheck={getFontCheck}
                                    getWeightFromControllerCard={getWeightFromControllerCard}
                                    isSelectChecked={selectAllChecked}
                                    handleSelectClick={handleSelectAllClick}
                                    onRemoveCard={() => handleMinusButtonClick(index)}
                                />
                            ))
                        )}
                    </ul>
                </div>
            </div>
            {/* 폰트 혼합 버튼: 폰트 선택 후 누를 시 Result 컴포넌트 보여줌 */}
            <div className='mix-button-wrapper'>
                <button className='mix-button' onClick={handleMixFontsClick}>폰트 혼합하기</button>
            </div>
        </div>
    );
}

