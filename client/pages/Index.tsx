import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowRight,
  MapPin,
  Eye,
  Mountain,
  Tent,
  Route,
  Users,
  BookOpen,
  Navigation,
  MessageCircle,
  Menu,
  X,
  Heart,
  Calendar,
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="w-full px-4 sm:px-6 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <Mountain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Thrilliz</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            <a
              href="#"
              className="text-gray-900 hover:text-teal-600 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              Rental
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Booking Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button className="hidden sm:inline-flex bg-teal-600 hover:bg-teal-700 text-white px-6">
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4 mt-4">
              <a
                href="#"
                className="text-gray-900 hover:text-teal-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                Rental
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                Contact
              </a>
              <Button className="sm:hidden bg-teal-600 hover:bg-teal-700 text-white w-full mt-2">
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-teal-600">
                  <Mountain className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    Hiking & Outdoor Activities
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your
                  <br />
                  <span className="text-teal-600">Adventure</span>
                  <br />
                  Starts Here!
                </h1>

                <p className="text-lg text-gray-600 max-w-md">
                  Find expert advice, detailed trail guides, and the best
                  equipment to start your hiking journey today.
                </p>
              </div>

              {/* Customer Stats */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <Avatar className="w-10 h-10 border-2 border-white">
                    <AvatarImage src="/placeholder.svg" alt="Customer 1" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-10 h-10 border-2 border-white">
                    <AvatarImage src="/placeholder.svg" alt="Customer 2" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-10 h-10 border-2 border-white">
                    <AvatarImage src="/placeholder.svg" alt="Customer 3" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-10 h-10 border-2 border-white">
                    <AvatarImage src="/placeholder.svg" alt="Customer 4" />
                    <AvatarFallback>U4</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">23K+</div>
                  <div className="text-sm text-gray-600">
                    Worldwide Customer
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg text-base font-medium">
                Start Adventure
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Partner Logos */}
              <div className="flex items-center gap-8 pt-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mountain className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-medium">TrekGear</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Route className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium">AdventureKits</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Tent className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="font-medium">CampPro</span>
                </div>
              </div>
            </div>

            {/* Right Image with Overlays */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2348108/pexels-photo-2348108.jpeg"
                  alt="White water rafting adventure scene"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />

                {/* Location Pins Overlay */}
                <div className="absolute inset-0">
                  {/* Rainier Mountain */}
                  <div className="absolute top-16 right-16 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-medium">
                        Rainier Mountain
                      </span>
                    </div>
                  </div>

                  {/* Extreme Route */}
                  <div className="absolute top-32 left-8 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Route className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium">Extreme Route</span>
                    </div>
                  </div>

                  {/* Camp Site */}
                  <div className="absolute bottom-32 right-8 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Tent className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium">Camp Site</span>
                    </div>
                  </div>

                  {/* Viewpoint */}
                  <div className="absolute bottom-20 left-16 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium">Viewpoint</span>
                    </div>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-600" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          Mount Rainier National Park, USA
                        </div>
                        <div className="text-xs text-gray-600">
                          5000 hiking track
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <div
              className="relative h-96 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
              }}
            >
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl px-8 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">What Do We Do?</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Your Ultimate Guide to
                    <br />
                    <span className="text-teal-300">
                      Unforgettable Hiking and Outdoor Adventures
                    </span>
                  </h2>

                  <p className="text-lg mb-8 opacity-90">
                    Exciting platform dedicated to hiking and outdoor adventure
                    enthusiasts, offering curated guides, breathtaking trail
                    recommendations, and expert tips to make every journey
                    memorable.
                  </p>

                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    Know Us More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Comprehensive Adventure Guides */}
            <div className="text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Comprehensive Adventure Guides
              </h3>
              <p className="text-white/80 text-sm">
                Discover well-researched, easy-to-follow hiking and adventure
                guides.
              </p>
            </div>

            {/* Adventure Tips from Expert */}
            <div className="text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Adventure Tips from Expert
              </h3>
              <p className="text-white/80 text-sm">
                Get tips from seasoned outdoors experts to enhance your
                experience.
              </p>
            </div>

            {/* Personalized Recommendations */}
            <div className="text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Personalized Recommendations
              </h3>
              <p className="text-white/80 text-sm">
                Find trails and adventures matched to your interests and skill
                level for the perfect experience.
              </p>
            </div>

            {/* Interactive Hikers Community */}
            <div className="text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Interactive Hikers Community
              </h3>
              <p className="text-white/80 text-sm">
                Connect, share tips, and learn from a community of passionate
                outdoor enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
