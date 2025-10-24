'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: '499',
      yearlyPrice: '4,990',
      description: 'Perfect for small businesses getting started',
      features: [
        '10 Posts per month',
        '2 Social platforms',
        'Basic analytics',
        'Content calendar',
        'Email support',
      ],
      gradient: 'from-blue-500 to-purple-500',
      popular: false,
    },
    {
      name: 'Professional',
      monthlyPrice: '999',
      yearlyPrice: '9,990',
      description: 'Ideal for growing businesses',
      features: [
        '25 Posts per month',
        '5 Social platforms',
        'Advanced analytics',
        'Content calendar',
        'Priority support',
        'Monthly strategy calls',
        'Ad campaign management',
      ],
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: '2,499',
      yearlyPrice: '24,990',
      description: 'For established brands and agencies',
      features: [
        'Unlimited posts',
        'All social platforms',
        'Real-time analytics',
        'Dedicated account manager',
        '24/7 Priority support',
        'Weekly strategy calls',
        'Full ad management',
        'Influencer partnerships',
        'Custom reporting',
      ],
      gradient: 'from-pink-500 to-blue-500',
      popular: false,
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          Pricing Plans
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-8 text-lg"
        >
          Choose the perfect plan for your business
        </motion.p>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center gap-4 mb-16"
        >
          <span className={`font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="relative w-16 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300"
          >
            <motion.div
              animate={{ x: billingCycle === 'monthly' ? 2 : 34 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
            />
          </button>
          <span className={`font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Yearly
            <span className="ml-2 text-sm text-green-600 font-semibold">(Save 17%)</span>
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden ${
                plan.popular ? 'border-4 border-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-bl-3xl font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="text-3xl font-bold mb-2 text-gray-900">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="text-gray-600 ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white hover:shadow-2xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Need a custom plan?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}