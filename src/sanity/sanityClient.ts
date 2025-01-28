// sanityClient.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',        // Or your dataset name
  apiVersion: '2025-01-24',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: process.env.SANITY_API_TOKEN,
});