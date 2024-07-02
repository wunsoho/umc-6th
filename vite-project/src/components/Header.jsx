import { Link, useNavigate } from "react-router-dom";

function Header() {
    const isLoggedIn = localStorage.getItem('Token') !== null;
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('Token');
        navigate('/'); 
    };

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
                    marginRight: "50vw",
                    textDecoration : "none"
                }}
                className="header-link"
            >
                UMC Movie
            </Link>
            {isLoggedIn ? (
                <Link 
                    to="/"
                    onClick={handleLogout}
                    style={{
                        color: "#ffffff",
                        marginRight: "2vw",
                        textDecoration: "none",
                        cursor: "pointer"
                    }}
                    className="header-link"
                 >
                로그아웃
                </Link>
            ) : (
                <>
                    <Link to="/login"
                        style={{
                            color:"#ffffff",
                            marginRight:"2vw",
                            textDecoration : "none",
                        }}
                        className="header-link"
                    >
                        로그인
                    </Link>
                    <Link to="/signup"
                        style={{
                            color: "#ffffff",
                            marginRight: "2vw",
                            textDecoration : "none"
                        }}
                        className="header-link"
                    >
                        회원가입
                    </Link>
                </>
            )}
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