describe('CONVERT MILLISECONDS TO SECONDS', () => {
  test('test when milliseconds is passed to function', () => {
    const converter = require('../../src/utils/timeFormatter');

    expect(converter).not.toBeNull();
    expect(converter.millisecondToSeconds(14448)).toBe('0:14');
  });
});
