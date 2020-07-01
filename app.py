from flask import Flask, request, render_template
from livereload import Server

app = Flask(__name__)
app.debug = True
server = Server(app.wsgi_app)

@app.route('/')
def home():
	return render_template('index.html', title="Home")

@app.route('/developer')
def programmer():
	return render_template('programming.html')

@app.route('/musician')
def musician():
	return render_template('music.html')

@app.route('/media')
def media():
	return render_template('musician-media.html')

if __name__ == '__main__':
    server.serve(port=8080, host='localhost')