import React from 'react'
import s from "./Error404.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";
import {setClassName} from "../Header";
import cat from "./cat.png";


function JuniorPlus() {
    return (
        <div className={s.box}>
            <div>
                <div className={s.child_box2}>Упс! Рановато =)</div>
                <div className={s.child_box3}>Страница JuniorPlus скоро будет доступна.</div>
                <div className={s.child_box2}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
                <NavLink to={PATH.PRE_JUNIOR} className={setClassName}>Нажмите для возврата к странице
                    Pre-junior</NavLink>
            </div>
            <img src={cat}/>
        </div>
    )
}

export default JuniorPlus

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз