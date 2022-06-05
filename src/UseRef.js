import React, {useRef} from 'react'


export default function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` указывает на смонтированный элемент `input`
        inputEl.innerHTML = 'got it';
    };
    return (
        <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
        </>
    );
}
