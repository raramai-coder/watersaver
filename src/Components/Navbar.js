import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef(null);

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3> Logo</h3>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/levels">Levels</Link>
				<Link to="/faq">FAQ</Link>
				<Link to="/report">Report</Link>
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
