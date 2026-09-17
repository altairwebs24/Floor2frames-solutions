const BUCKET = "https://xrhjatxblertzehxixkr.supabase.co/storage/v1/object/public/media";

export const media = {
  heroVideo: `${BUCKET}/floor2frames-hero.webm`,
  logo: `${BUCKET}/floor2frames-logo.png`,
  bathroom: `${BUCKET}/seamless-bathroom.jpg`,
  commercial: `${BUCKET}/commercial-finish.jpg`,
  wall: `${BUCKET}/decorative-wall.jpg`,
} as const;
