import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">{title}</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
