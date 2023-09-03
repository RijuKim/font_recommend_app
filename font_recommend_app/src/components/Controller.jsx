//Controller.jsx
import React, { useState, useEffect } from 'react';
import './Cards.css';
import './Controllers.css';
import ControllerCard from './ControllerCard';
import { AiOutlineCheck } from 'react-icons/ai'

export default function Controller(props) {
    const {onResultButtonClick, selectedFonts, getWeightFromController, getTotalWeightsFromController, onRemoveFont, userInput} = props;

    //전체 선택 상태 관리
    const [selectAllChecked, setSelectAllChecked] = useState(true);

    //단일 선택 상태 관리
    const [checkFonts, setCheckFonts] = useState(selectedFonts);

    // //ControllerCard로부터 사용자 입력 가중치 상태 관리
    const [weights, setWeights] = useState([]);
    // const [weights, setWeights] = useState(InitialWeights);

    //형태소, 골격, 굵기 통합 상태 관리
    const [total_weights, setTotalWeights] = useState([5, 5, 5]);

    // 형태소 조절 상태 관리
    const [morp, setMorp] = useState(5);

    // 골격 조절 상태 관리
    const [skel, setSkel] = useState(5);

    // 굵기 조절 상태 관리
    const [thickness, setThick] = useState(5);

    // 형태소 조절 핸들러
    const handleMorpChange = (event) => {
        const newMorp = parseInt(event.target.value);
        setMorp(newMorp);
        setTotalWeights([newMorp, total_weights[1], total_weights[2]]); // 로컬 상태로 가중치 업데이트
        // getMorpFromController(index, newMorp); // 부모 컴포넌트로 가중치 업데이트 전달
        console.log(newMorp); // 로컬 상태로 업데이트된 가중치 출력
    };
    
    // 골격 조절 핸들러
        const handleSkelChange = (event) => {
        const newSkel = parseInt(event.target.value);
        setSkel(newSkel);
        setTotalWeights([total_weights[0], newSkel, total_weights[2]]); // 로컬 상태로 가중치 업데이트
        // getSkelFromController(index, newSkel); // 부모 컴포넌트로 가중치 업데이트 전달
        console.log(newSkel); // 로컬 상태로 업데이트된 가중치 출력
    };

    // 굵기 조절 핸들러
    const handleThicknessChange = (event) => {
        const newThick = parseInt(event.target.value);
        setThick(newThick);
        setTotalWeights([total_weights[0], total_weights[1], newThick]); // 로컬 상태로 가중치 업데이트
        // getThickFromController(index, newThick); // 부모 컴포넌트로 가중치 업데이트 전달
        console.log(newThick); // 로컬 상태로 업데이트된 가중치 출력
    };

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

    //selectedFonts가 변경될 때마다 weights업데이트
    useEffect(() => {
        const InitialWeights = new Array(selectedFonts.length).fill(5);
        setWeights(InitialWeights);
    }, [selectedFonts]);



    //업데이트된 weights값 넘겨주기
    useEffect(() => {
        // 부모 컴포넌트로 가중치 배열 전달
        getWeightFromController(weights);
        getTotalWeightsFromController(total_weights);

    }, [weights, total_weights, getWeightFromController, getTotalWeightsFromController]);

    

    //ControllerCard로부터 사용자 입력 가중치 가져오기&Tab으로 보내기 핸들러
    const getWeightFromControllerCard = (index, weight) => {

        //ControllerCard로부터 사용자 입력 가중치 상태 관리
        weights[index] = parseInt(weight);
        setWeights([...weights]);

        // 부모 컴포넌트로 가중치 배열 전달
        // getWeightFromController(updatedWeights);
    }

    /* 기존 코드(가중치 디폴트 값 안 넘어옴)
        const getWeightFromControllerCard = (index, weight) => {
            setWeights(prevWeights => {
                const newWeights = [...prevWeights];
                newWeights[index] = parseInt(weight);
                return newWeights;
            });
    
            // 부모 컴포넌트로 가중치 배열 전달
            getWeightFromController(weights);
        }
    
*/
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
                        각 폰트별 가중치와 형태소, 굵기, 골격 가중치를 조절하세요.
                    </div>
                </div>
            </div>
            {/* 선택한 폰트가 있을 때만 형태소, 굵기, 골격 가중치 조절기 표시 */}
            { selectedFonts.length > 0 && (
            <div>
                <div className='controller-skel'>
                            <span>형태소</span>
                            <input
                                className='controller-weight-input'
                                type='range'
                                min='1'
                                max='10'
                                step='1'
                                value={morp}
                                onChange={handleMorpChange}
                            />
                            <span>{morp}</span>
                        </div>
                        <div className='controller-skel'>
                            <span>골격</span>
                            <input
                                className='controller-skel-input'
                                type='range'
                                min='0'
                                max='10'
                                step='1'
                                value={skel}
                                onChange={handleSkelChange}
                            />
                            <span>{skel}</span>
                        </div>
                        <div className='controller-bar'>
                            <span>굵기</span>
                            <input
                                className='controller-thickness-input'
                                type='range'
                                min='0'
                                max='10'
                                step='1'
                                value={thickness}
                                onChange={handleThicknessChange}
                            />
                            <span>{thickness}</span>
                        </div>
            </div>)}
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

