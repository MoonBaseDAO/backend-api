import { expect, server, BASE_URL } from './setup';
//import { createMessageTable, insertMessages, dropMessagesTable } from '../src/utils/queries';
//import { createUserTable, insertUser, dropUserTable } from '../src/utils/queries';

describe('Users', () => {
  it('get user page', done => {
    server
      .get(`${BASE_URL}/user`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.user).to.be.instanceOf(Array);
        res.body.message.forEach(m => {
          expect(m).to.have.property('username');
          expect(m).to.have.property('userId');
        });
        done();
      });
  });

  it('posts user', done => {
    const data = { username: 'elite hacker', userId: 'new userId saved' };
    server
      .post(`${BASE_URL}/user`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.user).to.be.instanceOf(Array);
        res.body.user.forEach(m => {
          expect(m).to.have.property('id');
          expect(m).to.have.property('username', data.name);
          expect(m).to.have.property('userId', `${data.message}`);
        });
        done();
      });
  });
});
