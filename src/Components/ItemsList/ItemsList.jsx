import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { editItem, changeEditedId, removeItem } from '../../Reducers/Reducers';

const List = styled.ul`
  margin-top: 25px;

  & .item:nth-of-type(n + 2) {
    margin-top: 15px;
  }

  & .item {
    button {
      margin-left: 15px;
    }
  }
`

export default function ItemsList() {
  const list = useSelector(state => state.toolkit.filterString === '' ? state.toolkit.list : state.toolkit.filteredList);
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
     {list.map(item => 
        <li key={item.id} className="item">
        {item.name} {item.price} <span>₽</span> 
        <button onClick={() => handleEdit(item.name, item.price, item.id)}>✎</button>
        <button onClick={() => handleRemove(item.id)}>✕</button>
        </li>)}
   </List>
  )
}
