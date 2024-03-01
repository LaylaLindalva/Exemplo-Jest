const Maioridade = require('../js/Maioridade');

test('Verifica idade para dirigir', () => {
  expect(Maioridade(18)).toBeGreaterThan(17);
}),
test('Verifica se é menor', () => {
    expect(30).toBeLessThan(40);
}),
test('Verifica se é maior ou igual', () => {
    expect(20).toBeGreaterThanOrEqual(18)
}),
test('Verificar se é menor ou igaul', () => {
    expect(50).toBeLessThanOrEqual(51)
});

test('Verifica se a palavra "senai" existe', () => {
    const frase = 'O senai é o melhor lugar do mundo!';
    expect(frase).toMatch('senai')
});

test('Verifica se a palavra "SENAI" existe', () => {
    const frase = 'O senai é o melhor lugar do mundo!';
    const fraseMaiuscula = frase.toUpperCase();
    expect(fraseMaiuscula).toMatch('SENAI');
});

test('Verifica se há "Maçã" na cesta de frutas', () => {
    const frutas = ['Pera', 'Uva', 'Maçã', 'Manga', 'Laranja']
    expect(frutas).toContain('Maçã')
});