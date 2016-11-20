import os
from flask import Flask, request, render_template, jsonify
import pandas as pd
import numpy as np

app = Flask(__name__)

app_home = os.path.join('/Users', 'martin', 'PycharmProjects', 'titanic-dataset')


@app.route("/", methods=['POST', 'GET'])
def index():
    #if request.method == 'POST':
    #    None
    # return render_template('index.html')
    df = pd.read_excel(os.path.join(app_home, 'data', 'titanic3.xls'))
    df['survived'] = df.survived.map({1: 'Yes', 0: 'No'})

    df.age.fillna(-1, inplace=True)
    age_bins = [-np.inf, 0, 1, 7, 14, 18, 30, 40, 50, 60, 70, np.inf]
    age_labels = ['NA','0-1', '2-7', '8-14', '15-8','19-30','31-40','41-50','51-60','61-70','71+']

    df['ageCut'] = pd.cut(df.age, bins=age_bins, labels=age_labels)

    dfGrouped = df.groupby(['sex', 'pclass', 'survived', 'ageCut']).size()
    dfGrouped = dfGrouped.unstack(3)
    dfGrouped.columns = dfGrouped.columns.astype(str)
    dfGrouped['Total'] = dfGrouped.sum(axis=1)
    dfGrouped.fillna('NA', inplace=True)
    dfGrouped = dfGrouped.reset_index()
    print(dfGrouped.to_dict())
    d = dfGrouped.to_dict()
    return jsonify(d)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.debug = True
    app.run(host='0.0.0.0', port=port)