import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBarPost from '../AppBarPost/AppBarPost';

const PostLayout = () => {
    return (
        <div>
            <AppBarPost></AppBarPost>
            <Outlet></Outlet>
    
            
        </div>
    );
};

export default PostLayout;