import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastify from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import modules from "./modules/index.js";

export async function build() {
  const app = fastify({
    logger: true,
  });

  app.setSerializerCompiler(serializerCompiler);
  app.setValidatorCompiler(validatorCompiler);

  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "Parley",
        version: "0.1.0",
      },
    },
    transform: jsonSchemaTransform,
  });
  app.register(fastifySwaggerUI, {
    routePrefix: "/docs",
  });

  app.register(modules);

  return app;
}
