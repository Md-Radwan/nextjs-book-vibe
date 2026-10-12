"use client"

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadBtn = ({book}: {book: IBook}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);

    const handleReadBtn = () => {
        
        console.log("read button is triggered", book)

        setReadBooks([...readBooks, book])
        toast.success(`You have read ${book.bookName}`)
    }

  return (
    <button
      type="button"
      onClick={()=>handleReadBtn()}
      className="rounded-lg border border-[#131313]/15 bg-white px-6 py-4 text-lg font-semibold text-[#131313] transition hover:bg-gray-50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#59C6D2] cursor-pointer"
    >
      Read
    </button>
  );
};

export default ReadBtn;
