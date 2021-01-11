/**
 * simple twitter api to get recent cashtags data
 */
// const OAuth = require('oauth');
// const OAuth2 = OAuth.OAuth2;
// const Twit = require('twit');
var fetch;
if (typeof window === 'undefined') fetch = require('node-fetch');
else fetch = window.fetch;

// use proxy as workaround for cors
const PROXY_URL = 'https://stormy-caverns-29630.herokuapp.com/';
const BASE_URL = PROXY_URL + 'https://api.twitter.com';

class TwitterAPI {
  constructor({
    twitterConsumerKey,
    twitterConsumerSecretKey,
    // twitterAccessToken,
    // twitterAccessTokenSecret,
    twitterBearerToken,
  }) {
    this.consumerKey = twitterConsumerKey;
    this.consumerSecretKey = twitterConsumerSecretKey;
    this.bearerToken = twitterBearerToken;
  }

  // https://developer.twitter.com/en/docs/authentication/oauth-2-0/application-only
  // 1. ${twitterConsumerKey}:${twitterConsumerSecretKey}
  // 2. url encode
  // 3. base64 encode
  async getBearerToken() {
    if (this.bearerToken) return new Promise.resolve(this.bearerToken);
    if (!this.consumerKey || !this.consumerSecretKey)
      throw new Error('No twitter API credentials');

    let encoded = btoa(
      encodeURI(this.twitterConsumerKey) +
        ':' +
        encodeURI(this.twitterConsumerSecretKey)
    );

    let resp = await fetch(`${BASE_URL}/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `Basic ${encoded}`,
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: 'grant_type=client_credentials',
    });

    let json = await resp.json();
    console.log('token: ', json);
    return json.access_token;
  }

  // Lookup recent tweets containing query
  // this uses application-only auth with bearer token
  async searchTweets(query) {
    if (!this.bearerToken)
      throw new Error('Bearer token required for Twitter API');

    return fetch(BASE_URL + '/1.1/search/tweets.json?q=$' + encodeURI(query), {
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
      },
    });
  }
}

export default TwitterAPI;
