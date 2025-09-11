export const Level = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
} as const;

export type LevelType = (typeof Level)[keyof typeof Level];

export const LEVELS = Object.values(Level);
export const LEVEL_PATHS: Record<LevelType, string> = {
  [Level.BEGINNER]: "/beginner",
  [Level.INTERMEDIATE]: "/intermediate",
  [Level.ADVANCED]: "/advanced",
};
