import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import modules from "./modules";
import database from "./plugins/database";

export async function build() {
  const app = fastify({
    logger: true,
  });

  app.setSerializerCompiler(serializerCompiler);
  app.setValidatorCompiler(validatorCompiler);

  app.register(database);
  app.register(modules);

  return app;
}
