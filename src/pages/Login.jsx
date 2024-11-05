import { Box, Button, TextField, Typography,} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { auth} from "../config/Firebase.js"
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [loading ,setLoading] = useState(false)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();


 

  const userLogin = async (data)=>{
    const {password, email} = data;
    setLoading(true)



    try {
     const userCredential = await signInWithEmailAndPassword(auth, email, password)
     console.log("User registered:", userCredential.user.uid); 
     const user = userCredential.user;

     console.log(user,"Data written to Firestore successfully.");

     navigate('/driverDashboard')
    } catch (error) {
      console.log(error);    
    }finally{
      setLoading(false)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(userLogin)} className="main-box" >
        <Typography variant="h4" gutterBottom>
          Driver Login Form
        </Typography>
       
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


       </Box>
       <Box sx={{ width: '100%', mt:2 }}>
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

export default Login;
