import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isLogin: true};
        this.LoginClick = this.LoginClick.bind(this);
    }

    LoginClick() {
        this.setState((prevState) => ({
            isLogin: !prevState.isLogin,
        }));
    }

    render() {
        return(
            <div>
                <button onClick = {this.LoginClick}
                    style={{
                        marginRight : "2vw",
                        backgroundColor : "#0B0B3B",
                        color: "#ffffff",
                        border: "none"
                    }}>
                    {this.state.isLogin ? "로그인" : "로그아웃"}
                </button>
            </div>
        )
    }
}

export default Login;