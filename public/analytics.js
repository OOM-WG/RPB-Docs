;(function () {
	if (['127.0.0.1', 'localhost'].includes(window.location.hostname)) return
	function onerror() {
		console.error(
			'%c ERROR!!! ',
			'color: white; background: red; font-size: 88px; font-weight: bold; padding: 22px;'
		)
	}

	;(function (c, l, a, r, i, t, y) {
		c[a] =
			c[a] ||
			function () {
				;(c[a].q = c[a].q || []).push(arguments)
			}
		t = l.createElement(r)
		t.async = 1
		t.src = 'https://www.clarity.ms/tag/' + i
		t.onerror = onerror
		y = l.getElementsByTagName(r)[0]
		y.parentNode.insertBefore(t, y)
	})(window, document, 'clarity', 'script', 'v4dc2qbm5m')
	// Clarity: https://clarity.microsoft.com/

	const script = document.createElement('script')
	script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
	script.defer = true
	script.setAttribute('data-cf-beacon', `{"token": "8d9aea5da8324e478aae6f32f0cf6837"}`)
	script.onerror = onerror
	document.head.appendChild(script)
	// Cloudflare Web Analytics: https://www.cloudflare.com/web-analytics/
})()
