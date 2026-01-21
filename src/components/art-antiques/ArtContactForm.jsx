// src/components/forms/ArtContactForm.jsx

"use client";

import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Upload, X, FileText, Image, File } from "lucide-react";
import { uploadFiles } from "@/lib/firebaseService";

const ArtContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    artworkType: '',
    artist: '',
    dimensions: '',
    yearCreated: '',
    details: '',
  });

  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  const MAX_FILES = 5;
  const ALLOWED_FILE_TYPES = [
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/svg+xml",
    "image/webp"
  ];

  const getFileIcon = (type) => {
    if (type.startsWith("image/")) return <Image size={16} />;
    if (type.includes("word") || type.includes("excel") || type.includes("presentation"))
      return <FileText size={16} />;
    return <File size={16} />;
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  };

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    if (files.length + selected.length > MAX_FILES) {
      toast.error(`Maximum ${MAX_FILES} files allowed.`);
      return;
    }
    const valid = selected.filter(file => {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error(`Invalid file type: ${file.name}`);
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`File too large: ${file.name}`);
        return false;
      }
      return true;
    });
    setFiles(prev => [...prev, ...valid]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.artworkType) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    let fileAttachments = [];

    if (files.length > 0) {
      setUploading(true);
      try {
        fileAttachments = await uploadFiles(files);
      } catch (err) {
        console.error("File upload error", err);
        toast.error("File upload failed.");
        setLoading(false);
        setUploading(false);
        return;
      }
      setUploading(false);
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          attachments: fileAttachments
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Form submitted successfully! We will contact you soon.");
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          artworkType: '',
          artist: '',
          dimensions: '',
          yearCreated: '',
          details: '',
        });
        setFiles([]);
      } else {
        toast.error(result.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 bg-background-dark text-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">
          Contact Us About Your Artwork
        </h2>
        <p className="text-center mb-8">
          Submit the contact form with details about the artwork you wish to sell. We will respond within 2 days and make you an offer if interested.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block mb-2">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block mb-2">Phone*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="artworkType" className="block mb-2">Artwork Type*</label>
              <select
                id="artworkType"
                name="artworkType"
                required
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary text-white [&>option]:text-gray-900"
                value={formData.artworkType}
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="painting">Painting</option>
                <option value="sculpture">Sculpture</option>
                <option value="print">Print</option>
                <option value="photograph">Photograph</option>
                <option value="mixedMedia">Mixed Media</option>
                <option value="artGlass">Art Glass</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="artist" className="block mb-2">Artist (if known)</label>
              <input
                type="text"
                id="artist"
                name="artist"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
                value={formData.artist}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="dimensions" className="block mb-2">Dimensions (if known)</label>
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
                value={formData.dimensions}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="yearCreated" className="block mb-2">Year Created (if known)</label>
              <input
                type="text"
                id="yearCreated"
                name="yearCreated"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
                value={formData.yearCreated}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="details" className="block mb-2">Additional Details*</label>
            <textarea
              id="details"
              name="details"
              required
              rows={4}
              placeholder="Please include information about the artwork's condition, provenance, and any documentation you may have."
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
              value={formData.details}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-2">Attachments ({files.length}/{MAX_FILES})</label>
            <div className="flex items-center mb-3">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                multiple
                onChange={handleFileChange}
                accept=".doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.jpg,.jpeg,.png,.gif,.svg,.webp"
              />
              <Button
                type="button"
                className="bg-gray-700 hover:bg-gray-600 inline-flex items-center"
                onClick={() => fileInputRef.current.click()}
                disabled={files.length >= MAX_FILES || uploading}
              >
                <Upload size={16} className="mr-2" />
                Select Files
              </Button>
              <span className="ml-3 text-sm text-gray-300">
                Max 5 files, 10MB each (Office documents & images)
              </span>
            </div>

            {files.length > 0 && (
              <div className="mt-3 space-y-2 p-3 bg-gray-800 rounded">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-700 p-2 rounded">
                    <div className="flex items-center">
                      {getFileIcon(file.type)}
                      <span className="ml-2 text-sm truncate max-w-[200px]">{file.name}</span>
                      <span className="ml-2 text-xs text-gray-400">({formatFileSize(file.size)})</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-gray-400 hover:text-white"
                      disabled={uploading}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded"
              disabled={loading || uploading}
            >
              {loading || uploading ? "Submitting..." : "SUBMIT"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArtContactForm;




// "use client"
// import { useState } from 'react';
// import { toast } from "react-toastify";
// import { Button } from "@/components/ui/button";

// const ArtContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     artworkType: '',
//     artist: '',
//     dimensions: '',
//     yearCreated: '',
//     details: '',
//   });
  
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.artworkType) {
//       toast.error("Please fill in all required fields.");
//       return;
//     }
    
//     setLoading(true);

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
      
//       if (result.success) {
//         toast.success("Form submitted successfully! We will contact you soon.");
//         // Reset form
//         setFormData({
//           firstName: '',
//           lastName: '',
//           phone: '',
//           email: '',
//           artworkType: '',
//           artist: '',
//           dimensions: '',
//           yearCreated: '',
//           details: '',
//         });
//       } else {
//         toast.error(result.message || "Submission failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="py-16 bg-background-dark text-white">
//       <div className="container mx-auto px-4 max-w-2xl">
//         <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">
//           Contact Us About Your Artwork
//         </h2>
//         <p className="text-center mb-8">
//           Submit the contact form with details about the artwork you wish to sell. We will respond within 2 days and make you an offer if interested.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="firstName" className="block mb-2">
//                 First Name*
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 required
//                 className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="lastName" className="block mb-2">
//                 Last Name*
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 required
//                 className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="phone" className="block mb-2">
//                 Phone*
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 required
//                 className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block mb-2">
//                 Email*
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="artworkType" className="block mb-2">
//                 Artwork Type*
//               </label>
//               <select
//                 id="artworkType"
//                 name="artworkType"
//                 required
//                 className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary text-white [&>option]:text-gray-900"
//                 value={formData.artworkType}
//                 onChange={handleChange}
//               >
//                 <option value="" className="text-gray-900">Select Type</option>
//                 <option value="painting" className="text-gray-900">Painting</option>
//                 <option value="sculpture" className="text-gray-900">Sculpture</option>
//                 <option value="print" className="text-gray-900">Print</option>
//                 <option value="photograph" className="text-gray-900">Photograph</option>
//                 <option value="mixedMedia" className="text-gray-900">Mixed Media</option>
//                 <option value="artGlass" className="text-gray-900">Art Glass</option>
//                 <option value="other" className="text-gray-900">Other</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="artist" className="block mb-2">
//                 Artist (if known)
//               </label>
//               <input
//                 type="text"
//                 id="artist"
//                 name="artist"
//                 className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
//                 value={formData.artist}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="dimensions" className="block mb-2">
//                 Dimensions (if known)
//               </label>
//               <input
//                 type="text"
//                 id="dimensions"
//                 name="dimensions"
//                 placeholder="e.g., 24 x 36 inches"
//                 className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
//                 value={formData.dimensions}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="yearCreated" className="block mb-2">
//                 Year Created (if known)
//               </label>
//               <input
//                 type="text"
//                 id="yearCreated"
//                 name="yearCreated"
//                 placeholder="e.g., 1980 or circa 1980s"
//                 className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
//                 value={formData.yearCreated}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="details" className="block mb-2">
//               Additional Details*
//             </label>
//             <textarea
//               id="details"
//               name="details"
//               required
//               rows={4}
//               placeholder="Please include information about the artwork's condition, provenance, and any documentation you may have."
//               className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
//               value={formData.details}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex justify-center">
//             <Button
//               type="submit"
//               className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded"
//               disabled={loading}
//             >
//               {loading ? "Submitting..." : "SUBMIT"}
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ArtContactForm;