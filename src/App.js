import "./assets/reset.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppHeader from "./components/AppHeader/AppHeader";
import AppMain from "./components/AppMain/AppMain";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppHeader />
                <AppMain />
            </BrowserRouter>
        </div>
    );
}

export default App;
