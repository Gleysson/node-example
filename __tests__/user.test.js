const request =  require('supertest')
const app = require('../src/app.js')

describe('Users Module', () => {

    test('create user in database', async () => {

        const response = await request(app).post('/api/v1/users').send({
            name:"Gleysson Rocha",
            email:"gleyssongaspar@gmail.com",
            password:"123456"
        })

        expect(response.status).toBe(200);
    });
    
})
