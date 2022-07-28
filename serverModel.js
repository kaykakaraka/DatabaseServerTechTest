class ServerModel {
  constructor() {
    this.data = {}
  }

  add(keyValuePair) {
    if (typeof keyValuePair !== 'object') {
      throw 'Error: Can only add key-value pairs'
    }
    Object.assign(this.data, (keyValuePair));
  }

  retrieve(key) {
    return this.data[key]
  }
}

module.exports = ServerModel;