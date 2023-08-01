import React from 'react';

interface wSize {
  wH: number;
  wW: number;
}

interface Props {
  windowSize?: wSize;
}

export const HomeContent = (props: Props) => {
  const contentStyle: React.CSSProperties = {
    color: '#fff',
    background: 'linear-gradient(to right, #4880EC, #019CAD)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const bannerName: React.CSSProperties = {
    color: '#fff',
    fontSize: '60px',
    fontFamily: 'Great Vibes', // <-- FONT IS USED HERE
  };

  const bannerJob: React.CSSProperties = {
    fontSize: '20px',
    fontFamily: 'sans-serif', // <-- FONT IS USED HERE
  };

  return (
    <div style={contentStyle}>
      <h1 style={bannerName}>Yusuf Berkay Girgin</h1>
      <h3 style={bannerJob}>Software Developer</h3>
    </div>
  );
};

export default HomeContent;
