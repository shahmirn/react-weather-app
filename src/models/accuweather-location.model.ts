// Generated via: http://json2ts.com/

interface Region {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
}

interface Country {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
}

interface AdministrativeArea {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
    Level: number;
    LocalizedType: string;
    EnglishType: string;
    CountryID: string;
}

interface TimeZone {
    Code: string;
    Name: string;
    GmtOffset: number;
    IsDaylightSaving: boolean;
    NextOffsetChange?: any;
}

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

interface Elevation {
    Metric: Metric;
    Imperial: Imperial;
}

interface GeoPosition {
    Latitude: number;
    Longitude: number;
    Elevation: Elevation;
}

interface SupplementalAdminArea {
    Level: number;
    LocalizedName: string;
    EnglishName: string;
}

export interface AccuweatherLocation {
    Version: number;
    Key: string;
    Type: string;
    Rank: number;
    LocalizedName: string;
    EnglishName: string;
    PrimaryPostalCode: string;
    Region: Region;
    Country: Country;
    AdministrativeArea: AdministrativeArea;
    TimeZone: TimeZone;
    GeoPosition: GeoPosition;
    IsAlias: boolean;
    SupplementalAdminAreas: SupplementalAdminArea[];
    DataSets: string[];
}
