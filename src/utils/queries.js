export const createMessageTable = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
  )
  `;

//  export const createUserTable = `
//  DROP TABLE IF EXISTS user;
//  CREATE TABLE IF NOT EXISTS user (
//    id SERIAL PRIMARY KEY,
//    username VARCHAR DEFAULT '',
//    userId VARCHAR NOT NULL
//    )
//    `;
  
// export const createMessageTable = `
// DROP TABLE IF EXISTS messages;

 export const insertMessages = `
 INSERT INTO messages(name, message)
 VALUES ('christian', 'first message commited to postgres'),
       ('roy', 'second message added to db')
 `;

// export const dropMessagesTable = 'DROP TABLE messages';


  export const createUserTable = `
  DROP TABLE IF EXISTS user;
  CREATE TABLE IF NOT EXISTS user (
    username VARCHAR DEFAULT '',
    userId VARCHAR NOT NULL
    )
    `;



export const insertUser = `
INSERT INTO user(username, userId)
VALUES ('christian', 'first userId commited to postgres'),
      ('roy', 'second userId commited to postgres')
`;


export const dropMessagesTable = 'DROP TABLE messages';
export const dropUserTable = 'DROP TABLE user';
