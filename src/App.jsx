import React from 'react';
import { useState, useEffect } from "react";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import { NewsPage } from "./pages/NewsPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { auth } from "./firebase/firebase";

import { Header } from "./components/Header/Header";


const Layout = () => {
	return (
		<div className="App">
      <Header />
			<div className="container">
				<Outlet/>
			</div>
		</div>
	);
}

function App() {
	const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
		<Routes>
			<Route element={<Layout/>}>
                 <Route
                path="/"
                element={<NewsPage/>}
              />
				<Route path="login" element={<Login/>}/>
				<Route path="profile" element={<Profile/>}/>	
			</Route> 
		</Routes>
  );
}

export default App;
 