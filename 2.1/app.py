
import os

from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

app = Flask(__name__)

load_dotenv()

db_username = os.getenv('DB_USERNAME')
db_password = os.getenv('DB_PASSWORD')

app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{db_username}:{db_password}@localhost/to_do_app'

db = SQLAlchemy(app)


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)

    def __init__(self, title, description):
        self.title = title
        self.description = description

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description
        }

@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks])


@app.route('/task', methods=['POST'])
def create_task():
    title = request.args.get('title')
    description = request.args.get('description')

    existing_task = Task.query.filter_by(title=title).first()

    if existing_task:
        abort(400, description="Task with this title already exists.")

    task = Task(title, description)
    db.session.add(task)
    db.session.commit()

    return jsonify({'success': True})


@app.route('/task', methods=['DELETE'])
def delete_task():
    title = request.args.get('title')
    description = request.args.get('description')

    existing_task = Task.query.filter_by(title=title).first()
    if existing_task:
        abort(400, description="Task with this title already exists.")

    task = Task(title, description)
    db.session.delete(task)
    db.session.commit()

    return jsonify({'success': True})


@app.route('/task', methods=['PUT'])
def update_task():
    title = request.args.get('title')
    description = request.args.get('description')

    task = Task.query.filter_by(title=title).first()

    if not task:
        abort(404, description="Cannot update task that does not exist.")

    task.title = title
    task.description = description

    db.session.add(task)
    db.session.commit()

    return jsonify({'success': True})


with app.app_context():
    db.create_all()


if __name__ == '__main__':
    app.run()
