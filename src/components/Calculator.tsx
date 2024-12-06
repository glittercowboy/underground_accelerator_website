import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CalendarModal } from './CalendarModal';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value);
};

const formatPercent = (value: number) => {
  return value.toFixed(1) + '%';
};

export const Calculator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [followers, setFollowers] = useState(50000);
  const [conversionRate, setConversionRate] = useState(1);
  const [subscriptionFee, setSubscriptionFee] = useState(10);
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [displayFollowers, setDisplayFollowers] = useState(formatNumber(50000));

  useEffect(() => {
    const subscriberCount = Math.floor(followers * (conversionRate / 100));
    const monthly = subscriberCount * subscriptionFee;
    setMonthlyRevenue(monthly);
    setAnnualRevenue(monthly * 12);
  }, [followers, conversionRate, subscriptionFee]);

  const handleFollowerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    const numericValue = parseInt(rawValue || '0');
    
    setFollowers(numericValue);
    setDisplayFollowers(formatNumber(numericValue));
  };

  const handleFollowerBlur = () => {
    setDisplayFollowers(formatNumber(followers));
  };

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent portal-gradient-vertical" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-transparent portal-gradient" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg mb-6">
              See What Your <span className="gradient-text">Fan Base is Worth</span>
            </h2>
            <p className="text-xl text-off-white/80 mb-12">
              Play with the numbers to discover how much your fan base could earn you every month and year with a thriving community.
            </p>
          </motion.div>

          {/* Calculator Section */}
          <div className="bg-dark-lighter p-8 rounded-xl border border-primary/20">
            {/* Step 1: Follower Count */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Step 1: Enter Your Follower Count</h3>
              <input
                type="text"
                value={displayFollowers}
                onChange={handleFollowerInput}
                onBlur={handleFollowerBlur}
                className="w-full max-w-md bg-dark border border-primary/20 rounded-lg px-4 py-3 text-off-white/90 text-center text-xl focus:outline-none focus:border-primary"
                placeholder="e.g., 50,000"
              />
            </div>

            {/* Step 2: Conversion Rate */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Step 2: Choose Your Conversion Rate</h3>
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md relative">
                  <input
                    type="range"
                    min="0.1"
                    max="5"
                    step="0.1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                  />
                  <div className="flex justify-between text-sm text-off-white/60 mt-1">
                    <span>0.1%</span>
                    <span>5%</span>
                  </div>
                </div>
                <span className="text-lg text-off-white/80 mt-4">Converting {formatPercent(conversionRate)} of followers to members</span>
              </div>
            </div>

            {/* Step 3: Subscription Fee */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Step 3: Set Your Monthly Subscription Fee</h3>
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md relative">
                  <input
                    type="range"
                    min="5"
                    max="1000"
                    step="5"
                    value={subscriptionFee}
                    onChange={(e) => setSubscriptionFee(parseInt(e.target.value))}
                  />
                  <div className="flex justify-between text-sm text-off-white/60 mt-1">
                    <span>$5</span>
                    <span>$1,000</span>
                  </div>
                </div>
                <span className="text-lg text-off-white/80 mt-4">{formatCurrency(subscriptionFee)} per month</span>
              </div>
            </div>

            {/* Results */}
            <div className="bg-dark rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Your Potential Revenue</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-lg text-off-white/80 mb-2">Monthly Revenue</p>
                  <p className="text-4xl font-bold gradient-text">{formatCurrency(monthlyRevenue)}</p>
                  <p className="text-sm text-off-white/60 mt-2">
                    From {formatNumber(Math.floor(followers * (conversionRate / 100)))} members
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-lg text-off-white/80 mb-2">Annual Revenue</p>
                  <p className="text-4xl font-bold gradient-text">{formatCurrency(annualRevenue)}</p>
                  <p className="text-sm text-off-white/60 mt-2">
                    Recurring yearly income
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-xl text-off-white/80 mb-6">
                Imagine turning even 1% of your fans into loyal, paying members. That's what we do. Ready to see these numbers become a reality?
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-primary to-secondary text-dark px-12 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Let's Talk
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calendarUrl="https://link.underground-accelerator.com/widget/booking/ubLdkpbX3jVzogwQamzH"
      />
    </section>
  );
}; 