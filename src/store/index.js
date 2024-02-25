import { configureStore } from "@reduxjs/toolkit";

import WeatherStore from './weather'
import APIKeyStore from './APIKey'

export const store = configureStore({
    reducer: {
        weather: WeatherStore,
        apikey: APIKeyStore
    }
});