import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
  return (
    <div>
      {user? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
      )}
    </div>
  );
};

export default PrivateRoute;
