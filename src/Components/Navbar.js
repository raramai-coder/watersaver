import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { NavLink } from "react-router-dom";

function Navbar() {
	const navRef = useRef(null);

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3> Logo</h3>
			<nav ref={navRef}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/levels">Levels</NavLink>
				<NavLink to="/faq">FAQ</NavLink>
				<NavLink to="/report">Report</NavLink>
				<NavLink to="/language">Language Selector</NavLink>
				<button className="nav-btn nav-close-btn">
					<FaTimes onClick={showNavbar} />
				</button>
			</nav>
			<button className="nav-btn">
				<FaBars onClick={showNavbar} />
			</button>
		</header>
	);
}

export default Navbar;
