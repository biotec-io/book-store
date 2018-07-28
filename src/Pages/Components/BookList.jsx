import React, { Component } from 'react';

import Book from './Book';

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          authorId: 1,
          description: 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed diam.',
        },
        {
          title: 'Lorem adipiscing elit.',
          authorId: 5,
          description: 'Tincidunt et, mattis eget, convallis nec, purus.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed diam.',
        },
        {
          title: 'Adipiscing lorem elit.',
          authorId: 10,
          description: 'Mattis Tincidunt, et eget, nec purus, Fusce.  convallis sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed diam.',
        },
      ],
    };
  }

  render() {
    return (
      <div className="mdc-layout-grid__inner">
        {this.state.books.map((book, index) => {
           return (
             <Book
               id={index}
               title={book.title}
               key={index}
               position={index}
               authorId={book.authorId}
               description={book.description}
             />
           );
        })}
      </div>
    );
  }
}

export default BookList;
