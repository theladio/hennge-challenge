const { totp } = require('otplib');
const base64 = require('base-64');
const utf8 = require('utf8');
const axios = require('axios');

const userId = 'hello@thelad.io';
const secret = `${userId}HENNGECHALLENGE003`;
const body = {
  'github_url': 'https://github.com/theladio/hennge-challenge',
  'contact_email': userId,
};

totp.options = {
  algorithm: 'sha512',
  digits: 10,
};

const token = totp.generate(secret);
const tokenString = `${userId}:${token}`;
const bytes = utf8.encode(tokenString);
const basicAuth = base64.encode(bytes);

const submitChallenge = async () => {
  try {
    const apiURL = 'https://api.challenge.hennge.com/challenges/003';
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${basicAuth}`,
      }
    };
    console.log('Making API-request...', { apiURL, body, config });

    const res = await axios.post(apiURL, JSON.stringify(body), config);
    console.log(res.data);
  } catch (err) {
    console.error(err.response.data);
  };
};

submitChallenge();
