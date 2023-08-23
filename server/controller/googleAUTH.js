const { OAuth2Client } = require('google-auth-library');
require("dotenv").config();
const CLIENT_ID = process.env.GOOGOLE_cLIENT_ID; // Replace with your actual client ID


let googleAUTH = (req, res) => {
    const { token } = req.body;
    const client = new OAuth2Client(CLIENT_ID);
  
    async function verify() {
      try {
        const ticket = await client.verifyIdToken({
          idToken: token,
          audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userId = payload.sub;
        // Perform necessary actions with the obtained user ID (e.g., check if the user exists in the database)
        // Return a response or JWT token to the client
        return res.status(200).json({message : "auth success..."})
      } catch (error) {
        console.error('Error verifying Google token:', error);
        res.sendStatus(400); // Or handle the error in an appropriate way
      }
    }

    
  verify();
}

module.exports = {
    googleAUTH
}