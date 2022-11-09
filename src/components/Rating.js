import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function TextRating({value}) {

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'left',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 ,width: "26px"}} fontSize="8" />}
      />
      {/* <Box sx={{ ml: 1 ,mt:0.5, fontWeight: "600"}}>({count})</Box>  */}
    </Box>
  );
}
