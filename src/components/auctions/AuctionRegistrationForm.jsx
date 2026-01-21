"use client"
import { useState } from 'react';
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";

const AuctionRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    interestedIn: [],
    preferredContact: 'email',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, interestedIn: [...prev.interestedIn, value] };
      } else {
        return { ...prev, interestedIn: prev.interestedIn.filter(item => item !== value) };
      }
    });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Validate interests are selected
    if (formData.interestedIn.length === 0) {
      toast.error("Please select at least one interest category.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auction-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success("Registration submitted successfully! Check your email for confirmation.");
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          interestedIn: [],
          preferredContact: 'email',
          additionalInfo: '',
        });
      } else {
        toast.error(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 bg-background-dark text-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">
          Register for Future Auctions
        </h2>
        <p className="text-center mb-8">
          Complete this form to receive notifications about our upcoming auctions and exclusive preview invitations. Be the first to know about rare finds and unique pieces coming to auction.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block mb-2">
                First Name*
              </label>
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
              <label htmlFor="lastName" className="block mb-2">
                Last Name*
              </label>
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
              <label htmlFor="phone" className="block mb-2">
                Phone*
              </label>
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
              <label htmlFor="email" className="block mb-2">
                Email*
              </label>
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

          <div>
            <label htmlFor="address" className="block mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="city" className="block mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="state" className="block mb-2">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block mb-2">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">
              I&apos;m Interested In* (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interestedFineArt"
                  name="interestedIn"
                  value="Fine Art"
                  className="mr-2 h-5 w-5"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="interestedFineArt">Fine Art</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interestedRareRugs"
                  name="interestedIn"
                  value="Rare Rugs"
                  className="mr-2 h-5 w-5"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="interestedRareRugs">Rare Rugs</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interestedAntiques"
                  name="interestedIn"
                  value="Antiques"
                  className="mr-2 h-5 w-5"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="interestedAntiques">Antiques</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interestedEstateSales"
                  name="interestedIn"
                  value="Estate Sales"
                  className="mr-2 h-5 w-5"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="interestedEstateSales">Estate Sales</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interestedJewelry"
                  name="interestedIn"
                  value="Jewelry"
                  className="mr-2 h-5 w-5"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="interestedJewelry">Jewelry</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interestedFurniture"
                  name="interestedIn"
                  value="Furniture"
                  className="mr-2 h-5 w-5"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="interestedFurniture">Furniture</label>
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2">
              Preferred Contact Method*
            </label>
            <div className="flex space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="contactEmail"
                  name="preferredContact"
                  value="email"
                  className="mr-2 h-5 w-5"
                  checked={formData.preferredContact === 'email'}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="contactEmail">Email</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="contactPhone"
                  name="preferredContact"
                  value="phone"
                  className="mr-2 h-5 w-5"
                  checked={formData.preferredContact === 'phone'}
                  onChange={handleChange}
                />
                <label htmlFor="contactPhone">Phone</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="contactText"
                  name="preferredContact"
                  value="text"
                  className="mr-2 h-5 w-5"
                  checked={formData.preferredContact === 'text'}
                  onChange={handleChange}
                />
                <label htmlFor="contactText">Text</label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block mb-2">
              Additional Information or Specific Interests
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Tell us about any specific items or categories you're looking for"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded"
              disabled={loading}
            >
              {loading ? "Submitting..." : "REGISTER"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuctionRegistrationForm;