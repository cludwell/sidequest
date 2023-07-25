from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


# user_scenario = db.Table('user_scenarios', db.Model.metadata,
#     db.Column('user_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True),
#     db.Column('scenario_id', db.Integer, db.ForeignKey(add_prefix_for_prod('scenarios.id')), primary_key=True),
#     db.Column('completed', db.Boolean,))

# if environment == "production":
#     user_scenario.schema = SCHEMA


class UserScenario(db.Model):
    __tablename__ = 'user_scenarios'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    scenario_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('scenarios.id')), nullable=False)

    # MANY TO MANY RELATIONSHIP
    users = db.relationship('User', back_populates='scenarios')
    scenarios = db.relationship('Scenario', back_populates='users')

    completed = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'scenarioId': self.scenario_id,
            'completed': self.completed,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }
