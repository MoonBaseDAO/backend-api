import {
  dropTables,
  createTables,
  insertIntoTables,
//  insertUserIntoTables,
//  createUserTables,
//  dropUserTables,
} from '../src/utils/queryFunctions';

before(async () => {
  await createTables();
  await insertIntoTables();
//  await createUserTables();
//  await insertUserIntoTables();
});

after(async () => {
  await dropTables();
//  await dropUserTables();
});
