import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<div>Not found</div>} />
            </Routes>
        </BrowserRouter>
    )
}
