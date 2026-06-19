import path from 'path'

import fs from 'fs-extra'
import { type InferPageType } from 'fumadocs-core/source'
import type { OpenAPIV3_1 } from 'openapi-types'

import { docsConfig, source } from '@/lib/source'

export const getLLMText = async (page: InferPageType<typeof source>) =>
	`# [${page.data.title}](${docsConfig.baseUrl}${page.url})${page.data.description ? `\n\n> ${page.data.description}` : ''}${
		page.type === 'docs'
			? await page.data.getText('processed')
			: `\n\nexport const props = ${JSON.stringify(
					Object.fromEntries(
						page.data
							.getSchema()
							.bundled.paths![page.data.getOpenAPIPageProps().operations![0]!.path]![
								page.data.getOpenAPIPageProps().operations![0]!.method.toLowerCase() as OpenAPIV3_1.HttpMethods
							]!.parameters!.map(param => (param => [param.name, param.example])(param as OpenAPIV3_1.ParameterObject))
					)
				)}\n\n` + fs.readFileSync(path.join(process.cwd(), 'src/app/[[...slug]]/api-page.mdx'))
	}`