"use client";

import ReadBooksCard from "@/components/shared/ReadBooksCard";
import WishlistBooksCard from "@/components/shared/WishlistBooksCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

const ListedBookPage = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  console.log("readbooks", "wishlist", readBooks, wishlist);
  return (
    <div className="container mx-auto mt-9">
      {/* heading */}
      <div className="rounded-[16px] bg-[#F3F3F3] py-8.5">
        <h1 className="font-bold text-[28px] text-center">Books</h1>
      </div>
      {/* tabs */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift pt-13">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length > 0 ? (
            readBooks.map((book: IBook) => {
              return <ReadBooksCard key={book.bookId} book={book}/>;
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No read books found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {wishlist.length > 0 ? (
            wishlist.map((book: IBook) => {
              return <WishlistBooksCard key={book.bookId} book={book}/>;
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No wishlist books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBookPage;
