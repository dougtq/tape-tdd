const supertest = require('supertest')

const app = require('../src/api/app')

test('GET /aplicarDesconto/10/5', (t) => {
  supertest(app)
    .get('/aplicarDesconto/10/5')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, {body}) =>{
      t.error(err, 'Sem erros')
      t.assert(body.valorDescontado === 5, "Desconto correto")
      t.end()  
    })
})