"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Upload, X, FileText, Image, File } from "lucide-react";
import { uploadFiles } from "@/lib/firebaseService";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const MAX_FILES = 5;
  const ALLOWED_FILE_TYPES = [
    // Office documents
    "application/msword", // .doc
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
    "application/vnd.ms-excel", // .xls
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
    "application/vnd.ms-powerpoint", // .ppt
    "application/vnd.openxmlformats-officedocument.presentationml.presentation", // .pptx
    "application/pdf", // .pdf
    
    // Images
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/svg+xml",
    "image/webp"
  ];
  
  const getFileIcon = (type) => {
    if (type.startsWith("image/")) {
      return <Image size={16} />;
    } else if (type.includes("word")) {
      return <FileText size={16} />;
    } else if (type.includes("excel") || type.includes("spreadsheet")) {
      return <FileText size={16} />;
    } else if (type.includes("powerpoint") || type.includes("presentation")) {
      return <FileText size={16} />;
    } else {
      return <File size={16} />;
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    // Check if adding these files would exceed the limit
    if (files.length + selectedFiles.length > MAX_FILES) {
      toast.error(`You can only upload a maximum of ${MAX_FILES} files.`);
      return;
    }
    
    // Validate file types and sizes
    const validFiles = selectedFiles.filter(file => {
      // Check file type
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error(`File type not allowed: ${file.name}`);
        return false;
      }
      
      // Check file size
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`File too large: ${file.name} (max 10MB)`);
        return false;
      }
      
      return true;
    });
    
    setFiles(prevFiles => [...prevFiles, ...validFiles]);
    
    // Reset the input to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      // First upload any files
      let fileAttachments = [];
      
      if (files.length > 0) {
        setUploading(true);
        try {
          fileAttachments = await uploadFiles(files);
        } catch (error) {
          console.error("Error uploading files:", error);
          toast.error("Failed to upload files. Please try again.");
          setLoading(false);
          setUploading(false);
          return;
        }
        setUploading(false);
      }
      
      // Then submit the form with file URLs
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
        toast.success("Form submitted successfully! Check your email.");
        setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-background-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl mb-8">Let&apos;s Connect</h2>
            <h3 className="text-White  text-xl mb-5">
              For Reservations call{" "}
              <a href="tel:1-888-900-4452" className="text-White">
                +1-888-900-4452
              </a>
            </h3>
            <div className="space-y-6">
              <div>
                <h3 className="font-karla text-xl mb-2">Global Liquidation Company</h3>
                <p>
                  Call{" "}
                  <a href="tel:626-744-0404" className="text-White">
                    626-744-0404
                  </a>
                </p>
                <p className="font-dosis">Reservation Required</p>
                <p className="font-dosis">Art | Antiques | Rugs | Auctions</p>
              </div>
              <div>
                <h3 className="font-karla text-xl mb-2">GLC Rug Outlet</h3>
                <p>
                  Call{" "}
                  <a href="tel:949-364-6425" className="text-White">
                    949-364-6425
                  </a>
                </p>
                <p>Reservation Recommanded</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full p-2 rounded bg-white text-gray-900"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full p-2 rounded bg-white text-gray-900"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block mb-2">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-2 rounded bg-white text-gray-900"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 rounded bg-white text-gray-900"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full p-2 rounded bg-white text-gray-900"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block mb-2">
                  Attachments ({files.length}/{MAX_FILES})
                </label>
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

                {/* File List */}
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

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark w-32" 
                disabled={loading || uploading}
              >
                {loading || uploading ? "Submitting..." : "SUBMIT"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "react-toastify";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email) {
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
//         toast.success("Form submitted successfully! Check your email.");
//         setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
//       } else {
//         toast.error("Submission failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="bg-background-dark text-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div>
//             <h2 className="font-playfair text-3xl md:text-4xl mb-8">Let&apos;s Connect</h2>
//             <h3 className="text-White  text-xl mb-5">
//               For Reservations call{" "}
//               <a href="tel:888-900-4452" className="text-White">
//                 888-900-4452
//               </a>
//             </h3>
//             <div className="space-y-6">
//               <div>
//                 <h3 className="font-karla text-xl mb-2">Global Liquidation Company</h3>
//                 <p>
//                   Call{" "}
//                   <a href="tel:626-744-0404" className="text-White">
//                     626-744-0404
//                   </a>
//                 </p>
//                 <p className="font-dosis">Reservation Required</p>
//                 <p className="font-dosis">Art | Antiques | Rugs | Auctions</p>
//               </div>
//               <div>
//                 <h3 className="font-karla text-xl mb-2">GLC Rug Outlet</h3>
//                 <p>
//                   Call{" "}
//                   <a href="tel:949-364-6425" className="text-White">
//                     949-364-6425
//                   </a>
//                 </p>
//                 <p>Reservation Recommanded</p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name Fields */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="firstName" className="block mb-2">
//                     First Name*
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     required
//                     className="w-full p-2 rounded bg-white text-gray-900"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="lastName" className="block mb-2">
//                     Last Name*
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     required
//                     className="w-full p-2 rounded bg-white text-gray-900"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               {/* Contact Fields */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="phone" className="block mb-2">
//                     Phone*
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     required
//                     className="w-full p-2 rounded bg-white text-gray-900"
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block mb-2">
//                     Email*
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     className="w-full p-2 rounded bg-white text-gray-900"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               {/* Message Field */}
//               <div>
//                 <label htmlFor="message" className="block mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={6}
//                   className="w-full p-2 rounded bg-white text-gray-900"
//                   value={formData.message}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* reCAPTCHA Placeholder */}
//               {/* <div>
//                 <div className="mb-4 bg-white inline-block p-2 rounded text-gray-500">
//                   reCAPTCHA (To be integrated)
//                 </div>
//               </div> */}

//               {/* Submit Button */}
//               <Button type="submit" className="bg-primary hover:bg-primary-dark w-32" disabled={loading}>
//                 {loading ? "Submitting..." : "SUBMIT"}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
