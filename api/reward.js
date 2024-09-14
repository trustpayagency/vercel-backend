export default function handler(request, response) {
  const { userid } = request.query;

  if (!userid) {
    return response.status(400).json({ error: 'Missing userid' });
  }

  console.log(`Reward event received for user ${userid}`);

  response.status(200).json({ message: 'Reward event recorded' });
}
