import React, { useState } from 'react';
import { Button } from '@mui/material';
import RightBar from '../share/components/Rightbar';
import Navbar from '../share/components/Navbar';
import BottomBar from '../share/components/Bottombar';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import image3 from '../assets/image18.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image3.png';
import image6 from '../assets/image9.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image5.png';
import Ads from '../assets/Ads.png';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [image3, image4, image5, image6, image7, image8];

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <div style={{ padding: '0 20%', paddingTop: '20px' }}>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              {/* Row1 */}
              <div
                style={{
                    backgroundColor: '#222222',
                    height: '170px',
                    width: '70%',
                    position: 'relative',
                    overflow: 'hidden',
                }}
                >
                {/* Background images */}
                {images.map((image, index) => (
                    <div
                    key={index}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        opacity: currentImage === index ? 0.8 : 0,
                        transition: 'opacity 0.5s ease',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    />
                ))}

                <div
                    style={{
                    display: 'flex',
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    gap: '8px',
                    }}
                >
                    {images.map((_, index) => (
                    <div
                        key={index}
                        style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: currentImage === index ? 'gold' : 'white',
                        }}
                        onClick={() => handleImageChange(index)}
                    />
                    ))}
                </div>
                </div>
                <div
                style={{
                    width: '30%',
                    marginLeft: '20px',
                    backgroundColor: '#222222',
                    height: '170px',
                }}
                ></div>

            </div>
            <div
              style={{
                display: 'flex',
                overflowX: 'auto',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'gold transparent',
                }}
              >
                {/* Row 2 */}
                <Card sx={{ width: 135, height: 260, marginRight: '16px', backgroundColor: '#222222' }}>
                  <CardMedia
                    component="img"
                    image={image3}
                    alt="Image 3"
                    style={{ height: '60%', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1">Title 1</Typography>
                    <Typography variant="body2">Genres 1</Typography>
                    <Typography variant="body2">Rating 1</Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: 135, height: 260, marginRight: '16px', backgroundColor: '#222222' }}>
                  <CardMedia
                    component="img"
                    image={image4}
                    alt="Image 4"
                    style={{ height: '60%', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1">Title 2</Typography>
                    <Typography variant="body2">Genres 2</Typography>
                    <Typography variant="body2">Rating 2</Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: 135, height: 260, marginRight: '16px', backgroundColor: '#222222' }}>
                  <CardMedia
                    component="img"
                    image={image5}
                    alt="Image 5"
                    style={{ height: '60%', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1">Title 3</Typography>
                    <Typography variant="body2">Genres 3</Typography>
                    <Typography variant="body2">Rating 3</Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: 135, height: 260, marginRight: '16px', backgroundColor: '#222222' }}>
                  <CardMedia
                    component="img"
                    image={image6}
                    alt="Image 6"
                    style={{ height: '60%', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1">Title 4</Typography>
                    <Typography variant="body2">Genres 4</Typography>
                    <Typography variant="body2">Rating 4</Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: 135, height: 260, marginRight: '16px', backgroundColor: '#222222' }}>
                  <CardMedia
                    component="img"
                    image={image7}
                    alt="Image 7"
                    style={{ height: '60%', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1">Title 5</Typography>
                    <Typography variant="body2">Genres 5</Typography>
                    <Typography variant="body2">Rating 5</Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div style={{ marginTop: '40px' }}>
              {/* Row 3: Advertisements */}
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <div style={{ backgroundColor: '#222222', height: '170px', width: '100%', backgroundImage: `url(${Ads})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
            </div>

              {/* Row 4: Latest Updates */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                  }}
                >
                  <Typography variant="h5">Latest Updates</Typography>
                  <Button variant="contained" color="primary">
                    Button
                  </Button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ display: 'flex', width: 'calc(50% - 5px)' }}>
                    <Card sx={{ width: '100%', display: 'flex', backgroundColor: '#222222' }}>
                      <CardMedia
                        component="img"
                        image={image3}
                        alt="Image 3"
                        style={{ width: '40%', objectFit: 'cover' }}
                      />
                      <CardContent style={{ width: '60%' }}>
                        <Typography variant="subtitle1">Title 1</Typography>
                        <Typography variant="body2">Genres 1</Typography>
                        <Typography variant="body2">Rating 1</Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div style={{ display: 'flex', width: 'calc(50% - 5px)' }}>
                    <Card sx={{ width: '100%', display: 'flex', backgroundColor: '#222222' }}>
                      <CardMedia
                        component="img"
                        image={image4}
                        alt="Image 4"
                        style={{ width: '40%', objectFit: 'cover' }}
                      />
                      <CardContent style={{ width: '60%' }}>
                        <Typography variant="subtitle1">Title 2</Typography>
                        <Typography variant="body2">Genres 2</Typography>
                        <Typography variant="body2">Rating 2</Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightBar />
      </div>
      <BottomBar />
    </>
  );
}
export default Home;
