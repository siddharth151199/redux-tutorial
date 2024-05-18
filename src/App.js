import { Container, Box } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import AddTodoForm from './Components/AddTodoForm';
import TodoList from './Components/TodoList';
import './App.css'
import { Footer } from './Components/Footer';
function App() {
  return (
    <div>
      <Container maxWidth="md" style={{ marginTop: '20px', minHeight: '60vh' }}>
        <Box
          boxShadow={10}
          sx={{
            borderRadius: 3, m: 2,
            boxShadow: 10,
            backgroundColor: '#191c24',
            textAlign: 'center',
            color: '#ffffff'
          }}>
          <Typography variant="h4" style={{ padding: '4px' }} fontWeight="fontWeightBold">
            <b>Add Todo</b>
            <Box p={1} />
          </Typography>
          <AddTodoForm />
          <Box p={1} />
          <TodoList />
          <Box p={1} />
          <Footer />
        </Box>
      </Container>
    </div>
  );
}
export default App;
