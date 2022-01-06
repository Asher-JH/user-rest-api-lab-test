import { app } from './app';

const PORT = process.env.PORT || 3582;

const startServer = async () => {
  try {
    // DO DB SHIT
  } catch (error) {
    console.log(error);
  }

  app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
};

startServer();
