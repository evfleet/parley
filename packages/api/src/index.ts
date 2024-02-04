import "dotenv/config";

import { build } from "./app";

const start = async () => {
  const app = await build();
  const port = 8080;

  try {
    await app.listen({ port });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
