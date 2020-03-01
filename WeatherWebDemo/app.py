#this example uses Flask: https://palletsprojects.com/p/flask/
#
#running this project will create a webserver, running at http://localhost:5000/
#When you browse to http://localhost:5000/, it's a GET request, so the route "/" below for method "GET" will be executed
#and index.html will be rendered for the user
#
from flask import Flask, json, Response, request, render_template

app = Flask(__name__)

#route for main page
@app.route('/', methods=['GET']) 
def page_home():

    return render_template('index.html')

#run theapp
app.run()
