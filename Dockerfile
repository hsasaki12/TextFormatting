# ベースとなるイメージ
FROM python:3.9-slim

# ワーキングディレクトリを設定
WORKDIR /app

# 依存関係のコピーとインストール
COPY app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションのソースをコピー
COPY app /app

# ポート8080を公開
EXPOSE 8080

# アプリケーションの実行
CMD ["python", "app.py"]
