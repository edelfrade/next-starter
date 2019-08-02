import actions from './actions';

export const initialState = {
  lang: 'es',
  path: '/',
  alternate: '/en/',
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_LANGUAGE:
      return {
        ...state,
        ...{ lang: action.data },
      };
    case actions.LOADING:
      return {
        ...state,
        ...{ loading: action.data },
      };
    case actions.SET_ALTERNATE:
      return {
        ...state,
        ...{ alternate: action.data },
      };
    case actions.ACTIVE_ROUTE:
      return {
        ...state,
        ...{
          path: action.data,
        },
      };
    default:
      return state;
  }
}
// import { combineReducers } from 'redux';

// import routesReducer from './routes/reducer';
// import toursReducer from './tours/reducer';
// import otherReducer from './other/reducer';

// const reducers = {
//   tours: toursReducer,
//   routes: routesReducer,
//   other: otherReducer
// };

// export default combineReducers(reducers);
