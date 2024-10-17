import React from "react";
import { useSelector } from "react-redux";
import {Logo, Container,LogoutBut} from '../index'
import { Link, useNavigate } from "react-router-dom";


function Header(){

    const authStatus = useSelector((state)=> state.auth.status)

    const navigate = useNavigate()

    const navItems = [
        {
            name:'Home',
            url:'/',
            active:true,
        },
        {
            name:'Login',
            url:'/login',
            active:!authStatus,
        },
        {
            name:'Signup',
            url:'/signup',
            active:!authStatus,
        },
        {
            name:'All Posts',
            url:'/all-posts',
            active:authStatus,
        },
        {
            name:'Add Posts',
            url:'/add-post',
            active:authStatus,
        }
       
    ]

    return(
        <header className="py-3 shadow- bg-gray-500">
            <Container>
                <nav className="flex">
                    <div className="mr-4 ">
                        <Link to='/'>
                            <Logo width="70px" />
                        </Link>
                    </div>

                <ul className="flex ml-auto">

                    {navItems.map((navItem)=> navItem.active ?
                        (
                            <li key={navItem.name}>
                                <button onClick={()=> navigate(navItem.url)}  
                                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ">
                                    {navItem.name}
                                </button>
                            </li>
                        ) : null
                    )}

                    {authStatus && (
                        <li>
                            <LogoutBut />
                        </li>
                    )}

                </ul>

                </nav>
            </Container>
        </header>
    )
}

export default Header