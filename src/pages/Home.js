import TourCard from '../components/TourCard';
import { Container, Grid, Typography } from '@mui/material';
import cities from '../data.json'


const Home = () => {
 return (
   <div classname="App">
    <Container sx={{marginY: 5}}>
      {cities.map((city) => (
        <>
        <Typography 
          variant='h4'
          component="h2"
          marginBottom={3}
          marginTop={5}
        >
          Top {city.name} Tours
        </Typography>
        <Grid container spacing={5}>
          {city.tours.map((tour, index) => <TourCard tour={tour} key={index}/>)}
        </Grid>
        </>
      ))}

      {/* <Grid container spacing={5}>
         <TourCard />
         <TourCard />
         <TourCard />
         <TourCard />
      </Grid> */}
    </Container>
  </div>
 )
}

export default Home;