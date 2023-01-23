# -*- coding: utf-8 -*-

from flask import Flask, render_template, request, jsonify, url_for

app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')  # 서버에 파일 요청, 서버에 있던 HTML 파일의 코드를 모두 실행하기

"""
@app.route('/mypage')
def mypage():
   return '내 페이지!'
"""

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)
