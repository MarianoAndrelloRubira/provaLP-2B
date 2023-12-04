import {configureStore} from '@reduxjs/toolkit';
import usuarioSlice from './usuarioReducer';


const store = configureStore({
    reducer:{
        uusario: usuarioSlice,
    }
});

export default store;