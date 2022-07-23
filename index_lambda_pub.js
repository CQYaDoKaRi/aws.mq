const mq = require("./src/mq");

exports.handler = async (event) => {    
    await mq.pub_async(event.nPublish ? event.nPublish : 1);

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
