import React from "react";
import S from ".Modal.Module.css"

export function Modal({ show, children }) {
    if (!show) return null;
    return (
        <div className={S.container}>
            <div className={S.body}>
                <div className={S.close}>&times;</div>
                {children}
            </div>
        </div>
    );
}