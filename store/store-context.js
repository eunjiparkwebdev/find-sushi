import { createContext, useReducer } from "react";

export const StoreContext = createContext();

export const ACTION_TYPES = {
  SET_LATITUDE: "SET_LETITUDE",
  SET_LONGITUDE: "SET_LONGITUDE",
  SET_SUSHI_STORES: "SET_SUSHI_STORES",
  SET_COUNTRY: "SET_COUNTRY",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LATITUDE: {
      return { ...state, latitude: action.payload.latitude };
    }
    case ACTION_TYPES.SET_LONGITUDE: {
      return { ...state, longitude: action.payload.longitude };
    }
    case ACTION_TYPES.SET_SUSHI_STORES: {
      return { ...state, sushiStores: action.payload.sushiStores };
    }

    case ACTION_TYPES.SET_COUNTRY: {
      return { ...state, countryCode: action.payload };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const StoreProvider = ({ children }) => {
  const initialState = {
    latitude: "",
    longitude: "",
    sushiStores: [],
    countryCode: false,
  };

  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
