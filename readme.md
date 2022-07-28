# Database Server Tech Test

This program is a server that is accessible on http://localhost:4000/

It has the following features:

* When it receives a GET request on http://localhost:4000/set?somekey=somevalue should store the key value pair in memory
* When it receieves a GET request on http://localhost:4000/get?key=somekey it should return the value stored at somekey
* You can store multiple key value pairs on the sever and access each of them
* A new entry with the same key as a previous entry will overwrite that key
* This data is stored in memory.

To Run On Your Computer
---------------------
* Clone this repo using `git clone`
* Run `npm install` to install the dependencies
* Use `npm run start` to start the server on http://localhost:4000/
* Use `npm run start:test` followed by `jest` to run the tests. 

Note: the tests run on port 3000. This has the benefit of meaning you cannot break the tests by interacting with the server on port 4000. As currently the data is stored in memory, it would be unlikely you would break the tests: however, this makes it more possible to add a database in future, as you can run the test database with port 3000 and the real database with 4000.

My Process
------------
I began by diagraming the overall system as shown below.


I then wrote some examples of how I would expect to interact with the server from code, using fetch requests. This gave me a better sense of what I would be testing for.

I then followed a TDD process. I started with the feature tests and then, when these failed, moved to unit tests for the model in order to implement the functionality in the model and expand that into the server as a whole. This enabled me to focus on small chunks of work at a time.

Examples of Use 
-----------------
1:
fetch('http://localhost:4000/set?animal=cat)
.then(http://localhost:4000/get?key=animal)
  .then(response => { should equal cat })

