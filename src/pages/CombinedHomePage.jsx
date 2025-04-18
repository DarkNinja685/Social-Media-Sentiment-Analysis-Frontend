// ===== SentimentSageApp.jsx =====
import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  BarChart,
  Globe,
  Zap,
  MessageSquare,
  TrendingUp,
  Clock,
  Search,
  BarChart2,
  Lightbulb,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const SentimentSageApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navbar Component
  const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-purple to-brand-indigo flex items-center justify-center">
                <span className="text-white font-bold text-sm">SA</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                SentimentSage
              </span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <a
                href="#features"
                className="text-gray-700 hover:text-brand-purple transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-brand-purple transition-colors"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-brand-purple transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-brand-purple transition-colors"
              >
                About
              </a>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                className="border-brand-purple text-brand-purple hover:bg-brand-purple/10"
              >
                Log in
              </Button>
              <Button className="bg-brand-purple hover:bg-brand-indigo text-white">
                Sign up
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-purple focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="px-3 py-2 text-gray-700 hover:text-brand-purple hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="px-3 py-2 text-gray-700 hover:text-brand-purple hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="px-3 py-2 text-gray-700 hover:text-brand-purple hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#about"
              className="px-3 py-2 text-gray-700 hover:text-brand-purple hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <div className="flex flex-col space-y-2 mt-2 pt-2 border-t border-gray-200">
              <Button
                variant="outline"
                className="border-brand-purple text-brand-purple w-full justify-center"
              >
                Log in
              </Button>
              <Button className="bg-brand-purple hover:bg-brand-indigo text-white w-full justify-center">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  // SentimentMetrics Component
  const SentimentMetrics = () => (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="text-center">
        <div className="text-4xl font-bold text-brand-purple">1M+</div>
        <div className="text-gray-600">Posts Analyzed Daily</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-brand-indigo">95%</div>
        <div className="text-gray-600">Accuracy Rate</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-brand-lightBlue">10+</div>
        <div className="text-gray-600">Social Platforms</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-brand-blue">24/7</div>
        <div className="text-gray-600">Real-time Monitoring</div>
      </div>
    </div>
  );

  // Hero Component
  const Hero = () => (
    <section className="pt-28 pb-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 inset-0 hero-gradient opacity-10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Understand the Sentiment</span>
            <br />
            Behind Social Media Conversations
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Monitor, analyze, and act on social media sentiment in real-time
            with our AI-powered analytics platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="bg-brand-purple hover:bg-brand-indigo text-white px-8 py-6 h-auto text-lg">
              Get Started Free
            </Button>
            <Button
              variant="outline"
              className="border-brand-purple text-brand-purple hover:bg-brand-purple/10 px-8 py-6 h-auto text-lg group"
            >
              <span>Watch Demo</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="w-full overflow-hidden">
            <div className="animate-fade-in">
              <SentimentMetrics />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // SentimentChart Component
  const SentimentChart = () => {
    const data = [
      { platform: "Twitter", positive: 65, neutral: 25, negative: 10 },
      { platform: "Facebook", positive: 45, neutral: 30, negative: 25 },
      { platform: "Instagram", positive: 70, neutral: 20, negative: 10 },
      { platform: "LinkedIn", positive: 80, neutral: 15, negative: 5 },
      { platform: "Reddit", positive: 35, neutral: 40, negative: 25 },
    ];

    return (
      <div className="w-full h-[400px] rounded-xl p-4 bg-white shadow-md">
        <h3 className="text-lg font-medium mb-4 text-gray-900">
          Cross-Platform Sentiment Analysis
        </h3>
        <div className="w-full h-[320px]">
          <div className="w-full h-full">
            {/* Chart implementation would go here */}
            <div className="flex h-full items-center justify-center bg-gray-100 rounded-lg">
              <p className="text-gray-500">Sentiment Chart Visualization</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Features Component
  const Features = () => {
    const features = [
      {
        icon: <BarChart className="h-10 w-10 text-brand-purple" />,
        title: "Real-time Analytics",
        description:
          "Monitor sentiment as it happens with live dashboards and instant alerts for significant changes.",
      },
      {
        icon: <Globe className="h-10 w-10 text-brand-indigo" />,
        title: "Multi-platform Support",
        description:
          "Track sentiment across Twitter, Facebook, Instagram, LinkedIn, Reddit, and more from one dashboard.",
      },
      {
        icon: <Zap className="h-10 w-10 text-brand-lightBlue" />,
        title: "AI-Powered Insights",
        description:
          "Our advanced AI understands context, sarcasm, and cultural nuances for accurate sentiment analysis.",
      },
      {
        icon: <MessageSquare className="h-10 w-10 text-brand-purple" />,
        title: "Topic Detection",
        description:
          "Automatically identify trending topics and emerging themes in conversations about your brand.",
      },
      {
        icon: <TrendingUp className="h-10 w-10 text-brand-indigo" />,
        title: "Competitive Analysis",
        description:
          "Compare your brand's sentiment against competitors to identify opportunities and threats.",
      },
      {
        icon: <Clock className="h-10 w-10 text-brand-lightBlue" />,
        title: "Historical Tracking",
        description:
          "Access historical data to track sentiment trends over time and measure campaign impact.",
      },
    ];

    return (
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive toolkit helps you understand and respond to what
              people are saying about your brand across social media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // HowItWorks Component
  const HowItWorks = () => {
    const steps = [
      {
        icon: <Search className="h-10 w-10 text-white" />,
        title: "Connect & Collect",
        description:
          "Connect your social accounts or enter keywords, hashtags, and accounts to monitor.",
        color: "bg-brand-blue",
      },
      {
        icon: <BarChart2 className="h-10 w-10 text-white" />,
        title: "Analyze & Visualize",
        description:
          "Our AI analyzes the sentiment of every post, comment, and mention in real-time.",
        color: "bg-brand-purple",
      },
      {
        icon: <MessagesSquare className="h-10 w-10 text-white" />,
        title: "Track & Alert",
        description:
          "Monitor trends, set up custom alerts, and track sentiment changes over time.",
        color: "bg-brand-indigo",
      },
      {
        icon: <Lightbulb className="h-10 w-10 text-white" />,
        title: "Act & Improve",
        description:
          "Use the insights to improve your strategy, products, and customer experience.",
        color: "bg-brand-lightBlue",
      },
    ];

    return (
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start monitoring your social media sentiment in four simple steps
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`${step.color} h-16 w-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Testimonials Component
  const Testimonials = () => {
    const testimonials = [
      {
        quote:
          "SentimentSage has transformed how we respond to customer feedback. We've improved our response time by 60% and significantly boosted customer satisfaction.",
        author: "Sarah Johnson",
        title: "Chief Marketing Officer",
        company: "RetailGiant Inc.",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      },
      {
        quote:
          "The real-time analytics have been invaluable during product launches. We can immediately see how our audience is responding and adjust our messaging accordingly.",
        author: "Michael Chen",
        title: "Social Media Director",
        company: "TechFlow Solutions",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      },
      {
        quote:
          "The competitive analysis feature has given us insights we never had before. We've been able to capitalize on gaps in our competitors' social strategies.",
        author: "Alex Rivera",
        title: "Brand Strategy Lead",
        company: "Innovate Partners",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      },
    ];

    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how SentimentSage has helped businesses improve their
              social media strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-md p-6 rounded-xl"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg
                      className="h-8 w-8 text-brand-purple opacity-30"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // CallToAction Component
  const CallToAction = () => (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to understand what people are saying?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Start monitoring your brand's social media sentiment today with
                our 14-day free trial. No credit card required.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <BarChart2 className="h-5 w-5 text-brand-purple mr-2" />
                  <span>Real-time analytics</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-brand-purple mr-2" />
                  <span>AI-powered insights</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-brand-purple mr-2" />
                  <span>Multi-platform tracking</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-purple hover:bg-brand-indigo text-white px-8 py-6 h-auto text-lg">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="border-brand-purple text-brand-purple hover:bg-brand-purple/10 px-8 py-6 h-auto text-lg"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 relative">
                <div className="absolute -top-3 -right-3 bg-brand-purple text-white text-sm font-bold px-3 py-1 rounded-full">
                  14-day free
                </div>
                <h3 className="text-xl font-bold mb-4">Pro Plan</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Perfect for growing brands and businesses
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Up to 10 keywords/accounts</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>All social platforms</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Custom reporting</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Email alerts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-purple to-brand-indigo flex items-center justify-center">
                <span className="text-white font-bold text-sm">SA</span>
              </div>
              <span className="ml-2 text-xl font-bold">SentimentSage</span>
            </div>
            <p className="text-gray-400 mb-4">
              Unlock the power of social media sentiment analysis with our
              advanced AI platform.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a
                  href="mailto:info@sentimentsage.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@sentimentsage.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <a
                  href="tel:+1-800-123-4567"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1-800-123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SentimentSage. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );

  // Main App Render
  return (
    <div className="container-fluid p-0">
      <Navbar />

      <section className="bg-light text-dark py-5">
        <Hero />
      </section>

      <section className="py-5 text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">
            Real-time Sentiment Analysis
          </h2>
          <p className="lead text-muted">
            Track how people feel about your brand across all major social
            platforms
          </p>
          <SentimentChart />
        </div>
      </section>

      <section className="py-5 bg-body-secondary">
        <div className="container">
          <Features />
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <HowItWorks />
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <Testimonials />
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <CallToAction />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SentimentSageApp;
