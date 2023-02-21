import { expect, server, BASE_URL } from './setup';
process.env.NODE_ENV = 'test';
it('posts messages', done => {
  const data = { name: 'hacker one', message: 'userId saved' };
//  let result = Array.isArray(data);
  //const myJSON = JSON.stringify(data);
  //localStorage.setItem("testJSON", myJSON);
  //let text = localStorage.getItem("testJSON");
//  let data = JSON.parse(text);
//  const checkout = typeof window !== 'undefined' ? localStorage.getItem('checkout') : null
//  useEffect(() => {
  // Perform localStorage action
//    const item = localStorage.getItem('data')
//  }, [])
//  .console.log(obj.name)
//  .console.log(data)
  server
    .post(`${BASE_URL}/messages`)
    .send(data)
    .expect(200)
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body.messages).to.be.instanceOf(Array);
      res.body.messages.forEach(m => {
        expect(m).to.have.property('id');
        expect(m).to.have.property('name', data.name);
        expect(m).to.have.property('message', data.message);
      });
      done();
    });
});
