FROM python:3.11-slim

WORKDIR /app/backend

RUN apt-get update && apt-get install -y curl build-essential && rm -rf /var/lib/apt/lists/*

COPY backend/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .
RUN mkdir -p data/uploads data/chromadb data/exports

EXPOSE 8000
CMD ["sh", "-c", "uvicorn app:app --host 0.0.0.0 --port ${PORT:-8000} --workers 1"]