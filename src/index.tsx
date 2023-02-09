import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Counter } from "./components/Counter";


render (
    <BrowserRouter>
        <App />
    </BrowserRouter> ,
    document.getElementById('root')
)