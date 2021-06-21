import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { changeInputField, changeEditedId, addItem, saveEditedItem, changeFilteredList } from '../../Reducers/Reducers';

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const NameInput = styled.input``

const PriceInput = styled.input``

const Button = styled.button`
  cursor: pointer;
`

export default function AddForm() {
  const state = useSelector(state => state.toolkit);
  const dispatch = useDispatch();

  const clearInputs = () => {
    dispatch(changeInputField({ name: 'name', value: '' }));
    dispatch(changeInputField({ name: 'price', value: '' }));
  }

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch(changeInputField({ name, value }));
  }

  const handleSubmit = event => {
    event.preventDefault();
    const { name, price } = state
    dispatch(addItem({ name, price }));
    dispatch(changeFilteredList())
    clearInputs();
  }

  const handleUpdate = event => {
    event.preventDefault()
    const { name, price } = state;
    dispatch(saveEditedItem({ name, price }));
    dispatch(changeEditedId(null));
    clearInputs();
  }

  const handleCancel = () => {
    dispatch(changeEditedId(null));
    clearInputs();
  }

  return (
    <Form className="form" onSubmit={state.editedId !== null ? handleUpdate : handleSubmit}>
      <NameInput className="form__name" name='name' onChange={handleChange} value={state.name}/>
      <PriceInput className="form__price" name='price' onChange={handleChange} value={state.price} />
      {state.editedId !== null ? 
      <Button className="form__cancel" onClick={handleCancel} type='button'>Cancel</Button> : null}
      <Button className="form__button" type='submit'>Save</Button>
    </Form>
  )
}
