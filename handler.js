'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'M4t3u2!',
        input: event,
      },
      null,
      2
    ),
  };
};
