const { createServer: https } = require('https');
// const https = require('https');
const { createServer: http } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const { default: axios } = require('axios');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

const ports = {
	http: 3080,
	https: 3002,
};

const httpsOptions = {
	key: fs.readFileSync('private.pem'),
	cert: fs.readFileSync('public.pem'),
};

axios.post('');

app.prepare().then(() => {
	http((req, res) => {
		const parsedUrl = parse(req.url, true);
		handle(req, res, parsedUrl);
	}).listen(ports.http, (err) => {
		if (err) throw err;
	});

	https(httpsOptions, (req, res) => {
		const parsedUrl = parse(req.url, true);
		handle(req, res, parsedUrl);
	}).listen(ports.https, (err) => {
		if (err) throw err;
	});
});
