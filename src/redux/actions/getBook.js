const axios = require('axios');
const fetchUsersRanking = require('./getUsersRanking');

const googleAPIUrl = 'https://www.googleapis.com/books/v1/volumes/';

const fetchBook = (bookId) => {
  axios.get(`${googleAPIUrl}/${bookId}`)
    .then(response => {
      return response.data.volumeInfo;
    });
};

const getBook = (payload) => {
  return {
    book: fetchBook(payload.bookId),
    ranking: fetchUsersRanking(payload.bookId),
  };
};

module.exports = getBook;
