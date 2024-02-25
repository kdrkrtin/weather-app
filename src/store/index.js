import { configureStore } from "@reduxjs/toolkit";

import WeatherStore from './weather'

export const store = configureStore({
    reducer: {
        weather: WeatherStore
    }
});