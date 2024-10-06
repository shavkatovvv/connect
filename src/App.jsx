import React from "react";
import { Home } from "./home/home";
import { Route, Routes } from "react-router-dom";
import { Card } from "./components/card/card";
import { Carddetail } from "./components/card/card-detail";
import { Mainlayout } from "./layout/main-layout";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Mainlayout />}>
                    <Route index element={<Home />} />
                    <Route path="/card-detail/:id" element={<Carddetail />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
