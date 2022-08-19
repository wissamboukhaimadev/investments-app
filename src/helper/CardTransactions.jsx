import React, { useState } from 'react';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import logoImage from '../assets/logo.png';
import DialogTransactions from './DialogTransactions';

export default function CardTransactions({ item }) {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };
  console.log(open);
  return (
    <>
      <Card>
        <DialogTransactions open={open} setOpen={setOpen} item={item} />
        <CardActionArea onClick={handleOpenDialog}>
          <CardContent className="" sx={{ background: '#f7bd00' }}>
            <Typography sx={{ color: '#515354' }} variant="h5">
              Order No. {item._id}
            </Typography>
          </CardContent>
          <CardContent className="text-center">
            <Typography
              className="font-bold"
              sx={{ color: '#F7C214' }}
              variant="h4"
            >
              {item.title}
            </Typography>
          </CardContent>
          <div>
            <Avatar sx={{width:300,height:300}} className='mx-20' >
              <CardMedia  component="img" image={item.image} />
            </Avatar>
            <CardContent>
              <div className="flex justify-between">
                <Typography>Price :</Typography>
                <Typography sx={{ color: '#EAC530' }}>
                  N {item.price}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography>Daily Income :</Typography>
                <Typography sx={{ color: '#EAC530' }}>
                  N {item.dailyIncome}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography>Total Income : </Typography>
                <Typography sx={{ color: '#EAC530' }}>
                  N{item.totalIncome}
                </Typography>
              </div>
              <div className="flex justify-between">
                <Typography>Serving Time : </Typography>
                <Typography sx={{ color: '#EAC530' }}>
                  {item.servingTime}
                </Typography>
              </div>
              {/* <div className="flex justify-between">
                <Typography>Already Returned : </Typography>
                <Typography sx={{ color: '#EAC530' }}>N0</Typography>
              </div> */}
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
      <div className="mt-10" />
    </>
  );
}
