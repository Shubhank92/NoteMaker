import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom'

const EditNote = ({addNotes, notes, changeNote}) => {
    const [title, setTitle] = useState(changeNote[0].title);
    const [description, setDescription] = useState(changeNote[0].description);
    const [home, setHome] = useState(false)

    const handleSubmit = () => {
        const arr1 = notes.filter(i => i.title !== changeNote[0].title);
        const arr = notes.filter(i => i.title === changeNote[0].title);
        // case 1, change in title
        if(title.length !== 0 && title !== arr[0].title) {
            arr[0].title = title;
        }
        // case 2, change in description
        if(description !== arr[0].description) {
            arr[0].description = description;
        }
        const newArr = [...arr1, ...arr];
        addNotes(newArr)
        setHome(true)
    }

    if (title.length < 10 && description.length < 1) {
        return (
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1}, width: 9/10, mx:'auto', display: 'flex',  alignItems:'center', justifyContent: 'center', flexDirection: 'column'}} noValidate autoComplete="off">
                    <TextField fullWidth required id="outlined-required" label="Title" defaultValue={title}  onChange={(e) => setTitle(e.target.value)}/>
                    <TextField fullWidth required id="outlined-multiline-static" label="Description" defaultValue={description} multiline rows={16} onChange={e => setDescription(e.target.value)}/>
                    <Button variant="contained" size='large' onClick={handleSubmit}>Save Note</Button>
            </Box>
      )
    }
    else if(home) {
        return <Navigate to="/" replace='true' />
    }
    else {
        return (
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1}, width: 9/10, mx:'auto', display: 'flex',  alignItems:'center', justifyContent: 'center', flexDirection: 'column'}} noValidate autoComplete="off">
                    <TextField fullWidth required id="outlined-required" label="Title" defaultValue={title} onChange={(e) => setTitle(e.target.value)}/>
                    <TextField fullWidth id="outlined-multiline-static" label="Description" defaultValue={description} multiline rows={16} onChange={e => setDescription(e.target.value)}/>
                    <Button variant="contained" size='large' onClick={handleSubmit}>Save Note</Button>
            </Box>
      )
    }
}    


export default EditNote

