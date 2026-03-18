import {type Source, loader, multiple} from 'fumadocs-core/source'
import {lucideIconsPlugin} from 'fumadocs-core/source/lucide-icons'
import {docs} from 'fumadocs-mdx:collections/server'
import {createOpenAPI, openapiPlugin, openapiSource} from 'fumadocs-openapi/server'
import {GithubInfo} from 'fumadocs-ui/components/github-info'
import type {BaseLayoutProps} from 'fumadocs-ui/layouts/shared'
import type {Author} from 'next/dist/lib/metadata/types/metadata-types'
import Image from 'next/image'
import Link from 'next/link'
import type {OpenAPIV3_1} from 'openapi-types'
import {type ReactNode} from 'react'

export const docsConfig = {
	title: 'R+B 玩机教程站',
	baseUrl: 'https://root.oom-wg.dev',
	authors: [
		{name: 'ShIroRRen', url: 'https://shiror.ren'},
		{name: 'R+B 玩机乐园', url: 'https://realme.gtrom.eu.org'}
	] satisfies Author[],
	icon: {
		url: new URL('../assets/logo.webp', import.meta.url),
		size: 32
	} satisfies {
		url: URL
		size: number | {width: number; height: number}
	},
	footer: {
		links: [
			{
				title: 'ROOT 教程',
				items: [
					{
						label: 'GT 系列',
						href: '/series/gt'
					},
					{
						label: 'Neo 系列',
						href: '/series/neo'
					}
				]
			},
			{
				title: '玩机资源',
				items: [
					{
						label: '升/降级包',
						href: 'https://latestfile.zip/system/gt-neo'
					},
					{
						label: '优质模块',
						href: 'https://latestfile.zip/module'
					},
					{
						label: '多功能软件',
						href: 'https://suu.oom-wg.dev'
					},
					{
						label: '便用 ROOT 管理器',
						href: 'https://ssu.oom-wg.dev'
					},
					{
						label: 'ROM 购买站',
						href: 'https://realme.gtrom.eu.org/'
					}
				]
			},
			{
				title: '友链',
				items: [
					{
						label: '广告',
						href: 'https://ja7.top/ad'
					},
					{
						label: 'Latest File',
						href: 'https://latestfile.zip'
					},
					{
						label: '回忆溢出工作组',
						href: 'https://oom-wg.dev'
					}
				]
			}
		],
		copyright: (
			<span>
				根据{' '}
				<Link href='https://license.fileto.download/' target='_blank'>
					F2DLPR License
				</Link>{' '}
				授权许可。©️ 2016-{new Date().getFullYear()}{' '}
				<Link href='https://shiror.ren/' target='_blank'>
					白彩恋
				</Link>
				，版权所有，保留一切权利。
				<br />
				本网页使用 <i>Clarity</i>、<i>Cloudflare Web Analytics</i> 监控流量，详见{' '}
				<Link
					href='https://clarity.microsoft.com/terms'
					target='_blank'
					rel='noopener noreferrer'>
					Clarity 使用条款
				</Link>
				、
				<Link
					href='https://www.cloudflare.com/privacypolicy/'
					target='_blank'
					rel='noopener noreferrer'>
					Cloudflare Web Analytics
				</Link>
			</span>
		)
	} satisfies {
		links: {
			title: string
			items: {
				label: string
				href: string
			}[]
		}[]
		copyright: ReactNode
	},
	git: {
		user: 'OOM-WG',
		repo: 'RPB-Docs',
		branch: 'shiror.ren'
	} satisfies {
		user: string
		repo: string
		branch: string
		dir?: string
	} as {
		user: string
		repo: string
		branch: string
		dir?: string
	}
}

