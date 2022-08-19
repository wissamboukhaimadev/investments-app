import React,{useState} from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import DialogInvestList from './DialogInvestList';

export default function CardInvestList({item}) {
    const [open,setOpen]=useState(false)

    const handleOpenDialog=()=>{
        setOpen(true)
    }
    console.log(open)
  return (
    <>
      <Card>
        <DialogInvestList open={open} setOpen={setOpen} item={item}  />
        <CardActionArea onClick={handleOpenDialog}>
          <CardContent className="text-center">
            <Typography>hello</Typography>
          </CardContent>
          <CardMedia className="px-3" component="img" image={item.image} />
          <CardContent>
            <div className="flex justify-between">
              <Typography>Daily Income :</Typography>
              <Typography sx={{ color: '#EAC530' }}>N {item.dailyIncome} </Typography>
            </div>
            <div className="flex justify-between">
              <Typography>Total Income : </Typography>
              <Typography sx={{ color: '#EAC530' }}>N {item.totalIncome} </Typography>
            </div>
            <div className="flex justify-between">
              <Typography>Serving Time : </Typography>
              <Typography sx={{ color: '#EAC530' }}>{item.servingTime} Days</Typography>
            </div>
            <div className="mt-5" />
            <Button
              fullWidth
              className="hover:hover:bg-amber-500"
              variant="contained"
              sx={{ background: '#f7bd00' }}
              type="submit"
            >
              N {item.price}
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
