import { Box, Button, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {db, auth} from "../config/Firebase.js"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [loading ,setLoading] = useState(false)
  const [select ,setSelect] = useState("")
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleVehicleTypeChange = (event)=>{
    setSelect(event.target.value)
  }
 

  const formValues = async (data)=>{
    const { name, cnic,password, date, number, email,VehicleColor} = data;
    setLoading(true)



    try {
     const userCredential = await createUserWithEmailAndPassword(auth, email, password)
     console.log("User registered:", userCredential.user.uid); 
     const user = userCredential.user;

     const userData = {
       name,
       cnic,
       date,
       number,
       email,
       vehicleColor: VehicleColor,
     }

     if(select === 'car'){
      userData.carCompanay = data.carCompanay;
      userData.CarModel = data.CarModel;
      userData.CarYear = data.CarYear;
     }else if(select === 'bike'){
      userData.BikeCompany = data.BikeCompany;
      userData.BikeModel = data.BikeModel;
      userData.BikeYear = data.BikeYear;
     }

     await setDoc(doc(db,"users",user.uid),userData)
     console.log("Data written to Firestore successfully.");

     navigate('/login')
    } catch (error) {
      console.log(error);    
    }finally{
      setLoading(false)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(formValues)} className="main-box" >
        <Typography variant="h4" gutterBottom>
          Driver Registration Form
        </Typography>

        

        
        <Box className="personal-information" sx={{ mb: 4 }}>
  <Typography variant="h6" gutterBottom>
    Personal Information
  </Typography>

  <Box className="first-input" sx={{ display: 'flex', gap: 2 }}>
    <Box sx={{ width: '100%' }}>
      <TextField
        {...register('name', { required: "Name is required" })}
        id="full-name"
        label="Full Name"
        variant="filled"
        fullWidth
      />
      {errors.name && <Box sx={{ color: 'red', mt: 1 }}>{errors.name.message}</Box>}
    </Box>

    <Box sx={{ width: '100%' }}>
      <TextField
        {...register('cnic', { required: "CNIC is required" })}
        type="number"
        id="cnic"
        label="CNIC"
        variant="filled"
        fullWidth
      />
      {errors.cnic && <Box sx={{ color: 'red', mt: 1 }}>{errors.cnic.message}</Box>}
    </Box>
  </Box>

  <Box className="second-input" sx={{ display: 'flex', gap: 2, mt: 2 }}>
    <Box sx={{ width: '100%' }}>
      <TextField
        {...register('date', { required: "Date is required" })}
        id="date-of-birth"
        label="Date of Birth"
        type="date"
        variant="filled"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      {errors.date && <Box sx={{ color: 'red', mt: 1 }}>{errors.date.message}</Box>}
    </Box>

    <Box sx={{ width: '100%' }}>
      <TextField
        {...register('number', { required: "Number is required" })}
        type="number"
        id="phone-number"
        label="Phone Number"
        variant="filled"
        fullWidth
      />
      {errors.number && <Box sx={{ color: 'red', mt: 1 }}>{errors.number.message}</Box>}
    </Box>
  </Box>
        </Box>


       
        <Box className="contact-information" sx={{ mb: 4 }}>
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Box sx={{ width: '100%' }}>
      <TextField
        {...register('email', { required: "Email is required" })}
        type="email"
        id="email"
        label="Email"
        variant="filled"
        fullWidth
      />
      {errors.email && <Box sx={{ color: 'red', mt: 1 }}>{errors.email.message}</Box>}
    </Box>

    <Box sx={{ width: '100%' }}>
      <TextField
        {...register('password', { required: "Password is required" })}
        type="text"
        id="password"
        label="Password"
        variant="filled"
        fullWidth
      />
      {errors.password && <Box sx={{ color: 'red', mt: 1 }}>{errors.password.message}</Box>}
    </Box>
  </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <FormControl variant="filled" fullWidth>
            <InputLabel>Do you have a car or a bike?</InputLabel>
            <Select value={select} onChange={handleVehicleTypeChange} fullWidth>
              <MenuItem value="car">Car</MenuItem>
              <MenuItem value="bike">Bike</MenuItem>
            </Select>
          </FormControl>
        </Box>
       
        <Box className="vehicle-information" sx={{ mb: 4 }}>
  <Typography variant="h6" gutterBottom>
    Vehicle Information
  </Typography>

  {
    select === 'car' && (
      <>
      <Box sx={{ width: '100%', mb: 2 }}>
    <FormControl variant="filled" fullWidth>
      <InputLabel>Car Company</InputLabel>
      <Select {...register('carCompanay', { required: "Car Company is required" })} label="Car Company" defaultValue="">
        <MenuItem value="Toyota">Toyota</MenuItem>
        <MenuItem value="Honda">Honda</MenuItem>
        <MenuItem value="Ford">Suzuki</MenuItem>
        <MenuItem value="Hyundai">Hyundai</MenuItem>
      </Select>
    </FormControl>
    {errors.carCompanay && <Box sx={{ color: 'red', mt: 1 }}>{errors.carCompanay.message}</Box>}
      </Box>

      <Box sx={{ width: '100%', mb: 2 }}>
    <FormControl variant="filled" fullWidth>
      <InputLabel>Car Model Name</InputLabel>
      <Select {...register('CarModel', { required: "Car Model is required" })} label="Car Model" defaultValue="">
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
    {errors.CarModel && <Box sx={{ color: 'red', mt: 1 }}>{errors.CarModel.message}</Box>}
      </Box>

      <Box sx={{ width: '100%' }}>
      <FormControl variant="filled" fullWidth>
        <InputLabel>Car Year</InputLabel>
        <Select {...register('CarYear', { required: "Car Year is required" })} defaultValue="">
          <MenuItem value="2016">2016</MenuItem>
          <MenuItem value="2017">2017</MenuItem>
          <MenuItem value="2018">2018</MenuItem>
          <MenuItem value="2019">2019</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
        </Select>
      </FormControl>
      {errors.CarYear && <Box sx={{ color: 'red', mt: 1 }}>{errors.CarYear.message}</Box>}
      </Box>
      </>
    )}

 {
  select === 'bike' && (
    <>
       <Box sx={{ width: '100%', mb: 2, mt:2 }}>
    <FormControl variant="filled" fullWidth>
      <InputLabel>Bike Company</InputLabel>
      <Select {...register('BikeCompany', { required: "Bike Company is required" })} label="Bike Company" defaultValue="">
        <MenuItem value="Yamaha">Yamaha</MenuItem>
        <MenuItem value="Honda">Honda</MenuItem>
        <MenuItem value="Suzuki">Suzuki</MenuItem>
        <MenuItem value="Super Power">Super Power</MenuItem>
      </Select>
    </FormControl>
    {errors.BikeCompany && <Box sx={{ color: 'red', mt: 1 }}>{errors.BikeCompany.message}</Box>}
  </Box>

  <Box sx={{ width: '100%', mb: 2 }}>
    <FormControl variant="filled" fullWidth>
      <InputLabel>Bike Model Name</InputLabel>
      <Select {...register('BikeModel', { required: "Bike Model is required" })} label="Bike Model" defaultValue="">
        <MenuItem value="CG 125">CG 125</MenuItem>
        <MenuItem value="CD 70">CD 70</MenuItem>
        <MenuItem value="GR 150">GR 150</MenuItem>
        <MenuItem value="YBR 125">YBR 125</MenuItem>
        <MenuItem value="Archi 150">Archi 150</MenuItem>
        <MenuItem value="SP 70">SP 70</MenuItem>
      </Select>
    </FormControl>
    {errors.BikeModel && <Box sx={{ color: 'red', mt: 1 }}>{errors.BikeModel.message}</Box>}
  </Box>

    <Box sx={{ width: '100%' }}>
      <FormControl variant="filled" fullWidth>
        <InputLabel>Bike Year</InputLabel>
        <Select {...register('BikeYear', { required: "Bike Year is required" })} defaultValue="">
          <MenuItem value="2016">2016</MenuItem>
          <MenuItem value="2017">2017</MenuItem>
          <MenuItem value="2018">2018</MenuItem>
          <MenuItem value="2019">2019</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
        </Select>
      </FormControl>
      {errors.BikeYear && <Box sx={{ color: 'red', mt: 1 }}>{errors.BikeYear.message}</Box>}
    </Box>
    </>
  )}

 

  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
    <Box sx={{ width: '100%' }}>
      <TextField
        {...register('VehicleColor', { required: "Vehicle Color is required" })}
        id="vehicle-color"
        label="Vehicle Color"
        variant="filled"
        fullWidth
      />
      {errors.VehicleColor && <Box sx={{ color: 'red', mt: 1 }}>{errors.VehicleColor.message}</Box>}
    </Box>

  

  
  </Box>
        </Box>

        {
          loading ? (
            <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            height: 48,
            textTransform: 'none',
          }}
        >
          Loading...
        </Button>
          ) : (
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
          )
        }
      </form>
    </>
  );
};

export default Register;
