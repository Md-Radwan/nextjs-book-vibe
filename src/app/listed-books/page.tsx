"use client"

import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBookPage = () => {
    const {readBooks} = useContext(BooksContext);
    console.log("readbooks", readBooks)
    return (
        <div className='container mx-auto'>
            <h1>this is listed book page</h1>
        </div>
    );
};

export default ListedBookPage;