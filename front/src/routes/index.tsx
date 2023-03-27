import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import { DashboardPage } from "../pages/DashboardPage";
import { HopePage } from "../pages/HomePage";

export const RoutesMain = () => {
	return (
		<Routes>
			<Route path="/" element={<HopePage />} />
			<Route path="/" element={<ProtectedRoutes />}>
				<Route path="/dashboard" element={<DashboardPage />} />
			</Route>
		</Routes>
	);
};
