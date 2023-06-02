import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuImage from '../../assets/Logo.png';
import IconButton from '@mui/material/IconButton';

const BottomBarContainer = styled(Box) ({
  backgroundColor: '#000000',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bottom: 0,
  left: 0,
  width: '100%',
  zIndex: 999,
});

const ButtonsContainer = styled(Box)({
  backgroundColor: '#ffd700',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ImageContainer = styled(Box)({
  backgroundColor: '#000000',
});

const BottomBarButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 2),
}));

export default function BottomBar() {
  return (
    <BottomBarContainer>
      <ButtonsContainer>
        <BottomBarButton color="inherit">Privacy Policy</BottomBarButton>
        <BottomBarButton color="inherit">Digital Millennium Copyright Act</BottomBarButton>
        <BottomBarButton color="inherit">Terms of Service</BottomBarButton>
      </ButtonsContainer>
      <ImageContainer>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ p: 1 }}
        >
          <img src={MenuImage} alt="Menu" style={{ borderRadius: '50%', width: 60, height: 60 }} />
        </IconButton>
      </ImageContainer>
    </BottomBarContainer>
  );
}
