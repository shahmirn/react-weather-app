// Generated via: http://json2ts.com/

interface Headline {
    EffectiveDate: Date;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: Date;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
}

interface Minimum {
    Value: number;
    Unit: string;
    UnitType: number;
}

interface Maximum {
    Value: number;
    Unit: string;
    UnitType: number;
}

interface Temperature {
    Minimum: Minimum;
    Maximum: Maximum;
}

interface Day {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
}

interface Night {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
}

interface DailyForecast {
    Date: Date;
    EpochDate: number;
    Temperature: Temperature;
    Day: Day;
    Night: Night;
    Sources: string[];
    MobileLink: string;
    Link: string;
}

export interface AccuweatherForecast {
    Headline: Headline;
    DailyForecasts: DailyForecast[];
}
