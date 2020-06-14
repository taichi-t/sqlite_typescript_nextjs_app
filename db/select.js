const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('example.sqlite');

db.serialize(() => {
  db.all('SELECT * FROM Person', (error, row) => {
    if (error) {
      console.error('Error!', error);
      return;
    }

    // カラムを指定してデータを表示する
    const people = row;
    console.log(people);
  });
  db.all('SELECT * FROM Vehicle', (error, row) => {
    if (error) {
      console.error('Error!', error);
      return;
    }

    // カラムを指定してデータを表示する
    const vehicle = row;
    console.log(vehicle);
  });
});

db.close();
