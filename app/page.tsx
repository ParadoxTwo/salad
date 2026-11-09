export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Salad Stats API
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Open API for fetching Salad statistics including plans and geographic data.
          </p>
        </div>

        <div className="space-y-8">
          {/* Endpoint */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-zinc-50">
              GET /api/stats
            </h2>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              Fetches aggregated statistics from Salad's metrics API, including plan metrics and geographic counts.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Request
                </h3>
                <div className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-800">
                  <code className="text-sm text-zinc-900 dark:text-zinc-50">
                    GET /api/stats
                  </code>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Response
                </h3>
                <div className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-800">
                  <pre className="overflow-x-auto text-sm text-zinc-900 dark:text-zinc-50">
{`{
  "plans": { /* plan metrics data */ },
  "geo": { /* geographic counts data */ }
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Error Response
                </h3>
                <div className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-800">
                  <pre className="overflow-x-auto text-sm text-zinc-900 dark:text-zinc-50">
{`{
  "error": "Failed to fetch Salad stats",
  "details": "error message"
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Example Usage
                </h3>
                <div className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-800">
                  <pre className="overflow-x-auto text-sm text-zinc-900 dark:text-zinc-50">
{`fetch('/api/stats')
  .then(res => res.json())
  .then(data => console.log(data));`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  CORS
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  This endpoint allows requests from any origin (<code className="rounded bg-zinc-200 px-1.5 py-0.5 dark:bg-zinc-700">*</code>), making it suitable for use in web applications and Webflow sites.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


