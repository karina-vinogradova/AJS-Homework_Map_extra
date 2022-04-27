export default class Settings {
  constructor(theme = 'dark', music = 'trance', difficulty = 'easy') {
    this.defaultSettings = new Map([
      ['theme', theme],
      ['music', music],
      ['difficulty', difficulty],
    ]);
  }

  getSettings() {
    return this.defaultSettings;
  }
}
