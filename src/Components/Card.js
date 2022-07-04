import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ViewMoreModal = ({prop}) => {
    const {handleOpen, open, handleClose, title, description} = prop
    return (
        <div>
            <Button onClick={handleOpen}>Read More</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2" sx={{wordWrap: 'break-word'}}>
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, wordWrap: 'break-word' }}>
                    {description}
                </Typography>
                </Box>
            </Modal>
        </div>
    )
}

const CardView = ({props}) => {
    const { viewTitle, viewDescription, handleDelete, handleEdit, handleOpen, open, handleClose, title, description} = props;
    console.log(viewTitle, 'title')
    console.log(viewDescription, 'Des')
    if(description.length > 50 || title.length > 15) { 
    return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card variant="outlined" sx={{ maxWidth: 345, maxHeight: 345 }}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={8} p={1}>
                                <Typography  variant="h5" component="div" >
                                    {title.length > 13 ? viewTitle+'...' : viewTitle}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <CardActions>
                                    <IconButton aria-label="edit" onClick={handleEdit}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={handleDelete} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Grid>
                        </Grid>
                        <Typography variant="body2" color="text.secondary" p={1} sx={{ wordWrap: 'break-word'}}>
                            {description.length > 50 ? viewDescription+'...' : viewDescription}
                        </Typography>
                        <ViewMoreModal prop={{handleOpen, open, handleClose, title, description}}/>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
    else {
        return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card variant="outlined" sx={{ maxWidth: 345, maxHeight: 345 }}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={8} p={1}>
                                <Typography  variant="h5" component="div" sx={{wordWrap: 'break-word'}}>
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <CardActions>
                                    <IconButton aria-label="edit" onClick={handleEdit}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={handleDelete} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Grid>
                        </Grid>
                        <Typography variant="body2" color="text.secondary" p={1} sx={{wordWrap: 'break-word'}}>
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

export {CardView, ViewMoreModal}