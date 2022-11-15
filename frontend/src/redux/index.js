import {configureStore} from "@reduxjs/toolkit"
import auth from "./auth"
import product from './product'
import purchase from './purchase'

const store = configureStore({
    reducer:{
auth:auth,
product:product,
purchase:purchase
    }
});

export default store;