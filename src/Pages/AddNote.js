import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom'


const AddNote = ({addNotes, notes}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [home, setHome] = useState(false)

    const handleSubmit = () => {
        const sameTitle = notes.filter(i => i.title === title);
        addNotes(() => {
            if(notes.length === 0) {
                return [{title , description, key: notes.length+1}]
            }
            else { 
                // if sametitle is empty, that implies that no title is repeated
                if (sameTitle.length === 0) {
                    const arr = [...notes, {title , description, key: notes.length+1}];
                    return arr
                } else {
                    alert('A note with a similar title already exists, Please change the current title to continue.');
                    return notes
                }
            }
        });
        setHome(() => {
            if(sameTitle.length === 0) {
                sameTitle.pop()
                return true
            } else {
                return false
            }
        })
    }

    if (title.length < 10 && description.length < 1) {
        return (
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1}, width: 9/10, mx:'auto', display: 'flex',  alignItems:'center', justifyContent: 'center', flexDirection: 'column'}} noValidate autoComplete="off">
                    <TextField fullWidth required id="outlined-required" label="Title" onChange={(e) => setTitle(e.target.value)}/>
                    <TextField fullWidth required id="outlined-multiline-static" label="Description" multiline rows={16} onChange={e => setDescription(e.target.value)}/>
            </Box>
      )
    }
    else if(home) {
        return <Navigate to="/" replace='true' />
    }
    else {
        return (
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1}, width: 9/10, mx:'auto', display: 'flex',  alignItems:'center', justifyContent: 'center', flexDirection: 'column'}} noValidate autoComplete="off">
                    <TextField fullWidth required id="outlined-required" label="Title" onChange={(e) => setTitle(e.target.value)}/>
                    <TextField fullWidth id="outlined-multiline-static" label="Description" multiline rows={16} onChange={e => setDescription(e.target.value)}/>
                    <Button variant="contained" size='large' onClick={handleSubmit}>Save Note</Button>
            </Box>
      )
    }
}


export default AddNote