import { createTables, insertIntoTables } from './queryFunctions';
//import { dropUserTables, createUserTables, insertUserIntoTables } from './queryFunctions';

(async () => {
//  await createUserTables();
//  await insertUserIntoTables();
  await createTables();
  await insertIntoTables();
//  await dropUserTables();
//  await createUserTables();
//  await insertUserIntoTables();
})();
