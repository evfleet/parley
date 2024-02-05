import { z } from "zod";

const discussionIdSchema = z.object({
  discussionId: z.string(),
});

export type DiscussionId = z.infer<typeof discussionIdSchema>;

export default {
  discussionIdSchema,
};
