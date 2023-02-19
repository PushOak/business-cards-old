import React from 'react';
import {Container} from '@mui/material';
import PageHeader from '../../components/PageHeader';
import { Navigate, useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

export default function SignupPage() {
    const user = true;
    const navigate = useNavigate();
    if(user)  return <Navigate replace to={ROUTES.CARDS}/>

  return (
    <>
        <Container>
            <PageHeader 
                title='Welcome to signup page'
                subtitle='You can register here'
            />
        </Container>
    </>
  )
}
