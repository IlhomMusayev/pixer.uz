import { useAuth } from "../contexts/AuthContext";
import { Route, Redirect } from "react-router-dom";

export default function PublicRoute(props) {
	return <Route {...props} />;
}