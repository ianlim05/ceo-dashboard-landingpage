import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, TrendingUp, Target, DollarSign, Heart, Brain, BarChart3, Users, Star } from "lucide-react";

const Index = () => {
  const modules = [
    {
      category: "Daily Practices",
      color: "border-orange-200 bg-orange-50",
      iconColor: "text-orange-600",
      items: [
        {
          title: "Daily Journal",
          description: "Record your thoughts and reflections with guided prompts",
          icon: "📖",
          status: "Action needed!",
          image: "/lovable-uploads/dd66e310-1234-4022-807e-18e10bc10648.png"
        },
        {
          title: "Weekly Rhythms",
          description: "Plan and review your weekly priorities and activities",
          icon: "📅",
          status: "Action needed!",
          image: "/lovable-uploads/5c0dac7a-5923-49c7-a0bd-e07dd04fbaa2.png"
        },
        {
          title: "Habit Tracker",
          description: "Track your daily habits and build consistency",
          icon: "🎯",
          status: "Action needed!",
          image: "/lovable-uploads/23fd5075-7b72-425c-aac6-b71df3ea3084.png"
        }
      ]
    },
    {
      category: "Productivity",
      color: "border-blue-200 bg-blue-50",
      iconColor: "text-blue-600",
      items: [
        {
          title: "To-do List",
          description: "A simple and easy-to-use to-do list, like a piece of paper",
          icon: "✅",
          image: "/lovable-uploads/12c4a881-63aa-41c5-a05b-d821af1a9933.png"
        },
        {
          title: "Weekly Design System",
          description: "Plan and track your weekly activities with a structured approach",
          icon: "🎨",
          image: "/lovable-uploads/3a2018ae-7481-40b1-b803-a04f451afc21.png"
        },
        {
          title: "Project Management",
          description: "Organize and track your projects from start to finish",
          icon: "📊",
          image: "/lovable-uploads/46b6a71e-3c5e-4163-9cfb-0caf859b9303.png"
        }
      ]
    },
    {
      category: "Life & Finance",
      color: "border-green-200 bg-green-50",
      iconColor: "text-green-600",
      items: [
        {
          title: "Personal Finance",
          description: "Track income, expenses, and manage your budget",
          icon: "💰",
          image: "/lovable-uploads/9d71aa1f-e6ad-4192-960b-6b4755538d44.png"
        },
        {
          title: "Bucket List",
          description: "Create and manage your life goals and dreams",
          icon: "🌟",
          image: "/lovable-uploads/715d2a0f-3c3b-4f0b-9e2a-c2404d8f413b.png"
        }
      ]
    },
    {
      category: "Self-Growth",
      color: "border-purple-200 bg-purple-50",
      iconColor: "text-purple-600",
      items: [
        {
          title: "Manifestation",
          description: "Set intentions and track your manifestation practices",
          icon: "✨",
          image: "/lovable-uploads/df8ca2d4-fe64-4cb9-934a-450465dc55a0.png"
        },
        {
          title: "Five Percent Reviews",
          description: "Track and review your progress with 5% improvements",
          icon: "📈",
          image: "/lovable-uploads/813a0439-b67e-45e1-a13e-7a34bab15fdb.png"
        },
        {
          title: "Future Me",
          description: "Send letters to your future self for reflection",
          icon: "💌",
          image: "/lovable-uploads/baf8af56-148e-4718-8b87-ac12d14255c2.png"
        },
        {
          title: "Ikigai",
          description: "Discover your life's purpose by exploring your passions",
          icon: "🎌",
          image: "/lovable-uploads/d580a47d-4d49-4b9e-a986-b98ee8c00fe1.png"
        },
        {
          title: "Dreamboard",
          description: "Create a visual dream board with drawings, text and images",
          icon: "🎨",
          image: "/lovable-uploads/8faad639-b6e9-4e6b-b065-ae3afb7fc11c.png"
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Boost Productivity",
      description: "Streamline your workflow with integrated planning and tracking tools"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "Personal Growth",
      description: "Develop habits and mindsets that accelerate your personal development"
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Strategic Planning",
      description: "Align your daily actions with your long-term vision and goals"
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Life Balance",
      description: "Maintain harmony between work, personal growth, and well-being"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">CEO Dashboard</span>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">
            All-in-One Productivity Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Your Complete
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Life Operating System</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Integrate productivity, personal growth, planning, and life balance into one beautiful, intuitive platform. 
            Designed for leaders who want to optimize every aspect of their lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
              View Demo
            </Button>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
            <img 
              src="/lovable-uploads/b965cb91-4d0d-48e6-a4b1-449d44acf5cb.png" 
              alt="CEO Dashboard Interface"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-slate-200"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-slate-600">
              Four core pillars designed to transform how you work and live
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-slate-50 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Comprehensive Module Library
            </h2>
            <p className="text-xl text-slate-600">
              Organized tools for every aspect of your personal and professional growth
            </p>
          </div>
          
          <div className="space-y-12">
            {modules.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  <div className={`w-4 h-4 rounded-full ${category.color.split(' ')[1]} mr-3`}></div>
                  <h3 className="text-2xl font-bold text-slate-800">{category.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((module, moduleIndex) => (
                    <Card key={moduleIndex} className={`${category.color} border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden`}>
                      {module.image && (
                        <div className="w-full h-48 overflow-hidden">
                          <img 
                            src={module.image} 
                            alt={module.title}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      )}
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{module.icon}</span>
                            <CardTitle className="text-lg">{module.title}</CardTitle>
                          </div>
                          {module.status && (
                            <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                              {module.status}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-slate-600">
                          {module.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Choose the plan that works best for your growth journey
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Monthly Plan */}
            <Card className="border-2 border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Monthly</CardTitle>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl">💸</span>
                  <span className="text-4xl font-bold text-slate-800">$15</span>
                  <span className="text-slate-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Access to all modules</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Cloud sync across devices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Regular updates</span>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Get Started Monthly
                </Button>
              </CardContent>
            </Card>

            {/* Annual Plan - Recommended */}
            <Card className="border-2 border-blue-500 relative hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                  <Star className="h-4 w-4 mr-1" />
                  Recommended
                </Badge>
              </div>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Annual</CardTitle>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl">🌟</span>
                  <span className="text-4xl font-bold text-blue-600">$100</span>
                  <span className="text-slate-600">/year</span>
                </div>
                <div className="text-sm text-green-600 font-medium">
                  Save $80 compared to monthly
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Access to all modules</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Cloud sync across devices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Regular updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Priority support</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started Annual
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of leaders who have already optimized their productivity and growth
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">CEO Dashboard</span>
            </div>
            <div className="text-slate-400">
              © 2024 CEO Dashboard. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
