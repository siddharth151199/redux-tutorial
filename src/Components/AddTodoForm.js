import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

const AddTodoForm = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };
    return (
        <form
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}
            onSubmit={handleSubmit}
        >
            <TextField value={input} onChange={(e) => setInput(e.target.value)} sx={{ width: '71%', input: { color: '#ffffff', padding: '4px' } }} id="standard-basic" variant="standard" />
            <Button type='submit' sx={{ marginInline: '10px', backgroundColor: '#0d6efd' }} variant="contained">Add Todo</Button>
        </form>
    )
}

export default AddTodoForm