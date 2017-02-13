describe('react-specific-preset.json', () => {
  it('should be valid parseable json', () => {
    let isValidJson = true;
    try {
      require('../react-specific-preset.json');
    } catch (error) {
      isValidJson = false;
    }

    expect(isValidJson).toBe(true);
  });
});
