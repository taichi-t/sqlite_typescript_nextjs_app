// const sqlite = require('sqlite3').verbose();
// const db = new sqlite.Database('./mydb.sqlite'); // SQLite の DB ファイル名

// // SQL を同期的に実行する
// db.serialize(() => {
//   // テーブルがなければ作成する
//   db.run(
//     'CREATE TABLE IF NOT EXISTS Person (id INTEGER PRIMARY KEY, name TEXT, email TEXT), Vehicle (id INTEGER PRIMARY KEY, brand TEXT model TEXT, ownerId INTEGER KEY REFERENCES Person(id))'
//   );

//   // Prepared Statement でデータを挿入する
//   const stmt = db.prepare(
//     'INSERT INTO Person (name, email) VALUES (buruno, buruno@gmail.com)'
//   );
//   stmt.run(['Foo', 25]);
//   stmt.run(['Bar', 39]);
//   stmt.run(['Baz', 31]);

//   // prepare() で取得した Prepared Statement オブジェクトをクローズする。これをコールしないとエラーになる
//   stmt.finalize();
// });

// db.close();

const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('example.sqlite'); // SQLite の DB ファイル名

// SQL を同期的に実行する
db.serialize(() => {
  // テーブルがなければ作成する
  db.run(
    'CREATE TABLE IF NOT EXISTS Person (id INTEGER PRIMARY KEY, name TEXT, email TEXT)'
  );
  db.run(
    'CREATE TABLE IF NOT EXISTS Vehicle (id INTEGER PRIMARY KEY, brand TEXT, model TEXT, ownerId INTEGER KEY REFERENCES Person(id))'
  );

  // Prepared Statement でデータを挿入する
  const stmtP = db.prepare('INSERT INTO Person (name, email) VALUES (?, ?)');
  stmtP.run(['bruno', 'buruno@gmail.com']);
  stmtP.run(['john', 'john@gmail.com']);

  const stmtV = db.prepare(
    'INSERT INTO Vehicle (brand, model, ownerId) VALUES (?, ?, ?)'
  );
  stmtV.run(['audi', 'R8', 1]);
  stmtV.run(['mercedes', 'benz', 2]);

  // prepare() で取得した Prepared Statement オブジェクトをクローズする。これをコールしないとエラーになる
  stmtP.finalize();
  stmtV.finalize();
});

db.close();
