import {combineReducers, legacy_createStore as createStore } from "redux";
import {profileReducer} from "../Resduscers/ProfileReducer";
import {dialogsReduser} from "../Resduscers/dialogsReduser";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {userReducer} from "../Resduscers/usersReduser";

export const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReduser,
    usersPage:userReducer
    }
);

export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

// @ts-ignore
//  чтобы можно было в консоли браузера обращаться к store в любой момент, тс игнор чтоб игнорировать типизацию )
window.store = store;


