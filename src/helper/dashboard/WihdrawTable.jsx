import {
  TableContainer,
  TableHead,
  Table,
  TableCell,
  Paper,
  TableBody,
  Typography,
  Button,
  Backdrop,
  CircularProgress,
  Dialog,
  TextField,
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//icons
// import EditIcon from '@mui/icons-material/Edit';

export default function WihdrawTable() {
  const [withdrawInfo, setWithdrawInfo] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');

  const [open, setOpen] = useState(false);
  const [editor, setEditor] = useState({});

  // const handleOpenEditer = (id) => {
  //   setOpen(true);
  //   axios
  //     .get(`https://transactionappcli.herokuapp.com/api/v1/withdraws/${id}`)
  //     .then((res) => {
  //       setEditor(res.data[0]);
  //     })
  //     .catch((err) => console.error(err));
  // };
  useEffect(() => {
    axios
      .get('https://transactionappcli.herokuapp.com/api/v1/withdraws')
      .then((res) => {
        setWithdrawInfo(res.data);
        setFetching(false);
      })
      .catch((err) => {
        setError('error while getting data from database');
      });
  }, []);
  return (
    <Container className="pt-10">
      {error ? <div> {error} </div> : ''}

      <TableContainer component={Paper}>
        <DialogEditer
          open={open}
          setOpen={setOpen}
          editor={editor}
          setEditor={setEditor}
        />
        <Table>
          <TableHead sx={{ background: '#f7bd00' }}>
            <TableCell>
              <Typography>amount</Typography>
            </TableCell>
            {/* <TableCell>
              <Typography>Withdrawn</Typography>
            </TableCell> */}
            <TableCell>
              <Typography>Bank Account</Typography>
            </TableCell>
            <TableCell>
              <Typography>User</Typography>
            </TableCell>
            {/* <TableCell>
              <Typography>Actions</Typography>
            </TableCell> */}
          </TableHead>
          {fetching && (
            <Backdrop open={true}>
              {' '}
              <CircularProgress />{' '}
            </Backdrop>
          )}

          {withdrawInfo?.map((item, index) => {
            return (
              <TableBody key={index}>
                <TableCell>
                  <Typography> {item.amount} </Typography>
                </TableCell>
                {/* <TableCell>
                  <Button variant="outlined">
                    {' '}
                    {item.widthraw ? 'yes' : 'no'}
                  </Button>
                </TableCell> */}
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      window.open(`/bankdetails/?id=${item.userId}`, '_blank');
                    }}
                  >
                    See Details
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      window.open(`/userdetails/?id=${item.userId}`, '_blank');
                    }}
                  >
                    See Details
                  </Button>
                </TableCell>
                {/* <TableCell>
                  <IconButton onClick={() => handleOpenEditer(item._id)}>
                    <EditIcon />
                  </IconButton>
                </TableCell> */}
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </Container>
  );
}

const DialogEditer = ({ open, setOpen, editor, setEditor }) => {
  // const [editInfo, setEditInfo] = useState('');

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <div style={{ height: 10 }} />
      <TextField
        label="withdrawn"
        value={editor.widthraw}
        onChange={(e) => setEditor(e.target.value.toLowerCase())}
      />
      <div style={{ height: 10 }} />
      <Button>Save</Button>
    </Dialog>
  );
};
