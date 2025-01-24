import React from 'react';
import { ArrowLeft } from 'lucide-react';

export function BackButton(){
    return(
        <button onClick={onClick}>
            <ArrowLeft/>
            <span>Назад</span>
        </button>
    )
}
