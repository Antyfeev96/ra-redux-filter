import './App.css';
import styled, { css } from 'styled-components';
import AddForm from './Components/Form/AddForm';
import ItemsList from './Components/ItemsList/ItemsList';

const Container = styled.div`
  width: 50%;
  margin: 100px auto 0 auto;
`

function App() {
  return (
    <Container className="app">
      <AddForm/>
      <ItemsList />
    </Container>
  );
}

export default App;
