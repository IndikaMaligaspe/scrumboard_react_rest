import React  from 'react';
import {HomeLayout} from '../Layout/Layout';
import  SideBar   from './SideBar';
import  MainBoard from './MainBoard';

export const HomeScreen = (props) =>(
    
    <HomeLayout
        sidebar= { <SideBar/> }
        mainbord={ <MainBoard/> }
    >
    </HomeLayout>
);


export default HomeScreen;