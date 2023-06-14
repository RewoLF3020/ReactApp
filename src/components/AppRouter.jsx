import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import { AuthContext } from "../context/context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Routes>
            {isAuth
                ? <>
                    <Route path="/about" element={<About />} key="path"/>
                    <Route exact path="/posts" element={<Posts />}/>
                    <Route exact path="/posts/:id" element={<PostIdPage/> }/>
                    <Route path="*" element={<Navigate replace to="/posts"/>}/>
                </>
                : <>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<Navigate replace to="/login"/>}/>
                </>
            }
            <Route path="/error" element={<Error />}/>
            <Route path="/" element={<Navigate replace to="/posts"/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;