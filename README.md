final command - 

 - docker build --target=development . -t testapp 

 - dev mode - docker run --network net1 -e MONGO_URI="mongodb://netvolmongo:27017/mydatabase" -p 3000:3000 -v .:/usr/src/app --name tapp testapp

 - docker run -v mongovol --network net1 -p 27017:27017 --name netvolmongo -d mongo

###Minikube IP not accessible
 - minikube service webapp-service

 ###reference

 1. https://kubernetes.io/
 2. https://gitlab.com/nanuchi/k8s-in-1-hour
 3. https://gitlab.com/nanuchi/developing-with-docker