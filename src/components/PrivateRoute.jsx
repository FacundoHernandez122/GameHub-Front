import React from "react";
import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="../login" replace />;
}

export default PrivateRoute;
