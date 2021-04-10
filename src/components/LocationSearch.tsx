import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import debounce from 'lodash/debounce';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationResults, fetchSearchResults, setLocationKey, getLocationSearching } from '../slices/locationSlice';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetch1DayForecast, fetchCurrentConditions } from '../slices/weatherSlice';

const useStyles = makeStyles({
    root: {
        margin: 16,
    },
});

export function LocationSearch() {

    const classes = useStyles();

    const locations = useSelector(getLocationResults);
    const searching = useSelector(getLocationSearching);
    
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    return (
        <Card className={classes.root} data-testid="location-search">
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Settings
                </Typography>
                <Autocomplete
                    id="find-location"
                    open={open}
                    onOpen={() => {
                        setOpen(true);
                    }}
                    onClose={() => {
                        setOpen(false);
                    }}
                    onChange={(event, newValue) => {
                        const locationKey = newValue?.key || '';
                        dispatch(setLocationKey(locationKey));

                        dispatch(fetchCurrentConditions(locationKey));
                        dispatch(fetch1DayForecast(locationKey));
                    }}
                    onInputChange={debounce((event, newInputValue) => {
                        dispatch(fetchSearchResults(newInputValue));
                    }, 500)}
                    getOptionSelected={(option, value) => option.key === value.key}
                    getOptionLabel={(option) => `${option.city}, ${option.administrativeArea}, ${option.countryID}`}
                    options={locations}
                    loading={searching}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Find Location"
                            variant="outlined"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {searching ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            }}
                        />
                    )}
                />
            </CardContent>
        </Card>
    );
}
