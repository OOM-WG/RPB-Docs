import React, {type ReactNode} from 'react'

import Admonition from '@theme/Admonition'

export default function ({ui}: {ui: number}): ReactNode {
	return (
		<Admonition
			type='info'
			children={
				<>
					<p>
						该机型可以正常走官方渠道解锁，需要在{' '}
						<strong>
							UI
							<code>{ui}</code>{' '}
						</strong>
						才可解锁
					</p>
					<blockquote>
						<p>
							回退包可在{' '}
							<a href='https://latestfile.zip/system/gt-neo' target='_blank'>
								Latest File
							</a>{' '}
							中找到
						</p>
					</blockquote>
				</>
			}
		/>
	)
}
