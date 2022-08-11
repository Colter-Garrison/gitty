/* eslint-disable no-console */
const exchangeCodeForToken = async (code) => {
  console.log(`MOCK INVOKED: exchangeCodeForToken(${code})`);
  return `MOCK_TOKEN_FOR_CODE_${code}`;
};

const getGithubProfile = async (token) => {
  console.log(`MOCK INVOKED: exchangeCodeForToken(${token})`);
  return {
    login: 'user',
    avatar_url: 'https://www.placecage.com/200/300',
    email: 'user@me.com',
  };
};

module.exports = { exchangeCodeForToken, getGithubProfile };
