import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import itemRoutes from './routes/itemRoutes';
import errorHandler from './utils/errorHandler';
import sequelize from './config/database';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
// Swagger configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'A simple CRUD API',
    },
  },
  apis: ['./src/routes/*.ts'], // Path to the API docs
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());

//CORS CONF
const corsOptions={
    origin: ['http://localhost:4200','http://localhost:3000'],
    // credentials: true, //
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Routes
app.use('/items', itemRoutes);

// Error handler
app.use(errorHandler);
