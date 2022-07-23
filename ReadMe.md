# 概要
WSS (WebSocket over SSL) による Amazon MQ(Active MQ) の Pub/Sub サンプル

# 実行
１．受信側 (subscriber）を起動  
```run_sub.sh```

２．送信側（publisher）を実行（非同期）  
```run_pub.sh {メッセージ送信回数}```

３．送信側（publisher）を実行（同期）  
```run_pub_async.sh {メッセージ送信回数}```

# Lambda 用関数の作成
```make_lambda.sh```
- lambda_pub.zip  
    送信側（publisher）の関数