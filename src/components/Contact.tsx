import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-playfair text-black dark:text-accent text-center mb-12">
        Contact Us
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="prose dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-accent/80 leading-relaxed">
              We'd love to hear from you. Whether you have a question about our menu,
              reservations, or special events, our team is here to help.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-playfair text-lg text-black dark:text-accent">Location</h3>
                <p className="text-gray-600 dark:text-accent/60">
                  123 Culinary Street, Foodie District
                  <br />
                  Gourmet City, GC 12345
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-playfair text-lg text-black dark:text-accent">Phone</h3>
                <p className="text-gray-600 dark:text-accent/60">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-playfair text-lg text-black dark:text-accent">Email</h3>
                <p className="text-gray-600 dark:text-accent/60">
                  info@spicesymphony.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-playfair text-lg text-black dark:text-accent">WhatsApp</h3>
                <p className="text-gray-600 dark:text-accent/60">
                  +1 (555) 987-6543
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-amber-500 dark:bg-highlight rounded-xl shadow-lg p-8">
          <form className="space-y-1">
          <div>
              <label htmlFor="name" className="block text-sm font-medium text-black dark:text-accent mb-0">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-accent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black dark:text-accent mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-accent"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-black dark:text-accent mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="What is your message about?"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-accent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black dark:text-accent mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Type your message here..."
                className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-accent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-black/90 text-white font-medium py-3 px-6 rounded-xl transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}