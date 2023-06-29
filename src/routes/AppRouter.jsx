import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main Application Routing Configuration
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;