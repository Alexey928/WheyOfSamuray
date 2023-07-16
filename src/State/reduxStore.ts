import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {profileActionType, profileReducer} from "../Resduscers/ProfileReducer";
import {dialogsActionType, dialogsReduser} from "../Resduscers/dialogsReduser";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {userActionType, userReducer} from "../Resduscers/usersReduser";
import thunkMiddleware ,{ ThunkAction, ThunkDispatch }from "redux-thunk"

export const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReduser,
    usersPage:userReducer
    }
);


export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppRootActionsType = dialogsActionType|
                                profileActionType|
                                userActionType;
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    AppRootActionsType
    >;
export type DispatchType = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>;
export const useAppDispatch = () => useDispatch<DispatchType>();

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;


// @ts-ignore
//  чтобы можно было в консоли браузера обращаться к store в любой момент, тс игнор чтоб игнорировать типизацию )
window.store = store;


