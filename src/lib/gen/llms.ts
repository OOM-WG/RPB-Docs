import fs from 'fs-extra'
import {type InferPageType} from 'fumadocs-core/source'
import {OpenAPIV3_1} from 'openapi-types'
import path from 'path'

import {docsConfig, source} from '../source'

export const getLLMText = async (page: InferPageType<typeof source>) =>
	`# ${page.data.title}\n\n> Source: ${'<'}${docsConfig.baseUrl}${page.url}>${
		page.data.type === ('docs' as const)
			? await page.data.getText('processed')
			: `\n\nexport const props = ${JSON.stringify(
					Object.fromEntries(
						page.data
							.getSchema()
							.dereferenced.paths![
								page.data.getAPIPageProps().operations![0].path
							]![page.data.getAPIPageProps().operations![0].method.toLowerCase() as OpenAPIV3_1.HttpMethods]!.parameters!.map(param => [param.name, param.example])
					)
				)}\n\n` + fs.readFileSync(path.join(process.cwd(), 'src/app/[[...slug]]/page.mdx'))
	}`
