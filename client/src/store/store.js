import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productSlicer";
import { userReducer } from "./userSlicer";

export default configureStore ({
    reducer: {
        userSlice: userReducer,
        productSlice: productReducer
    }
});

