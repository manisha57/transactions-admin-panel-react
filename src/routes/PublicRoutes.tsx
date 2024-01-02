import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/publicLayout";
import TrasactionPage from "../pages/TransactionPage";

const PublicRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<PublicLayout />}>
            <Route path="/" element={<TrasactionPage />} />
        </Route>
    </Routes>
    );
}

export default PublicRoutes;