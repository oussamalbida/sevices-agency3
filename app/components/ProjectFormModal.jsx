'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaVideo, FaCode, FaPalette, FaBullhorn, FaComments, FaHashtag } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const serviceTypes = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    icon: FaVideo,
    description: 'Professional video editing services',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    icon: FaCode,
    description: 'Custom website development',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    icon: FaPalette,
    description: 'Creative logo design services',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: FaBullhorn,
    description: 'Strategic digital marketing',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 'consulting',
    title: 'Free Consulting',
    icon: FaComments,
    description: 'Expert consulting services',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'social-media',
    title: 'Social Media',
    icon: FaHashtag,
    description: 'Social media management',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

// EmailJS configuration
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // You'll get this from EmailJS
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // You'll get this from EmailJS
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // You'll get this from EmailJS

const steps = [
  {
    title: 'Project Type',
    description: 'What type of project are you looking to create?',
    fields: [
      { type: 'service-selection', name: 'projectType' }
    ]
  },
  {
    title: 'Project Details',
    description: 'Tell us more about your project',
    fields: [
      { type: 'text', name: 'projectName', label: 'Project Name', placeholder: 'Enter your project name' },
      { type: 'textarea', name: 'projectDescription', label: 'Project Description', placeholder: 'Describe your project in detail' }
    ]
  },
  {
    title: 'Contact Information',
    description: 'How can we reach you?',
    fields: [
      { type: 'text', name: 'name', label: 'Your Name', placeholder: 'Enter your full name' },
      { type: 'email', name: 'email', label: 'Email Address', placeholder: 'Enter your email' },
      { type: 'tel', name: 'phone', label: 'Phone Number (Optional)', placeholder: 'Enter your phone number' }
    ]
  }
];

const ProjectFormModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceId) => {
    const selectedService = serviceTypes.find(service => service.id === serviceId);
    setFormData(prev => ({ 
      ...prev, 
      projectType: serviceId,
      projectTypeName: selectedService.title 
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const templateParams = {
        to_email: 'oussamalbida90@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        project_type: formData.projectTypeName,
        project_name: formData.projectName,
        project_description: formData.projectDescription,
        reply_to: formData.email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      onClose();
      // You might want to show a success message here
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#0B1120] w-[90%] max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl border border-white/10"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Progress bar */}
          <div className="w-full h-1 bg-gray-800 rounded-full mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            />
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  {steps[currentStep].title}
                </h2>
                <p className="text-gray-400 mt-2">{steps[currentStep].description}</p>
              </div>

              <div className="space-y-4">
                {steps[currentStep].fields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    {field.type === 'service-selection' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {serviceTypes.map((service) => {
                          const Icon = service.icon;
                          const isSelected = formData.projectType === service.id;
                          
                          return (
                            <motion.div
                              key={service.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`relative cursor-pointer group ${isSelected ? 'ring-2 ring-purple-500' : ''}`}
                              onClick={() => handleServiceSelect(service.id)}
                            >
                              <div className="relative overflow-hidden rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 h-full">
                                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                                <div className="relative z-10">
                                  <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${service.gradient}`}>
                                    <Icon className="w-6 h-6 text-white" />
                                  </div>
                                  <h3 className="mt-4 text-lg font-medium text-white">{service.title}</h3>
                                  <p className="mt-2 text-sm text-gray-400">{service.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : field.type === 'textarea' ? (
                      <div>
                        <label className="block text-gray-400 mb-2">{field.label}</label>
                        <textarea
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name] || ''}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors h-32 text-white"
                        />
                      </div>
                    ) : field.type === 'select' ? (
                      <div>
                        <label className="block text-gray-400 mb-2">{field.label}</label>
                        <select
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors text-white"
                        >
                          <option value="">Select {field.label}</option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-gray-400 mb-2">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name] || ''}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors text-white"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6 py-2 rounded-lg border border-zinc-700 text-gray-300 hover:bg-zinc-800/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectFormModal;
