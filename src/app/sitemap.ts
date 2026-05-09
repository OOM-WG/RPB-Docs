import type { MetadataRoute } from 'next'

import { docsConfig, source } from '@/lib/source'

export const revalidate = false

export default () =>
	source.getPages().map(
		page =>
			({
				url: `${docsConfig.baseUrl}${page.url}`,
				lastModified: (page.type === 'docs' ? page.data.lastModified : null) ?? new Date(),
				changeFrequency: 'always',
				priority: page.url === '/' ? 1 : 0.88
			}) satisfies MetadataRoute.Sitemap[number]
	) satisfies MetadataRoute.Sitemap
