describe('server',() => {
  it('extracts a key value pair from search query values and returns them',() => {
    fetch('http://localhost:4000/set?animal=cat')
      .then(
        fetch('http://localhost:4000/get?key=animal')
        .then(response => response.json())
        .then(data => expect(data).toEqual('cat'))
        .catch((error) => { 
          console.error(error);
        }));
  })
})
