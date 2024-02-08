import { z } from "zod";

const createTenantSchema = z.object({
  name: z.string(),
  subdomain: z.string(),
});

export type CreateTenant = z.infer<typeof createTenantSchema>;

export default {
  createTenantSchema,
};
