FROM python:3.6.6-alpine

ENV APP /app

RUN mkdir $APP

WORKDIR $APP

COPY requirements.txt .

RUN pip3 install -r requirements.txt && \
    python3 -m textblob.download_corpora

COPY . .

EXPOSE 80

CMD ["python3", "app/run_app.py"]
