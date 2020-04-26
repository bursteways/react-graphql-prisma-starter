import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Types
import { History } from 'history';

const rootReducer = (history: History) => (
  combineReducers({
    router: connectRouter(history),
  })
);

export default rootReducer;
