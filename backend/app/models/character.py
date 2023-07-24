from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Character(db.Model):
    __tablename__ = 'characters'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=True)

    level = db.Column(db.Integer, nullable=True)
    name = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(255), nullable=False)
    race = db.Column(db.String(255), nullable=False)

    max_hp = db.Column(db.Integer, nullable=True)
    current_hp = db.Column(db.Integer, nullable=True)

    strength = db.Column(db.Integer, nullable=True)
    dexterity = db.Column(db.Integer, nullable=True)
    constitution = db.Column(db.Integer, nullable=True)
    intelligence = db.Column(db.Integer, nullable=True)
    wisdom = db.Column(db.Integer, nullable=True)
    charisma = db.Column(db.Integer, nullable=True)

    armor = db.Column(db.Array, nullable=True)
    equipped = db.Column(db.Array, nullable=True)
    inventory = db.Column(db.Array, nullable=True)
    languages = db.Column(db.Array, nullable=True)
    spells = db.Column(db.Array, nullable=True)
    tools = db.Column(db.Array, nullable=True)
    weapons = db.Column(db.Array, nullable=True)

    initiative = db.Column(db.Integer, nullable=False)
    armor_class = db.Column(db.Integer, nullable=False)
    vision = db.Column(db.String(255), nullable=True)

    acrobatics = db.Column(db.Integer, nullable=True)
    animal_handling = db.Column(db.Integer, nullable=True)
    arcana = db.Column(db.Integer, nullable=True)
    athletics = db.Column(db.Integer, nullable=True)
    deception = db.Column(db.Integer, nullable=True)
    history = db.Column(db.Integer, nullable=True)
    insight = db.Column(db.Integer, nullable=True)
    intimidation = db.Column(db.Integer, nullable=True)
    investigation = db.Column(db.Integer, nullable=True)
    medicine = db.Column(db.Integer, nullable=True)
    nature = db.Column(db.Integer, nullable=True)
    perception = db.Column(db.Integer, nullable=True)
    performance = db.Column(db.Integer, nullable=True)
    persuasion = db.Column(db.Integer, nullable=True)
    religion = db.Column(db.Integer, nullable=True)
    sleight_of_hand = db.Column(db.Integer, nullable=True)
    stealth = db.Column(db.Integer, nullable=True)
    survival = db.Column(db.Integer, nullable=True)

    alignment = db.Column(db.String(255), nullable=False)
    appearance = db.Column(db.Text, nullable=True)
    background = db.Column(db.Text, nullable=True)
    img_url = db.Column(db.String(255), nullable=True)
    faith = db.Column(db.String(255), nullable=True)

    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'level': self.level,
            'name': self.name,
            'role': self.role,
            'race': self.race,
            'max_hp': self.max_hp,
            'current_hp': self.current_hp,
            'strength': self.strength,
            'dexterity': self.dexterity,
            'constitution': self.constitution,
            'intelligence': self.intelligence,
            'wisdom': self.wisdom,
            'charisma': self.charisma,
            'armor': self.armor,
            'inventory': self.inventory,
            'equipped': self.equipped,
            'languages': self.languages,
            'spells': self.spells,
            'tools': self.tools,
            'weapons': self.weapons,
            'initiative': self.initiative,
            'armorClass': self.armor_class,
            'vision': self.vision,
            'acrobatics': self.acrobatics,
            'animalHandling': self.animal_handling,
            'arcana': self.arcana,
            'athletics': self.athletics,
            'deception': self.deception,
            'history': self.history,
            'insight': self.insight,
            'intimidation': self.intimidation,
            'investigation': self.investigation,
            'medicine': self.medicine,
            'nature': self.nature,
            'perception': self.perception,
            'performance': self.performance,
            'persuasion': self.persuasion,
            'religion': self.religion,
            'sleightOfHand': self.sleight_of_hand,
            'stealth': self.stealth,
            'survival': self.survival,
            'alignment': self.alignment,
            'appearance': self.appearance,
            'background': self.background,
            'imgUrl': self.img_url,
            'faith': self.faith,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }
