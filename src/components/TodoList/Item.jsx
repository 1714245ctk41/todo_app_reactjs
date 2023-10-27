import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { Button, ButtonGroup, Form, InputGroup } from 'react-bootstrap';
import { ACTIONS, AppContext } from '../../hooks/useContext';

const Item = ({ id, todo, setContentAlert }) => {
  const { state: { todos }, dispatch } = useContext(AppContext);
  const [isDisabled, setIsDisabled] = useState(true)
  const [newTitle, setNewTitle] = useState();
  const [showDelete, setShowDelete] = useState(false);
  console.log(todo, todos, id, newTitle, showDelete, 'todotodotodo');
  const handleEdit = () => {
    isDisabled && setIsDisabled(false);
    if (!isDisabled && newTitle) {
      const newTodos = todos;
      newTodos[id] = {
        title: newTitle
      }
      dispatch({
        type: ACTIONS.EDIT_ITEM,
        payload: newTodos,
      });
      setContentAlert('Add item success!!')
      setIsDisabled(true)
    }

  }

  const changeHandle = (e) => {
    setNewTitle(e.target.value)
  }

  const handleRemove = (e) => {
    e.stopPropagation();
    const newTodos = todos;
    delete newTodos[id]
    dispatch({
      type: ACTIONS.REMOVE_TODO_ITEM,
      payload: newTodos,
    });
    setContentAlert('Remove item success!!')
  }

  const handleShowDelete = () => {
    setShowDelete(!showDelete)
  }
  useEffect(() => {
    todo && setNewTitle(todo.title)
  }, [todo])
  return (
    <div className='m-b-10'>
    <InputGroup>
    <Form.Control
      placeholder="Recipient's username"
      aria-label="Recipient's username with two button addons"
          value={newTitle}
          disabled={isDisabled}
          onChange={changeHandle}
        />
        
      <Button variant="success" onClick={handleEdit}>
        <FontAwesomeIcon icon="fas fa-edit" style={{color: "#ffffff",}} />
      </Button>
      <Button variant="danger" onClick={handleShowDelete}>
          <FontAwesomeIcon icon="fa-solid fa-trash-can" style={{ color: "#ffffff", }} />
          {showDelete && <div className='confirm_delete'>
            <div className='confirm_delete_container p-10'>
            <p>Do you really want to remove?</p>
            <ButtonGroup className="me-2" aria-label="Second group">
                <Button 
                onClick={() => setShowDelete(false)}
                >Cancel</Button>
                <Button variant="outline-secondary"
                onClick={handleRemove}>Submit</Button>
      </ButtonGroup>
            </div>

          </div>
          }
    </Button>
      </InputGroup>
      </div>
  )
}

export default Item;