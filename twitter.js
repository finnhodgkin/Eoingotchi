const Twitter = require('twitter')

const config = {
  consumer_key: process.env.T_CONSUMER_KEY,
  consumer_secret: process.env.T_COMSUMER_SECRET,
  access_token_key: process.env.T_ACCESS_KEY,
  access_token_secret: process.env.T_ACCESS_KEY,
};

module.export = (config) => {
  const client = new Twitter(config)
  return client
}
