import React from "react";
import { ArrowRight, CheckCircle, Rocket, Shield, Star } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">MyCompany</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Build Fast, Launch Faster with  
          <span className="text-blue-600"> Modern Tools</span>
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Create beautiful, scalable and efficient applications using our powerful platform.
        </p>

        <div className="mt-8">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition flex items-center gap-2 mx-auto">
            Start Now <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-800">
          Why Choose Us?
        </h3>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
            <Rocket size={40} className="text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Lightning Fast</h4>
            <p className="text-gray-600">
              Experience high performance with modern technologies that boost productivity.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
            <Shield size={40} className="text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Secure & Reliable</h4>
            <p className="text-gray-600">
              Built with top security standards to keep your data protected.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
            <Star size={40} className="text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Top Quality Design</h4>
            <p className="text-gray-600">
              Beautiful and intuitive UI design that enhances user experience.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20 text-center bg-blue-600 text-white">
        <h3 className="text-4xl font-bold">Ready to Get Started?</h3>
        <p className="mt-3 text-lg opacity-90">
          Join thousands of developers already building with us.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-700 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
          Create Your Account
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 bg-white border-t mt-10">
        © 2025 MyCompany — All Rights Reserved.
      </footer>

    </div>
  );
}
