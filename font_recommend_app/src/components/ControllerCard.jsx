import React, { useState, useEffect } from 'react';
import './Controllers.css'
import { AiOutlineMinusCircle, AiOutlineCheckCircle } from 'react-icons/ai'

export default function ControllerCard({ title, chiledren, isSelectChecked, handleSelectClick }) {
    // 굵기 조절 상태 관리
    const [thickness, setThickness] = useState(1);

    // 골격 조절 상태 관리
    const [skel, setSkel] = useState(50);

    // 가중치 조절 상태 관리
    const [weight, setWeight] = useState(50);

    //check 버튼 클릭 상태 관리
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(isSelectChecked);
    }, [isSelectChecked]);

    // 굵기 조절 핸들러
    const handleThicknessChange = (event) => {
        setThickness(event.target.value);
    };

     // 골격 조절 핸들러
     const handleSkelChange = (event) => {
        setSkel(event.target.value);
    };
    
    // 가중치 조절 핸들러
    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };    

    // "check" 버튼 클릭 핸들러
    const handleCheckButtonClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='controller-container'>
            <div className={`controller-wrapper ${isChecked ? 'checked' : ''}`}>
                <div className='check-button-wrapper'>
                    <button className={`check-button ${isChecked ? 'checked' : ''}`} onClick={handleCheckButtonClick}>
                        <AiOutlineCheckCircle className={`check-icon ${isChecked ? 'checked' : ''}`}/></button>
                </div>
                <div className='control-inform'>
                    <div>{title}title</div>
                    <div>예시문구를 적어보세요</div>
                </div>
                {/* 굵기, 골격, 가중치 조절기 */}
                <div className='controller-bars'>
                    <div className='controller-bar'>
                        <span>굵기</span>
                        <input
                            className='controller-thickness-input'
                            type='range'
                            min='0'
                            max='3'
                            step='1'
                            value={thickness}
                            onChange={handleThicknessChange}
                        />
                        <span>{thickness}px</span>
                    </div>
                    <div className='controller-skel'>
                        <span>골격</span>
                        <input
                            className='controller-skel-input'
                            type='range'
                            min='0'
                            max='100'
                            step='1'
                            value={skel}
                            onChange={handleSkelChange}
                        />
                        <span>{skel}%</span>
                    </div>
                    <div className='controller-weight'>
                        <span>가중치</span>
                        <input
                            className='controller-weight-input'
                            type='range'
                            min='0'
                            max='100'
                            step='1'
                            value={weight}
                            onChange={handleWeightChange}
                        />
                        <span>{weight}%</span>
                    </div>
                </div>
            </div>
            {/* 선택한 폰트 취소 */}
            <div className='minus-button-wrapper'>
                <button className='minus-button'>
                    <AiOutlineMinusCircle className='minus-icon'/>
                </button>
            </div>
        </div>
    );
}
