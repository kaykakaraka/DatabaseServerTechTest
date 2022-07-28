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

  it('returns a different value for animal',() => {
    model = new ServerModel
    model.add({'animal':'dog'})
    expect(model.retrieve('animal')).toEqual('dog');
  })

  it('saves multiple key value pairs',() => {
    model = new ServerModel
    model.add({'animal':'cat'})
    model.add({'pet':'dog'})
    expect(model.retrieve('animal')).toEqual('cat');
    expect(model.retrieve('pet')).toEqual('dog');
  })
})