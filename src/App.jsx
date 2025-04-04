import React from "react";
import Registration from "./pages/Registration";
import SignIn from "./pages/SignIn";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./rootlayout/RootLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />}></Route>
        <Route path="/signup" element={<Registration />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/" element={<RootLayout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/message" element={"This is from message page"}></Route>
          <Route path="/notification" element ={"This is from notification page"}></Route>
          <Route path="/settings" element={"This is from settings page"}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
