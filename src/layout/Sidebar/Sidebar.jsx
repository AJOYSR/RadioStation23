/**
 * The Sidebar component is a React component that renders a sidebar navigation menu with links and an
 * "About" section.
 * @returns The Sidebar component is returning a JSX element.
 */
import { useEffect, useState } from "react";
import { iconsImgs, personsImgs } from "../../utils/images";
import { navigationLinks } from "../../data/data";
import "./Sidebar.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { Link } from "react-router-dom"; // Import Link

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(1);
  const { isSidebarOpen } = useContext(SidebarContext);
  const sidebarClass = isSidebarOpen ? "sidebar-change" : "another-class";

  return (
    <div className={`sidebar ${sidebarClass} shadow-md mt-3`}>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className={`nav-item ${navigationLink.id === activeLinkIdx ? "active" : null}`} key={navigationLink.id}>
              {/* Use Link for navigation */}
              <Link to={navigationLink.path} className="nav-link">
                <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                <span className="nav-link-text">{navigationLink.title}</span>
              </Link>
            </li>
          ))}
        </ul>

        <hr />
        <ul className="about">
          <li className="nav-item about-list" key={4}>
            <Link to="/about" className="nav-link"> 
              <img src={iconsImgs.about} className="nav-link-icon" alt={"About"} />
              <span className="nav-link-text">About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
