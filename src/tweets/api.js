/**
 * simple twitter api to get recent cashtags data
 */
// const OAuth = require('oauth');
// const OAuth2 = OAuth.OAuth2;
// const Twit = require('twit');
var fetch;
if (typeof window === 'undefined') fetch = require('node-fetch');
else fetch = window.fetch;

const BASE_URL = 'https://api.twitter.com/';

class TwitterAPI {
  constructor({
    twitterConsumerKey,
    twitterConsumerSecretKey,
    twitterAccessToken,
    twitterAccessTokenSecret,
  }) {
    this.apiKeys = apiKeys;
    // this.T = new Twit({
    //   consumer_key: apiKeys.twitterConsumerKey,
    //   consumer_secret: apiKeys.twitterConsumerSecretKey,
    //   access_token: apiKeys.twitterAccessToken,
    //   access_token_secret: apiKeys.twitterAccessTokenSecret,
    //   timeout_ms: 60*1000,
    //   strictSSL: true,
    // });
  }

  // async searchCashtag(cashtag) {
  //   return this.T.get('search/tweets', {
  //     q: `$${cashtag}`,
  //   });
  // }
}

export default TwitterAPI;
