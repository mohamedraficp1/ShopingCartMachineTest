import React, { useState, useEffect,useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { Box, Container, Pagination } from '@mui/material';
import SingleProduct from './SingleProduct';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';


function Products({searchTerm,setProducts,products}) {
    const [currentPage, setCurrentPage]= useState(0)
    const[postPerPage,setPostPerPage]= useState(30)
    const [loading, setLoading]= useState(false)
    const [seachProducts, setSearchProducts] = useState([])
    const dispatch = useDispatch();
    const handleSubmit=(e,p)=>{
        setCurrentPage(p-1)
    }
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`https://dummyjson.com/products?limit=9&skip=${currentPage*9}`);
                setLoading(false)
                setProducts(res.data.products);
                
                localStorage.setItem('products', JSON.stringify(res.data));
                
                dispatch({ type: "INITAL", payload: res.data })
            } catch (err) {
                setLoading(false)
                console.log(err);
            }
        };
        getAllProducts();
       //eslint-disable-next-line
    }, [currentPage]);
    console.log(products)
    useMemo(() => {
        if(searchTerm !== ""){
            const newSearchProducts = products.filter((product)=>{
                return Object.values(product).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
            }) 
            setSearchProducts(newSearchProducts)
            console.log(seachProducts)
            
            }
    }, 
    [searchTerm])

    const indexOfLastPost= currentPage * postPerPage
    const currentProducts = searchTerm.length > 1 ? seachProducts : products
    console.log(products)
    const pages = searchTerm.length > 1 ? seachProducts : products
    const { cart } = useSelector((cart) => ({ ...cart }));
    console.log(cart)
    return (
        <Container fixed >
            <Box className="products_home" sx={{ flexGrow: 1 ,mt: "18px"}}>
                <Grid container spacing={3}>
                    {currentProducts.map((prod) => (
                        <Grid item xs={4} mb={"22px"}>
                                <SingleProduct prod={prod} key={prod.id} setProducts={setProducts} products={products}/>     
                        </Grid>

                    ))}

                </Grid>
                {loading &&  <Skeleton variant="rectangular" width={400} height={118} />}
                <Pagination count={10} color="primary" onChange={handleSubmit}/>
            </Box>
        </Container>
    )
}

export default Products