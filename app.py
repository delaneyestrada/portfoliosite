from flask import Flask, request, render_template
from livereload import Server

app = Flask(__name__)
app.debug = True
server = Server(app.wsgi_app)

@app.route('/')
def home():
	return render_template('index.html', title="Home")

# future routes
"""
@app.route('/programmer')
def programmer():
	return render_template('')

@app.route('/musician')
def musician():
	return render_template('')
"""

if __name__ == '__main__':
    server.serve()