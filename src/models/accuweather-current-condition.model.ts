// Generated via: http://json2ts.com/

interface Metric {
    Value: number;
    Unit: string;
    UnitType: number;
}

interface Imperial {
    Value: number;
    Unit: string;
    UnitType: number;
}

interface Temperature {
    Metric: Metric;
    Imperial: Imperial;
}

export interface AccuweatherCurrentCondition {
    LocalObservationDateTime: Date;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType?: any;
    IsDayTime: boolean;
    Temperature: Temperature;
    MobileLink: string;
    Link: string;
}
