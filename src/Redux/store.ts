import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./reducers/themeReducer";
import formElementsReducer from "./reducers/formElementsReducer";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        formElements: formElementsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store;