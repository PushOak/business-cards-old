import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CardDetailsPage from '../cards/pages/CardDetailsPage';
import CardPage from '../cards/pages/CardPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../users/pages/LoginPage';
import SignupPage from '../users/pages/SignupPage';
import ROUTES from './routesModel';

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<CardPage />} />
            <Route path={ROUTES.CARDS} element={<CardPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage/>} />
            <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage/>} />
            <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
    )
}
