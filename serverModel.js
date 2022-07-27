class ServerModel {

  add(keyValuePair) {

  }

  retrieve(key) {
    if (key === 'animal') {
      return 'cat'
    } else if (key === 'pet') {
      return 'dog'
    }
  }
}

module.exports = ServerModel;