import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

const Roots = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Roots;