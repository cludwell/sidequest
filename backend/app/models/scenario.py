from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user_scenario import user_scenario
from sqlalchemy.sql import func

class Scenario(db.Model):
    __tablename__ = 'scenarios'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.Text, nullable=False)
    img_url = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    # MANY TO MANY RELATIONSHIP
    users = db.relationship('User', secondary=user_scenario, back_populates='scenarios')

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'imgUrl': self.img_url,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }
