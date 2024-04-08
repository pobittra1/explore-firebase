import {Outlet} from "react-router-dom"

const Main = () => {
    return (
        <div>
            <header></header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;