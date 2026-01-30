import {type OpenAPIServer} from 'fumadocs-openapi/server'
import {Card, Cards} from 'fumadocs-ui/components/card'
import type {OpenAPIV3_1} from 'openapi-types'

import {getMDXWidgets} from '@/lib/mdx'

import SeriesInfo from './series-info.mdx'

export default async ({name, config}: {name: string; config: OpenAPIServer}) => (
	<>
		<SeriesInfo components={getMDXWidgets()} />
		<Cards>
			{Object.entries((await config.getSchemas())[name]!.dereferenced.paths!).map(([key, item]) => {
				const info = item![Object.keys(item!)[0]!.toLocaleLowerCase() as OpenAPIV3_1.HttpMethods]!
				return (
					<Card
						key={key}
						title={info.summary}
						description={info.description}
						href={key.toLowerCase()}
					/>
				)
			})}
		</Cards>
	</>
)
