// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	if (req.method === 'POST') {
		const url = 'https://10.3.35.196:10011/api/image';
		const data = req.body;
		const payload = {
			method: 'POST',
			headers: { 'Content-Type': 'image/jpeg' },
			body: data,
			rejectUnauthorized: false,
		};

		process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
		fetch(url, payload)
			.then((response) => response.text())
			.then((result) => {
				res.send(result);
			})
			.catch((err) => console.log('err', err));
	}
}
