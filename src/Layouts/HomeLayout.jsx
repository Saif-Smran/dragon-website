import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='my-20 grid grid-cols-12 gap-4'>
                <aside className="col-span-3"><LeftAside></LeftAside></aside>
                <section className="main col-span-6"><Outlet></Outlet></section>
                <aside className='col-span-3'><RightAside></RightAside></aside>
            </main>
        </div>
    );
};

export default HomeLayout;