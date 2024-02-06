import { z } from "zod";

const createDiscussionSchema = z.object({});

export type CreateDiscussion = z.infer<typeof createDiscussionSchema>;

const discussionIdSchema = z.object({
  discussionId: z.string(),
});

export type DiscussionId = z.infer<typeof discussionIdSchema>;

export default {
  createDiscussionSchema,
  discussionIdSchema,
};
