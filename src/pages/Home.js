import { Box } from '@mui/system'
import React, { useState } from 'react'
import Products from '../components/Products'
import Topbar from '../components/Topbar'
import { Button, Container, Typography } from '@mui/material';
import AddProduct from '../components/AddProduct';


function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [products, setProducts] = useState([])
  return (
    <Box>
      <Topbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Container>
        <Box display={"flex"} alignps="center" justifyContent={"space-between"} mt={"40px"} mb={"40px"}>
          <Typography variant="h3" sx={{ color: "#43425D", fontSize: "28px", fontWeight: "600" }}>Products</Typography>
          <AddProduct setProducts={setProducts}/>
        </Box>
      </Container>
      <Products searchTerm={searchTerm} products={products} setProducts={setProducts}/>

    </Box>
  )
}

export default Home