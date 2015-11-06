export default class GukkyRoshiSet {
  constructor() {
    this.data = {};
  }
  set(key, value, timestamp) {
    if (!this.data[key]
        || this.data[key].timestamp < timestamp) {
      this.data[key] = {
        value, timestamp, removed: false,
      };
    }
  }
  remove(key, timestamp) {
    if (!this.data[key]
        || this.data[key].timestamp < timestamp) {
      this.data[key] = {
        timestamp, removed: true,
      };
    }
  }
  get(key) {
    if (this.data[key] && !this.data[key].removed) {
      return this.data[key].value;
    }
    return null;
  }
}
