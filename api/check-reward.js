     export default function handler(request, response) {
       const { userId, adViewId } = request.query;
     
       if (!userId || !adViewId) {
         return response.status(400).json({ error: 'Missing userId or adViewId' });
       }
     
       const rewardGranted = Date.now() % 2 === 0;
     
       if (rewardGranted) {
         response.status(200).json({ rewarded: true, amount: 15 });
       } else {
         response.status(200).json({ rewarded: false });
       }
     }
