import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import AddCircleIcon from '@mui/icons-material/AddCircle';

import CardList from '../Components/CardList';
import { Typography } from '@mui/material';

const Home = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p:2, w:1, mx:2/10 }}>
            <CardList />
            <Link to="/addnote" style={{width: '70vw',textDecoration: 'none', color:'#3F72AF', backgroundColor: '#DBE2EF', p:3}}>
                <AddCircleIcon sx={{ fontSize: 100, width: 1  }}/>
                <Typography variant='h3' align='center'>Add Note</Typography>
            </Link>
        </Box>
    )
}

export default Home