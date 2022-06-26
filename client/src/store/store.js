import { configureStore} from '@reduxjs/toolkit';
import tableReducer from "./reducers/tableSlice";
import conditionReducer from './reducers/conditionSlice'
import authReducer from "./reducers/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        table: tableReducer,
        condition: conditionReducer
    },
});


