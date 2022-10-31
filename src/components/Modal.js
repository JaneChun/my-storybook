import React from "react";
import { useState } from 'react';
import styled from 'styled-components';

// Modal 컨테이너
export const ModalContainer = styled.div`
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Modal창이 떴을 때 깔린 배경
export const ModalBackdrop = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0; right: 0; top: 0; bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Modal 버튼
export const ModalBtn = styled.button`;
    border: none;
    border-radius: 25px;
    padding: 20px 40px;
    background-color: blue;
    color: white;
    cursor: grab;
`;

// Modal 창
export const ModalView = styled.div.attrs((props) => ({
    role: 'dialog',
    // attrs 메소드 : div 엘리먼트에 속성을 추가할 수 있다.
}))`
    width: 300px;
    height: 150px;
    background: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    >button {
        background: none;
        color: black;
        border: none;
        font-size: 1rem;
`;

export const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
    // isOpen 상태를 변경한다.
        setIsOpen(!isOpen);
    };

    return(
        <>
        <ModalContainer>
            <ModalBtn onClick={openModalHandler}>{isOpen ? "닫기" : "열기"}</ModalBtn>

            {isOpen ? 
                <ModalBackdrop onClick={openModalHandler}>
                    <ModalView onClick={(e) =>  e.stopPropagation()}>
                        <button onClick={openModalHandler}>x</button>
                        <span>모달 창</span>
                        <button onClick={openModalHandler}>닫기</button>
                    </ModalView>
                </ModalBackdrop>
            : 
            null}

            </ModalContainer>
        </>
    );
}