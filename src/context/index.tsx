import { createContext, useReducer, useContext } from 'react';

const initialState = {
  like: {
    favorite: false,
    title: ''
  }
};

export const ThemeContext = createContext<any>(null);

type ActionType = { type: string; payload?: any };

//returns new state depending on the action passed to it, if action passed to it does not exit in action type, it throws an eror
const themeReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'LIKED':
      return { like: action.payload };
    case 'UNLIKE':
      return { like: action.payload };
    default:
      return state;
  }
};

//create custom context theme
export function useContextTheme() {
  const store = useContext(ThemeContext);

  if (!store) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return store;
}

export function ContextThemeProvider(props: React.PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
