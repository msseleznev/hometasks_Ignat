import React, {ChangeEvent, useState} from 'react'
import s from '../c7-SuperRange/SuperRange.module.css'
import styled from "styled-components";



type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    max: number
    min: number
    // min, max, step, disable, ...
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, max, min
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const value1 = value ? value[0] : 0;
    const value2 = value ? value[1] : 0;
    const progressLeft = (value1 / max) * 98;
    const progressRight = 98 - (value2 / max) * 98;


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {


        let valueInput = +e.currentTarget.value
        if (e.currentTarget.dataset.input) {
            const trigger = e.currentTarget.dataset.input;
            if (trigger === 'min') {
                onChangeRange && onChangeRange([valueInput, value2])
            } else {
                onChangeRange && onChangeRange([value1, valueInput])
            }
        }
    }


    let StyledProgress = styled.div<{ progressLeft: number, progressRight: number }>`
      height: 8px;
      left: ${props => props.progressLeft}%;
      right: ${props => props.progressRight}%;
      position: absolute;
      border-radius: 8px;
      background: rgba(49, 116, 250, 0.76);
    `


    return (
        <div className={s.range}>
            <div className={s.slider}>
                <StyledProgress progressLeft={progressLeft} progressRight={progressRight}/>
            </div>
            <div className={s.range_input}>
                <input type="range" data-input='min' max={max}  className={s.range_min} value={value1}
                       onChange={onChangeCallback}/>
                <input type="range" data-input='max' max={max} className={s.range_max} value={value2}
                       onChange={onChangeCallback}/>
            </div>
        </div>
    )
}

export default SuperDoubleRange
