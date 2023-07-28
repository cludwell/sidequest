from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    users = [
    User(
        username='Demo', email='demo@aa.io', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    User(
        username='marnie', email='marnie@aa.io', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    User(
        username='bobbie', email='bobbie@aa.io', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    User(
        username='Jerry', email='jerry@seinmail.com', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    User(
        username='Elaine', email='elaine@seinmail.com', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    User(
        username='George', email='george@seinmail.com', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    User(
        username='Kramer', email='kramer@seinmail.com', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    User(
        username='Newman', email='newman@seinmail.com', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    User(
        username='Estelle', email='estelle@seinmail.com', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    User(
        username='Frank', email='frank@seinmail.com', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    User(
        username='Susan', email='susan@seinmail.com', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    User(
        username='Morty', email='morty@seinmail.com', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    User(
        username='Helen', email='helen@seinmail.com', hashed_password='$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'),
    ]
    for user in users:
        db.session.add(user)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
