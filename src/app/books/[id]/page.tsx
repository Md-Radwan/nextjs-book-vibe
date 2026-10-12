import ReadBtn from "@/components/bookDetails/ReadBtn";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (eachBook: IBook) => String(eachBook.bookId) === String(id),
  ) as IBook;

  const meta = [
    { label: "Number of Pages:", value: book.totalPages },
    { label: "Publisher:", value: book.publisher },
    { label: "Year of Publishing:", value: book.yearOfPublishing },
    { label: "Rating:", value: book.rating },
  ];
  return (
    <section className=" mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-2 lg:gap-12 lg:px-6">
      {/* Cover */}
      <div className="flex items-center justify-center rounded-3xl bg-[#F3F3F3] p-8 sm:p-14 lg:p-16">
        <Image
          src={book.image}
          alt={`Cover of ${book.bookName}`}
          width={420}
          height={560}
          priority
          className="h-auto w-full max-w-[320px] object-contain drop-shadow-xl"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold leading-tight text-[#131313] sm:text-4xl lg:text-[40px]">
          {book.bookName}
        </h1>

        <p className="mt-4 text-lg font-medium text-[#131313]/80">
          By : {book.author}
        </p>

        <hr className="my-5 border-[#131313]/15" />

        <p className="text-lg font-medium text-[#131313]/80">{book.category}</p>

        <hr className="my-5 border-[#131313]/15" />

        {/* Review */}
        <div className="space-y-1 text-[15px] leading-7 text-[#131313]/70">
          <p>
            <span className="font-bold text-[#131313]">Review : </span>
            {book.review}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="font-semibold text-[#131313]">Tag</span>
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#23BE0A]/5 px-4 py-2 text-sm font-medium text-[#23BE0A]"
            >
              #{tag}
            </span>
          ))}
        </div>

        <hr className="my-6 border-[#131313]/15" />

        {/* Meta info */}
        <dl className="space-y-3 text-[15px]">
          {meta.map(({ label, value }) => (
            <div key={label} className="flex gap-4">
              <dt className="w-44 shrink-0 text-[#131313]/70">{label}</dt>
              <dd className="font-semibold text-[#131313]">{value}</dd>
            </div>
          ))}
        </dl>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <ReadBtn book={book}/>
          <button
            type="button"
            className="rounded-lg bg-[#59A5C6] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#4a93b3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#59A5C6] cursor-pointer"
          >
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;
