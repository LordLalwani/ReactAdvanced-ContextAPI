import React, { createContext, Component } from "react"
import reactLogo from './../resources/react.svg';
import iagLogo from './../resources/iag.png';
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isIagTheme: false,
        iagTheme: {
            spinner: iagLogo,
            bg: '#fff',
            text: "IAG",
            textColor: "#4a2d74"
        },
        reactTheme: {
            spinner: reactLogo,
            bg: '#282c34',
            text: "React"
        }
    }
    toggleTheme = () => {
        this.setState({isIagTheme: !this.state.isIagTheme})
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;