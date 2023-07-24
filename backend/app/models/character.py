from .db import db, environment, SCHEMA, add_prefix_for_prod


class User(db.Model):
    __tablename__ = 'characters'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.Text, nullable=False)
    img_url = db.Column(db.String(255), nullable=True)
    completed = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'imgUrl': self.img_url,
        }
