//Tab.jsx
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Controller from './Controller';
import Result from './Result';
import './Tab.css'

export default function Tab() {
    // 선택된 탭의 인덱스를 관리하는 상태
    const [activeTab, setActiveTab] = useState(0);

    //Card에서 받아온 사용자 선택 폰트 데이터 저장 상태관리
    const [selectedFont, setSelectedFont] = useState(null)

    //사용자 폰트 선택 상태 관리 -> 선택된 폰트들 저장하는 배열
    const [selectedFonts, setSelectedFonts] = useState([]);

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

    //seletedFonts 배열에서 선택한 폰트 삭제 핸들러
    const handleRemoveFont = (index) => {
        setSelectedFonts((prevSelectedFonts) =>
            prevSelectedFonts.filter((_, i) => i !== index)
        );
    };

    //폰트 혼합하기 버튼 클릭 핸들러
    const handleMixFontsClick = () => {
        // setShowFontMixResult(true);
        setActiveTab(2); //'결과' 탭으로 변경
    }
    

    useEffect(() => {
        console.log('selectedFont가 업데이트되었습니다:', selectedFont);
    
        if (selectedFont) {
            console.log('폰트가 선택됨', selectedFont);
            setSelectedFonts(prevSelectedFonts => [...prevSelectedFonts, selectedFont]);
        }
    
        console.log('현재 컨트롤러가 가지고 있는 선택된 폰트들:', selectedFonts);
    }, [selectedFont]);

    // 탭 메뉴에 대한 정보: [이름, 컴포넌트]
    const tabs = [
        ['선택', <Card getFontDataFromCard={getFontDataFromCard}/>],
        ['조절', <Controller 
            selectedFonts={selectedFonts} 
            onRemoveFont={handleRemoveFont} 
            onResultButtonClick={handleMixFontsClick}/>],
        ['결과', <Result />],
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
                {tabs[activeTab][1]}
            </div>
        </div>
    );
}