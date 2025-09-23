import React, {type ReactNode} from 'react'

import Admonition from '@theme/Admonition'

export default function ({name}: {name: string}): ReactNode {
	return (
		<Admonition
			type='note'
			children={
				<>
					该机型的海外版名称为 <code>{name}</code>
				</>
			}
		/>
	)
}
