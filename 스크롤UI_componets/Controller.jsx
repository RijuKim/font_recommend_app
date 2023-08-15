//Controller.jsx
import React, { useState, useEffect } from 'react';
import './Cards.css';
import './Controllers.css';
import ControllerCard from './ControllerCard';
import { AiOutlineCheck } from 'react-icons/ai'

export default function Controller(props) {
    const {onResultButtonClick, selectedFont, userInput} = props;

    //전체 선택 상태 관리
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    //사용자 폰트 선택 상태 관리 -> 선택된 폰트들 저장하는 배열
    const [selectedFonts, setSelectedFonts] = useState([]);

    //전체 선택 이벤트 핸들러
    const handleSelectAllClick = () => {
        setSelectAllChecked(!selectAllChecked);
    };

    //삭제 버튼 클릭 핸들러
    const handleMinusButtonClick = (index) => {
        setSelectedFonts(prevSelectedFonts => prevSelectedFonts.filter((_, i) => i !== index));
    };

    //폰트 혼합하기 버튼 클릭 핸들러
    const handleMixFontsClick = () => {
        onResultButtonClick(); // Card(부모 컴포넌트)로 클릭이벤트 전달
    };

    useEffect(() => {
        if (selectedFont) {
            console.log('폰트가 선택됨', selectedFont);
            setSelectedFonts(prevSelectedFonts => [...prevSelectedFonts, selectedFont]); // 선택된 폰트가 바뀔 때마다 배열에 새로운 폰트 추가
        }
        return () => {
            console.log('이전 폰트는 ', selectedFont);
            console.log('컨트롤러가 생성된 폰트들 ', selectedFonts);
        }
    }, [selectedFont]);

    return (
        <div className='controls'>
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
                                    selectedFont={font}
                                    userInput={userInput}
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

