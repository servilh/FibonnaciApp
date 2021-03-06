# FIBONNACI APP

## Backend
Backend is a web api service developed with NodeJS / TypeScript / Express. 

I always use Typescript in the backend for the following reasons:
- In order to have a better code organizing and object-arranged programming procedures.
- I like to have the same language in both parts, back and front. 
- TypeScript features mistakes at arrangement time while JavaScript, at the runtime

I choose Express such as communication layer in order to provide a REST API in my application. 

The project is also prepare for run inside dockers.

The structure of the project is quite simple: 

- Index.ts where we start the express service listening in the port configured in .env
- In the route folder we will have each route the web api expose, organize by entities. In this case we only have fibonnaci entity.
- In the model folder we will have the definition of each entity. In this case we only have a fibonnaci class to provide the creation of the logic array.

## Fronted

Frontend is developed using Angular and Ionic Framework. 

We choose Angular to simply the development of web applications, thanks to it's modular development structure. Angular main benefit was that it let you turn HTML-based documents into dynamic content. 

In order to prepare our code to a cross-platform app we use Ionic which gives as a collections of UI components and modules.

Project structure is the following:

- Pages folder: contains the pages where you can navigate in the app
- Components folder: contains custom UI components which we can use across the app
- Service folder: contains the services to conect to our web API server.
