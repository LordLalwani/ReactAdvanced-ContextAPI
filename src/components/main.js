import React, { Component } from 'react';
import './../App.css';
import { ThemeContext } from "../context/themeContext";
import { Switch, Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class Main extends Component {
    static contextType = ThemeContext;
    render() {
        const { isIagTheme, iagTheme, reactTheme, toggleTheme } = this.context;
        const theme = isIagTheme ? iagTheme : reactTheme;
        const ThemeSwitch = withStyles({
            switchBase: {
                color: theme.textColor,
                '&$checked': {
                    color: theme.textColor,
                },
                '&$checked + $track': {
                    backgroundColor: theme.textColor,
                },
            },
            checked: {},
            track: {},
        })(Switch);

        return (
            <div className="App">
                <header className="App-header" style={{ backgroundColor: theme.bg }}>
                    <img onClick={toggleTheme} src={theme.spinner} className="App-logo" alt="logo" />
                    <h2 style={{ color: theme.textColor }}>This is the {theme.text} theme context</h2>
                    <Typography component="div">
                        <Grid component="label" container alignItems="center" spacing={1}>
                            <Grid item style={{ color: theme.textColor }}>{reactTheme.text}</Grid>
                            <Grid item>
                                <ThemeSwitch checked={isIagTheme} onChange={toggleTheme} name="checked" />
                            </Grid>
                            <Grid item style={{ color: theme.textColor }}>{iagTheme.text}</Grid>
                        </Grid>
                    </Typography>
                </header>
            </div>
        )
    }
}

export default Main;