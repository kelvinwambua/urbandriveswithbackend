import db from './connection.js';
import { user, cars, account, session } from './schema.js';
import { v4 as uuidv4 } from 'uuid';

const seedUser = {
 id: 'user_creds_123',
 name: 'Urban Drives',
 email: 'kelvin@urbandrives.com',
 emailVerified: true,
 image: 'http://localhost:3000/uploads/shadcn.jpeg'
};

const seedCars = [
 {
   title: 'Hyundai Ioniq',
   description: 'Experience the future of driving with this eco-friendly Hyundai Ioniq. Perfect for city commuting and long drives with excellent fuel economy and modern features.',
   price: '3500000',
   platform: 'CarRental Kenya',
   images: JSON.stringify([
     '/uploads/file-1751744174540-775225440.jpg',
     '/uploads/file-1752054050852-622119352.jpg'
   ]),
   coverImage: '/uploads/file-1751744174540-775225440.jpg',
   sellerId: 'user_creds_123',
   make: 'Hyundai',
   model: 'Ioniq',
   year: 2022,
   transmission: 'Automatic',
   fuelType: 'Electric',
   seats: 5,
   dailyRate: '4500',
   weeklyRate: '28000',
   monthlyRate: '95000',
   features: JSON.stringify(['Air Conditioning', 'Bluetooth', 'GPS Navigation', 'Backup Camera', 'USB Charging', 'Cruise Control']),
   location: 'Nairobi',
   pickupLocation: 'Westlands, Nairobi'
 },
 {
   title: 'Mazda Miata ',
   description: 'Feel the thrill of driving with this classic Mazda Miata. Perfect for weekend getaways and enjoying the open road with its responsive handling and convertible top.',
   price: '2800000',
   platform: 'CarRental Kenya',
   images: JSON.stringify([
     '/uploads/file-1752054050852-622119352.png',
     '/uploads/file-1751744174540-775225440.png'
   ]),
   coverImage: '/uploads/file-1752054050852-622119352.png',
   sellerId: 'user_creds_123',
   make: 'Mazda',
   model: 'Miata',
   year: 2021,
   transmission: 'Manual',
   fuelType: 'Petrol',
   seats: 2,
   dailyRate: '6000',
   weeklyRate: '38000',
   monthlyRate: '125000',
   features: JSON.stringify(['Convertible Top', 'Sport Suspension', 'Premium Audio', 'Leather Seats', 'Manual Transmission', 'Sport Mode']),
   location: 'Nairobi',
   pickupLocation: 'Karen, Nairobi'
 }
];

const seedAccount = {
 id: uuidv4(),
 userId: seedUser.id,
 accountId: seedUser.id,
 providerId: 'credential',
 password: '875f91155fde1203e6ee1981174fbdac:fc67d1798ca077e9213ce334e456da675354a961f48c2ccc9b23cc913b5e79e04c0172cee03df5839d37d8919adbefc2024f5f9971b3c051a1e81d7248e18ed5',
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
   await db.insert(user).values(seedUser);
   await db.insert(cars).values(seedCars);
   await db.insert(account).values(seedAccount);
   await db.insert(session).values(seedSession);
   console.log('Database seeded successfully!');
 } catch (error) {
   console.error('Error seeding database:', error);
 }
}

seedDatabase();