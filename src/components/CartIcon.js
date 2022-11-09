import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartIcon() {
    const { cart } = useSelector((cart) => ({ ...cart }));
  return (
    <IconButton aria-label="cart" sx={{p:'15px'}}>
      <StyledBadge badgeContent={cart.cart.length ? cart.cart.length :"0"} color="error">
        <ShoppingCartIcon style={{ color: "white" }}/>
      </StyledBadge>
    </IconButton>
  );
}
