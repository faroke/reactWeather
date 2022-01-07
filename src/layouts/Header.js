import { Outlet, Link } from "react-router-dom";
import { router } from "../config/router";

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {router.map((route, index) => {
                        return(<li key={index}><Link to={route.url}>{route.title}</Link></li>);
                    })}
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}




export default Layout;