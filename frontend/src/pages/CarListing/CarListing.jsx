import { useState } from 'react';
import CarBasicInfo from './components/CarBasicInfo';
import CarFeatures from './components/CarFeatures';
import CarImages from './components/CarImages';
import CarLocation from './components/CarLocation';
import CarPricing from './components/CarPricing';
import '../../car-list.css'; 
import Navbar from '../Home/components/Navbar';
import toast from 'react-hot-toast';

export default function CarListing() {
    const [formData, setFormData] = useState({
        
        make: '',
        model: '',
        year: '',
        transmission: '',
        fuelType: '',
        seats: '',
        description: '',
        
   
        features: [],
        
        
        images: [],
        coverImage: '',
        
        
        location: '',
        pickupLocation: '',
        

        dailyRate: '',
        weeklyRate: '',
        monthlyRate: '',
        

        platform: 'rental', 
        price: '', 
        title: ''
    });

    const [loading, setLoading] = useState(false);
    const [uploadingImages, setUploadingImages] = useState(false);

    const handleInputChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFeatureToggle = (feature) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features.includes(feature)
                ? prev.features.filter(f => f !== feature)
                : [...prev.features, feature]
        }));
    };

    const handleImageUpload = async (files, isMainImage = false) => {
        setUploadingImages(true);
        const uploadedUrls = [];

        try {
            for (const file of files) {
                const formDataUpload = new FormData();
                formDataUpload.append('file', file);

                const response = await fetch('http://localhost:3000/api/upload', {
                    method: 'POST',
                    body: formDataUpload,
                    credentials: 'include'
                });

                if (!response.ok) {
                    toast.error('Failed to upload image');
                    throw new Error('Upload failed');
                }

                const result = await response.json();
                toast.success('Image uploaded successfully');
                uploadedUrls.push(result.url);
            }

            setFormData(prev => ({
                ...prev,
                images: isMainImage ? [uploadedUrls[0], ...prev.images.slice(1)] : [...prev.images, ...uploadedUrls],
                coverImage: isMainImage ? uploadedUrls[0] : prev.coverImage || uploadedUrls[0]
            }));

        } catch (error) {
            console.error('Upload error:', error);
            alert('Failed to upload images. Please try again.');
        } finally {
            setUploadingImages(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            
            const title =  `${formData.year} ${formData.make} ${formData.model}`;

            const carData = {
                ...formData,
                title,
                features: formData.features,
                price: formData.dailyRate 
            };

            const response = await fetch('http://localhost:3000/api/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carData),
                credentials: 'include'
            });

            if (!response.ok) {
                toast.error('Failed to create car listing');
                throw new Error('Failed to create car listing');
            }

            await response.json();
            toast.success('Car listing created successfully');
            
            
            setFormData({
                make: '', model: '', year: '', transmission: '', fuelType: '',
                seats: '', description: '', features: [], images: [], coverImage: '',
                location: '', pickupLocation: '', dailyRate: '', weeklyRate: '',
                monthlyRate: '', platform: 'rental', price: '', title: ''
            });

        } catch (error) {
            console.error('Error creating car:', error);
            alert('Failed to create car listing. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <Navbar/>
        <form onSubmit={handleSubmit} className="add-car-form">
            <CarBasicInfo 
                formData={formData} 
                onChange={handleInputChange} 
            />
            <CarFeatures 
                selectedFeatures={formData.features} 
                onFeatureToggle={handleFeatureToggle} 
            />
            <CarImages 
                images={formData.images}
                onImageUpload={handleImageUpload}
                uploading={uploadingImages}
            />
            <CarLocation 
                formData={formData} 
                onChange={handleInputChange} 
            />
            <CarPricing 
                formData={formData} 
                onChange={handleInputChange} 
            />
            
            <div className="form-actions">
                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={loading || uploadingImages}
                >
                    {loading ? 'Creating Listing...' : 'Create Car Listing'}
                </button>
            </div>
        </form>
        </>
    );
}