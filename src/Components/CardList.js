import { useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import { Navigate } from "react-router-dom";

import {CardView} from './Card'

// Global context
import { Path } from "../App";

const CardList = () => {
    const {notes} = useContext(Path);
    
    if(notes.length === 0) {
        return null
    } else {
        return (
            <>
            <Grid container spacing={1} p={2}>
                {
                    notes.map((i) => {
                        return (
                            <Cards
                                title={i.title} 
                                description={i.description}
                                key={i.key}
                            />
                        );
                    })
                }    
            </Grid>
            </>
        )
    }
}

const Cards = ({title, description}) => {
    const [edit, setEdit] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {addNotes, notes, setChangeNote} = useContext(Path);
    
    const handleDelete = () => {
        const newNotes = notes.filter((i) => i.title !== title);
        addNotes(newNotes)
    }

    const handleEdit = () => {
        const noteToBeEdited = notes.filter((i) => i.title === title);
        setChangeNote(noteToBeEdited)
        setEdit(true)
    }

    let viewTitle = '';

    let viewDescription = '';

    if(description.length > 50) {
        viewDescription = description.substr(0, 50)
    } else {
        viewDescription = description
    }
    if(title.length > 13) {
        viewTitle = title.substr(0, 13)
    } else {
        viewTitle = title
    }

    if(edit) {
        return <Navigate to='/editnote' replace ={true} />
    }
    else {
        return (
            <CardView props={{handleDelete, handleEdit, viewTitle, viewDescription,handleOpen, handleClose, open, title, description}} />       
        )
    }
}

export default CardList