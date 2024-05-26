import React from "react";
import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useDispatch, useSelector } from "react-redux";
import { updateRestaurantStatus } from "../../component/State/Restaurant/Action";

export const RestaurantDetails = () => {
  const { restaurant, address, contact } = useSelector((store) => store) || {}; // Provide default value as an empty object
  const dispatch = useDispatch();
  const handleRestaurantStatus = () => {
    if (restaurant && restaurant.userRestaurant) {
      dispatch(
        updateRestaurantStatus({
          restaurantId: restaurant.userRestaurant.id,
          jwt: localStorage.getItem("jwt"),
        })
      );
    } else {
      console.error("Restaurant or usersRestaurant is undefined or null");
    }
  };


  return (
    <div className="lg:px-20 px-5 pb-10">
      <div className="py-5 flex justify-center items-center gap-5">
        <h1 className="text-2xl lg:text-7xl text-center font-bold p-5">
          {restaurant?.userRestaurant?.name || "Restaurant Name"}
        </h1>

        <div>
          <Button
            color={restaurant?.userRestaurant?.open ? "primary" : "secondary"}
            className="py-[1rem] px-[2rem]"
            variant="contained"
            onClick={handleRestaurantStatus}
            size="large"
          >
            {restaurant?.userRestaurant?.open ? "Close" : "Open"}
          </Button>

        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Restaurant</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Owner</p>
                  <p className="text-gray-400">
                    <span className="pr-5">- </span>
                    {restaurant?.userRestaurant?.owner?.fullName || "Owner"}
                  </p>
                </div>
                {/* Other details */}
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Address</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">City</p>
                  <p className="text-gray-400">
                    <span className="pr-5">- </span>
                    {restaurant?.userRestaurant?.address?.city || "City"}
                    
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Postal Code</p>
                  <p className="text-gray-400">
                    <span className="pr-5">- </span>
                    {restaurant?.userRestaurant?.address?.postalCode || "Postal Code"}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Street Address</p>
                  <p className="text-gray-400">
                    <span className="pr-5">- </span>
                    {restaurant?.userRestaurant?.address?.street || "Street Adress"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Contact</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Email</p>
                  <p className="text-gray-400">
                    <span className="pr-5">- </span>
                    {restaurant?.userRestaurant?.owner?.email ||  "Email"}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Mobile</p>
                  <p className="text-gray-400">
                    <span className="pr-5">- </span>
                    {restaurant?.userRestaurant?.owner?.mobile || "Mobile"}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Social</p>
                  <div className="flex text-gray-400 items-center pb-3 gap-2">
                    <span className="pr-5">-</span>
                    <a
                      href={
                        restaurant?.userRestaurant?.contactInformaction
                          ?.instagram
                      }
                    >
                      <InstagramIcon sc={{ fontSize: "3rem" }} />
                    </a>
                    <a
                      href={
                        restaurant?.userRestaurant?.contactInformaction?.twitter
                      }
                    >
                      <TwitterIcon sc={{ fontSize: "3rem" }} />
                    </a>
                    <a href="/">
                      <LinkedInIcon sc={{ fontSize: "3rem" }} />
                    </a>
                    <a href="/">
                      <FacebookIcon sc={{ fontSize: "3rem" }} />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
