const bcrypt  = require('bcrypt')
const hash = require('../src/app/middlewares/hash')

test('if password hash is correct', async () => {
    const pass = await hash.encrypt('123')
    const result = await bcrypt.compare('123',pass)
    expect(result).toBe(true);
});
