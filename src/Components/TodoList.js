import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filters, removeTodo, toggleTodo } from '../features/todos/todoSlice';
import { useState } from 'react';

export default function TodoList() {
    const todos = useSelector((state) => state.todoList.todos);
    const filter = useSelector((state) => state.todoList.filterBy);
    const dispatch = useDispatch();

    const [checked, setChecked] = useState([]);

    const handleCheck = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        dispatch(toggleTodo(value));
        setChecked(newChecked);
    };
    const filteredTodo = () => {
        if(filter === filters.COMPLETED) {
          return todos.filter(todo => todo.completed);
        }
        if(filter === filters.ACTIVE) {
          return todos.filter(todo => !todo.completed)
        }
        return todos;
      }
    return (
        <List sx={{ width: '85%', paddingLeft: '55px' }}>
            {filteredTodo().map((todo, i) => {
                console.log(todo, i)
                const labelId = `checkbox-list-label-${i}`;
                return (
                    <ListItem
                        sx={{ borderBottom: '0.01em solid #0d6efd' }}
                        key={i}
                        secondaryAction={
                            <IconButton onClick={() => dispatch(removeTodo(todo.id))} edge="end" sx={{ color: '#AB2E3C' }} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemIcon role={undefined} onClick={handleCheck(todo.id)}>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(todo.id) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={todo.id} sx={{textDecoration: todo.completed ? 'line-through' : 'none'}} primary={todo.text} />
                    </ListItem>
                )
            })}

        </List>
    );
}