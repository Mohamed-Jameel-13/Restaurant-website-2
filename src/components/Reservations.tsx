import React from 'react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export function Reservations() {
  const [formData, setFormData] = React.useState({
    partySize: '2',
    date: '',
    time: '',
    specialRequests: '',
    name: '',
    email: '',
    phone: '',
  });

  const [availability, setAvailability] = React.useState<'available' | 'limited' | 'unavailable'>('available');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00',
    '19:00', '19:30', '20:00', '20:30', '21:00',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({ 
      ...prev, 
      date: date ? date.toISOString().split('T')[0] : '' 
    }));
    if (errors.date) {
      setErrors(prev => ({ ...prev, date: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }
    
    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Here you would typically send the formData to your backend
      
      // Show success message
      alert('Reservation submitted successfully! You will receive a confirmation email shortly.');
      
      // Reset form
      setFormData({
        partySize: '2',
        date: '',
        time: '',
        specialRequests: '',
        name: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get tomorrow's date for min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-playfair text-primary dark:text-accent text-center mb-12">
        Make a Reservation
      </h2>
      
      <div className="max-w-2xl mx-auto bg-amber-500 dark:bg-highlight rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-1">
          {/* Party Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-accent mb-2">
              <Users className="inline-block w-4 h-4 mr-2" />
              Party Size
            </label>
            <select
              name="partySize"
              value={formData.partySize}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-amber-500 dark:bg-black text-gray-900 dark:text-accent focus:ring-2 focus:ring-secondary"
            >
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? 'Person' : 'People'}
                </option>
              ))}
            </select>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-accent mb-2">
                <Calendar className="inline-block w-4 h-4 mr-2" />
                Date
              </label>
              <DatePicker
                selected={formData.date ? new Date(formData.date) : null}
                onChange={handleDateChange}
                minDate={new Date(minDate)}
                dateFormat="yyyy-MM-dd"
                className={`w-full px-4 py-2 rounded-xl border ${
                  errors.date ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } bg-amber-500 dark:bg-black text-gray-900 dark:text-accent focus:ring-2 focus:ring-secondary`}
                placeholderText="Select a date"
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-500">{errors.date}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-accent mb-2">
                <Clock className="inline-block w-4 h-4 mr-2" />
                Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-xl border ${
                  errors.time ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } bg-amber-500 dark:bg-black text-gray-900 dark:text-accent focus:ring-2 focus:ring-secondary`}
              >
                <option value="">Select a time</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="mt-1 text-sm text-red-500">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-accent mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-xl border ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } bg-amber-500 dark:bg-black text-gray-900 dark:text-accent focus:ring-2 focus:ring-secondary`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-accent mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-xl border ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } bg-amber-300 dark:bg-black text-gray-900 dark:text-accent focus:ring-2 focus:ring-secondary`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-accent mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-xl border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } bg-amber-500 dark:bg-black text-gray-900 dark:text-accent focus:ring-2 focus:ring-secondary`}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-accent mb-2">
              <MessageSquare className="inline-block w-4 h-4 mr-2" />
              Special Requests
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-amber-500 dark:bg-black text-gray-900 dark:text-accent focus:ring-2 focus:ring-secondary"
              placeholder="Any special requests or dietary requirements?"
            />
          </div>

          {/* Availability Indicator */}
          <div className="flex items-center space-x-2">
            <div
              className={`w-3 h-3 rounded-full ${
                availability === 'available'
                  ? 'bg-green-500'
                  : availability === 'limited'
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              }`}
            />
            <span className="text-sm text-gray-600 dark:text-accent/80">
              {availability === 'available'
                ? 'Time slot available'
                : availability === 'limited'
                ? 'Limited availability'
                : 'Time slot unavailable'}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 text-white bg-black hover:bg-black/90 rounded-xl transition-colors ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              'Confirm Reservation'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}