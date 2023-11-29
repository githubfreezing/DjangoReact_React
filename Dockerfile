# Node.jsのベースイメージを指定
FROM node:14

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# 依存関係ファイルをコンテナにコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# プロジェクトのファイルをコンテナにコピー
COPY . .

# ビルドコマンドを実行
RUN npm run build

# ポートを公開
EXPOSE 3000

# Reactアプリケーションを起動
CMD ["npm", "start"]