//Card.jsx
import React, { useState } from 'react';
import CardItem from './Carditem';
import './Cards.css';
import PopupCard from './PopupCard';

// 초기 카드 데이터
const initialCardData = [
    { title: '고딕', titlefont: '고딕', children: '고딕체', children2: '나눔고딕', children3: '나눔고딕', children4: '나눔고딕', children5: '나눔고딕', children6: '나눔고딕', children7: '나눔고딕', children8: '나눔고딕' },
    { title: '명조', titlefont: '명조', children: '산스체', children2: '나눔고딕', children3: '나눔고딕', children4: '나눔고딕', children5: '나눔고딕', children6: '나눔고딕', children7: '나눔고딕', children8: '나눔고딕' },
    { title: '손글씨', titlefont: '손글씨', children: '명조체', children2: '나눔명조', children3: '나눔고딕', children4: '나눔고딕', children5: '나눔고딕', children6: '나눔고딕', children7: '나눔고딕', children8: '나눔고딕' },
    { title: '장식체', titlefont: '장식체', children: '바탕체', children2: ' 나눔바탕', children3: '나눔고딕', children4: '나눔고딕', children5: '나눔고딕', children6: '나눔고딕', children7: '나눔고딕', children8: '나눔고딕' },
    { title: '픽셀체', titlefont: '픽셀체', children: '굴림체', children2: ' 나눔굴림', children3: '나눔고딕', children4: '나눔고딕', children5: '나눔고딕', children6: '나눔고딕', children7: '나눔고딕', children8: '나눔고딕' },
    { title: '고전체', titlefont: '고전체', children: '산스체', children2: ' 나눔고딕', children3: '나눔고딕', children4: '나눔고딕', children5: '나눔고딕', children6: '나눔고딕', children7: '나눔고딕', children8: '나눔고딕' },
    { title: '탈네모', titlefont: '탈네모', children: '명조체', children2: ' 나눔명조', children3: '나눔고딕', children4: '나눔고딕', children5: '나눔고딕', children6: '나눔고딕', children7: '나눔고딕', children8: '나눔고딕' },
    { title: '캘리폰트', titlefont: '캘리폰트', children: '바탕체', children2: ' 나눔바탕', children3: '나눔고딕', children4: '나눔고딕', children5: '나눔고딕', children6: '나눔고딕', children7: '나눔고딕', children8: '나눔고딕' }
];

function Cards(props) {
    const {getFontDataFromCard} = props;

    // 검색어 상태 관리
    const [searchTerm, setSearchTerm] = useState('');

    // 팝업 컨텐츠 상태 관리
    const [popupContent, setPopupContent] = useState(null);

    // 사용자가 입력한 값을 상태로 관리
    const [userInput, setUserInput] = useState('');

    // 글자 크기 상태 관리, 초기 글자 크기는 30px로 설정
    const [fontSize, setFontSize] = useState(30);

    //사용자가 선택한 폰트 값 Popup에서 가져오는 상태 관리
    const [selectedFont, setSelectedFont] = useState('')

    // 사용자가 입력한 값이 변경될 때마다 상태 업데이트
    const handleUserInputChange = (event) => {
        setUserInput(event.target.value);
    };

    // 검색어 입력 변경 핸들러
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // 카드 아이템 클릭 핸들러
    const handleCardItemClick = (item) => {
        setPopupContent(item);
    };

    // 팝업 닫기 핸들러
    const handleClosePopup = () => {
        setPopupContent(null);
    };

    // 글자 크기 조절 핸들러
    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
    };

    // 사용자 선택 폰트 데이터 가져오기 핸들러
    const getFontDataFromPopCard = (selectedFont) => {
        setSelectedFont(selectedFont);
        getFontDataFromCard(selectedFont);
    }

    // 검색된 카드 데이터 필터링
    const filteredCardData = initialCardData.filter(
        (item) => (
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.children.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.children2.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.children3.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.children4.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.children5.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.children6.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.children7.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.children8.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // 카드 데이터를 두 개로 분할하여 렌더링
    const firstHalf = filteredCardData.slice(0, Math.ceil(filteredCardData.length / 2));
    const secondHalf = filteredCardData.slice(Math.ceil(filteredCardData.length / 2));

    return (
        <div className='body'>
            <div className='cards'>
                <div className='card_inform_wrapper'>
                    <div className='card_page_inform'>
                        <div className='card_page_title'>1. 폰트 선택하기</div>
                        <div className='card_page_title2'>
                        먼저 원하는 폰트와 유사한 폰트를 두 가지 이상 선택하세요.
                        </div>
                    </div>
                    <div>
                        {/* 검색 입력란 */}
                        <div className='card-search-box'>
                            <input
                                className='card-search-input'
                                type='text'
                                placeholder='모든 폰트 내에서 검색'
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>


                <div className='cards__container'>
                    <div className='cards__wrapper'>
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
                            <div className='font-size-adjuster'>
                                <input
                                    className='font-size-input'
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
                        </div>
                        <ul className='cards__items'>
                            {/* 첫 번째 반 카드 렌더링 */}
                            {firstHalf.map((item, index) => (
                                <CardItem
                                    key={index}
                                    title={userInput || item.title}
                                    titlefont={item.titlefont}
                                    children={item.children}
                                    children2={item.children2}
                                    children3={item.children3}
                                    children4={item.children4}
                                    children5={item.children5}
                                    children6={item.children6}
                                    children7={item.children7}
                                    children8={item.children8}
                                    fontSize={fontSize}
                                    onClick={() => handleCardItemClick(item)}
                                />
                            ))}
                        </ul>
                        <ul className='cards__items'>
                            {/* 두 번째 반 카드 렌더링 */}
                            {secondHalf.map((item, index) => (
                                <CardItem
                                    key={index}
                                    title={userInput || item.title}
                                    titlefont={item.titlefont}
                                    children={item.children}
                                    children2={item.children2}
                                    children3={item.children3}
                                    children4={item.children4}
                                    children5={item.children5}
                                    children6={item.children6}
                                    children7={item.children7}
                                    children8={item.children8}
                                    fontSize={fontSize}
                                    onClick={() => handleCardItemClick(item)}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                {console.log("Card에서 저장된 폰트", selectedFont, userInput)}
                {/* 팝업 컴포넌트 */}
                {popupContent && (
                    <PopupCard
                        title={popupContent.title}
                        children={popupContent.children}
                        children2={popupContent.children2}
                        children3={popupContent.children3}
                        children4={popupContent.children4}
                        children5={popupContent.children5}
                        children6={popupContent.children6}
                        children7={popupContent.children7}
                        children8={popupContent.children8}
                        onClose={handleClosePopup}
                        getFontDataFromPopCard={getFontDataFromPopCard}
                    />
                )}
            </div>
        </div>
    );
}

export default Cards;