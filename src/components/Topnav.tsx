import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export function Topnav(props: { title: string }) {
    return (
        <AppBar position="static" data-testid="topnav">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}