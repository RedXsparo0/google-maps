import React from 'react';
import GoogleMapLoader from 'react-google-maps-loader';
import GoogleMapReact from 'google-map-react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const mapStyles = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194,
};

const App = () => {
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
        <Typography variant="h5" gutterBottom>
          Welcome to My Google Maps Page!
        </Typography>
        <div style={mapStyles}>
          <GoogleMapLoader
            apiKey="YOUR_GOOGLE_MAPS_API_KEY"
            render={googleMaps =>
              googleMaps && (
                <GoogleMapReact
                  defaultCenter={defaultCenter}
                  defaultZoom={12}
                  bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
                >
                  
                </GoogleMapReact>
              )
            }
          />
        </div>
      </Paper>
    </Container>
  );
};

export default App;
