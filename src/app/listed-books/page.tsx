"use client";

import ReadBooksCard from "@/components/shared/ReadBooksCard";
import WishlistBooksCard from "@/components/shared/WishlistBooksCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext, useState } from "react";

const ListedBookPage = () => {
  const { readBooks, wishlist } = useContext(BooksContext)as {
    readBooks: IBook[];
    wishlist: IBook[];
  };
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
  // console.log("readbooks", "wishlist", readBooks, wishlist);

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating)
    }else if(sortBy === "pages"){
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
    }else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
    }
    
    return sortedBooks
  }

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist)

  return (
    <div className="container mx-auto mt-9">
      {/* heading */}
      <div className="rounded-[16px] bg-[#F3F3F3] py-8.5">
        <h1 className="font-bold text-[28px] text-center">Books</h1>
      </div>

      <div className="text-center mt-8 flex items-center justify-center gap-2">
        Sort by:{" "}
        <select
          // defaultValue="Sort By"
          className="select select-success cursor-pointer w-[200px]"
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
        >
          {/* <option disabled={true}>Sort By</option> */}
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of pages</option>
          <option value={"year"}>Published year</option>
        </select>
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
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook, index: number) => {
              return <ReadBooksCard key={index} book={book} />;
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
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: IBook, index: number) => {
              return <WishlistBooksCard key={index} book={book} />;
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
