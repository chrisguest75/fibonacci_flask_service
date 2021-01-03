from flask import Flask, render_template
import connexion
from prometheus_flask_exporter import ConnexionPrometheusMetrics


# Create the application instance
app = connexion.FlaskApp(__name__, specification_dir='./')
metrics = ConnexionPrometheusMetrics(app)

# Read the swagger.yml file to configure the endpoints
app.add_api('swagger.yaml')


@app.route("/")
def home():
    return render_template("fibonacci.html")


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True, use_reloader=False)
