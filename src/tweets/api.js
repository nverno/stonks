/**
 * simple twitter api to get recent cashtags data
 */
// const OAuth = require('oauth');
// const OAuth2 = OAuth.OAuth2;
// const Twit = require('twit');
// var URL, URLSearchParams, fetch;
if (typeof window === 'undefined') {
  var fetch = require('node-fetch');
  var { URL, URLSearchParams } = require('url');
} else {
  var { fetch, URL, URLSearchParams } = window;
}

// use proxy as workaround for cors
const PROXY_URL = 'https://stonks-proxy.herokuapp.com/api/tweets';
// const PROXY_URL = 'http://localhost:5000/api/tweets';
const BASE_URL = PROXY_URL; // + 'https://api.twitter.com';

class TwitterAPI {
  constructor(options) {
    this.options = options;
    // this.consumerKey = twitterConsumerKey;
    // this.consumerSecretKey = twitterConsumerSecretKey;
    // this.bearerToken = twitterBearerToken;
  }

  // Search API params:
  // https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent
  // Just get last 100 (max) results (constrained to last 7 days)
  async recentCashtag(cashtag) {
    let url = new URL(BASE_URL + '/search');
    const params = [
      ['query', cashtag],
      ['tweet.fields', 'created_at,entities'], // filter only tweets w/ cashtags
      ['max_results', '100'],
    ];
    url.search = new URLSearchParams(params).toString();
    return fetch(url);
  }

  // https://developer.twitter.com/en/docs/authentication/oauth-2-0/application-only
  // 1. ${twitterConsumerKey}:${twitterConsumerSecretKey}
  // 2. url encode
  // 3. base64 encode
  // async getBearerToken() {
  //   if (this.bearerToken) return new Promise.resolve(this.bearerToken);
  //   if (!this.consumerKey || !this.consumerSecretKey)
  //     throw new Error('No twitter API credentials');

  //   let encoded = btoa(
  //     encodeURI(this.twitterConsumerKey) +
  //       ':' +
  //       encodeURI(this.twitterConsumerSecretKey)
  //   );

  //   let resp = await fetch(`${BASE_URL}/oauth2/token`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  //       Authorization: `Basic ${encoded}`,
  //       'X-Requested-With': 'XMLHttpRequest',
  //     },
  //     body: 'grant_type=client_credentials',
  //   });

  //   let json = await resp.json();
  //   console.log('token: ', json);
  //   return json.access_token;
  // }

  // Lookup recent tweets containing query
  // this uses application-only auth with bearer token
  // async searchTweets(query) {
  //   if (!this.bearerToken)
  //     throw new Error('Bearer token required for Twitter API');

  //   return fetch(BASE_URL + '/1.1/search/tweets.json?q=$' + encodeURI(query), {
  //     headers: {
  //       Authorization: `Bearer ${this.bearerToken}`,
  //     },
  //   });
  // }
}

export default TwitterAPI;
