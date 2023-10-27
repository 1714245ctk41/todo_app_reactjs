import { Link, redirect } from 'react-router-dom';
import Item from './Item';
import { Alert, Button, Form, InputGroup } from 'react-bootstrap';
import { removeLocalStorage } from '../../utils/localstorage';
import { TOKEN_KEY } from '../../constans';
import { useContext, useEffect, useState } from 'react';
import { ACTIONS, AppContext } from '../../hooks/useContext';

const TodoList = () => {
  const { state: { todos }, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [contentAlert, setContentAlert] = useState('');

  const logoutHandle = () => {
    dispatch({
      type: ACTIONS.AUTHOR,
      payload: null,
    });
    removeLocalStorage(TOKEN_KEY);
    redirect('/login');
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_ITEM,
      payload: {
        [Math.random()]: {
          title
        },
      },
    });
    setTitle('')
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (contentAlert) {
      setTimeout(() => {
        setContentAlert('');
      }, 2000);
    }
  }, [contentAlert])
  console.log(title, 5321432, todos);
  return (
    <div>
      {contentAlert &&
        <Alert variant={'success'} id='alert'>
          {contentAlert}
        </Alert>
      }
      
      <div className='flex flex-end m-b-20'>
        <span className='pointer' onClick={logoutHandle}>Logout</span>
      </div>
      <Form onSubmit={handleAddItem}>
      <InputGroup className='mb-3'>
        <Form.Control
          placeholder='Title'
          aria-label='Title'
          aria-describedby='basic-addon2'
          value={title}
          onChange={handleChange}
          autoFocus
        />
        <Button variant='primary' id='button-addon2' type='submit'>
          Add
        </Button>
        </InputGroup>
      </Form>
        
      {Object.entries(todos).map(([key, todo]) => (
        <Item key={key} todo={todo} id={key} setContentAlert={setContentAlert} />
      ))}
    </div>
  );
};
export default TodoList;
