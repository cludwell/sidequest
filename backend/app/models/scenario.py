from .db import db, environment, SCHEMA, add_prefix_for_prod


class Scenario(db.Model):
    __tablename__ = 'scenarios'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.Text, nullable=False)
    img_url = db.Column(db.String(255), nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'imgUrl': self.img_url,
        }
