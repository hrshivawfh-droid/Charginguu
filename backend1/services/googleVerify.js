// services/googleVerify.js
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verifyGoogleIdToken(idToken) {
  const ticket = await client.verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID });
  return ticket.getPayload(); // contains sub, email, email_verified, name, picture...
}
module.exports = { verifyGoogleIdToken };
