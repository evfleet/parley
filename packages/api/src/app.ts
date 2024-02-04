import fastify from "fastify";

import modules from "./modules";
import database from "./plugins/database";

export async function build() {
  const app = fastify({
    logger: true,
  });

  app.register(database);
  app.register(modules);

  return app;
}
