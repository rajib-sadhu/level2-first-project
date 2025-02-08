import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    const test = await mongoose.connect(config.database_url as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(config.port, () => {
      console.log(`First project app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
