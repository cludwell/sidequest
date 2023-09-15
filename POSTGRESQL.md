Generic single-database configuration.


    When you execute this command, it will open an interactive PostgreSQL terminal (psql) connected to the specified database. You can then run SQL commands and queries directly against the PostgreSQL database, just like you would in any SQL client or interface.

psql -h localhost -U postgres -d postgres

    Make sure PostgreSQL is running: Check if the PostgreSQL server is running on your machine. You can do this by running the following command in your terminal:

sudo service postgresql status

    If the service is not running, start it using:

sudo service postgresql start

sudo service postgresql stop

Prisma commands
    npx prisma migrate reset
    npx prisma generate
    npx prisma db push
    npm run seed


git ls-files | xargs wc -l
