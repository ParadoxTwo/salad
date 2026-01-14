export async function GET() {
  try {
    const [plansRes, geoRes] = await Promise.all([
      fetch('https://stats-api.salad.com/metrics/plans?period=total'),
      fetch('https://stats-api.salad.com/metrics/geo_counts')
    ]);

    const plans = await plansRes.json();
    const geo = await geoRes.json();

    // Set CORS for Webflow
    return Response.json(
      { plans, geo },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : 'Unknown error';
    return Response.json(
      { error: 'Failed to fetch Salad stats', details: error },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );
  }
}