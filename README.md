final command - 

 - docker build --target=development . -t testapp 

- docker network create net1

 ## imp - create with uniqname likw - "netvolmongo"
 - docker run -v mongovol:/data/db --network net1 -p 27017:27017 --name netvolmongo -d mongo

### use "netvolmongo" at mongouri to use the volume
 - dev mode - docker run --network net1 -e MONGO_URI="mongodb://netvolmongo:27017/mydatabase" -p 3000:3000 -v $(pwd):/usr/src/app --name tapp testapp


###Minikube IP not accessible
 - minikube service webapp-service

 ###reference

 1. https://kubernetes.io/
 2. https://gitlab.com/nanuchi/k8s-in-1-hour
 3. https://gitlab.com/nanuchi/developing-with-docker