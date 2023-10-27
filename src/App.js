import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useReducer } from 'react';
import { ACTIONS, AppContext } from './hooks/useContext';

library.add(fas)

const initialState = {
  user: null,
  todos: {}
};



const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.AUTHOR:
      return {
        ...state,
        user: action.payload
      };
    case ACTIONS.ADD_ITEM:
      return {
        ...state,
        todos: { ...action.payload, ...state.todos}
      }
    case ACTIONS.EDIT_ITEM:
      return {
        ...state,
        todos: action.payload
      }
    case ACTIONS.REMOVE_TODO_ITEM:
      return {
        ...state,
        todos: {
          ...action.payload
        }
      }
  
    default:
        return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <AppContext.Provider value={{state, dispatch}} >
      <div className="container p-20">
        <RouterProvider router={router} />
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
