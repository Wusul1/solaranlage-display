from flask import Flask, request, Response

app = Flask(__name__)

datastring = "0;0;0;0"

@app.route("/senddata", methods=['POST'])
def senddata():
    global datastring
    datastring = request.data.decode("utf-8")
    print("Received "+datastring)
    return "ok"

@app.route("/getdata")
def getdata():
	global datastring
	return datastring
	
app.run()