export const docsOptions = {
	nav: {
		title: (
			<div className='flex items-center gap-2'>
				<Image
					alt='Logo'
					src='/icon'
					width={32}
					height={32}
					className='rounded-md'
					priority
					unoptimized
				/>
				<span className='font-semibold'>{docsConfig.title}</span>
			</div>
		)
	},
	links: [
		{
			type: 'custom' as const,
			children: <GithubInfo owner={docsConfig.git.user} repo={docsConfig.git.repo} />
		},
		{
			type: 'menu' as const,
			text: 'ROOT 教程',
			items: [
				{
					type: 'main' as const,
					text: 'GT 系列',
					url: '/series/gt'
				},
				{
					type: 'main' as const,
					text: 'Neo 系列',
					url: '/series/neo'
				}
			]
		},
		{
			type: 'main' as const,
			text: 'QQ 群',
			url: '/qq',
			description: '获取免费工具箱资源请加群'
		}
	],
	githubUrl: `https://github.com/${docsConfig.git.user}/${docsConfig.git.repo}`,
	themeSwitch: {mode: 'light-dark-system' as const}
} satisfies BaseLayoutProps as BaseLayoutProps

const defineDocs = (
	input: Record<
		string,
		{
			title: string
			desc: string
			values: Record<string, any>
		}
	>
) => {
	const paths = {} as Record<string, any>

	for (const [path, item] of Object.entries(input))
		paths[path] = {
			get: {
				summary: item.title,
				description: item.desc,
				parameters: Object.entries(item.values).map(([name, value]) => ({
					name,
					in: 'unknown',
					example: value
				})),
				responses: {'200': {description: 'OK'}}
			}
		} satisfies OpenAPIV3_1.PathsObject[string]

	return {
		openapi: '3.2.0' as const,
		info: {title: 'OpenAPI Document', version: '0.0.0'},
		paths
	} satisfies OpenAPIV3_1.Document
}
const defineInfo = (
	input: Record<
		string,
		{
			name: string
			values: Record<string, any>
		}
	>
) => {
	const docsInput = {} as Record<
		string,
		{
			title: string
			desc: string
			values: Record<string, any>
		}
	>

	for (const [path, item] of Object.entries(input))
		docsInput[path] = {
			title: `真我 ${item.name}`,
			desc: `真我 ${item.name} 解锁 & ROOT 教程`,
			values: item.values
		}

	return defineDocs(docsInput)
}

