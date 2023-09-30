import { Member, Profile, Server } from "./prisma/generated/client";

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};
