import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { useSelector } from 'react-redux';
import { getCurrentConditions, getTodaysForecast } from '../slices/weatherSlice';

const useStyles = makeStyles({
    root: {
        margin: 16,
    }
});

export function Weather() {

    const classes = useStyles();

    const currentConditions = useSelector(getCurrentConditions);
    const todaysForecast = useSelector(getTodaysForecast);

    return (
        <Card className={classes.root} data-testid="weather">
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Weather
                </Typography>
                <Typography color="textSecondary">
                    Current Condition
                </Typography>
                <Typography variant="h5" component="h2" data-testid="current-condition">
                    {currentConditions.condition}
                </Typography>
                <Typography color="textSecondary">
                    Current Temperature
                </Typography>
                <Typography variant="h5" component="h2" data-testid="current-temperature">
                    {currentConditions.temperature}
                </Typography>
                <Typography color="textSecondary">
                    Today's High
                </Typography>
                <Typography variant="h5" component="h2" data-testid="high">
                    {todaysForecast.high}
                </Typography>
                <Typography color="textSecondary">
                    Today's Low
                </Typography>
                <Typography variant="h5" component="h2" data-testid="low">
                    {todaysForecast.low}
                </Typography>
            </CardContent>
        </Card>
    );
}