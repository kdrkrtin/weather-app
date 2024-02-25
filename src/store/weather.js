import { createSlice } from "@reduxjs/toolkit";
import cities from '../citylist.json'

const initialState = {
    cities: cities,
}

export const weatherStore = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        filterCities: (state, action) => {
            state.cities = cities.filter(city => city.name.toLocaleLowerCase().startsWith(action.payload.toLocaleLowerCase()));
        }
    }
});

export const { filterCities } = weatherStore.actions;

export default weatherStore.reducer;