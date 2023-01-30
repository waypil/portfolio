# -*- coding: utf-8 -*-

from flask import Flask, render_template, request, jsonify, url_for
from pymongo import MongoClient
from static.gitignore.constants import *


# Flask 실행
app = Flask(__name__)

# MongoDB 실행
client = MongoClient(ATLAS_URI)  # Atlas URI 서식을 위해 dnspython 라이브러리를 반드시 설치해야 함
db = client.WAYPILDB  # DB 불러오기. 없으면 생성

@app.route('/')
def home():
   return render_template('index.html')  # 서버에 파일 요청, 서버에 있던 HTML 파일의 코드를 모두 실행하기

@app.route('/language', methods=['GET'])
def read_language():
   langCode = request.args.get('lang')
   rows = list(db.languages.find({}, {'tid':True, f'{langCode}':True, '_id': False}))
   return jsonify({'all_rows': rows})


if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)
