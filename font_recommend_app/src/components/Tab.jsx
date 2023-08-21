//Tab.jsx, 최상위 컴포넌트, api 연결
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Controller from './Controller';
import Result from './Result';
import axios from 'axios';
import './Tab.css'
import Spinner from '../Spinner.gif'

export default function Tab() {
    // 선택된 탭의 인덱스를 관리하는 상태
    const [activeTab, setActiveTab] = useState(0);

    //Card에서 받아온 사용자 선택 폰트 데이터 저장 상태관리
    const [selectedFont, setSelectedFont] = useState(null)

    //사용자 폰트 선택 상태 관리 -> 선택된 폰트들 저장하는 배열
    const [selectedFonts, setSelectedFonts] = useState([]);

    //Card에서 받아온 사용자 입력 예시 문구 데이터 저장 상태관리
    const [userInput, setUserInput] = useState('')

    //Controller에서 받아온 사용자 입력 weight 데이터 저장 상태관리
    const [weights, setWeights] = useState(1);

    //로딩 상태 관리
    const [isLoading, setIsLoading] = useState(false);

    // 폰트 혼합 결과 컴포넌트 보여주기 상태 관리 -> API 연결 후 데이터 전송용으로 사용
    // const [showFontMixResult, setShowFontMixResult] = useState(false);

    // 탭을 클릭했을 때 실행되는 함수
    const handleTabClick = (index) => {
       
         setActiveTab(index);
        
    };

    // 사용자 선택 폰트 데이터 가져오기 핸들러
    const getFontDataFromCard = (fontData) => {
        setSelectedFont(fontData);
        console.log(fontData);
    }

    // 사용자 입력 예시 문구 데이터 가져오기 핸들러
    const getUserInputDataFromCard = (userInput) => {
        setUserInput(userInput);
    }

    //Controller에서 받아온 사용자 입력 weight 데이터 가져오기 핸들러
    const getWeightFromController = (weights) => {
        setWeights(weights);
        console.log("tab의 가중치", weights)
    }

    //seletedFonts 배열에서 선택한 폰트 삭제 핸들러
    const handleRemoveFont = (index) => {
        setSelectedFonts((prevSelectedFonts) =>
            prevSelectedFonts.filter((_, i) => i !== index)
        );
    };

    //폰트 혼합하기 버튼 클릭 핸들러, 클릭 시 폰트 추천 시스템 api 호출
    const handleMixFontsClick = () => {
        setIsLoading(true); // 로딩 상태 시작
        fetchDataFromAPI();
    }
    //폰트 혼합하기 버튼 클릭 핸들러, 클릭 시 폰트 추천 시스템 api 호출
     const handleGoBackClick = () => {
        setSelectedFonts([]);
        setWeights(1);
        setActiveTab(0); // "선택" 탭으로 변경
    }
    

    useEffect(() => {
        console.log('selectedFont가 업데이트되었습니다:', selectedFont);
    
        if (selectedFont) {
            console.log('폰트가 선택됨', selectedFont);
            setSelectedFonts(prevSelectedFonts  => [...prevSelectedFonts , selectedFont]);
        }
        // console.log('현재 컨트롤러가 가지고 있는 선택된 폰트들:', selectedFonts);
    
    }, [selectedFont]);

    useEffect(() => {
    
        console.log('현재 컨트롤러가 가지고 있는 선택된 폰트들:', selectedFonts);
    
    }, [selectedFonts]);

    // !폰트추천 시스템 api에서 데이터 받기
    const [apiResponse, setApiResponse] = useState('');

    const fetchDataFromAPI = () => {
        // Flask API에 GET 요청을 보냅니다.
        axios.post('http://localhost:8000/font_recommend_test', {
            font_names: selectedFonts,
            weights: weights
        })
        .then(response => {
            setApiResponse(response.data);

            // API 응답을 받은 후 '결과' 탭으로 변경
            setActiveTab(2);
            setIsLoading(false); // 로딩 상태 종료
        })
        .catch(error => {
            console.error('Error fetching data from Flask API:', error);
            setIsLoading(false); // 로딩 상태 종료
        });
    };

    // 탭 메뉴에 대한 정보: [이름, 컴포넌트]
    const tabs = [
        ['선택', <Card getFontDataFromCard={getFontDataFromCard} getUserInputDataFromCard={getUserInputDataFromCard}/>],
        ['조절', <Controller 
            selectedFonts={selectedFonts} 
            getWeightFromController={getWeightFromController}
            onRemoveFont={handleRemoveFont} 
            onResultButtonClick={handleMixFontsClick}
            userInput={userInput}/>],
        ['결과', <Result apiResponse={apiResponse}
        goBackButtonClick={handleGoBackClick}/>],
    ];


    return (
        <div>
            {/* 탭 메뉴 */}
            {console.log("Tab에서 저장된 폰트", selectedFont, selectedFonts)}
            <div className='tab'>
                {tabs.map(([name], index) => (
                    <div
                        className={`tab-button ${activeTab === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => handleTabClick(index)}
                    >
                        {name}
                    </div>
                ))}
            </div>
            {/* 선택된 탭 컴포넌트 */}
            <div>
                {isLoading ? (
                    <div className='loading'>
                        <h2>원하는 폰트를 찾는 중입니다. 조금만 기다려주세요!</h2>
                        <img src={Spinner} alt='로딩' width='10%'/>
                    </div>
                ) : (
                tabs[activeTab][1]
                )}
            </div>
        </div>
    );
}