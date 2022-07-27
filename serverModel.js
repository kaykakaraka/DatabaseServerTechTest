class ServerModel {

  add(keyValuePair) {
    this.data = keyValuePair;
  }

  retrieve(key) {
    console.log(this.data);
    return this.data[key]
  }
}

module.exports = ServerModel;