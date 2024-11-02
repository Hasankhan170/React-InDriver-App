import { Box, Button, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import MenuAppBar from "./components/Navbar";
import { useForm } from "react-hook-form";
import { useState } from "react";

const App = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
 

  const formValues = (formdata)=>{
    console.log(formdata);
     
    
  }
  return (
    <>
      <MenuAppBar />
      <form onSubmit={handleSubmit(formValues)} className="main-box" >
        <Typography variant="h4" gutterBottom>
          Driver Registration Form
        </Typography>

        {/* Personal Information */}
        <Box className="personal-information" sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <Box className="first-input" sx={{ display: 'flex', gap: 2 }}>
            <TextField id="full-name" label="Full Name" variant="filled" fullWidth />
            <TextField type="number" id="cnic" label="CNIC" variant="filled" fullWidth />
          </Box>
          <Box className="second-input" sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <TextField
              id="date-of-birth"
              label="Date of Birth"
              type="date"
              variant="filled"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField type="number" id="phone-number" label="Phone Number" variant="filled" fullWidth />
          </Box>
        </Box>

        {/* Contact Information */}
        <Box className="contact-information" sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField type="email" id="email" label="Email" variant="filled" fullWidth />
            <TextField type="text" id="current-address" label="Current Address" variant="filled" fullWidth />
          </Box>
        </Box>

        {/* Vehicle Information */}
        <Box className="vehicle-information" sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Vehicle Information
          </Typography>

          <FormControl variant="filled" fullWidth sx={{ mb: 2 }}>
            <InputLabel>Car Company</InputLabel>
            <Select label="Car Company">
              <MenuItem value="Toyota">Toyota</MenuItem>
              <MenuItem value="Honda">Honda</MenuItem>
              <MenuItem value="Ford">Suzuki</MenuItem>
              <MenuItem value="Hyundai">Hyundai</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" fullWidth sx={{ mb: 2 }}>
            <InputLabel>Car Model Name</InputLabel>
            <Select label="Car Company">
              <MenuItem value="Corolla">Corolla</MenuItem>
              <MenuItem value="Yaris">Yaris</MenuItem>
              <MenuItem value="City">City</MenuItem>
              <MenuItem value="Civic">Civic</MenuItem>
              <MenuItem value="Mehran">Mehran</MenuItem>
              <MenuItem value="Alto">Alto</MenuItem>
              <MenuItem value="Cultus">Cultus</MenuItem>
              <MenuItem value="Santro">Santro</MenuItem>
            </Select>
          </FormControl>


          <FormControl variant="filled" fullWidth sx={{ mb: 2 }}>
            <InputLabel>Bike Company</InputLabel>
            <Select label="Bike Company">
              <MenuItem value="Yamaha"></MenuItem>
              <MenuItem value="Honda">Honda</MenuItem>
              <MenuItem value="Suzuki">Suzuki</MenuItem>
              <MenuItem value="Super Power">Super Power</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" fullWidth sx={{ mb: 2 }}>
            <InputLabel>Bike Model Name</InputLabel>
            <Select label="Bike Company">
              <MenuItem value="CG 125">CG 125</MenuItem>
              <MenuItem value="CD 70">CD 70</MenuItem>
              <MenuItem value="GR 150">GR 150</MenuItem>
              <MenuItem value="YBR 125">YBR 125</MenuItem>
              <MenuItem value="Archi 150">Archi 150</MenuItem>
              <MenuItem value="SP 70">SP 70</MenuItem>
              </Select>
          </FormControl>
          

          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
  <TextField id="vehicle-color" label="Vehicle Color" variant="filled" fullWidth />

  
  <FormControl variant="filled" fullWidth>
    <InputLabel>Car Year</InputLabel>
    <Select defaultValue="">
      <MenuItem value="2020">2016</MenuItem>
      <MenuItem value="2021">2017</MenuItem>
      <MenuItem value="2022">2018</MenuItem>
      <MenuItem value="2023">2019</MenuItem>
      <MenuItem value="2020">2020</MenuItem>
      <MenuItem value="2021">2021</MenuItem>
      <MenuItem value="2022">2022</MenuItem>
      <MenuItem value="2023">2023</MenuItem>
    </Select>
  </FormControl>

  
  <FormControl variant="filled" fullWidth>
    <InputLabel>Bike Year</InputLabel>
    <Select defaultValue="">
      <MenuItem value="2020">2016</MenuItem>
      <MenuItem value="2021">2017</MenuItem>
      <MenuItem value="2022">2018</MenuItem>
      <MenuItem value="2023">2019</MenuItem>
      <MenuItem value="2020">2020</MenuItem>
      <MenuItem value="2021">2021</MenuItem>
      <MenuItem value="2022">2022</MenuItem>
      <MenuItem value="2023">2023</MenuItem>
     </Select>
    </FormControl>
  </Box>
</Box>


       
        <Box  sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
          <TextField
          className="choose-file"
            type="file"
            id="cnic-upload"
            label="CNIC Front and Back Image"
            InputLabelProps={{ shrink: true }}
            fullWidth
            variant="outlined"
          />
          <TextField
          className="choose-file"
            type="file"
            id="license-upload"
            label="Driving License Image"
            InputLabelProps={{ shrink: true }}
            fullWidth
            variant="outlined"
          />
        </Box>

    
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            height: 48,
            textTransform: 'none',
          }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default App;
