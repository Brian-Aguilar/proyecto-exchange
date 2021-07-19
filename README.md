# Cambio de moneda
Una página web de cambio de moneda con [Vue3](https://v3.vuejs.org/).

API utilizada, pagina web de la [API](https://exchangerate.host/#/docs):

```http
https://api.exchangerate.host
https://api.exchangerate.host/convertfrom=PEN&to=USD
https://api.exchangerate.host/timeseriesstart_date=2021-07-14&end_date=2021-07-18&base=PEN&symbols=USD
```

Utilice [Vite](https://vitejs.dev/guide/) para crear el proyecto.

Configuración de para que funcione en github-pages:

[Video](https://www.youtube.com/watch?v=yo2bMGnIKE8) donde saque la configuración.


```javascript
// Configurar en vite.config.js
	export default defineConfig({
		base: "/nombre-de-la-repo/",
		...
    })
```

```bash
	npm run build
	git add build -f
	git commit -m "..."
	git subtree push --prefix dist origin gh-pages
```

