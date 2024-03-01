describe('Suite de testes para front-end', () => {
  test('Verefica se os números são iguais', () => {
    expect(2).toBe(2);
  }),
  test('Verifica se é estritamente igual', () => {
    expect('1').not.toBe(1);
  }),
  test('Verificar a concatenação de string', () => {
    function ConcatenaString(stri1, stri2) {
      return stri1 + stri2;
    }
    expect(ConcatenaString('3º', 'F').toBe('3ºF'));
  });
});
