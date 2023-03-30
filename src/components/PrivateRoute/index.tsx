import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ component }: any) => {
  return localStorage.getItem('token') ? (
    component
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default PrivateRoute;
