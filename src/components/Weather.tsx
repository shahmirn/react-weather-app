import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { useSelector } from 'react-redux';
import { getCurrentTemperature, getTodaysForecast } from '../slices/weatherSlice';

const useStyles = makeStyles({
    root: {
        margin: 16,
    }
});

export function Weather() {

    const classes = useStyles();

    const currentTemperature = useSelector(getCurrentTemperature);
    const todaysForecast = useSelector(getTodaysForecast);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Weather
                </Typography>
                <Typography color="textSecondary">
                    Current Temperature
                </Typography>
                <Typography variant="h5" component="h2">
                    {currentTemperature}
                </Typography>
                <Typography color="textSecondary">
                    Today's High
                </Typography>
                <Typography variant="h5" component="h2">
                    {todaysForecast.high}
                </Typography>
                <Typography color="textSecondary">
                    Today's Low
                </Typography>
                <Typography variant="h5" component="h2">
                    {todaysForecast.low}
                </Typography>
            </CardContent>
        </Card>
    );
}