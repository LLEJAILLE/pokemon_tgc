import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Accueil from './pages/accueil/accueil';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
