# bnuuy.link

**See this app live on the web: https://bnuuy.link**

A simple Next.js 13 URL shortener app that runs on Vercel's Edge Network and
uses [Vercel KV][vercel-kv-url] to store the shortened URLs. This app was more
of an experiment to see how Vercel's new Redis-based key-value store works and
familiarize myself more with Next.js 13 and the new App Router.

You can feel free to use this app as a template for your own personal URL
shortener. For the most optimal experience, you probably want to distribute
Vercel KV reads across multiple regions. This is currently only available in
Vercel's paid plans.

## License

MIT.

[vercel-kv-url]: https://vercel.com/storage/kv
