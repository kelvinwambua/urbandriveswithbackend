
echo "Waiting for PostgreSQL to start..."
while ! nc -z postgres 5432; do
  sleep 1
done
echo "PostgreSQL started"

sleep 3

echo "Running database migrations..."
npx drizzle-kit generate
npx drizzle-kit migrate
npx drizzle-kit push


echo "Seeding database..."
npm run seed
echo "Inspecting database tables..."
npm run introspect

echo "Starting application..."
npm run start