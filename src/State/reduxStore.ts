import {combineReducers, createStore} from "redux";
import {profileReducer} from "../Resduscers/ProfileReducer";
import {dialogsReduser} from "../Resduscers/dialogsReduser";

export const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReduser,
    }
);

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
//  чтобы можно было в консоли браузера обращаться к store в любой момент, тс игнор чтоб игнорировать типизацию )
window.store = store;


