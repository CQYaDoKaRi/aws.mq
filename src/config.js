/* -------------------------------------------------
 * settings
 * -------------------------------------------------*/
// settings - mqtt - endpoint ：ホスト
let host = "";
// settings - mqtt - endpoint ：リージョン
let region = "ap-northeast-1";
// settings - mqtt - endpoint ：ポート番号
let port = 61619;
// settings - mqtt - connect - options ：ユーザー名
let username = "";
// settings - mqtt - connect - options ：パスワード
let password = "";
// settings - mqtt - connect - options ：Cliend ID
let clientId = '';
// settings - mqtt - topic
let topic = "";

/* -------------------------------------------------
 * settings - local
 * -------------------------------------------------*/
// ローカル設定ファイル
const fs = require('fs');
if (fs.existsSync(`${__dirname}/config.local.js`)) {
    const config = require("./config.local.js");
    host = config.host;
    region = config.region;
    port = config.port;
    username = config.username;
    password = config.password;
    clientId = config.clientId;
    topic = config.topic;
}

/* -------------------------------------------------
 * functions
 * -------------------------------------------------*/
const dateID = () => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const MM = ('0' + (d.getMonth() + 1)).slice(-2);
    const dd = ('0' + d.getDate()).slice(-2);
    const hh = ('0' + d.getHours()).slice(-2);
    const mm = ('0' + d.getMinutes()).slice(-2);
    const ss = ('0' + d.getSeconds()).slice(-2);
    const ms = ('0' + d.getMilliseconds()).slice(-2);

    return `${yyyy}${MM}${dd}${hh}${mm}${ss}${ms}`;
};

/* -------------------------------------------------
 * module
 * -------------------------------------------------*/
module.exports = {
    // mqtt - endpoint - host
    host: (v) => {
        if (v) {
            host = v;
        }
        return host;
    }
    // mqtt - endpoint - region
    , region: (v) => {
        if (v) {
            region = v;
        }
        return region;
    }
    // mqtt - endpoint - port
    , port: (v) => {
        if (v) {
            port = +v;
        }
        return port;
    }
    // mqtt - endpoint
    , endpoint: () => {
        return `wss://${host}.mq.${region}.amazonaws.com:${port}`
    }
    // mqtt - connect options
    , options: (clientName) => {
        return {
            username: username
            , password: password
            , clientId: `${clientId}${clientName ? clientName : ""}_${dateID()}`
        };
    }
    // mqtt - topic
    , topic: topic
    // function
    , dateID: dateID
};