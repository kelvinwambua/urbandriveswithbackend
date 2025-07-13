import { CameraIcon } from 'lucide-react';
import { useState } from 'react';

export default function CarImages({ images, onImageUpload }) {
   const [dragOver, setDragOver] = useState(false);
   const [uploadingStates, setUploadingStates] = useState({});

   const handleFileChange = async (e, isMainImage = false, imageType = null) => {
       const files = Array.from(e.target.files);
       if (files.length > 0) {
           const uploadKey = isMainImage ? 'main' : imageType;
           setUploadingStates(prev => ({ ...prev, [uploadKey]: true }));
           
           try {
               await onImageUpload(files, isMainImage, imageType);
           } finally {
               setUploadingStates(prev => ({ ...prev, [uploadKey]: false }));
           }
       }
   };

   const handleDrop = async (e, isMainImage = false, imageType = null) => {
       e.preventDefault();
       setDragOver(false);
       const files = Array.from(e.dataTransfer.files);
       if (files.length > 0) {
           const uploadKey = isMainImage ? 'main' : imageType;
           setUploadingStates(prev => ({ ...prev, [uploadKey]: true }));
           
           try {
               await onImageUpload(files, isMainImage, imageType);
           } finally {
               setUploadingStates(prev => ({ ...prev, [uploadKey]: false }));
           }
       }
   };

   const isUploading = (key) => uploadingStates[key] || false;

   const getImageUrl = (imageData) => {
       if (!imageData) return null;
       if (typeof imageData === 'string') return imageData;
       if (imageData.fullUrl) return imageData.fullUrl;
       if (imageData.url) return imageData.url;
       return null;
   };

   const renderImagePreview = (imageData, altText) => {
       const url = getImageUrl(imageData);
       if (!url) return null;
       
       return (
           <div className="image-preview">
               <img src={url} alt={altText} />
           </div>
       );
   };

   const renderMultipleImagePreviews = (imageArray, type) => {
       if (!imageArray || !Array.isArray(imageArray) || imageArray.length === 0) return null;
       
       return (
           <div className="image-preview-grid">
               {imageArray.map((img, idx) => {
                   const url = getImageUrl(img);
                   return url ? (
                       <div key={idx} className="image-preview">
                           <img src={url} alt={`${type} ${idx + 1}`} />
                       </div>
                   ) : null;
               })}
           </div>
       );
   };

   return (
       <div className="form-section">
           <h2>Car Images</h2>
           <div className="upload-grid">
               <div 
                   className={`upload-box main-upload ${dragOver ? 'drag-over' : ''}`}
                   onDragOver={(e) => {
                       e.preventDefault();
                       setDragOver(true);
                   }}
                   onDragLeave={() => setDragOver(false)}
                   onDrop={(e) => handleDrop(e, true)}
               >
                   <div className="upload-content">
                       <div className="upload-icon">
                           <CameraIcon/>
                       </div>
                       <p>Main Image</p>
                       <span>{isUploading('main') ? 'Uploading...' : 'Click to upload'}</span>
                       <input 
                           type="file"
                           className="file-input"
                           accept="image/*"
                           onChange={(e) => handleFileChange(e, true)}
                           disabled={isUploading('main')}
                       />
                       {renderImagePreview(images?.main, 'Main')}
                   </div>
               </div>
               
               {['Interior', 'Exterior', 'Additional'].map((type) => (
                   <div 
                       key={type} 
                       className={`upload-box ${dragOver ? 'drag-over' : ''}`}
                       onDragOver={(e) => {
                           e.preventDefault();
                           setDragOver(true);
                       }}
                       onDragLeave={() => setDragOver(false)}
                       onDrop={(e) => handleDrop(e, false, type.toLowerCase())}
                   >
                       <div className="upload-content">
                           <div className="upload-icon">
                               <CameraIcon/>
                           </div>
                           <p>{type}</p>
                           <span>{isUploading(type.toLowerCase()) ? 'Uploading...' : 'Click to upload'}</span>
                           <input 
                               type="file"
                               className="file-input"
                               accept="image/*"
                               onChange={(e) => handleFileChange(e, false, type.toLowerCase())}
                               disabled={isUploading(type.toLowerCase())}
                               multiple
                           />
                           {renderMultipleImagePreviews(images?.[type.toLowerCase()], type)}
                       </div>
                   </div>
               ))}
           </div>
       </div>
   );
}