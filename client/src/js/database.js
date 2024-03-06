import { openDB } from 'idb';

const initdb = async () =>
// creates database name jate, version 1
  openDB('jate', 1, {
    // sets up database schema if it does not already defined
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // creates collection inside jate datebase name jate
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// Export a function in which we will use POST not put
export const postDb = async (content) => {
  console.log('Post to the database');
// creates conection to the jateDB datebase 
  const jateDb = await openDB('jate', 1);
// create transaction to jate collection with a read/write data priviledege
  const tx = jateDb.transaction('jate', 'readwrite');
  // open up desire object store
  const store = tx.objectStore('jate');
  // use add(). method on the store and pass the content
  const request = store.add({ jate: content });
// confirmation of the request
  const result = await request;
  console.log( 'Data saved to the database', result );
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  const jateDb = await openDB('jate', 1);
// create transaction to jate collection with a read only data priviledege
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  // use .getAll() method to retrieve all data in the database
  const request = store.getAll();
// confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
