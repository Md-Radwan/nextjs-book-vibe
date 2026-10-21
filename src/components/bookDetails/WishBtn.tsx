"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishBtn = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext) as {
    wishlist: IBook[];
    setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
  };

  const handleWishBtn = () => {
    console.log("wish list button is triggered", book);

    setWishlist([...wishlist, book]);
    toast.success(`add ${book.bookName} to wishlist`);
  };

  return (
    <button
      type="button"
      onClick={() => handleWishBtn()}
      className="rounded-lg bg-[#59A5C6] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#4a93b3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#59A5C6] cursor-pointer"
    >
      Wishlist
    </button>
  );
};

export default WishBtn;
