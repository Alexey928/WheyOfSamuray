import {combineReducers, legacy_createStore as createStore } from "redux";
import {profileReducer} from "../Resduscers/ProfileReducer";
import {dialogsReduser} from "../Resduscers/dialogsReduser";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReduser,
    }
);

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

// @ts-ignore
//  чтобы можно было в консоли браузера обращаться к store в любой момент, тс игнор чтоб игнорировать типизацию )
window.store = store;


