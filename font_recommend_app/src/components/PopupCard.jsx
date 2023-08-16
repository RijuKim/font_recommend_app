//PopupCard.jsx
import React, { useState } from 'react';
import PopupCardItem from './PopupCarditem';
import { FiArrowLeft } from "react-icons/fi";

const Popup = (props) => {
  const { getFontDataFromPopCard, title, children, children2, children3, children4, children5, children6, children7, children8, onClose } = props

  // 사용자가 입력한 값을 상태로 관리
  const [userInput, setUserInput] = useState('');

  //PopupCard에서 선택한 폰트 정보 상태 관리
  const [selectedFont, setSelectedFont] = useState('')

  // 사용자가 입력한 값이 변경될 때마다 상태 업데이트하는 이벤트 핸들러
  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  //PopupCard에서 폰트 정보 가져오는 함수
  const getFontDataFromItem = (selectedFont) => {
    setSelectedFont(selectedFont);
    getFontDataFromPopCard(selectedFont);
  }



  return (

    <div className='popup'>
      <div className='popup__content'>
        <button onClick={onClose}><FiArrowLeft></FiArrowLeft></button>
        <div className='popup_header'>
          <div className='popup_title'> {title}의 세부 폰트</div>
          <div className='popup_title2'>원하는 폰트를 두 가지 이상 선택하세요</div>
          <div className='popup_change_title_box'>
            <input
              type='text'
              value={userInput}
              onChange={handleUserInputChange}
              placeholder='예시 문구를 적어보세요'
            />
          </div>
        </div>
        <div className='popup__container'>
          <div className='popup__wrapper'>
            <ul className='cards__items'>
              {console.log("Item에서 가져온 폰트", selectedFont)}
              <PopupCardItem title={children} children={userInput || children} getFontDataFromItem={getFontDataFromItem}/>
              <PopupCardItem title={children2} children={userInput || children2} getFontDataFromItem={getFontDataFromItem}/>
              <PopupCardItem title={children3} children={userInput || children3} getFontDataFromItem={getFontDataFromItem}/>
              <PopupCardItem title={children4} children={userInput || children4} getFontDataFromItem={getFontDataFromItem}/>
            </ul>
            <ul className='cards__items'>
              <PopupCardItem title={children5} children={userInput || children5} getFontDataFromItem={getFontDataFromItem}/>
              <PopupCardItem title={children6} children={userInput || children6} getFontDataFromItem={getFontDataFromItem}/>
              <PopupCardItem title={children7} children={userInput || children7} getFontDataFromItem={getFontDataFromItem}/>
              <PopupCardItem title={children8} children={userInput || children8} getFontDataFromItem={getFontDataFromItem}/>
            </ul>
          </div>
        </div>

      </div>
    </div >
  );
}

export default Popup;


