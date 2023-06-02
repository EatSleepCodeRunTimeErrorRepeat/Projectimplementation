import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';

import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import image7 from '../../assets/image7.png';

const RightBarContainer = styled(Box)(({ theme }) => ({
    marginLeft: 'auto',
    width: '20%',
    height: 723,
    backgroundColor: '#222222',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    borderRadius: 4,
  }));

const Heading = styled(Typography)({
  padding:'20px',
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'left',
});

const ButtonGroup = styled(Box)(({ theme }) => ({
  padding: '10px',
  backgroundColor: '#303030',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ active }) => ({
    backgroundColor: active ? 'gold' : 'transparent',
    borderBottom: active ? '1px solid gold' : 'transparent',
    color: active ? 'black' : 'white',
    '&:hover': {
      backgroundColor: 'gold',
      color: 'black',
    },
  }));

const CardList = styled(Box)({
    
    overflowY: 'auto',
    maxHeight: 800,
    scrollbarWidth: 'thin',
    scrollbarColor: 'gold transparent',
    '&::-webkit-scrollbar': {
      width: 8,
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      background: 'gold',
    },
  });

const AnimeCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  backgroundColor: '#303030',
}));

const CardNumber = styled(Typography)(({ theme }) => ({
  color: 'gold',
  fontWeight: 'bold',
  fontSize: 16,
  marginRight: theme.spacing(2),
}));

const MangaImage = styled('img')({
  width: 100,
  height: 130,
  marginRight: 10,
});

const TextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const TitleText = styled(Typography)({
  color: 'white',
  fontWeight: 'bold',
  fontSize: 16,
  marginBottom: 4,
});

const GenreText = styled(Typography)({
  color: 'white',
  fontSize: 14,
  marginBottom: 4,
});

const RatingContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const RatingStars = styled(Rating)({
  marginRight: 4,
  color: 'gold',
});

const RatingText = styled(Typography)({
  color: 'white',
  fontSize: 14,
});

export default function RightBar() {
  const [selectedFilter, setSelectedFilter] = useState('weekly', 'monthly', 'all');
  

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const popularAnimes = [
    { number: 1, title: 'Anime 1', genre: 'Action', rating: 4.5, image: image3 },
    { number: 2, title: 'Anime 2', genre: 'Adventure', rating: 3.8, image: image4 },
    { number: 3, title: 'Anime 3', genre: 'Comedy', rating: 2.5, image: image5 },
    { number: 4, title: 'Anime 4', genre: 'Drama', rating: 4.2, image: image6 },
    { number: 5, title: 'Anime 5', genre: 'Fantasy', rating: 3.7, image: image7 },
  ];

  const displayedAnimes = popularAnimes.slice(0, 10);

  return (
    <RightBarContainer>
      <Heading>Popular</Heading>
      <ButtonGroup>
      <StyledButton
        variant="text"
        active={selectedFilter === 'weekly'}
        onClick={() => handleFilterChange('weekly')}
        >
        Weekly
        </StyledButton>
        <StyledButton
        variant="text"
        active={selectedFilter === 'monthly'}
        onClick={() => handleFilterChange('monthly')}
        >
        Monthly
        </StyledButton>
        <StyledButton
        variant="text"
        active={selectedFilter === 'all'}
        onClick={() => handleFilterChange('all')}
        >
        All
        </StyledButton>
      </ButtonGroup>
      <CardList>
        {displayedAnimes.map((anime) => (
          <AnimeCard key={anime.number}>
            <CardNumber>{anime.number}</CardNumber>
            <MangaImage src={anime.image} alt="Manga" />
            <TextContainer>
              <TitleText>{anime.title}</TitleText>
              <GenreText>{anime.genre}</GenreText>
              <RatingContainer>
                <RatingStars
                  name={`rating-${anime.number}`}
                  value={anime.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                  max={5}
                />
                <RatingText>({anime.rating.toFixed(1)} / 5)</RatingText>
              </RatingContainer>
            </TextContainer>
          </AnimeCard>
        ))}
      </CardList>
    </RightBarContainer>
  );
}
