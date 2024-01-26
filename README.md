final command - 

 - docker build --target=development . -t testapp 

 - dev mode - docker run --network net1 -e MONGO_URI="mongodb://netvolmongo:27017/mydatabase" -p 3000:3000 -v .:/usr/src/app --name tapp testapp

 - docker run -v mongovol --network net1 -p 27017:27017 --name netvolmongo -d mongo

 - Install Node.js
 - cd into folder
 - npm install
 - node index.js


## Solution
The solution to the assignment is that we first copy over package.json and package-lock.json , run npm install followed by copying over the code

This way, the layer which runs npm install can be cached until package.json isn't changed, which doesn't happen very often in the lifecycle of a project
