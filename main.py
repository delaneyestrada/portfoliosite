from flask import Flask, request, render_template
from livereload import Server

app = Flask(__name__)
app.debug = True
server = Server(app.wsgi_app)

@app.route('/')
def home():
	return render_template('index.html', title="Home")

if __name__ == '__main__':
    app.run(port=8080)