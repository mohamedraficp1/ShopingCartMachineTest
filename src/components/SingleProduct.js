import React from 'react'
import { Box, Typography } from '@mui/material';
import TextRating from './Rating';
import { Stack } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import UpdateProduct from './UpdateProduct';
import DeleteDialog from './Delete';
function SingleProduct({ prod, setProducts,products }) {
    return (
        <Box className="products">
            {/* <img
  src={prod.thumbnail} alt={prod.name} width="350" height="250"  style={{objectFit: "contain"}}
/> */}<Stack direction={"row"} justifyContent="space-between">
                <Box>
                    <Box width={"350px"} height={"250px"} mb="15px" sx={{ backgroundImage: `url(${prod.thumbnail})`, backgroundSize: "cover" }}></Box>
                    <Typography variant="h5" fontSize={"15px"} color="error" fontWeight={600} align="left" textTransform={"capitalize"}>  {prod.category}</Typography>
                    <Typography variant="h5" fontSize={"20px"} color="#4D4F5C" fontWeight={500} align="left"> {prod.title}</Typography>
                    <Typography variant="h5" fontSize={"28px"} color="#4D4F5C" fontWeight={600} align="left"> ₹ {prod.price}  &nbsp;
                        <Typography variant="body" component="span" color={"green"} fontSize="18px">{prod.discountPercentage}%Off </Typography>
                    </Typography>
                    <TextRating value={prod.rating} />
                </Box>
                <Stack direction="row" spacing={1} alignItems={"end"} sx={{ml: "-80px"}}>
                    <IconButton color="secondary" aria-label="add an alarm" sx={{position:"relative", top: "5px"}}>
                        <UpdateProduct setProducts={setProducts} id ={prod.id} prod={prod}/>
                    </IconButton>
                    <IconButton aria-label="delete" sx={{position:"relative", top: "5px"}}>
                        <DeleteDialog  setProducts={setProducts} id ={prod.id} products={products} />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}

export default SingleProduct