export const gtConfig = (cfg => createOpenAPI({input: () => ({gt: defineInfo(cfg)})}))({
	RMX2086: {
		name: 'X3 超级变焦版',
		values: {cnName: 'none'}
	},
	RMX2202: {
		name: 'GT',
		values: {ramdisk: 'boot', unlock: 5}
	},
	RMX3361: {
		name: 'GT 大师版',
		values: {ramdisk: 'boot', unlock: 'none'}
	},
	RMX3366: {
		name: 'GT 大师探索版',
		values: {ramdisk: 'boot', unlock: 'kona'}
	},
	RMX3310: {
		name: 'GT2',
		values: {ramdisk: 'boot', unlock: 3}
	},
	RMX3300: {
		name: 'GT2 Pro',
		values: {ramdisk: 'boot', unlock: 3}
	},
	RMX3551: {
		name: 'GT2 大师探索版',
		values: {ramdisk: 'boot', unlock: 3}
	},
	RMX3820: {
		name: 'GT5 150W',
		values: {ramdisk: 'init_boot', unlock: 4}
	},
	RMX3823: {
		name: 'GT5 240W',
		values: {ramdisk: 'init_boot', unlock: 4}
	},
	RMX3888: {
		name: 'GT5 Pro',
		values: {ramdisk: 'init_boot', unlock: 5}
	},
	RMX3800: {
		name: 'GT6',
		values: {ramdisk: 'init_boot', unlock: 5}
	},
	RMX5010: {
		name: 'GT7 Pro',
		values: {ramdisk: 'init_boot', unlock: 6}
	},
	RMX5090: {
		name: 'GT7 Pro 竞速版',
		values: {ramdisk: 'init_boot', unlock: 6}
	},
	RMX6688: {
		name: 'GT7 & GT7 阿斯顿马丁F1限量版',
		values: {ramdisk: 'init_boot', unlock: 6}
	},
	RMX6699: {
		name: 'GT8',
		values: {ramdisk: 'init_boot', unlock: 7}
	},
	RMX5200: {
		name: 'GT8 Pro & GT8 Pro 阿斯顿马丁F1限量版',
		values: {ramdisk: 'init_boot', unlock: 7}
	}
})
export const neoConfig = (cfg => createOpenAPI({input: () => ({neo: defineInfo(cfg)})}))({
	RMX3031: {
		name: 'GT Neo',
		values: {glName: 'realme X7 Max', ramdisk: 'boot', unlock: 'mt6893'}
	},
	RMX3350: {
		name: 'GT Neo 闪速版',
		values: {ramdisk: 'boot', unlock: 'mt6893'}
	},
	RMX3370: {
		name: 'GT Neo2 & GT Neo2 龙珠定制版',
		values: {ramdisk: 'boot', unlock: 'kona'}
	},
	RMX3357: {
		name: 'GT Neo2T',
		values: {ramdisk: 'boot', unlock: 'mt6893'}
	},
	RMX3560: {
		name: 'GT Neo3 80W',
		values: {ramdisk: 'boot', unlock: 3}
	},
	RMX3562: {
		name: 'GT Neo3 150W & GT Neo3 150W 火影定制版 & GT Neo3 150W 王者荣耀赛事版',
		values: {ramdisk: 'boot', unlock: 3}
	},
	RMX3371: {
		name: 'GT Neo3T',
		values: {cnName: '真我 Q5 Pro'}
	},
	RMX3700: {
		name: 'GT Neo5 SE',
		values: {ramdisk: 'boot', unlock: 4}
	},
	RMX3706: {
		name: 'GT Neo5 150W',
		values: {glName: 'realme GT3 150W', ramdisk: 'boot', unlock: 4}
	},
	RMX3708: {
		name: 'GT Neo5 240W',
		values: {glName: 'realme GT3 240W', ramdisk: 'boot', unlock: 4}
	},
	RMX3850: {
		name: 'GT Neo6 SE',
		values: {glName: 'realme GT6T', ramdisk: 'init_boot', unlock: 5}
	},
	RMX3852: {
		name: 'GT Neo6',
		values: {glName: 'realme GT6', ramdisk: 'init_boot', unlock: 5}
	},
	RMX5060: {
		name: 'Neo7 & Neo7 不良人限定版',
		values: {ramdisk: 'init_boot', unlock: 6}
	},
	RMX5071: {
		name: 'Neo7x',
		values: {ramdisk: 'init_boot', unlock: 6}
	},
	RMX5080: {
		name: 'Neo7 SE',
		values: {glName: 'realme GT7T', ramdisk: 'init_boot', unlock: 6}
	},
	RMX5062: {
		name: 'Neo7 Turbo',
		values: {ramdisk: 'init_boot', unlock: 6}
	},
	RMX8899: {
		name: 'Neo8',
		values: {ramdisk: 'init_boot', unlock: 7}
	}
})

const seriesSource = [
	await openapiSource(gtConfig, {baseDir: 'series/gt'}),
	await openapiSource(neoConfig, {baseDir: 'series/neo'})
].map(
	src => (
		(src.files = src.files.map(
			file => (
				file.type === 'page' &&
					(file.path = file.path.replace(
						/[\\\/](get|post|put|delete|patch|options|head)\.mdx$/,
						'.mdx'
					)),
				file
			)
		)),
		src
	)
)

export const source = loader(
	multiple({
		docs: docs.toFumadocsSource(),

		gt: seriesSource[0]!,
		neo: seriesSource[1]!
	}),
	{
		baseUrl: '/',
		plugins: [lucideIconsPlugin(), openapiPlugin()]
	}
)
