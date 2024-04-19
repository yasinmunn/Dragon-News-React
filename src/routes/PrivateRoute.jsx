import { Children, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    console.log

    if(loading){
        return <span class="loading loading-spinner text-success"></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate> ;
};

export default PrivateRoute;