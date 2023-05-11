import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./style.css";
import axios from 'axios';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Login({modalOpen, closeModal}) {
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleInputChange = (e, setValue) => {
    setValue( e.currentTarget.value );
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSubmitLogin = async () => {
    const requestBody = {
      username: email,
      password: password
    };

    await axios.post('http://192.168.0.5:3010/user/login', requestBody)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <Dialog className={'login-form-dialog'} open={modalOpen} onClose={closeModal}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>          
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Login" {...a11yProps(0)} />
                <Tab label="Registration" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
                onChange={(e)=> handleInputChange(e, setEmail)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Password"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e)=> handleInputChange(e, setPassword)}
              />
              <Button type="button" color="primary" className="form__custom-button-login" onClick={handleSubmitLogin}>
                Log in
              </Button>
            </TabPanel>
            
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}