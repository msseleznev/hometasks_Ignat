import React from "react";
import s from "./HW13.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import Request from "./Request";



function HW13() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);

    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            homeworks 13
           <Request/>

            <hr/>
        </div>
    );
}

export default HW13;
