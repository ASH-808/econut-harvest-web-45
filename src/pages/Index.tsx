import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowDown, Leaf, Users, Award, Mail, Phone, MapPin, Send } from "lucide-react";

const Index = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-amber-50 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
        backgroundImage: "url('/lovable-uploads/7861bcd8-0e5d-4eed-896c-612ff18dfbb1.png')"
      }} />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-800 font-semibold rounded-full text-sm mb-4">
                Premium Organic Products
              </span>
            </div>
            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-green-900 mb-8 leading-tight">
              From Farm to Your Table
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-12 max-w-2xl mx-auto font-medium">
              Connecting Karnataka's finest coconut farmers directly with conscious consumers
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-lg mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-900">100%</div>
                <div className="text-sm text-green-700">Organic</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-900">500+</div>
                <div className="text-sm text-green-700">Farmers</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-900">A+</div>
                <div className="text-sm text-green-700">Quality</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 text-lg font-semibold rounded-full" onClick={() => window.location.href = '/products'}>
                Shop Products
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-10 py-4 text-lg font-semibold rounded-full" onClick={() => window.location.href = '/about'}>
                Our Story
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-green-700" />
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Why Choose ECONUT
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Experience the difference of authentic, farm-fresh coconut products
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <CardTitle className="text-green-900">Sustainable Farming</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    100% organic practices that protect the environment and ensure premium quality
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-amber-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <CardTitle className="text-amber-800">Direct Trade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Fair prices for farmers, fresh products for you - no middlemen involved
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💪</span>
                  </div>
                  <CardTitle className="text-green-900">Community Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Supporting rural communities and creating sustainable livelihoods
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Featured Products
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                Discover our premium coconut products, sourced directly from Karnataka's finest farms
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-amber-200 hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-t-lg overflow-hidden">
                  <img alt="Neera Sugar" className="w-full h-full object-cover" src="/lovable-uploads/eba3f987-276d-4443-8831-72d6c8043626.jpg" />
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-800">Neera Sugar</CardTitle>
                  <CardDescription>Natural sweetener with low glycemic index</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200 hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg overflow-hidden">
                  <img alt="Virgin Coconut Oil" className="w-full h-full object-cover" src="/lovable-uploads/40a66529-6750-4393-af80-e85e5aed29d8.png" />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800">Virgin Coconut Oil</CardTitle>
                  <CardDescription>Cold-pressed, pure and nutritious</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-amber-200 hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-t-lg overflow-hidden">
                  <img alt="Coconut Milkshake" className="w-full h-full object-cover" src="/lovable-uploads/d370a513-6062-4ecb-8449-7881c7e6c0ba.jpg" />
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-800">Coconut Milkshake</CardTitle>
                  <CardDescription>Refreshing and naturally nutritious</CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg font-semibold rounded-full" onClick={() => window.location.href = '/products'}>
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Ready to experience the finest coconut products? Contact us today to learn more about our offerings or to place an order.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">Email</h4>
                        <p className="text-gray-700">info@econut.in</p>
                        <p className="text-gray-700">sales@econut.in</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-amber-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">Phone</h4>
                        <p className="text-gray-700">+91 98765 43210</p>
                        <p className="text-gray-700">+91 87654 32109</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">Address</h4>
                        <p className="text-gray-700">
                          ECONUT Farmer Producer Organization<br />
                          Karnataka Agricultural Complex<br />
                          Bangalore, Karnataka 560001<br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-green-50">
                  <CardHeader>
                    <CardTitle className="text-amber-800 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-green-900">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-green-900">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="border-green-200 focus:border-green-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-green-900">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="border-green-200 focus:border-green-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-green-900">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="border-green-200 focus:border-green-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-green-900">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-green-900">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        className="border-green-200 focus:border-green-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-green-900">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        className="border-green-200 focus:border-green-500 min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-green-700 hover:bg-green-800 text-white py-3 text-lg font-semibold rounded-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
