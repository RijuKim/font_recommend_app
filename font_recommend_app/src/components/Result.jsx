// Result.jsx
import React from 'react';
import './Result.css';
import ResultItem from './ResultItem';

export default function Result(props) {
    const { fontSize, userInput } = props;

    return (
        <div>
            {/* 10개의 ResultItem 생성 */}
            {[...Array(10)].map((_, index) => (
                <ResultItem key={index} itemNum={index+1} fontSize={fontSize} userInput={userInput} />
            ))}
        </div>
    );
}
