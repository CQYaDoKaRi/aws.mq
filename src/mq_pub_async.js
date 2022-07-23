const mq = require("./mq");

// settings - publish 回数
const nPublish = process.argv[2] ? +process.argv[2] : 1;

mq.pub_async(nPublish);