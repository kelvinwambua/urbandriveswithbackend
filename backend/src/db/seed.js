import db  from './connection';
import { user, games, account, session } from './schema.js';
import { v4 as uuidv4 } from 'uuid';

const seedUser = {
  id: 'user_creds_123', 
  name: 'Serene',
  email: 'serene@htb.com',
  emailVerified: true,
  image: 'http://localhost:3000/uploads/shadcn.jpeg'
};

const seedGame = {
  title: 'The Magic Sword',
  description: 'A legendary weapon with mystical powers',
  price:"49.99",
  platform: null,
  images: null,
  coverImage: 'http://localhost:3000/uploads/magicsword.webp',
  sellerId: seedUser.id
};

const seedAccount = {
  id: uuidv4(),
  userId: seedUser.id,
  accountId: seedUser.id,
  providerId: 'credential',
  password: 'c4ed65b6ccebeeebdd0787e67fa9fbe3:e880a9f6d95b594ccef7039d4b3f79e57e2430c1fc9c88e0e4aae0d629227d4e618ad080d98ad8d0fcefe0815d871a661557d4158d42106919437608973f3b9a', 

};

const seedSession = {
  id: uuidv4(),
  userId: seedUser.id,
  token: 'session_token_123',
  expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
  ipAddress: '127.0.0.1',
  userAgent: 'Seed Script'
};

async function seedDatabase() {
  try {
    // Insert user
    await db.insert(user).values(seedUser);

    // Insert game
    await db.insert(games).values(seedGame);

    // Insert account
    await db.insert(account).values(seedAccount);

    // Insert session
    await db.insert(session).values(seedSession);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();