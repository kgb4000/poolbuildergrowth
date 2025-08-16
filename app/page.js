'use client'

import React, { useState, useEffect } from 'react'
import {
  ChevronRight,
  TrendingUp,
  Search,
  Brain,
  Zap,
  Target,
  Users,
  Star,
  CheckCircle,
  AlertTriangle,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  BarChart3,
  Globe,
  Lightbulb,
  Shield,
  Clock,
  Award,
  Play,
  Eye,
  MousePointer,
  Smartphone,
  Monitor,
  TrendingDown,
  X,
  Menu,
  ExternalLink,
} from 'lucide-react'
import MobileMenu from '@/components/MobileMenu'

const PoolBuilderLanding = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stats = [
    {
      number: '87%',
      label: 'Question-Based Searches',
      sublabel: 'Up from 38% in just 8 months',
      icon: <Search className="w-6 h-6" />,
    },
    {
      number: '13.7B',
      label: 'Daily Google Searches',
      sublabel: '5.2B more than last year',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: '90%',
      label: 'Brand Discovery Rate',
      sublabel: 'Through organic search results',
      icon: <Eye className="w-6 h-6" />,
    },
    {
      number: '6.1%',
      label: 'AI Overview Frequency',
      sublabel: 'On high-intent searches',
      icon: <Brain className="w-6 h-6" />,
    },
  ]

  const problems = [
    {
      icon: <TrendingDown className="w-12 h-12" />,
      title: 'Ranking High, Getting Ignored',
      description:
        "You rank #1 for 'pool contractors near me' but Google's AI cites competitors for 'What's the best pool for my family size and budget?'",
      impact: 'Lost leads daily',
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'AI Answers Without Clicks',
      description:
        "Customers ask complex questions like 'Should I install my pool before landscaping?' Google's AI provides complete answers without visiting your site.",
      impact: 'Zero visibility',
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'Hidden Micro-Searches',
      description:
        "Every customer question triggers 10-30 invisible sub-searches about permits, costs, timelines. You're missing all of them.",
      impact: 'Competitors dominate',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Competitors Racing Ahead',
      description:
        "Smart pool companies are already training Google's AI to cite them as experts. They're capturing mind-share while you fight for rankings.",
      impact: 'Market share lost',
    },
  ]

  const solutions = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'AI Citation Mastery',
      description:
        "We reverse-engineer Google's algorithm to ensure your company gets cited when customers ask pool-related questions.",
      results: '+340% brand mentions',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Multi-Media Optimization',
      description:
        'Create rich content experiences with videos, interactive diagrams, and visual guides that AI systems prefer.',
      results: '+250% engagement',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Competitor Gap Analysis',
      description:
        "Identify exact keywords and topics your competitors rank for but you don't. Target pre-validated opportunities.",
      results: '+180% traffic growth',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Semantic Authority Building',
      description:
        'Become the go-to source for entire customer journeys, not just keywords. Own the complete buying process.',
      results: '+420% conversions',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Local Market Domination',
      description:
        'Establish yourself as the default expert for pool questions in your area. When AI cites you, competitors become irrelevant.',
      results: '+300% market share',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Brand Authority Engine',
      description:
        'Get mentioned across search, voice results, and local features. Build brand memory that lasts.',
      results: '+500% brand recall',
    },
  ]

  const testimonials = [
    {
      quote:
        'We went from invisible to being cited in 80% of pool-related AI searches in our market. Our phone rings non-stop with pre-qualified leads who already trust us.',
      author: 'Mike Chen',
      title: 'CEO',
      company: 'Desert Oasis Pools',
      location: 'Phoenix, AZ',
      results: '+340% qualified leads',
      avatar: 'MC',
    },
    {
      quote:
        "Google's AI mentions us first for pool design questions, even though we rank #3 organically. It's like having a 24/7 sales team recommending our business.",
      author: 'Sarah Johnson',
      title: 'Owner',
      company: 'Aqua Dreams',
      location: 'Tampa, FL',
      results: '+280% revenue growth',
      avatar: 'SJ',
    },
    {
      quote:
        'The ROI is insane. We invested in GEO and now dominate every pool-related search in our county. Competitors are scrambling to catch up.',
      author: 'David Rodriguez',
      title: 'Founder',
      company: 'Premier Pools',
      location: 'Austin, TX',
      results: '+450% market dominance',
      avatar: 'DR',
    },
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Pool Builder Growth
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#results"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Results
              </a>
              {/* <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Pricing
              </a> */}
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                Get Free Audit
              </button>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bg-white border-b border-gray-200 p-6">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Features
              </a>
              <a
                href="#results"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Results
              </a>
              {/* <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Pricing
              </a> */}
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold w-full">
                Get Free Audit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            {/* Alert Banner */}
            <div className="inline-flex items-center px-6 py-3 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-semibold mb-8 animate-pulse">
              <AlertTriangle className="w-4 h-4 mr-2" />
              URGENT: Google's AI is stealing 73% of pool contractor leads
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mb-6 leading-[0.9] tracking-tight">
              Your Pool Business
              <span className="block text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text">
                Is Invisible
              </span>
            </h1>

            <p className="text-2xl lg:text-3xl text-gray-600 mb-4 font-light">
              Even if you rank #1 on Google
            </p>

            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              87% of searches are now questions. Google's AI answers them
              instantly without sending traffic to your website. If you're not
              cited in AI results, you're completely invisible to potential
              customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Your Free AI Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch 2-Min Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                500+ pool companies need this
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Average 340% lead increase
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                30-day results {/* guarantee */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Search Revolution in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While you're optimizing for yesterday's Google, the game has
              completely changed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white mb-6">
                    {stat.icon}
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Pool Business Has a
              <span className="block text-red-600">
                Massive Visibility Crisis
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Even top-ranking pool companies are becoming completely invisible
              in Google's new AI-powered search experience. Here's exactly
              what's happening to your business right now.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-10 border border-gray-100 hover:border-red-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white">
                        {problem.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {problem.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                        {problem.description}
                      </p>
                      <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-red-700 text-sm font-semibold">
                        <TrendingDown className="w-4 h-4 mr-2" />
                        {problem.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8">
              <Brain className="w-4 h-4 mr-2" />
              Introducing the Game-Changer
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              GEO: Generative Engine
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Optimization
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The world's first AI-optimization system designed specifically for
              pool contractors. Train Google's AI to cite YOUR company as the
              trusted expert for every pool-related question.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white mb-6">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm font-semibold">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {solution.results}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              Start Dominating Your Market
              <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Proven AI Citation
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Methodology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Here's exactly how we get your pool company cited by Google's AI
              when customers ask buying questions
            </p>
          </div>

          {/* Research & Analysis */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Step 1: Research & Competitive Intelligence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <Search className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Reverse Engineer Competitors
                </h4>
                <p className="text-gray-600">
                  Use advanced tools to identify which pool companies Google's
                  AI already cites and why they're trusted sources.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
                <Target className="w-12 h-12 text-purple-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Find Keyword Gaps
                </h4>
                <p className="text-gray-600">
                  Discover high-value pool questions your competitors rank for
                  but you don't - these are pre-validated opportunities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Analyze Trusted Pages
                </h4>
                <p className="text-gray-600">
                  Study the most visited pages and content that Google already
                  sees as credible in the pool industry.
                </p>
              </div>
            </div>
          </div>

          {/* Content Creation */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Step 2: Multi-Format Content Creation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all">
                <Monitor className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Video Content</h4>
                <p className="text-sm text-gray-600">
                  Create videos that summarize key pool installation points
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all">
                <BarChart3 className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">
                  Visual Diagrams
                </h4>
                <p className="text-sm text-gray-600">
                  Diagrams that simplify complex pool concepts and processes
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all">
                <TrendingUp className="w-10 h-10 text-purple-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">
                  Interactive Guides
                </h4>
                <p className="text-sm text-gray-600">
                  Step-by-step guides that walk through pool decisions
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all">
                <Eye className="w-10 h-10 text-red-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Scannable Data</h4>
                <p className="text-sm text-gray-600">
                  Infographics that make pool data easy to consume
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 mt-8">
              <div className="flex items-start space-x-4">
                <Lightbulb className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    The Key Insight:
                  </h4>
                  <p className="text-gray-700">
                    Google's AI doesn't just scan text anymore. It pulls from
                    multi-format, multi-layered content. Pool companies using
                    only blog posts are invisible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Semantic Optimization */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Step 3: Semantic Authority Building
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <Brain className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Complete Thought Process Coverage
                </h4>
                <p className="text-gray-600 mb-4">
                  Target entire customer journeys, not just keywords. When
                  someone asks "Should I install my pool before or after
                  landscaping?" we ensure you're cited for:
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pool installation timelines
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Landscaping coordination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Permit requirements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cost optimization
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Hidden Sub-Search Domination
                </h4>
                <p className="text-gray-600 mb-4">
                  Behind every pool question, Google runs 10-30 micro-searches.
                  We optimize for all of them:
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Local weather patterns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Soil conditions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Municipal regulations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Seasonal considerations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Authority Building */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6">
              The Result: AI Citation Dominance
            </h3>
            <p className="text-xl mb-8 opacity-95 max-w-4xl mx-auto">
              Google's AI starts recognizing your pool company as the trusted
              expert. When customers ask questions, you're cited the same way a
              news anchor cites trusted sources - building instant credibility
              without even getting clicked.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">3x</div>
                <div className="text-sm">
                  More brand mentions than competitors
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-sm">Of pool questions in your market</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm">AI recommends your business</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-24 bg-gradient-to-br from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <Clock className="w-20 h-20 mx-auto mb-8 opacity-90" />
            <h3 className="text-4xl lg:text-5xl font-bold mb-8">
              The Window Is Closing Fast
            </h3>
            <p className="text-xl lg:text-2xl mb-12 leading-relaxed opacity-95">
              Right now, only 3% of pool companies understand this shift. Those
              who implement GEO in the next 30 days will own their markets for
              years. Those who wait will struggle to compete.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <CheckCircle className="w-8 h-8 mb-4 mx-auto" />
                <div className="font-semibold mb-2">High-Value Decisions</div>
                <div className="text-sm opacity-90">
                  Customers research extensively before choosing contractors
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <CheckCircle className="w-8 h-8 mb-4 mx-auto" />
                <div className="font-semibold mb-2">Location-Specific</div>
                <div className="text-sm opacity-90">
                  "Best pool for Arizona heat" triggers multiple local searches
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <CheckCircle className="w-8 h-8 mb-4 mx-auto" />
                <div className="font-semibold mb-2">Complex Questions</div>
                <div className="text-sm opacity-90">
                  Weather, soil, permits - perfect for AI sub-searches
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <CheckCircle className="w-8 h-8 mb-4 mx-auto" />
                <div className="font-semibold mb-2">Long Sales Cycles</div>
                <div className="text-sm opacity-90">
                  Brand authority compounds over time
                </div>
              </div>
            </div>

            <button className="bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Claim Your Market Before Competitors Do
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="results" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pool Companies Already Dominating With GEO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how smart pool businesses are crushing their competition and
              owning their local markets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.title}, {testimonial.company}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm font-semibold">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {testimonial.results}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Don't Let Competitors
            <span className="block text-red-400">Steal Your Market</span>
          </h2>
          <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            While they're still fighting for outdated rankings, you'll own the
            AI layer that actually converts customers
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 mb-12 max-w-5xl mx-auto border border-white/20">
            <h3 className="text-3xl font-bold mb-6">
              Get Your Free AI Visibility Audit
            </h3>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              We'll analyze your current AI citations, reveal exactly where
              competitors are beating you, and show you the specific
              opportunities you're missing in Google's new search experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">AI Citation Analysis</div>
                  <div className="text-sm opacity-75">
                    See how often you're mentioned vs competitors
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Opportunity Map</div>
                  <div className="text-sm opacity-75">
                    Discover high-value questions you're missing
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Action Plan</div>
                  <div className="text-sm opacity-75">
                    Get your roadmap to AI domination
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              Call (555) 123-4567 Now
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-12 py-6 rounded-2xl font-semibold text-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center">
              <Calendar className="w-6 h-6 mr-3" />
              Book Strategy Call
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3 opacity-75">
              <Mail className="w-5 h-5" />
              <span>hello@poolbuildermarketing.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 opacity-75">
              <Smartphone className="w-5 h-5" />
              <span>Text: (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3 opacity-75">
              <ExternalLink className="w-5 h-5" />
              <span>PoolBuilderMarketing.com</span>
            </div>
          </div>

          <div className="bg-yellow-400/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-yellow-400/30">
            <p className="text-yellow-200 font-semibold">
              ⚡ Limited Time: First 50 pool companies get priority
              implementation + 30-day results guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PoolBuilderLanding
