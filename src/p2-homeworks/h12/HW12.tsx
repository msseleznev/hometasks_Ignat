import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['default', 'dark'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme); // useSelector
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            homeworks 12
            {/*should work (должно работать)*/}
            <div className={s[theme + '-text']}>
                Change theme
                <SuperSelect options={themes}
                             value={theme}
                             onChangeOption={onChangeCallback}/>

            </div>

            <hr/>
        </div>
    );
}

export default HW12;
