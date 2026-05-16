import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Users CRUD API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],

    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Felipe",
            },
            email: {
              type: "string",
              example: "felipe@teste.email.com",
            },
            idade: {
              type: "integer",
              example: 30,
            },
            tipo_documento: {
              type: "string",
              example: "CPF",
            },
            nro_documento: {
              type: "string",
              example: "123.456.789-90",
            },
            telefone: {
              type: "string",
              example: "(11) 98765-4321",
            },
            endereco: {
              type: "string",
              example: "Rua Exemplo, 123, Cidade, Estado",
            },
          },
        },

        Product: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            name: {
              type: "string",
              example: "Laptop",
            },
            price: {
              type: "number",
              example: 1000.0,
            },
          },
        },

        Order: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            userId: {
              type: "integer",
              example: 1,
            },
            productId: {
              type: "integer",
              example: 1,
            },
            quantity: {
              type: "integer",
              example: 2,
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"], // importante!
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
