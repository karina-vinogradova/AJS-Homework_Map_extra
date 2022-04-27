import Settings from '../settings';

test('get default settings', () => {
  const testSettings = new Settings();

  expect(Array.from(testSettings.getSettings())).toEqual([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
});

test('get user settings', () => {
  const testSettings = new Settings('light', 'pop', 'normal');

  expect(Array.from(testSettings.getSettings())).toEqual([
    ['theme', 'light'],
    ['music', 'pop'],
    ['difficulty', 'normal'],
  ]);
});

test('get one user setting and other default settings', () => {
  const testSettings = new Settings('light');

  expect(Array.from(testSettings.getSettings())).toEqual([
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
});
