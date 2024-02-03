import fastify from "fastify";

import modules from "./modules";

export async function build() {
  const app = fastify({
    logger: true,
  });

  app.register(modules);

  return app;
}
