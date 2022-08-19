import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';

import { useNavigate } from 'react-router-dom';

//icons
import HomeIcon from '@mui/icons-material/Home';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import PersonIcon from '@mui/icons-material/Person';

export default function BottomNavigationBar({ page }) {
  const navigate = useNavigate();
  const [value, setValue] = useState(page);

  const handleNavigateHome = () => {
    navigate('/homepage');
  };
  const handleNavigateInvestement = () => {
    navigate('/investements');
  };
  const handleNavigateMe = () => {
    navigate('/profile');
  };
  return (
    <Box fullWidth className="mt-10">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          onClick={handleNavigateHome}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="My Investement"
          onClick={handleNavigateInvestement}
          icon={<StackedLineChartIcon />}
        />
        <BottomNavigationAction
          label="Me"
          onClick={handleNavigateMe}
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
