     export default function handler(request, response) {
       const { userId, adViewId } = request.query;
     
       if (!userId || !adViewId) {
         return response.status(400).json({ error: 'Missing userId or adViewId' });
       }
     
       console.log(`Ad view recorded for user ${userId}, adViewId: ${adViewId}`);
     
       response.status(200).json({ message: 'Ad view recorded' });
     }
