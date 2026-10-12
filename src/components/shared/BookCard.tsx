import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";


interface IBookCardProps{
    book: IBook;
}

const BookCard = ({book}: IBookCardProps) => {
  return (
    <div
      className="w-full max-w-95 rounded-2xl border border-gray-200 bg-white p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Book Image */}
      <div className="flex h-58.75 items-center justify-center rounded-2xl bg-[#f3f3f3]">
        <div className="relative h-45 w-32.5">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            unoptimized
            className="object-contain transition duration-500 group-hover:scale-105"
            sizes="130px"
          />
        </div>
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-3">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Name */}
      <h2 className="mt-5 text-2xl font-bold leading-tight text-gray-900">
        {book.bookName}
      </h2>

      {/* Author */}
      <p className="mt-4 text-base text-gray-600">
        By : <span>{book.author}</span>
      </p>

      {/* Divider */}
      <div className="my-5 border-t border-dashed border-gray-200" />

      {/* Bottom Information */}
      <div className="flex items-center justify-between">
        <span className="text-base text-gray-600">{book.category}</span>

        <div className="flex items-center gap-2">
          <span className="text-base text-gray-700">{book.rating}</span>

          {/* Star */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.344l5.518.442c.499.04.701.663.321.982l-4.198 3.534a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.182-.557L2.856 10.378c-.38-.319-.178-.942.321-.982l5.518-.442a.563.563 0 00.475-.344L11.48 3.5z"
            />
          </svg>
        </div>
      </div>
       {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="btn w-full rounded-xl border-0 bg-slate-900 text-white transition-all hover:bg-emerald-600 mt-6">
            View Details →
          </button>
        </Link>
    </div>
  );
};

export default BookCard;
