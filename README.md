# :oncoming_automobile: Project Car Shop

Apply the OOP principles to build a CRUD API to manage a dealership and vehicles using the MongoDB database.

##	:hammer_and_wrench: Tools

:green_circle: Typescript

In this project I was able to practice the following concepts:

:large_blue_circle: Object Oriented Programming pillars: Inheritance, Abstraction, Encapsulation, and Polymorphism;
<br>

:large_blue_circle: Composition;
<br>

:large_blue_circle: Interfaces;
<br>

:large_blue_circle: Implement in TypeScript: Classes, Instances, Attributes, Methods, and Objects;
<br>

:large_blue_circle: Apply MongoDB, TypeScript, and OOP knowledge to create a CRUD API
<br>

## :wrench:  Setup

Clone the repository:

```
git clone git@github.com:crisnabto/CarShop.git
```

<details>
  <summary><strong>🐋 Running on Docker vs Locally</strong></summary><br />
  
  ## On Docker

  **⚠ Before starting, your docker-compose needs to be version 1.29 or higher. [See here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) or [in the documentation](https://docs.docker.com/compose/install/) how to install it.In the first article, you can replace `1.26.0` with `1.29.2`.**

  > :information_source: Run the `node` and `db` services with the command `docker-compose up -d`.
  
  - These services will initialize a container named `car_shop` and another named `car_shop_db`.
  - From here you can run the `car_shop` container via CLI or open it in VS Code..
  
  > :information_source: Use the command `docker exec -it car_shop bash`.

  - It will give you access to the interactive terminal of the container created by compose, which is running in the background.

  > :information_source:  Install dependencies [**If any**] with `npm install` 
    
  - **⚠ Attention:** If you choose to use Docker, **ALL** commands available in `package.json` (npm start, npm test, npm run dev, ...) must be executed **INSIDE** the container, i.e., in the terminal that appears after executing the `docker exec` command mentioned above. 
  
---
  
  ## Without Docker
  
  > Install dependencies [**If any**] with `npm install

  ✨ **Tip:** To run the project in this way, you must have `Node` installed on your computer.

  ✨ **Tip:** The project expects the `Node` version used to be 16.

  <br/>
</details>

## :motorway: Routes

The project runs on port 3001. Access the endpoint /api-docs to find the API Routes documentation

## :computer: Technologies used

- Typescript
- MongoDB
- Mongoose
- NodeJS
- Docker
- Mocha
- Chai
- Sinon
- POO
- Swagger for API documentation
