class ServerModel {
  constructor() {
    this.data = {}
  }

  add(keyValuePair) {
    Object.assign(this.data, (keyValuePair));
  }

  retrieve(key) {
    return this.data[key]
  }
}

module.exports = ServerModel;