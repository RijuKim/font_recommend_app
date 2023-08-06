//Controller.jsx
import React, { useState } from 'react';
import './Cards.css';
import './Controllers.css';
import ControllerCard from './ControllerCard';
import { AiOutlineCheck } from 'react-icons/ai'

export default function Controller() {
    //전체 선택 상태 관리
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    //선택된 카드마다 컨트롤러 생성 상태 관리
    const [selectedCard, setSelectedCard] = useState(null);

    //전체 선택 이벤트 핸들러
    const handleSelectAllClick = () => {
        setSelectAllChecked(!selectAllChecked);
    };

    //컨트롤러 생성 이벤트 핸들러
    const handlePopupCardClick = (cardTitle) => {
        setSelectedCard({ title: cardTitle });
      };   
    
    return (
        <div className='controls'>
            {/* 선택한 폰트 조절 컨테이너 */}
            <button className='select-all-button' onClick={handleSelectAllClick}>
                <AiOutlineCheck/>전체 선택
            </button>
            <div className='control-container'>
                <div className='control-wrapper'>
                    <ul className='control-items'>
                    {/* {selectedCard && selectedCard.title && selectedCard.children && (
                        <ControllerCard 
                            title={selectedCard.title}
                            children={selectedCard.children}
                            isSelectChecked={selectAllChecked} 
                            handleSelectClick={handleSelectAllClick}
                        />
                    )} */}
                        <ControllerCard 
                            // title={selectedCard.title}
                            // children={selectedCard.children}
                            isSelectChecked={selectAllChecked} 
                            handleSelectClick={handleSelectAllClick}/>
                        <ControllerCard 
                            isSelectChecked={selectAllChecked} 
                            handleSelectClick={handleSelectAllClick}/>
                    </ul>
                </div>
            </div>
            {/* 폰트 혼합 버튼 */}
            <div className='mix-button-wrapper'>
                <button className='mix-button'>폰트 혼합하기</button>
            </div>
        </div>
    );
}

