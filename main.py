from flask import Flask, request, render_template, redirect, url_for
from flask_mail import Message, Mail
from creds import gmail
 
mail = Mail()
 
app = Flask(__name__)
 
app.secret_key = 'development key'
 
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = gmail['email']
app.config["MAIL_PASSWORD"] = gmail['password']

mail.init_app(app)

app.debug = True


@app.route('/')
def home():
    try:
        success = request.args.get('success')
    except:
        success = False

    return render_template('index.html', success=success)

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    msg = Message("Email from contact form on dillonestrada.com", sender=gmail['email'], recipients=[gmail['email']])
    msg.html = f"<h1>Name: {name}</h1><h3>Email: {email}</h3><p>{message}</p>"

    mail.send(msg)
    success = True
    return redirect(url_for('.home', success=success))

if __name__ == '__main__':
    app.run(port=8080)