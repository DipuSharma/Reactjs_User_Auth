import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "./Common";

const PrivateRoute = ({ children }) => {
    let location = useLocation()
    const token = getToken()
    return token ? (
      children
    ) : (
      <Navigate to="/login" state={{ from: location }} />
    )
  }
  
export default PrivateRoute;