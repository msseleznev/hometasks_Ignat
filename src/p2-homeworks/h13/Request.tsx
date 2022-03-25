import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from './HW13.module.css'
import RequestAPI from "./RequestAPI";

const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [clickButton, setClickButton] = useState<boolean>(false)


    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
        setClickButton(false)
    }
    const onClickHandler = () => {
        setClickButton(true)
    }


    return (
        <div className={s.box}>
            {clickButton ? <RequestAPI checked={checked}/> : "Нажмите POST для запроса на сервер"}
            <SuperCheckbox checked={checked}
                           onChange={testOnChange}>Success</SuperCheckbox>
            <SuperButton onClick={onClickHandler}>POST</SuperButton>
        </div>
    );
};

export default Request;