/*
  Задание №4

  @see README.md
*/

const util = require("util");

const database = require("./database");

const getUser = util.promisify(database.getUser);
const getUsersBook = util.promisify(database.getUsersBook);
const buyBook = util.promisify(database.buyBook);

const buyBookForUser = async (bookId, userId, callback) => {
  try {
    await getUser(userId);

    const books = await getUsersBook(userId);

    if (books.includes(bookId)) {
      return callback(`User already has book with id=${bookId}`);
    }

    await buyBook(bookId);

    callback(null, "Success");
  } catch (err) {
    callback(err);
  }
};

async function main() {
  await buyBookForUser(1, 1, (err, message) => {
    console.log(err); // null
    console.log(message); // 'Success'
  });

  await buyBookForUser(1, 2, (err, message) => {
    console.log(err); // 'User already has book with id=1'
    console.log(message); // undefined
  });

  await buyBookForUser(3, 2, (err, message) => {
    console.log(err); // null
    console.log(message); // 'Success'
  });

  await buyBookForUser(5, 2, (err, message) => {
    console.log(err); // 'Book with id=5 not found'
    console.log(message); // undefined
  });

  await buyBookForUser(1, 3, (err, message) => {
    console.log(err); // 'User with id=3 not found'
    console.log(message); // undefined
  });
}

main();
