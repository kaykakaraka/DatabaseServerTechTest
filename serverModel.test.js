const ServerModel = require('./serverModel')

describe('ServerModel',() => {
  it('saves a key value pair and returns the value when given the key',() => {
    const model = new ServerModel
    model.add({'animal':'cat'})
    expect(model.retrieve('animal')).toEqual('cat');
  })

  it('saves a different key value pair and returns the value',() => {
    const model = new ServerModel
    model.add({'pet':'dog'})
    expect(model.retrieve('pet')).toEqual('dog');
  })

  it('returns a different value for animal',() => {
    const model = new ServerModel
    model.add({'animal':'dog'})
    expect(model.retrieve('animal')).toEqual('dog');
  })

  it('saves multiple key value pairs',() => {
    const model = new ServerModel
    model.add({'animal':'cat'})
    model.add({'pet':'dog'})
    expect(model.retrieve('animal')).toEqual('cat');
    expect(model.retrieve('pet')).toEqual('dog');
  })

  it('overwrites a previous key-value pair',() => {
    const model = new ServerModel
    model.add({'animal':'cat'})
    model.add({'animal':'fish'})
    expect(model.retrieve('animal')).toEqual('fish')
  })

  it('throws an error if it is given a string',() => {
    const model = new ServerModel
    expect(() => {model.add('animal')}).toThrow('Error: Can only add key-value pairs')
  })
})