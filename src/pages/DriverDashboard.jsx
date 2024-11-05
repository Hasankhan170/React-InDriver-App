import { useEffect, useState } from "react"
import {db} from "../config/Firebase.js"
import {  getDocs,collection } from "firebase/firestore"
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";


const DriverDashboard = () => {
    const [allData,setAllData] = useState([])

    const getAllData = async ()=>{
        try {
            const snapshot = await getDocs(collection(db,"users"))
            const driverData = []

            snapshot.forEach((doc)=>{
                const driver= {id:doc.id,...doc.data()}
                driverData.push(driver)
            })
            setAllData(driverData)
        } catch (error) {
            console.log(error)  
        }
    }

    useEffect(()=>{
        getAllData()
    },[])
  return (
    <>
    <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Driver Dashboard
            </Typography>
            <Grid container spacing={2}>
                {allData.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <DriverCard driver={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    </>
  )
}


const DriverCard = ({ driver }) => {
    console.log(driver);
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Name: {driver.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>CNIC:</strong> {driver.cnic}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Email:</strong> {driver.email}
                </Typography>
                {driver.carCompanay && (
                    <>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Car Company:</strong> {driver.carCompanay}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Car Model:</strong> {driver.CarModel}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Car Year:</strong> {driver.CarYear}
                        </Typography>
                    </>
                )}
                {driver.BikeCompany && (
                    <>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Bike Company:</strong> {driver.BikeCompany}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Bike Model:</strong> {driver.BikeModel}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Bike Year:</strong> {driver.BikeYear}
                        </Typography>
                    </>
                )}
                <Typography variant="body2" color="text.secondary">
                    <strong>Vehicle Color:</strong> {driver.vehicleColor
                    }
                </Typography>
            </CardContent>
        </Card>
    );
};

export default DriverDashboard
