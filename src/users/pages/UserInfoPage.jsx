import { Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import UserForm from "../components/UserForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import useUsers from "../hooks/useUsers";
import signupSchema from "../models/joi-schema/signupSchema";
import { useUser } from "../providers/UserProvider";
import { getUser } from "../services/usersApiService";
import useAxios from "../../hooks/useAxios";

export default function UserInfoPage() {
  const [userProfile, setUserProfile] = useState(null);
  // const { handleSignup } = useUsers();

  // const { value, ...rest } = useForm(
  //   initialSignupForm,
  //   signupSchema,
  //   handleSignup
  // );

  const { user } = useUser();
  useAxios();

  const getUserHandler = async () => {
    const userLocal = await getUser();

    console.log(userLocal);
    setUserProfile(userLocal);
  }

  useEffect(() => {
    getUserHandler();

  }, [])

  // if (user) return <Navigate replace to={ROUTES.USER_PROFILE} />;

  if (userProfile === null) {
    return <Typography variant="h2">Loading... please wait</Typography>
  }

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">
      <p>User Info</p>
        {userProfile.name.first}
        {userProfile.name.last}
        {userProfile.phone}
        {userProfile.email}
        {userProfile.password}
        {userProfile.user_id}
      </Typography>
      {/* <UserForm
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        title="User Info"
        errors={value.errors}
        data={value.data}
        onInputChange={rest.handleChange}
        setData={rest.setData}
      /> */}
    </Container>
  );
}
