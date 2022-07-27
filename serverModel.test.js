const ServerModel = require('./serverModel')

describe('ServerModel',() => {
  it('saves a key value pair and returns the value when given the key',() => {
    model = new ServerModel
    model.add({'animal':'cat'})
    expect(model.retrieve('animal')).toEqual('cat');
  })
})