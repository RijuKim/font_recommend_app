import React, { useState } from 'react';
import PopupCardItem from './PopupCarditem';
import { FiArrowLeft } from "react-icons/fi";

const Popup = ({ title, children, children2, children3, children4, children5, children6, children7, children8, onClose }) => {
  // 사용자가 입력한 값을 상태로 관리
  const [userInput, setUserInput] = useState('');

  // 사용자가 입력한 값이 변경될 때마다 상태 업데이트하는 이벤트 핸들러
  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };


  return (

    <div className='popup'>
      <div className='popup__content'>
        <button onClick={onClose}><FiArrowLeft></FiArrowLeft></button>
        <div className='popup_header'>
          <div className='popup_title'> {title}의 세부 폰트</div>
          <div className='popup_title2'>섞고 싶은 폰트를 두 가지 이상 선택하세요</div>
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
              <PopupCardItem title={children} children={userInput || children} />
              <PopupCardItem title={children2} children={userInput || children2} />
              <PopupCardItem title={children3} children={userInput || children3} />
              <PopupCardItem title={children4} children={userInput || children4} />
            </ul>
            <ul className='cards__items'>
              <PopupCardItem title={children5} children={userInput || children5} />
              <PopupCardItem title={children6} children={userInput || children6} />
              <PopupCardItem title={children7} children={userInput || children7} />
              <PopupCardItem title={children8} children={userInput || children8} />
            </ul>
          </div>
        </div>

      </div>
    </div >
  );
}

export default Popup;


