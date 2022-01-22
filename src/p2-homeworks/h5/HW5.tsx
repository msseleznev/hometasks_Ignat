import React from 'react'
import Header from './Header'
import RoutesRRDV6 from './Routes'
import {HashRouter} from 'react-router-dom';

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <RoutesRRDV6/>
            </HashRouter>
        </div>
    )
}

export default HW5
