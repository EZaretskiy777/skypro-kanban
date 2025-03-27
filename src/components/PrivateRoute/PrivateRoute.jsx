import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
}

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default PrivateRoute;
