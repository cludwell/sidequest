from app.models import db, UserScenario, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_user_scenarios():
    campaigns = [
        # what will be the demo user
        UserScenario(
        user_id= 4,
        scenario_id= 1,
        completed=True
        ),
        UserScenario(
        user_id= 4,
        scenario_id= 2,
        completed=True
        ),
        UserScenario(
        user_id= 4,
        scenario_id= 3,
        completed=True
        ),
        UserScenario(
        user_id= 4,
        scenario_id= 4,
        completed=True
        ),
        # timeline data
        UserScenario(
        user_id= 5,
        scenario_id= 5,
        completed=True
        ),
        UserScenario(
        user_id= 5,
        scenario_id= 4,
        completed=True
        ),
        UserScenario(
        user_id= 5,
        scenario_id= 3,
        completed=True
        ),
        UserScenario(
        user_id= 6,
        scenario_id= 3,
        completed=True
        ),
        UserScenario(
        user_id= 6,
        scenario_id= 2,
        completed=True
        ),
        UserScenario(
        user_id= 6,
        scenario_id= 1,
        completed=True
        ),

    ]
    for c in campaigns:
        db.session.add(c)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_user_scenarios():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_scenarios RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM user_scenarios"))

    db.session.commit()
