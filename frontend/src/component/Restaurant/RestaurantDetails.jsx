import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import MenuCard from './MenuCard';

const categories=[
    "pizza",
    "biryani",
    "burger",
    "chicken",
    "rice"
]
const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegetarian only",value:"vegetarian"},
    {label:"Non-Vegetarian",value:"non_vegetarian"},
    {label:"Seasonal",value:"seasonal"},

];

const menu=[1,1,1,1,1,1];

const RestaurantDetails=()=>{
    const[foodType,setFoodType]=useState("all")
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
    }
    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className=" text-gray-500 py-2 mt-10">Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img
                             className="w-full h-[40vh] object-cover"
                            src="https://people.com/thmb/07L6ojYRPHVIkrIJoCwTrDacIOo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(329x0:331x2):format(webp)/most-view-9-660-e733afb5c83145a49d7c2bb820f51501.jpg"
                             alt="" 
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                             className="w-full h-[40vh] object-cover"
                            src="https://people.com/thmb/vPXvXcEcYCedq6MyvzeivNTQUKQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(329x0:331x2):format(webp)/most-view-6-660-19e72af450e143db97ff3262f87d29eb.jpg"
                             alt="" 
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                             className="w-full h-[40vh] object-cover"
                            src="https://people.com/thmb/NM0j5XAALJXogOTrZuR1KtCUmz0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(329x0:331x2):format(webp)/most-view-4-660-5bd79e8274d84d79a5e1509f064f764c.jpg"
                             alt="" 
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className="pt-3 pb-5">
                    <h1 className="text-4x1 font-semibold">Indian Fast Food</h1>
                    <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repellat quam sunt magnam reiciendis dolorem non, 
                        illo repudiandae aliquam rem tempore
                         libero maxime aliquid excepturi possimus esse magni dolorum nam reprehenderit.</p>
                    <div className="space-y-3 mt-3">

                    </div>
                    <p className="text-gray-500 flex items-center gap-3">
                  <LocationOnIcon/>  
                        <span>
                            
                            Mumbai, Maharstra
                             </span>
                    </p>
                    <p className="text-gray-500 flex items-center gap-3">
                  <CalendarTodayIcon/>  
                        <span>
                        Mon-Sun:9:00AM-9:00PM(Today)
                             </span>
                    </p>

                </div>

            </section>
            <Divider/>
            <section className="pt-[2rem] lg:flex relative">

                <div className="space-y-10 lg:w-[20%] filter ">
                    
                    <div className="box space-y-5 lg:sticky top-28 d">
                        <div>
                            <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                                Food Type
                            </Typography>
                            <FormControl className="py-10 space-y-5"component=
                            {"fieldset"}>
                                <RadioGroup  onChange={handleFilter}name="food_type" value={foodType}>
    {foodTypes.map((item)=> 
    <FormControlLabel 
    key={item.value}
    value={item.value}
     control={<Radio />}
      label={item.label} /> )}                           

                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
                                Food Category
                            </Typography>
                            <FormControl className="py-10 space-y-5"component=
                            {"fieldset"}>
                                <RadioGroup  onChange={handleFilter}name="food_type" value=
                                {foodType}>
    {categories.map((item)=> 
    <FormControlLabel 
    key={item}
    value={item}
     control={<Radio />}
      label={item} /> )}                           

                                </RadioGroup>
                            </FormControl>
                        </div>

                    </div>


                </div>

                <div className="space-y-5 lg:w-[80%] lg:pl-10">
                    {menu.map((item)=> <MenuCard/>)}
                      </div>

            </section>
        </div>

    );
};

export default RestaurantDetails