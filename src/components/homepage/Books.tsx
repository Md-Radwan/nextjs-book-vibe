import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();
  console.log(booksData);

  return (
    <section className="pt-20 container mx-auto gap-6">
      <h1 className="text-center font-bold text-[40px] pb-9">Books</h1>
      <div className="grid grid-cols-3 gap-6">
        {booksData.map((book:IBook, ind:number) => {
          return <BookCard book={book} key={ind} />;
        })}
      </div>
    </section>
  );
};

export default Books;
