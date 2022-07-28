describe('server',() => {
  it('extracts a key value pair from search query values and returns them',() => {
    fetch('http://localhost:3000/set?animal=cat')
      .then(
        fetch('http://localhost:3000/get?key=animal')
        .then(response => response.json())
        .then(data => expect(data).toEqual('cat'))
        .catch((error) => { 
          console.error(error);
        }));
  })

  it('extracts a different key value pair and returns its value',() => {
    fetch('http://localhost:3000/set?pet=dog')
    .then(
      fetch('http://localhost:3000/get?key=pet')
      .then(response => response.json())
      .then(data => expect(data).toEqual('dog'))
      .catch((error) => { 
        console.error(error);
      }));
  })

  it('creates multiple key value pairs and retrieves their value',() => {
    fetch('http://localhost:3000/set?pet=dog')
      .then(
        fetch('http://localhost:3000/set?animal=cat'))
          .then(
            fetch('http://localhost:3000/get?key=animal')
            .then(response => response.json())
            .then(data => expect(data).toEqual('cat'))
            .catch((error) => { 
              console.error(error);
            })
          .then(
            fetch('http://localhost:3000/get?key=pet')
            .then(response => response.json())
            .then(data => expect(data).toEqual('dog'))
            .catch((error) => { 
              console.error(error);
            })
          ));
  });

  it('assigns an empty string if no value is given to a key',() => {
    fetch('http://localhost:3000/set?name')
    .then(
      fetch('http://localhost:3000/get?key=name')
      .then(response => response.json())
      .then(data => expect(data).toEqual(''))
      .catch((error) => { 
        console.error(error);
      }));
  })

  it('can assign multiple key value pairs simultaneously',() => {
    fetch('http://localhost:3000/set?flower=rose&book=read')
    .then(
      fetch('http://localhost:3000/get?key=flower')
      .then(response => response.json())
      .then(data => expect(data).toEqual('rose'))
      .catch((error) => { 
        console.error(error);
      })
    .then(
      fetch('http://localhost:3000/get?key=book')
      .then(response => response.json())
      .then(data => expect(data).toEqual('read'))
      .catch((error) => { 
        console.error(error);
      })
    ))
  })

  it('maintains capital letters in the value when included',() => {
    fetch('http://localhost:3000/set?myanimal=CAT')
      .then(
        fetch('http://localhost:3000/get?key=myanimal')
        .then(response => response.json())
        .then(data => expect(data).toEqual('CAT'))
        .catch((error) => { 
          console.error(error);
        }));
  })

  it('maintains capital letters in the key when included',() => {
    fetch('http://localhost:3000/set?myAnimal=CAT')
      .then(
        fetch('http://localhost:3000/get?key=myAnimal')
        .then(response => response.json())
        .then(data => expect(data).toEqual('CAT'))
        .catch((error) => { 
          console.error(error);
        }));
  })

  it('can differentiate between a key with capital letters and a key without', () => {
    fetch('http://localhost:3000/set?plant=rose&PLANT=happy')
    .then(
      fetch('http://localhost:3000/get?key=plant')
      .then(response => response.json())
      .then(data => expect(data).toEqual('rose'))
      .catch((error) => { 
        console.error(error);
      })
    .then(
      fetch('http://localhost:3000/get?key=PLANT')
      .then(response => response.json())
      .then(data => expect(data).toEqual('happy'))
      .catch((error) => { 
        console.error(error);
      })
    ))
  })
  
  it('allows you to assign special characters',() => {
    fetch('http://localhost:3000/set?error=???')
      .then(
        fetch('http://localhost:3000/get?key=error')
        .then(response => response.json())
        .then(data => expect(data).toEqual('???'))
        .catch((error) => { 
          console.error(error);
        }));
  })

  it('accepts special characters in the key',() => {
    fetch('http://localhost:3000/set????=question')
      .then(
        fetch('http://localhost:3000/get?key=???')
        .then(response => response.json())
        .then(data => expect(data).toEqual('question'))
        .catch((error) => { 
          console.error(error);
        }));
  })

})
