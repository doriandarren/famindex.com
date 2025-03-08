import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'checking', // 'checking', 'not-authenticated', 'authenticated' 
    token: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated';
            state.token = payload.token;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;

            // Guardar en `localStorage` para que persista
            localStorage.setItem("token_portuarios", payload.token);

        },
        logout: (state, payload) => {
            state.status = 'not-authenticated';
            state.token = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
            
            // Eliminar de `localStorage`
            localStorage.removeItem("token_portuarios");
        },
        setErrorMessage: (state, action) => {
            state.status = 'not-authenticated';
            state.errorMessage = action.payload;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, setErrorMessage } = authSlice.actions;
