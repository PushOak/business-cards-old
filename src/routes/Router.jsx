import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CardDetailsPage from '../cards/pages/CardDetailsPage';
import CardPage from '../cards/pages/CardPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import SandBox from '../sandbox/SandBox';
import LoginPage from '../users/pages/LoginPage';
import SignupPage from '../users/pages/SignupPage';
import Counter from '../sandbox/stateHook/Counter';
import MyDetails from '../sandbox/stateHook/MyDetails';
import Password from '../sandbox/stateHook/Password';
import TodoList from '../sandbox/stateHook/TodoList';
import FirstEffect from '../sandbox/effectHook/FirstEffect';
import Countries from '../sandbox/effectHook/Countries';
import ROUTES from './routesModel';
import RenderComponent from '../sandbox/render/RenderComponent';
import Get2Countries from '../sandbox/render/Get2Countries';
import ChangeColor from '../sandbox/class/stateTasks/ChangeColor';
import ChangeStyle from '../sandbox/class/stateTasks/ChangeStyle';
import MyData from '../sandbox/class/memorization/MyData';

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<CardPage />} />
            <Route path={ROUTES.CARDS} element={<CardPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
            <Route path='password' element={<Password />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='test' element={<MyData />} />
            <Route path={ROUTES.SANDBOX} element={<SandBox />}>
                <Route path='get2countries' element={<Get2Countries />} />
                <Route path='mydetails' element={<MyDetails />} />
                <Route path='password' element={<Password />} />
                <Route path='todo' element={<TodoList />} />
                <Route path='first-effect' element={<FirstEffect />} />
                <Route path='countries' element={<Countries />} />
                <Route path='render' element={<RenderComponent />} />
            </Route>
        </Routes>
    )
}


