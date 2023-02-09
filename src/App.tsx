import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import './index.scss'
import AboutPage from "./page/AboutPage/AboutPage";
import { AboutPageAsync } from "./page/AboutPage/AboutPage.async";
import MainPage from "./page/MainPage/MainPage";
import { MainPageAsync } from "./page/MainPage/MainPage.async";

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;