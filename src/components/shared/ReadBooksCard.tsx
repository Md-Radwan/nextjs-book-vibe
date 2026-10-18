"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, UsersRound, FileText, Trash2 } from "lucide-react";
import { IBook } from "@/types/books.type";

interface IReadBooksCardProps {
  book: IBook;
}

export default function ReadBooksCard({ book }: IReadBooksCardProps) {
  return (
    <article className="my-6 w-full rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
        {/* Book cover */}
        <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-2xl bg-[#F3F3F3] sm:h-[232px] sm:w-[235px]">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, 235px"
            className="object-contain p-5"
          />
        </div>

        {/* Book information */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Title and remove button */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="font-serif text-2xl font-bold leading-tight text-[#222222]">
                {book.bookName}
              </h2>

              <p className="mt-3 text-base text-[#444444]">
                By : {book.author}
              </p>
            </div>

            <Trash2 size={21} className="cursor-pointer"/>
          </div>

          {/* Tags and publishing year */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="font-bold text-gray-900">Tag</span>

            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#F0FAF0] px-4 py-2 text-sm font-medium text-green-600"
              >
                #{tag}
              </span>
            ))}

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={21} strokeWidth={1.8} />
              <span>Year of Publishing: {book.yearOfPublishing}</span>
            </div>
          </div>

          {/* Publisher and page count */}
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-500">
            <div className="flex items-center gap-2">
              <UsersRound size={22} strokeWidth={1.7} />
              <span>Publisher: {book.publisher}</span>
            </div>

            <div className="flex items-center gap-2">
              <FileText size={21} strokeWidth={1.7} />
              <span>Page {book.totalPages}</span>
            </div>
          </div>

          <div className="my-4 border-t border-gray-200" />

          {/* Category, rating and details */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#E1EEFF] px-5 py-3 text-sm font-medium text-[#3980FF]">
              Category: {book.category}
            </span>

            <span className="rounded-full bg-[#FFF2DE] px-5 py-3 text-sm font-medium text-[#FF9800]">
              Rating: {book.rating.toFixed(1)}
            </span>

            <Link
              href={`/books/${book.bookId}`}
              className="inline-flex items-center justify-center rounded-full bg-[#20BE18] px-6 py-3 font-medium text-white transition-colors hover:bg-[#179B12]"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
