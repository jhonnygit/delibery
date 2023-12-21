import {combineReducers} from 'redux';

import GeneralReducer from './GeneralReducer';
import CartReducer from './CartReducer';
import BookmarkReducer from './BookmarkReducer';

export default combineReducers({
    generalState: GeneralReducer,
    CartState:CartReducer,
    bookmarkState:BookmarkReducer,
});