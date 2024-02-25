import { createSlice } from "@reduxjs/toolkit";

const sessionData = sessionStorage.getItem('key');

const initialState = {
    key: sessionData || '',
    error: false
}

export const apikey = createSlice({
    name: 'API KEY',
    initialState,
    reducers: {
        setAPIKey: (state, { payload }) => {
            state.key = payload;
        }
    }
});

export const { setAPIKey } = apikey.actions;
export default apikey.reducer;