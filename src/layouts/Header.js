import { Outlet /*, Link*/ } from "react-router-dom";
//import { router } from "../utils/router";
import * as React from 'react';

function HeaderComponent() {
    return (
        <div>
            {/*
            <ul>
                {router.map((route, index) => {
                    return (<li key={index + 1}><Link to={route.url}>{route.title}</Link></li>);
                })}
            </ul>
            */}
            <Outlet />
        </div>
    );
}




export default HeaderComponent;

