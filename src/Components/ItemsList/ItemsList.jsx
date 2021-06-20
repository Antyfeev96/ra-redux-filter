import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { editItem, changeEditedId, removeItem } from '../../Reducers/Reducers';

const List = styled.ul`
  margin-top: 25px;
`

export default function ItemsList() {
  const items = useSelector(state => state.toolkit.list);
  const dispatch = useDispatch();

  const handleEdit = (name, value, id) => {
    dispatch(editItem({ name, value }));
    dispatch(changeEditedId(id))
  }

  const handleRemove = id => {
    dispatch(removeItem(id));
  }

  return (
   <List>
     {items.map(item => 
        <li className="item" key={item.id}>
        {item.name} {item.price}<span>₽</span> 
        <button onClick={() => handleEdit(item.name, item.price, item.id)}>✎</button>
        <button onClick={() => handleRemove(item.id)}>✕</button>
        </li>)}
   </List>
  )
}
