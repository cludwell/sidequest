from .db import db, environment, SCHEMA, add_prefix_for_prod


class User(db.Model):
    __tablename__ = 'user_scenario'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    scenario_id = db.Column(db.Integer, nullable=False)
    completed = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'scenarioId': self.scenario_id,
            'completed': self.completed
        }
