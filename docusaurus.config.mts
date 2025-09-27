import {themes as prismThemes} from 'prism-react-renderer'

import type * as Preset from '@docusaurus/preset-classic'
import type {Config} from '@docusaurus/types'

export default {
	title: 'R+B 玩机乐园',
	tagline: '速通 ROOT 就此开始！',
	favicon: 'img/logo.ico',

	future: {v4: true},

	url: 'https://root.oom-wg.dev',
	baseUrl: '/',

	scripts: process.env.NODE_ENV === 'production' ? [{src: '/umeng.js'}] : [],

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'zh-Hans',
		locales: ['zh-Hans']
	},

	presets: [
		[
			'classic',
			{
				docs: {sidebarPath: 'sidebars.mts'},
				blog: false
			} satisfies Preset.Options
		]
	],

	themes: [
		[
			require.resolve('@easyops-cn/docusaurus-search-local'),
			{
				hashed: true,
				language: ['en', 'zh']
			}
		]
	],

	themeConfig: {
		tableOfContents: {maxHeadingLevel: 6},
		navbar: {
			title: 'R+B 玩机乐园',
			logo: {
				alt: 'R+B Logo',
				src: 'img/logo.webp'
			},
			items: [
				{
					to: '/docs/gt',
					label: 'GT 系列',
					position: 'left'
				},
				{
					to: '/docs/neo',
					label: 'Neo 系列',
					position: 'left'
				},
				{
					to: '/qq',
					label: 'QQ 群',
					position: 'left'
				},
				{
					href: 'https://oom-wg.dev/join',
					label: 'OOM',
					position: 'right'
				},
				{
					href: 'https://github.com/OOM-WG/RPB-Docs',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'ROOT 教程',
					items: [
						{
							label: 'GT 系列',
							to: '/docs/gt'
						},
						{
							label: 'Neo 系列',
							to: '/docs/neo'
						}
					]
				},
				{
					title: '玩机资源',
					items: [
						{
							label: '全系列官方升/降级包',
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
			copyright: `Licensed under the <a href="https://license.fileto.download/" target="_blank">F2DLPR License</a>. Copyright © 2016-${new Date().getFullYear()} <a href="https://shiror.ren/" target="_blank">ShIroRRen</a>. Built with <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ['dart', 'bash', 'groovy']
		}
	} satisfies Preset.ThemeConfig
} satisfies Config
