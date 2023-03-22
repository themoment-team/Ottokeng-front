import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ component }: any) => {
  const navigate = useNavigate();

  return localStorage.getItem('token') ? (
    component
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default PrivateRoute;
