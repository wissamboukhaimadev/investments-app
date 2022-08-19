import React,{memo} from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
// import logoImage from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
function AllInvestments({item}) {
  const navigate=useNavigate()
    // const [open,setOpen]=useState(false)

    // const handleOpenDialog=()=>{
    //     setOpen(true)
    // }
    
    const handleEditOrDeleteInvest=(itemId)=>{
      navigate(`/editinvest/?id=${itemId}`)
    }
  return (
    <Container>
      
      <Card>
          <CardContent className="text-center">
            <Typography> {item.title} </Typography>
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
              <Typography sx={{ color: '#EAC530' }}> {item.servingTime} Days</Typography>
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
            <div className="mt-5" />
            <Button
              fullWidth
              variant="contained"
              color='secondary'
              type="submit"
              onClick={()=>handleEditOrDeleteInvest(item._id)}
            >
              Edit
            </Button>
            <div className="mt-5" />
            <Button
              fullWidth
              variant="contained"
              onClick={()=>handleEditOrDeleteInvest(item._id)}
              type="submit"
            >
              Delete
            </Button>
          </CardContent>
      </Card>
    </Container>
  )
}

export default memo(AllInvestments)

