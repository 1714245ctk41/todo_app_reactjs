import { useContext, useEffect, useState } from 'react';
import TodoList from '../../components/TodoList';
import Author from '../Authori';
import "./index.css";
import { ACTIONS, AppContext } from '../../hooks/useContext';
import { getLocalStorage } from '../../utils/localstorage';
import { TOKEN_KEY } from '../../constans';


const Dashboard = ({ }) => {
  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {
      const token = getLocalStorage(TOKEN_KEY);
      console.log(token, 'tokentoken');
      if (token) {
      console.log(token, 'tokentoken');
      dispatch({
        type: ACTIONS.AUTHOR,
        payload: {
          name: 'test',
          email: 'test@gmail.com',
          token: token,
        }
      })
    }
  }, [dispatch]);
  
  console.log(state, !state || (state && !state.user), 'useruseruserudashboard');
  return (
    <div >
      
      {!state || (state && !state.user) ? <Author /> : 
      <TodoList />
    }
      
    </div>
    )
}

export default Dashboard