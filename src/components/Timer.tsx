import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function MyComponent() {
  const [progress, setProgress] = React.useState(100);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress <= 0 ? 100 : prevProgress - 1));
    }, (25 * 60 * 1000) / 100); // 25 minutes

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress
        variant="determinate"
        value={progress}
        size={240} // Size of the CircularProgress
        thickness={2} // Thickness of the CircularProgress
        sx={{
          color: 'rgba(255, 169, 53, 1)', // Orange color like in the image
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="div" color="textSecondary">
          {`${Math.floor((progress / 100) * 25)}:00`} {/* Update this to match the time format you need */}
        </Typography>
        <Typography color="textSecondary" fontSize="1.5rem">
          Төвлөрөх цаг
        </Typography>
      </Box>
    </Box>
  );
}

export default MyComponent;
