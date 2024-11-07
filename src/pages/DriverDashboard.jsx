import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth, db } from "../config/Firebase"
import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { Card, CardContent, Typography, Grid, Box, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";



const DriverDashboard = () => {
    const [allData,setAllData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,async(user)=>{
            if(user){ 
                try {
                    const userData = collection(db,"users");
                    const q = query(userData,where("userId", "==", user.uid))
                    const querrySnapShot = await getDocs(q)
                    const fetchData = querrySnapShot.docs.map((doc)=>({
                        id:doc.id,
                        ...doc.data()
                    }))
                    setAllData(fetchData)
                } catch (error) {
                    console.log(error);
                    
                }
            }
        })
        return ()=> unsubscribe()
    },[])

    const logouOut = ()=>{
        signOut(auth).then(() => {
            navigate('/login')
          }).catch((error) => {
            console.log(error);
          });
    }

    

    // const getAllData = async ()=>{
    //     try {
    //         const snapshot = await getDocs(collection(db,"users"))
    //         const driverData = []

    //         snapshot.forEach((doc)=>{
    //             const driver= {id:doc.id,...doc.data()}
    //             driverData.push(driver)
    //         })
    //         setAllData(driverData)
    //     } catch (error) {
    //         console.log(error)  
    //     }
    // }

    // useEffect(()=>{
    //     getAllData()
    // },[])


  return (
    <>
   {
    allData.map((item) => {
        return (
            <Grid item xs={12} sm={6} md={4} key={item.id} style={{ padding: '1rem' }}>
                <Card variant="outlined" sx={{ minHeight: '100%', boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h6" component="div" color="primary">
                            Name: {item.name}
                        </Typography>
                        <Typography>Email: {item.email}</Typography>
                        <Typography>Number: {item.number}</Typography>
                        <Typography>CNIC: {item.cnic}</Typography>
                        <Typography>Vehicle Color: {item.vehicleColor}</Typography>
                        <Typography>Date: {item.date}</Typography>
                        {item.carCompany && (
                            <Box mt={2}>
                                <Typography variant="subtitle1" color="secondary">Car Details:</Typography>
                                <Typography>Company: {item.carCompany}</Typography>
                                <Typography>Model: {item.carModel}</Typography>
                                <Typography>Year: {item.carYear}</Typography>
                            </Box>
                        )}
                        {item.BikeCompany && (
                            <Box mt={2}>
                                <Typography variant="subtitle1" color="secondary">Bike Details:</Typography>
                                <Typography>Company: {item.BikeCompany}</Typography>
                                <Typography>Model: {item.BikeModel}</Typography>
                                <Typography>Year: {item.BikeYear}</Typography>
                            </Box>
                        )}
                    </CardContent>
                </Card>
            </Grid>
        );
    })
}
   <Box sx={{display:'flex' , justifyContent:'center'}}>
   <Button 
            variant="contained" 
            color="primary" 
            sx={{
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '8px',
                textTransform: 'none',
                boxShadow: 3
            }}
            onClick={logouOut}
            >Logout</Button>
   </Box>
    </>
  )
}




export default DriverDashboard
