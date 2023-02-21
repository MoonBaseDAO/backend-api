import { expect, server, BASE_URL } from './setup';
process.env.NODE_ENV = 'test';

it('posts user', done => {
  const data = { username: 'hacker one', userId: 'userId saved' };
  server
    .post(`${BASE_URL}/user`)
    .send(data)
    .expect(200)
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body.user).to.be.instanceOf(Array);
      res.body.user.forEach(m => {
        expect(m).to.have.property('id');
        expect(m).to.have.property('username', data.username);
        expect(m).to.have.property('userId', data.userId);
      });
      done();
    });
});


