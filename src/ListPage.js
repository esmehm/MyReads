import React, { useState } from 'react';
import AppTitle from "./AppTitle";
import Bookshelf from "./Bookshelf";

const ListPage = () => {
  const shelves = [
    {
      title: "Currently Reading",
      books: ["To Kill a Mockingbird", "Ender's Game"],
    },
    {
      title: "Want to Read",
      books: ["1776", "Harry Potter and the Sorcerer's Stone"],
    },
    {
      title: "Read",
      books: [
        "The Hobbit",
        "Oh, the Places You'll Go!",
        "The Adventures of Tom Sawyer",
      ],
    },
  ];

  const books = [
    {
      bookCoverUrl: `url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")`,
      bookCoverHeight: 193,
      bookTitle: "To Kill a Mockingbird",
      bookAuthor: "Harper Lee",
    },
    {
      bookCoverUrl: `url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")`,
      bookCoverHeight: 188,
      bookTitle: "Ender's Game",
      bookAuthor: "Orson Scott Card",
    },
    {
      bookCoverUrl:
        'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
      bookCoverHeight: 193,
      bookTitle: "1776",
      bookAuthor: "David McCullough",
    },
    {
      bookCoverUrl:
        'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
      bookCoverHeight: 192,
      bookTitle: "Harry Potter and the Sorcerer's Stone",
      bookAuthor: "J.K. Rowling",
    },

    {
      bookCoverUrl:
        'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
      bookCoverHeight: 192,
      bookTitle: "The Hobbit",
      bookAuthor: "J.R.R. Tolkien",
    },
    {
      bookCoverUrl:
        'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
      bookCoverHeight: 174,
      bookTitle: "Oh, the Places You'll Go!",
      bookAuthor: "Seuss",
    },
    {
      bookCoverUrl:
        'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
      bookCoverHeight: 192,
      bookTitle: "The Adventures of Tom Sawyer",
      bookAuthor: "Mark Twain",
    },
  ];

  // const [hey, setHey] = useState('hi')
  // console.log(hey)


  return (
    <div className="list-books">
      <AppTitle />
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <Bookshelf shelf={shelf} books={books} />
          ))}
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => this.setState({ showSearchPage: true })}>
          Add a book
        </button>
      </div>
    </div>
  );
};

export default ListPage;