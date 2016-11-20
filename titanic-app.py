import os
from flask import Flask, request, render_template


app = Flask(__name__)


@app.route("/", methods=['POST', 'GET'])
def index():
    #if request.method == 'POST':
    #    None
    # return render_template('index.html')
    return 'Hello'

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.debug = True
    app.run(host='0.0.0.0', port=port)