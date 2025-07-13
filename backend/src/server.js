import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { fileURLToPath } from 'url';
import db from './db/connection.js';
import { cars, bookings, user as users } from './db/schema.js';
import { auth } from './lib/auth.js';
import { toNodeHandler, fromNodeHeaders } from 'better-auth/node';
import cookieParser from 'cookie-parser';
import { and, count, eq, or } from 'drizzle-orm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || `http://localhost:${PORT}`;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'public', 'uploads');
    
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { 
    fileSize: 5 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/uploads', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
}, express.static(path.join(__dirname, 'public', 'uploads')));

const requireAuth = async (req, res, next) => {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers)
    });
    
    if (!session?.user) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    
    req.authSession = session;
    next();
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
};

app.all('/api/auth/*', toNodeHandler(auth));
app.use(express.json());

app.post('/api/upload', requireAuth, upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    const fileUrl = `/uploads/${req.file.filename}`;
    const fullUrl = `${BACKEND_URL}${fileUrl}`;

    res.json({ 
      url: fileUrl,
      fullUrl: fullUrl,
      filename: req.file.filename 
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'File upload failed' });
  }
});
app.post('/api/cars', requireAuth, async (req, res) => {
  try {
    const { 
      title, 
      description, 
      price, 
      platform, 
      images, 
      coverImage, 
      make, 
      model, 
      year, 
      transmission, 
      fuelType, 
      seats, 
      dailyRate, 
      weeklyRate, 
      monthlyRate, 
      features, 
      location, 
      pickupLocation 
    } = req.body;

    const newCar = await db.insert(cars)
      .values({
        title,
        description,
        price,
        platform,
        images,
        coverImage,
        sellerId: req.authSession.user.id,
        make,
        model,
        year,
        transmission,
        fuelType,
        seats,
        dailyRate,
        weeklyRate,
        monthlyRate,
        features,
        location,
        pickupLocation
      })
      .returning();

    res.status(201).json(newCar);
  } catch (error) {
    console.error('Create car error:', error);
    res.status(500).json({ error: 'Failed to create car' });
  }
});
app.get('/api/cars', async (req, res) => {
    try {
        const carsList = await db.select().from(cars);
        res.json(carsList);
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ error: 'Failed to fetch cars' });
    }
});
app.get('/api/bookings/:id', requireAuth, async (req, res) => {
  try {
    const userId = req.authSession.user.id;
    const bookingId = req.params.id;
    
    const booking = await db
      .select({
        bookingId: bookings.id,
        startDate: bookings.startDate,
        endDate: bookings.endDate,

        totalPrice: bookings.totalPrice,
        status: bookings.status,
        createdAt: bookings.createdAt,
        carId: cars.id,
        carTitle: cars.title,
        carDescription: cars.description,
        carPrice: cars.price,
        carImage: cars.coverImage,
        carImages: cars.images,
        carMake: cars.make,
        carModel: cars.model,
        carYear: cars.year,
        carTransmission: cars.transmission,
        carFuelType: cars.fuelType,
        carSeats: cars.seats,
        carDailyRate: cars.dailyRate,
        carWeeklyRate: cars.weeklyRate,
        carMonthlyRate: cars.monthlyRate,
        carFeatures: cars.features,
        carLocation: cars.location,
        carPickupLocation: cars.pickupLocation,
      })
      .from(bookings)
      .innerJoin(cars, eq(bookings.carId, cars.id))
      .where(
        and(
          eq(bookings.userId, userId),
          eq(bookings.id, bookingId)
        )
      );

    if (booking.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json(booking[0]);
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ error: 'Failed to fetch booking' });
  }
});
app.get("/api/cars/:id", async (req, res) => {
  try{
    const carId = parseInt(req.params.id);
    console.log("Fetching Car")
  
    const car = await db
      .select()
      .from(cars)
      .where(eq(cars.id, carId));
      console.log(car)
    
    if (car.length === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }
    
    res.json(car[0]);
  }catch (error) {
    res.status(500).json({ error: 'Failed to fetch car' });
  }
});
app.get('/api/bookings', requireAuth, async (req, res) => {
  try {
    const userId = req.authSession.user.id;
    
    const bookingsList = await db
      .select({
        bookingId: bookings.id,
        startDate: bookings.startDate,
        endDate: bookings.endDate,
        totalPrice: bookings.totalPrice,
        status: bookings.status,
        createdAt: bookings.createdAt,
        carId: cars.id,
        carTitle: cars.title,
        carImage: cars.coverImage,
        carMake: cars.make,
        carModel: cars.model,
        carYear: cars.year,
        carLocation: cars.location,
        carDailyRate: cars.dailyRate,
      })
      .from(bookings)
      .innerJoin(cars, eq(bookings.carId, cars.id))
      .where(eq(bookings.userId, userId))
      .orderBy(bookings.createdAt, 'desc');
    
    res.json(bookingsList);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});
app.post('/api/bookings', requireAuth, async (req, res) => {  try {     const userId = req.authSession.user.id;     const { carId, startDate, endDate, totalPrice } = req.body;        if (!carId || !startDate || !endDate || !totalPrice) {       return res.status(400).json({ error: 'Missing required fields' });     }        const newBooking = await db.insert(bookings).values({       carId,       userId,       startDate: new Date(startDate),       endDate: new Date(endDate),       totalPrice,       status: 'pending'     }).returning();        res.status(201).json(newBooking);   } catch (error) {     console.error('Error creating booking:', error);     res.status(500).json({ error: 'Failed to create booking' });   } }); app.get('/api/bookings', requireAuth, async (req, res) => {  try {     const userId = req.authSession.user.id;     const bookingsList = await db.select().from(bookings).where(eq(bookings.userId, userId));     res.json(bookingsList);   }   catch (error) {     console.error('Error fetching bookings:', error);     res.status(500).json({ error: 'Failed to fetch bookings' });   } });
app.post('/api/pfp', requireAuth, async (req, res) => {
  try {
    const userId = req.authSession.user.id;
    
    const imageUrl = req.body.image.startsWith('http') 
      ? req.body.image 
      : `${BACKEND_URL}${req.body.image}`;

    const newPfp = await db.update(users)
      .set({ image: imageUrl })
      .where(eq(users.id, userId))
      .returning();
   
    res.json(newPfp);
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
});



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Backend URL: ${BACKEND_URL}`);
  console.log(`Database url ${process.env.DATABASE_URL}`);
});

export default app;