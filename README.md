# 使い方
```
docker build -t [image_name] ./
docker run -it -v `pwd`:/root/[app_name] -p 8080:3000 [image_name]  /bin/bash
```

- -it：インタラクティブモード&デバイスを確保
- -v：共有フォルダの指定
- -p：ポート番号の対応を指定
- /bin/bash：実行コマンド

# インストール済み
- vim
- nodejs
- npm
- express-generator
- nodemon
