const mqtt = require("mqtt");
const mqtt_async = require("async-mqtt");
const config = require("./config");

/* -------------------------------------------------
 * functions
 * -------------------------------------------------*/
// subscriber : 非同期
const sub = () => {
    // init
    const client = mqtt.connect(config.endpoint(), config.options("subscribe"));
    client.on("connect", function () {
        console.log(`connect:${config.endpoint()}`);
        client.subscribe(config.topic, function (err) {
            if (err) {
                console.error(err)
            }
        })
    });

    // error
    client.on("error", function (error) {
        console.error(error)
    });

    // message
    client.on("message", function (topic, message) {
        console.log(`message received on ${topic}: ${message.toString()}`)
    });
}

// publisher : 非同期
const pub = (nMax) => {
    // init
    const client = mqtt.connect(config.endpoint(), config.options("publish"));
    client.on("connect", function () {
        console.log(`connect:${config.endpoint()}`);

        for (let n = 0; n < nMax; n++) {
            const msg = `${n + 1}_${config.dateID()}`;
            console.log(`message:${msg}`);

            client.publish(config.topic, msg);
        }
        client.end();
    });

    client.on('error', function (error) {
        console.log(error);
    });
};

// publisher : 同期
const pub_async = async (nMax) => {
    // init
    const client = await mqtt_async.connectAsync(config.endpoint(), config.options("publish"));
    try {
        console.log(`connect:${config.endpoint()}`);

        for (let n = 0; n < nMax; n++) {
            const msg = `${n + 1}_${config.dateID()}`;
            console.log(`message:${msg}`);

            await client.publish(config.topic, msg);
        }
        await client.end();
    }
    catch (error) {
        console.log(error);
    }
};


/* -------------------------------------------------
 * module
 * -------------------------------------------------*/
module.exports = {
    sub: sub
    , pub: pub
    , pub_async: pub_async
};