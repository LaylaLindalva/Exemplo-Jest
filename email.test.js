const VerificaEmail = require('./index')

test('Verifica se email é válido', () => {
    expect(VerificaEmail('gomeslayla613@gmail.com')).toBe(true);
});

test('Verifica se email corresponde aos requisitos', () => {
    expect('gomeslayla613@gmail.com').toMatch('@')
});