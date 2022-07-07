import React from 'react';


import { Grid } from '@mui/material';
import { CssBaseline } from '@mui/material';



import Header from './Component/Header/Header';
import List from './Component/List/List';
import Map from './Component/Map/Map';
import PlaceDetails from './Component/PlaceDetails/PlaceDetails';


const App = () =>{
    return(
        <>
            <CssBaseline/>
            {/* <Header/> */}
            <Grid container spacing={3} style={{width:'100%'}} >
                   <Grid item xs={12} md={4}>
                        <List/>
                   </Grid>
                   <Grid item xs={12} md={8}>
                        <Map/>
                   </Grid>
            </Grid>
        </>
    );
}

export default App;