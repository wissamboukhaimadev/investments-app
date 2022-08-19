import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardInvestList from './CardInvestList';
import axios from 'axios';

export default function InvestList() {
  const [investation, setInvestation] = useState([]);

  useEffect(() => {
    axios
      .get('https://transactionappcli.herokuapp.com/api/v1/transactions')
      .then((res) => {
        setInvestation(res.data);
        console.log(res.data)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="pt-5">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {investation?.map((item, index) => {
          return (
            <Grid item xs={6} key={index}>
              <CardInvestList item={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
