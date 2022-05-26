import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "./Common";

const PublicRoute = ({ children }) => {
    let location = useLocation()
    const token = getToken()
    return !token ? (
      children
    ) : (
      <Navigate to="/dashboard" state={{ from: location }} />
    )
  }
  

export default PublicRoute;