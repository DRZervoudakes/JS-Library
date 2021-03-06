const { setupTests } = global;
setupTests('each', 'collection/modules/Each');

describe('each()', () => {
  it('executes a callback when iterating over the set', () => {
    let i = 0;
    $('.jest-each').each(() => {
      i += 1;
    });
    expect(i).toBe(3);
  });
});
