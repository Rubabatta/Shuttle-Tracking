from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Shuttle Model (table)
class Shuttle(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    location = db.Column(db.String(100))

# Create database + insert sample data if empty
with app.app_context():
    db.create_all()
    if Shuttle.query.count() == 0:
        shuttle1 = Shuttle(name="Shuttle A", location="University Gate")
        shuttle2 = Shuttle(name="Shuttle B", location="Hostel Block")
        db.session.add_all([shuttle1, shuttle2])
        db.session.commit()

# 1️⃣ Get all shuttles
@app.route("/shuttles", methods=["GET"])
def get_shuttles():
    shuttles = Shuttle.query.all()
    result = [{"id": s.id, "name": s.name, "location": s.location} for s in shuttles]
    return jsonify(result)

# 2️⃣ Add a new shuttle
@app.route("/shuttles", methods=["POST"])
def add_shuttle():
    data = request.get_json()
    new_shuttle = Shuttle(name=data["name"], location=data["location"])
    db.session.add(new_shuttle)
    db.session.commit()
    return jsonify({"message": "Shuttle added!"}), 201

# 3️⃣ Update shuttle by id
@app.route("/shuttles/<int:id>", methods=["PUT"])
def update_shuttle(id):
    data = request.get_json()
    shuttle = Shuttle.query.get_or_404(id)
    shuttle.name = data.get("name", shuttle.name)
    shuttle.location = data.get("location", shuttle.location)
    db.session.commit()
    return jsonify({"message": "Shuttle updated!"})

# 4️⃣ Delete shuttle by id
@app.route("/shuttles/<int:id>", methods=["DELETE"])
def delete_shuttle(id):
    shuttle = Shuttle.query.get_or_404(id)
    db.session.delete(shuttle)
    db.session.commit()
    return jsonify({"message": "Shuttle deleted!"})

if __name__ == "__main__":
    app.run(debug=True)