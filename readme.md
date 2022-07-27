# Database Server Tech Test

This program should: 
* create a server that is accessible on http://localhost:4000/
* When it receives request on http://localhost:4000/set?somekey=somevalue should store the key value pair in memory
* When it receieves request on http://localhost:4000/get?key=somekey it should return the value stored at somekey
* This data is stored in memory.
* At some point (not now) it will need to have a database added

Examples of Use 
-----------------
1:
fetch('http://localhost:4000/set?animal=cat)
.then(http://localhost:4000/get?key=animal)
  .then(response => { should equal cat })

