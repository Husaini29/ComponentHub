import { NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const allComponents = [
    "Avatar",
    "Alert",
    "Badge",
    "Button",
    "Heading",
    "Card",
    "Text",
    "Image"
  ];

  const clickHandler = () => {
    const allComp = allComponents.map((comp) => comp.toLowerCase());
    const search = searchInput.toLowerCase();
    if (allComp.includes(search)) {
      navigate(`/components/${search}`);
      setSearchInput("");
    } else {
      alert("Component not available");
      setSearchInput("");
    }
  };

  const getNavStyle = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "none",
    color: isActive ? "#1d3461" : "black"
  });

  return (
    <div className="header">
      <p onClick={() => navigate("/")}>ComponentHub</p>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search a component....."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={clickHandler}>Search</button>
      </div>
      <div className="navlinks">
        <NavLink style={getNavStyle} className="navlinks-link" to="/">
          Home
        </NavLink>
        <NavLink style={getNavStyle} className="navlinks-link" to="/components">
          Component
        </NavLink>
      </div>
    </div>
  );
};
