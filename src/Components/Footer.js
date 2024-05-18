import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { filterBy, filters } from '../features/todos/todoSlice';

export const Footer = () => {
    const dispatch = useDispatch();

    return (
        <Stack spacing={2} direction="row" padding={2} justifyContent={'center'}>
            <Button onClick={()=> dispatch(filterBy(filters.ALL))} variant="contained" sx={{backgroundColor:'#0d6efd'}}>All</Button>
            <Button onClick={()=> dispatch(filterBy(filters.ACTIVE))} variant="contained" sx={{backgroundColor:'#198754'}}>Active</Button>
            <Button onClick={()=> dispatch(filterBy(filters.COMPLETED))}  variant="contained" sx={{backgroundColor:'#FFC107'}}>Completed</Button>
        </Stack>
    )
}
