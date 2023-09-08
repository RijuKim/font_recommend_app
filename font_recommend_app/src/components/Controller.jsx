//Controller.jsx
import React, { useState, useEffect } from 'react';
import './Cards.css';
import './Controllers.css';
import ControllerCard from './ControllerCard';
import { AiOutlineCheck } from 'react-icons/ai'
import Result from './Result';

export default function Controller(props) {
    const {onResultButtonClick, selectedFonts,tab_Weights,tab_totalWeights, getWeightFromController, getTotalWeightsFromController, onRemoveFont, userInput, apiResponse, handleGoBackClick} = props;

    //전체 선택 상태 관리
    const [selectAllChecked, setSelectAllChecked] = useState(true);

    //단일 선택 상태 관리
    const [checkFonts, setCheckFonts] = useState(selectedFonts);

    // //ControllerCard로부터 사용자 입력 가중치 상태 관리
    const [weights, setWeights] = useState(tab_Weights.length > 0 ? tab_Weights : []);
    // const [weights, setWeights] = useState(InitialWeights);

    //형태소, 골격, 굵기 통합 상태 관리
    const [total_weights, setTotalWeights] = useState(tab_totalWeights.length > 0 ? tab_totalWeights : [5, 5, 5]);

    // 형태소 조절 상태 관리
    const [morp, setMorp] = useState(total_weights[0]==5?5:total_weights[0]);

    // 골격 조절 상태 관리
    const [skel, setSkel] = useState(total_weights[1]==5?5:total_weights[1]);

    // 굵기 조절 상태 관리
    const [thickness, setThick] = useState(total_weights[2]==5?5:total_weights[2]);

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
            <div className='control-container'>
                {/* 폰트 조절 설명 */}
                <div className='control_inform_wrapper'>
                    <div className='control_page_inform'>
                        <div className='control_page_title'>2. 선택된 폰트 조절</div>
                        <div className='control_page_title2'>
                            각 폰트별 가중치와 형태소, 굵기, 골격 가중치를 조절하세요.
                        </div>
                    </div>
                </div>
                {/* 선택한 폰트 조절 컨테이너 */}
                <div className='control-wrapper'>
                    <button className='select-all-button' onClick={handleSelectAllClick}>
                    <AiOutlineCheck/>전체 선택
                    </button>
                    <ul className='control-items'>
                    {/* 선택한 폰트가 있을 때만 형태소, 굵기, 골격 가중치 조절기 표시 */}
                    { selectedFonts.length > 0 && (
                    <div className='total-controller-container'>
                        <div className='total-controller-wrapper'>
                            {/* <div className='total-controller-inform'>글자의 구조 정보에 따라 추천 받고 싶은 폰트를 세밀하게 조절할 수 있습니다.</div> */}
                            <div className='total-controller-bars'>
                                    <div className='total-controllers'>
                                        <div className='total-controller'>
                                            <div className='total-controller-content'>
                                                <div className='total-controller-title'>형태소</div>
                                                <input
                                                    className='controller-weight-input'
                                                    type='range'
                                                    min='1'
                                                    max='10'
                                                    step='1'
                                                    value={morp}
                                                    onChange={handleMorpChange}
                                                />
                                                <div>{morp}</div>
                                            </div>
                                            <div className='total-controller-title-inform'>글자의 끝단 부분 모양 반영도입니다.</div>
                                        </div>
                                        <hr className='hr_line'/>
                                        <div className='total-controller'>
                                            <div className='total-controller-content'>                 
                                                <div className='total-controller-title'>골격</div>
                                                <input
                                                    className='controller-skel-input'
                                                    type='range'
                                                    min='0'
                                                    max='10'
                                                    step='1'
                                                    value={skel}
                                                    onChange={handleSkelChange}
                                                />
                                                <div>{skel}</div>
                                            </div>
                                            <div className='total-controller-title-inform'>글자의 전체적인 모양 반영도입니다.</div>
                                        </div>
                                        <hr className='hr_line'/>
                                        <div className='total-controller'>
                                            <div className='total-controller-content'>  
                                                <div className='total-controller-title'>굵기</div>    
                                                <input
                                                    className='controller-thickness-input'
                                                    type='range'
                                                    min='0'
                                                    max='10'
                                                    step='1'
                                                    value={thickness}
                                                    onChange={handleThicknessChange}
                                                />
                                                <div>{thickness}</div>
                                            </div>
                                            <div className='total-controller-title-inform'>선택한 폰트의 굵기와 유사한 정도입니다.</div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>)}
                        {/* 폰트가 선택되는 만큼 해당 폰트의 ControllerCard 생성 */}
                        {selectedFonts.length === 0 ? (
                            <div className='initial-message'>먼저 폰트를 선택해주세요!</div>
                        ) : (
                            selectedFonts.map((font, index) => (
                                <ControllerCard
                                    key={index}
                                    index={index}
                                    selectedFont={font}
                                    controller_weights={weights}
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
            {/* 결과 */}
            {/* 검색 결과 설명 */}
            {apiResponse && (
                <>
                <div className='result_inform_wrapper'>
                    <div className='result_page_inform'>
                        <div className='result_page_title'>3. 폰트 검색 결과</div>
                        <div className='result_page_title2'>
                            원하는 폰트 결과를 확인하세요!
                        </div>
                    </div>
                </div>
                <Result apiResponse={apiResponse} goBackButtonClick={handleGoBackClick} />
                </>
            )}
        </div>
    );
}

