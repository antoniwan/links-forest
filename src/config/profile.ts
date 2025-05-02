export type ProfilePictureFallback = "initials" | "avatar";

export interface ProfileConfig {
  pictureFallback: ProfilePictureFallback;
  avatarSeed?: string;
}

export const profileConfig: ProfileConfig = {
  pictureFallback: "initials",
  avatarSeed: undefined,
};
