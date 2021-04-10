export interface AdministrativeArea {
    englishName?: any;
    id: string;
    localizedName: string;
}

export interface Country {
    englishName?: any;
    id: string;
    localizedName: string;
}

export interface AccuweatherLocation {
    administrativeArea: AdministrativeArea;
    country: Country;
    key: string;
    localizedName: string;
    primaryPostalCode?: any;
}
