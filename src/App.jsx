import { Box, TextField } from "@mui/material"
import MenuAppBar from "./components/Navbar"


const App = () => {
  return (
    <>
    <MenuAppBar/>
    <Box className = "main-box">
        <h1>Driver Registration Form</h1>
 
     <Box className = "personal-information">
        <h2>Personal Information</h2>
     <Box className="first-input"> 
       <Box>
       <TextField id="filled-basic" label="Full Name" variant="filled" />
       </Box>
       <Box>
       <TextField type="number" id="filled-basic" label="CNIC" variant="filled" />
       </Box>
       </Box>

       <Box className="second-input" >
        <Box>
        <TextField
        id="date-of-birth"
        label="Date of Birth"
        type="date"
        className = "dateBirth"
        variant="filled"
        InputLabelProps={{
          shrink: true
        }}
        sx={{ mb: 2 }} 
      />
        </Box>
        <Box>
        <TextField type="number" id="filled-basic" label="Number" variant="filled" />
        </Box>
     
    </Box>
     </Box>

     <Box className = "personal-information">
     <Box className="first-input"> 
       <Box>
       <TextField type="email" id="filled-basic" label="Email" variant="filled" />
       </Box>
       <Box>
       <TextField type="text" id="filled-basic" label="Current Address" variant="filled" />
       </Box>
       </Box>

       <Box className="second-input" >
       <Box>
       <TextField type="number" id="filled-basic" label="License Number" variant="filled" />
       </Box>
        <Box>
        <TextField type="number" id="filled-basic" label="License Issuing Date" variant="filled" />
        </Box>
     
    </Box>
     </Box>

     <Box className = "personal-information">
     <Box className="first-input"> 
       <Box>
       <TextField id="filled-basic" label="Vehicle Registration Number" variant="filled" />
       </Box>
       <Box>
       <TextField type="number" id="filled-basic" label="Vehicle Make and Model " variant="filled" />
       </Box>
       </Box>

       <Box className="second-input" >
       <Box>
        <TextField  id="filled-basic" label="Vehicle Color" variant="filled" />
        </Box>
        <Box>
        <TextField  id="filled-basic" label="Vehicle Type" variant="filled" />
        </Box>
     
    </Box>
     </Box>

     <Box className = "personal-information">
     <Box className="first-input"> 
       <Box>
       <TextField id="filled-basic" label="Bank Account Holder Name" variant="filled" />
       </Box>
       <Box>
       <TextField type="number" id="filled-basic" label="Bank Account Number" variant="filled" />
       </Box>
       </Box>

    
     </Box>

     
     


    </Box>

    </>
  )
}

export default App
