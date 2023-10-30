import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPhoto } from '../API-Services/PhotoApiAction/PhotoApiAction';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


// import for the card....


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




const PhotoApi = () => {

    const { error, isLoading, photos } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPhoto)
    }, []);

    // console.log(photos)
    return (
        <div>

            {isLoading && <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box> }

            { error &&  <Stack sx={{ width: '100%' }} spacing={2}>
      
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      
            </Stack>}
            
            <Grid container spacing={2}>
                {
                    photos.map(photo => <Grid key={photo.cca2} item xs={6} md={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={photo.flags.png}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Country Name: {photo.name.common}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number of Population : {photo.population}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>)
                }
  
  
           </Grid>


            
        </div>
    );
};

export default PhotoApi;