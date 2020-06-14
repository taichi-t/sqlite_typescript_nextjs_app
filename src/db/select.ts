export {};

let sqlite = require('sqlite3').verbose();
let db = new sqlite.Database('example.sqlite');

db.serialize(() => {
  db.all('SELECT * FROM Person', (error: any, row: any) => {
    if (error) {
      console.error('Error!', error);
      return;
    }

    // カラムを指定してデータを表示する
    const people = row;
    console.log(people);
  });
  db.all('SELECT * FROM Vehicle', (error: any, row: any) => {
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
