const redux = require("redux");
const createstore = redux.createStore;
const reduxLogger = require("redux-logger");
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const buyCAKE = () => {
  return {
    type: "BUY_CAKE",
    info: "First redux action",
  };
};

const buyICECREAM = () => {
  return {
    type: "BUY_ICECREAM",
  };
};

// (previousState,action) => newState

const inititalState = {
  numOfCAKE: 10,
  numOfICECREAM: 15,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCAKE: state.numOfCAKE - 1,
      };

    case BUY_ICECREAM:
      return {
        ...state,
        numOfICECREAM: state.numOfICECREAM - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: reducer,
  icecream: reducer,
});
const store = createstore(rootReducer, applyMiddleware(logger));
console.log("initialstate", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCAKE());
store.dispatch(buyCAKE());
store.dispatch(buyICECREAM());
store.dispatch(buyICECREAM());
unsubscribe();
