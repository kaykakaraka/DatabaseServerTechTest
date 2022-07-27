const ServerModel = require('./serverModel')

describe('ServerModel',() => {
  it('saves a key value pair and returns the value when given the key',() => {
    model = new ServerModel
    model.add({'animal':'cat'})
    expect(model.retrieve('animal')).toEqual('cat');
  })

  it('saves a different key value pair and returns the value',() => {
    model = new ServerModel
    model.add({'pet':'dog'})
    expect(model.retrieve('pet')).toEqual('dog');
  })
})