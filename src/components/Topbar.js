import React from 'react'
import {  Search } from '@mui/icons-material';
import { Box, InputBase, Container } from '@mui/material';
import CartIcon from './CartIcon';
import { useNavigate } from 'react-router-dom';


function Topbar({searchTerm,setSearchTerm}) {
    const searchHandler =(e)=>{
        setSearchTerm(e.target.value)
    }

    const navigate = useNavigate()
    console.log(searchTerm)
    return (
        <Box sx={{background: "#1976d2", mt: "-16px"}}>
       
        <Container fixed >
            <Box display={"flex"} justifyContent="space-between" alignItems={"center"} mt={"15px"} mb={"12px"}>
                <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
                    <h2 style={{color: "#fff", marginTop:"13px"}} onClick={()=>navigate("/")}>Strore</h2>
                    <Box ml={"18px"} display={"flex"} justifyContent="space-between" alignItems={"center"}>
                        <Search  style={{ color: "white" }}/>
                        <InputBase sx={{ ml: 2, flex: 1, mr: "-8px", width: "300px", color:"#fff" }} value={searchTerm} onChange={searchHandler} placeholder="Search products" />
                    </Box>
                </Box>
                <Box  display={"flex"} justifyContent="space-between" alignItems={"center"} >
                    {/* <Category /> */}
                   <CartIcon />
                </Box>
            </Box>
        </Container>
             
        </Box>
    )
}

export default Topbar



