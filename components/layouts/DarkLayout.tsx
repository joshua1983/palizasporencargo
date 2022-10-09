import React from "react";
import { FC } from "react";
import { ChildrenProps } from "../interfaces/Base";



export const DarkLayout:FC<ChildrenProps> = ({ children }) => {
    return (
        <div style={{
            padding: '10px',
            borderRadius: '5px'
        }}>
            <div>
                {children}
            </div>
        </div>
    );
}
