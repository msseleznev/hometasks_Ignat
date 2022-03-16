import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'


function HW11() {


    //1
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
    const minRange = 10

    const onChangeRange = (value: number) => {
        if (value + minRange < value2)
            setValue1(value)
    };


    const onChangeDoubleRange = (value: [number, number]) => {
        if (value[0] + minRange < value[1])
            setValue1(value[0])
        if (value[0] + minRange < value[1])
            setValue2(value[1])
    };

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.box}>
                <span>{value1}</span>
                <SuperRange onChangeRange={onChangeRange}
                            value={value1}
                />

            </div>
            <div className={s.box}>
                <div className={s.valueBox}>
                    <span>{value1}</span>
                    <span>{value2}</span>
                </div>
                <SuperDoubleRange value={[value1, value2]}
                                  max={100}
                                  min={0}
                                  onChangeRange={onChangeDoubleRange}/>

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
