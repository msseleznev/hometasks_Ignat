import React, {useEffect, useState} from 'react';
import {requestAPI} from "./api/hw-api";
import preloader from '../h10/preloader.svg'

type RequestApiPropsType = {
    checked: boolean
}
const RequestApi: React.FC<RequestApiPropsType> = ({checked}) => {
    const [state, setState] = useState<any>(null)


    useEffect(() => {
        requestAPI.postRequest(checked)
            .then((res) => {
                setState(res.data.errorText);
            }).catch((error) => {
            setState(error.response ? error.response.data.errorText : error.message)
            // console.log({...error});
            // console.log(error.response ? error.response.data.errorText : error.message);
        })
    }, [])

    const result = JSON.stringify(state)
    return (
        <div>{state === null ? <img src={preloader}/>: result}</div>
    );
};

export default RequestApi;