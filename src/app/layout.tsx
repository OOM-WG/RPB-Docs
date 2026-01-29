import {DocsLayout} from 'fumadocs-ui/layouts/docs'
import {RootProvider} from 'fumadocs-ui/provider/next'
import {Metadata} from 'next'
import {Ubuntu} from 'next/font/google'
import Script from 'next/script'

import {docsConfig, docsOptions, source} from '@/lib/source'
import Clarity from '@/widgets/clarity'
import SearchDialog from '@/widgets/ui/search'

import './global.css'

const ubuntu = Ubuntu({weight: ['300', '400', '500', '700'] as const})

export default ({children}: LayoutProps<'/'>) => (
	<html lang='zh-Hans' className={ubuntu.className} suppressHydrationWarning>
		<head>
			{process.env.NODE_ENV === 'production' && (
				<script
					dangerouslySetInnerHTML={{
						__html: `(${function () {
							if (['127.0.0.1', 'localhost'].includes(window.location.hostname)) return
							function onerror() {
								console.error(
									'%c ERROR!!! ',
									'color: white; background: red; font-size: 88px; font-weight: bold; padding: 22px;'
								)
							}
							;(function (script) {
								script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
								script.defer = true
								script.setAttribute(
									'data-cf-beacon',
									`{"token": "8d9aea5da8324e478aae6f32f0cf6837"}`
								)
								script.onerror = onerror
								document.head.appendChild(script)
							})(document.createElement('script'))
							// Cloudflare Web Analytics: https://www.cloudflare.com/web-analytics/
						}})()`
					}}
				/>
			)}
			<Clarity />
		</head>
		<body className='flex flex-col min-h-screen'>
			<RootProvider
				search={{SearchDialog}}
				i18n={{
					locale: 'zh-Hans',
					translations: {
						search: '搜索一下',
						searchNoResult: '没搜到喵...',
						toc: '在此页面...',
						lastUpdate: '最后喵喵于：'
					}
				}}>
				<DocsLayout tree={source.getPageTree()} {...docsOptions}>
					{children}
				</DocsLayout>
			</RootProvider>
		</body>
	</html>
)

export const metadata = {
	metadataBase: docsConfig.baseUrl,
	applicationName: docsConfig.title,
	title: {
		template: `%s | ${docsConfig.title}`,
		default: docsConfig.title
	},
	authors: docsConfig.authors,
	creator: docsConfig.authors[0].name,
	publisher: docsConfig.authors[0].name,
	openGraph: {
		title: {
			template: `%s | ${docsConfig.title}`,
			default: docsConfig.title
		},
		siteName: docsConfig.title,
		type: 'website' as const
	},
	twitter: {
		title: {
			template: `%s | ${docsConfig.title}`,
			default: docsConfig.title
		},
		card: 'summary_large_image' as const
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true
		}
	},
	verification: {
		other: {'baidu-site-verification': 'codeva-4jIuP1Zq6x'}
	}
} satisfies Metadata
