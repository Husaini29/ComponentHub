import "./styles.css";
import { Routes, Route, useLocation, NavLink } from "react-router-dom";
import { Header } from "./documentation/header/Header";
import { Home } from "./pages/home/Home";
import { Component } from "./pages/components/Compoent";
import {
  AlertDoc,
  AvatarDoc,
  BadgeDoc,
  CardDoc,
  HeadingDoc,
  ImageDoc,
  TextDoc
} from "./documentation";
import { ButtonDoc } from "./documentation/description/button/Button";

const Sidebar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "rgb(241, 125, 16)" : "black",
    fontSize: isActive ? "1.2rem" : ""
  });

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/components/avatar"
            style={getActiveStyle}
            className="sidebar-links"
          >
            Avatar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/alert"
            style={getActiveStyle}
            className="sidebar-links"
          >
            Alert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/badge"
            style={getActiveStyle}
            className="sidebar-links"
          >
            Badge
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/button"
            style={getActiveStyle}
            className="sidebar-links"
          >
            Button
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/heading"
            style={getActiveStyle}
            className="sidebar-links"
          >
            Heading
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/card"
            style={getActiveStyle}
            className="sidebar-links"
          >
            Card
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/text"
            style={getActiveStyle}
            className="sidebar-links"
          >
            Text
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/components/image"
            style={getActiveStyle}
            className="sidebar-links"
          >
            Image
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default function App() {
  const location = useLocation();
  const showSidebar = !(
    location.pathname === "/" || location.pathname === "/components"
  );
  return (
    <div className="App">
      <Header />
      <div className="container">
        {showSidebar && <Sidebar />}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Component />} />
            <Route path="/components/alert" element={<AlertDoc />} />
            <Route path="/components/button" element={<ButtonDoc />} />
            <Route path="/components/text" element={<TextDoc />} />
            <Route path="/components/heading" element={<HeadingDoc />} />
            <Route path="/components/avatar" element={<AvatarDoc />} />
            <Route path="/components/badge" element={<BadgeDoc />} />
            <Route path="/components/image" element={<ImageDoc />} />
            <Route path="/components/card" element={<CardDoc />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
