import React, {type ReactNode} from 'react'

import Admonition from '@theme/Admonition'

export default function ({opt}: {opt: string}): ReactNode {
	return (
		<>
			<Admonition
				type='note'
				children={
					<>
						已经开启过 <code>开发者模式</code> 和 <code>{opt}</code> 的不需要重复开启！
					</>
				}
			/>
			<ol>
				<li>
					进入系统的 <code>设置</code> 软件
				</li>
				<li>
					进入 <code>关于本机</code> 页面的 <code>版本信息</code> 子页面，连续点击{' '}
					<code>版本号</code> 七次以开启 <code>开发者模式</code>
				</li>
				<li>
					再从 <code>系统设置</code> 页面进入 <code>开发者模式</code> 子页面，找到{' '}
					<code>{opt}</code> 的开关，将其打开
				</li>
			</ol>
		</>
	)
}
