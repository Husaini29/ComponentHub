import "./home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const naviagte = useNavigate();
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <h1>Your Unique Component Library</h1>
        <p>A collection of innovative components for modern web development</p>
        <button onClick={() => naviagte("/components")}>Get Started</button>
      </div>
    </div>
  );
};
