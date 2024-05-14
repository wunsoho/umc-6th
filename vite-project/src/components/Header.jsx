import { Link } from "react-router-dom";

function Header() {
    return (
        <div
            style={{
                backgroundColor: "#0B0B3B",
                display: "flex",
                width: "100vw",
                padding: "20px",
                alignItems: "center",
            }}
        >
            <Link to="/"
                style={{
                    color: "#ffffff",
                    marginRight: "55vw",
                    textDecoration : "none"
                }}
                className="header-link"
            >
                UMC Movie
            </Link>
            <Link to="/register"
                style={{
                    color: "#ffffff",
                    marginRight: "2vw",
                    textDecoration : "none"
                }}
                className="header-link"
            >
                회원가입
            </Link>
            <Link to="/popular"
                style={{
                    color: "#ffffff",
                    marginRight: "2vw",
                    textDecoration : "none"
                }}
                className="header-link"
            >
                Popular
            </Link>
            <Link to="/nowplay"
                style={{
                    color: "#ffffff",
                    marginRight: "2vw",
                    textDecoration : "none"
                }}
                className="header-link"
            >
                Now Playing
            </Link>
            <Link to="/toprated"
                style={{
                    color: "#ffffff",
                    marginRight: "2vw",
                    textDecoration : "none"
                }}
                className="header-link"
            >
                Top Rated
            </Link>
            <Link to="/upcoming"
                style={{
                    color: "#ffffff",
                    marginRight: "2vw",
                    textDecoration : "none"
                }}
                className="header-link"
            >
                Upcoming
            </Link>
            <style>
                {`
                    .header-link:hover {
                        font-size: 1.1em;
                    }
                `}
            </style>
        </div>
    );
}

export default Header;