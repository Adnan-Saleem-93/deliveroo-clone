import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'w4lsvpjx',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token:
    'skeMECtcl41tABZQNWnCiZRWAZIfzdTfKDSJrKmToIby4aT3xFrUZBK39qlI5ze13DtFT1jl9nbQLyTjUJ3ob3B8PyVhhPvY4MG0dYY0AhqccNc4xqWt7NoyQ9CphIDcChvn5zzEknfY1YrKjVbcRAcGMzEMNrLAi5TTQ9c2kfrGmLeynMkw', // Needed for certain operations like updating content or accessing previewDrafts perspective
})
