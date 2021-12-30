import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoute = ({Component}) => {
  const { user } = useAuth();
 if(user){
   return <Component />
 }

 return <Navigate to="/login" />
};
