from flask import Flask, request, render_template
app = Flask(__name__)

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
    app.run(debug=True)