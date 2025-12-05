// import React, { useState } from 'react';
// import heroBg from './assets/hero-bg.png';
// import phoneLeftMain from './assets/phone-left-main.png';   
// import phoneLeftFloat from './assets/phone-left-float.png'; 
// import phoneRight from './assets/phone-right.png';
// import { 
//   ArrowRight, 
//   Search, 
//   User, 
//   Settings, 
//   Menu, 
//   Briefcase, 
//   UserCheck, 
//   MoreHorizontal,
//   Facebook, 
//   Twitter, 
//   Linkedin, 
//   Youtube,
//   ShieldCheck,
//   TrendingUp,
//   MessageCircle,
//   BarChart,
//   Users,
//   X
// } from 'lucide-react';

// const LandingPage = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="font-sans text-gray-800 bg-white overflow-x-hidden">
      
//       {/* ================= NAVBAR ================= */}
//       <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           {/* Logo Section */}
//           <div className="flex items-center gap-2 cursor-pointer">
//             {/* SVG Representation of Group 236.png (Lotus) */}
//             <svg width="40" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M22.5 0C22.5 0 28 15 28 25C28 35 22.5 40 22.5 40C22.5 40 17 35 17 25C17 15 22.5 0 22.5 0Z" fill="#7B5CC6"/>
//               <path d="M45 30C45 30 35 32 28 28C21 24 22.5 40 22.5 40C22.5 40 35 45 40 38C45 31 45 30 45 30Z" fill="#2E2E6A"/>
//               <path d="M0 30C0 30 10 32 17 28C24 24 22.5 40 22.5 40C22.5 40 10 45 5 38C0 31 0 30 0 30Z" fill="#2E2E6A"/>
//               <path d="M10 10C10 10 18 20 22.5 40C22.5 40 10 35 5 28C0 21 10 10 10 10Z" fill="#BE3E6D" opacity="0.9"/>
//               <path d="M35 10C35 10 27 20 22.5 40C22.5 40 35 35 40 28C45 21 35 10 35 10Z" fill="#BE3E6D" opacity="0.9"/>
//             </svg>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
//             <a href="#" className="text-purple-700 font-bold border-b-2 border-purple-700 pb-1">Home</a>
//             <a href="#" className="hover:text-purple-600 transition">Network</a>
//             <a href="#" className="hover:text-purple-600 transition">Product</a>
//             <a href="#" className="hover:text-purple-600 transition">Technology</a>
//             <a href="#" className="hover:text-purple-600 transition">Our Story</a>
//             <a href="#" className="hover:text-purple-600 transition">Knowledge Center</a>
//           </div>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center gap-4">
//             <button className="px-5 py-2 rounded-full border border-purple-600 text-purple-600 text-sm font-medium hover:bg-purple-50 transition">
//               Contact Us
//             </button>
//             <button className="px-6 py-2 rounded-full bg-white shadow-md text-purple-700 text-sm font-bold border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition transform">
//               Log In
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 shadow-lg absolute w-full left-0 top-full">
//             <a href="#" className="block text-purple-700 font-bold">Home</a>
//             <a href="#" className="block text-gray-600 hover:text-purple-600">Network</a>
//             <a href="#" className="block text-gray-600 hover:text-purple-600">Product</a>
//             <a href="#" className="block text-gray-600 hover:text-purple-600">Technology</a>
//             <a href="#" className="block text-gray-600 hover:text-purple-600">Our Story</a>
//             <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
//               <button className="px-5 py-2 rounded-full border border-purple-600 text-purple-600 text-sm font-medium">
//                 Contact Us
//               </button>
//               <button className="px-6 py-2 rounded-full bg-purple-600 text-white shadow-md text-sm font-bold">
//                 Log In
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

// {/* ================= HERO SECTION ================= */}
//       <header className="relative pt-12 pb-20 lg:pt-20 lg:pb-40 overflow-hidden">
        
//         {/* 1. BACKGROUND IMAGE FIX */}
//         {/* z-0 ensures it sits on the base level. We use a defined width and height. */}
//         <div className="absolute top-6 right-0 w-[500px] h-full z-0 pointer-events-none">
//            <img 
//              src={heroBg} 
//              alt="Background Texture" 
//              className="w-full h-full object-cover rounded-bl-[150px]"
//            />
//         </div>
        
//         {/* Content Container - z-10 ensures text sits ON TOP of the background */}
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
//           {/* Left Text Content */}
//           <div>
//             <div className="flex items-center gap-2 mb-6">
//               <span className="w-8 h-[3px] bg-[#9E2349] rounded-full"></span>
//               <span className="text-[#9E2349] font-bold text-sm uppercase tracking-wide">Welcome to the</span>
//             </div>
            
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-gray-900 mb-8">
//               Unprecedented <br />
//               Era of <span className="text-[#9E2349]">Real Estate Investing</span>
//             </h1>
            
//             <p className="text-gray-500 text-lg mb-10 max-w-lg leading-relaxed">
//               Lilypads uses sophisticated technologies for data-driven decisions in investing, managing and funding commercial real estate assets.
//             </p>
            
//             <button className="bg-[#7B5CC6] text-white px-8 py-4 rounded-full font-medium shadow-xl shadow-purple-200 hover:bg-[#6a4eb0] hover:shadow-2xl transition-all flex items-center gap-2 mb-16 transform hover:-translate-y-1 cursor-pointer">
//               Start Investing Now <ArrowRight size={18} />
//             </button>
            
//             {/* Stats Row */}
//             <div className="flex flex-wrap gap-12 border-t border-gray-200 pt-8">
//               <div>
//                 <h3 className="text-3xl font-bold text-purple-700">658+</h3>
//                 <p className="text-xs text-gray-500 font-bold uppercase mt-1 tracking-wider">Properties Registered</p>
//               </div>
//               <div>
//                 <h3 className="text-3xl font-bold text-purple-700">685+</h3>
//                 <p className="text-xs text-gray-500 font-bold uppercase mt-1 tracking-wider">Deals Cracked</p>
//               </div>
//               <div>
//                 <h3 className="text-3xl font-bold text-purple-700">255+</h3>
//                 <p className="text-xs text-gray-500 font-bold uppercase mt-1 tracking-wider">Investors</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Phone Images */}
//           {/* We use 'relative' to allow absolute positioning of children inside this box */}
//           <div className="relative h-[650px] w-full hidden lg:block">
            
//             {/* 1. LEFT PHONE (Back - Investments) */}
//             {/* 'top-0' keeps it on the same level as the Right phone */}
//             <div className="absolute top-0 left-0 w-[280px] z-20">
//                <img 
//                  src={phoneLeftMain} 
//                  alt="Investments List" 
//                  className="w-full h-auto drop-shadow-2xl rounded-[30px]"
//                />
//             </div>

//             {/* 2. FLOATING CARD (Gemini) */}
//             {/* Adjusted position to sit nicely between them */}
//             <div className="absolute top-[280px] -left-12 w-[250px] z-30">
//                <img 
//                  src={phoneLeftFloat} 
//                  alt="Gemini Apartment" 
//                  className="w-full h-auto drop-shadow-xl rounded-xl"
//                />
//             </div>

//             {/* 3. RIGHT PHONE (Front - Julie Craig) */}
//             {/* -top-16 moves it UP. -right-24 moves it extreme RIGHT to overflow. */}
//             <div className="absolute -top-16 -right-24 w-[320px] z-20">
//                 <img 
//                  src={phoneRight} 
//                  alt="Julie Craig Profile" 
//                  className="w-full h-auto drop-shadow-2xl rounded-[35px]"
//                />
//             </div>

//           </div>
//         </div>
//       </header>

//       {/* ================= ABOUT/FEATURES GRID ================= */}
//       <section className="bg-white py-20 border-t border-gray-100">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Grid Layout: 3 Columns, divided by borders */}
//           <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-b border-gray-200">
            
//             {/* Cell 1: Header */}
//             <div className="p-8 lg:p-12 md:pb-24">
//                <div className="flex items-center gap-2 mb-4">
//                   <span className="w-8 h-[2px] bg-pink-600"></span>
//                   <span className="text-pink-600 font-bold text-xs uppercase tracking-wide">About Us</span>
//                 </div>
//                 <h2 className="text-3xl font-serif font-medium leading-tight text-gray-900">
//                   Lilypad is the only Real Estate Investment tool you need for your business
//                 </h2>
//             </div>

//             {/* Cell 2: Data Driven */}
//             <div className="p-8 lg:p-12 flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 group cursor-default">
//               <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 mb-2 group-hover:scale-110 transition duration-300">
//                 <ShieldCheck size={28} />
//               </div>
//               <h3 className="font-bold text-gray-900 text-lg">Become a Data-Driven Investor</h3>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions.
//               </p>
//             </div>

//             {/* Cell 3: Smarter Decisions */}
//             <div className="p-8 lg:p-12 flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 group cursor-default">
//               <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 mb-2 group-hover:scale-110 transition duration-300">
//                  <TrendingUp size={28} />
//               </div>
//               <h3 className="font-bold text-gray-900 text-lg">Lilypads can help you make smarter decisions.</h3>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 Streamline your investment evaluation process and collaborate in reaching your long term investment objectives.
//               </p>
//             </div>
//           </div>

//           {/* Row 2 of Grid */}
//           <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
             
//              {/* Cell 4: Due Diligence */}
//             <div className="p-8 lg:p-12 flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 group cursor-default">
//                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-2 group-hover:bg-purple-100 group-hover:text-purple-600 transition duration-300">
//                  <MessageCircle size={28} />
//               </div>
//               <h3 className="font-bold text-gray-900 text-lg">Manager Due Diligence</h3>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 Evaluate managers against your objectives using traditional risk metrics with the addition of factor analysis.
//               </p>
//             </div>

//             {/* Cell 5: Asset Allocation */}
//             <div className="p-8 lg:p-12 flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 group cursor-default">
//                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-2 group-hover:bg-purple-100 group-hover:text-purple-600 transition duration-300">
//                  <BarChart size={28} />
//               </div>
//               <h3 className="font-bold text-gray-900 text-lg">Optimize Asset Allocation</h3>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 Understand the underlying risk drivers in your portfolio using the Lilypads analysis factors and then optimize that portfolio.
//               </p>
//             </div>

//             {/* Cell 6: Subscribers */}
//             <div className="p-8 lg:p-12 flex flex-col items-start gap-4 hover:bg-gray-50 transition duration-300 group cursor-default">
//                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-2 group-hover:bg-purple-100 group-hover:text-purple-600 transition duration-300">
//                  <Users size={28} />
//               </div>
//               <h3 className="font-bold text-gray-900 text-lg">Our Subscribers</h3>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 Serving a constellation of global subscribers Pension funds, Funds of Funds, Banks, Family offices, Asset managers.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          
//           {/* LEFT COLUMN: Newsletter & CTA */}
//           <div className="lg:w-2/5 space-y-10">
//             {/* Newsletter Input */}
//             <div className="relative group">
//               <input 
//                 type="email" 
//                 placeholder="Enter Your Email Here" 
//                 className="w-full bg-[#262626] border border-[#333] text-gray-300 py-4 px-6 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-[#2a2a2a] transition-all"
//               />
//               <button className="absolute right-2 top-2 bottom-2 bg-[#333] hover:bg-[#444] text-white text-xs sm:text-sm font-medium px-6 rounded-lg transition border border-[#444]">
//                 Subscribe To Newsletter
//               </button>
//             </div>

//             {/* CTA Text */}
//             <h2 className="text-3xl font-bold leading-tight">
//               Signup and start enjoying the benifits today!
//             </h2>

//             {/* Big Purple Button */}
//             <button className="bg-[#7B5CC6] hover:bg-[#6a4eb0] text-white font-bold py-4 px-8 rounded-2xl w-full sm:w-auto shadow-lg transition transform hover:-translate-y-1">
//               Sign Up To Lilypads
//             </button>

//             {/* Social Icons */}
//             <div className="flex gap-4 pt-4">
//               <SocialIcon Icon={Facebook} />
//               <SocialIcon Icon={Twitter} />
//               <SocialIcon Icon={Linkedin} />
//               <SocialIcon Icon={Youtube} />
//               {/* Custom Medium Icon */}
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#7B5CC6] hover:bg-gray-200 cursor-pointer transition">
//                   <span className="font-serif font-bold text-lg">M</span>
//               </div>
//               {/* Custom Pinterest Icon */}
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#7B5CC6] hover:bg-gray-200 cursor-pointer transition">
//                   <span className="font-serif font-bold text-lg">P</span>
//               </div>
//             </div>
//           </div>

//           {/* Vertical Divider (Desktop Only) */}
//           <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

//           {/* RIGHT COLUMN: Links & Info */}
//           <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            
//             {/* Logo & Address */}
//             <div className="space-y-6">
//                <div className="w-16 h-12 relative opacity-90">
//                  {/* Footer Logo Representation */}
//                  <svg viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M22.5 0C22.5 0 28 15 28 25C28 35 22.5 40 22.5 40C22.5 40 17 35 17 25C17 15 22.5 0 22.5 0Z" fill="#7B5CC6"/>
//                     <path d="M45 30C45 30 35 32 28 28C21 24 22.5 40 22.5 40C22.5 40 35 45 40 38C45 31 45 30 45 30Z" fill="#2E2E6A"/>
//                     <path d="M0 30C0 30 10 32 17 28C24 24 22.5 40 22.5 40C22.5 40 10 45 5 38C0 31 0 30 0 30Z" fill="#2E2E6A"/>
//                     <path d="M10 10C10 10 18 20 22.5 40C22.5 40 10 35 5 28C0 21 10 10 10 10Z" fill="#BE3E6D" opacity="0.9"/>
//                     <path d="M35 10C35 10 27 20 22.5 40C22.5 40 35 35 40 28C45 21 35 10 35 10Z" fill="#BE3E6D" opacity="0.9"/>
//                 </svg>
//                </div>

//                <div>
//                  <h4 className="text-white font-bold mb-4">Reach Us At</h4>
//                  <p className="text-gray-400 text-sm leading-relaxed">
//                    6751 Columbia Gateway Dr.,<br />
//                    3rd floor, Columbia,<br />
//                    MD 21046
//                  </p>
//                </div>
//             </div>

//             {/* Link Columns */}
//             <div className="space-y-8">
//               <div>
//                 <h4 className="font-bold mb-4">Network</h4>
//                 <ul className="space-y-2 text-sm text-gray-400">
//                   <li><a href="#" className="hover:text-white transition">Community</a></li>
//                   <li><a href="#" className="hover:text-white transition">Investor</a></li>
//                   <li><a href="#" className="hover:text-white transition">Broker</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-bold mb-4">Technology</h4>
//                 <ul className="space-y-2 text-sm text-gray-400">
//                   <li><a href="#" className="hover:text-white transition">Artificial Intelligence</a></li>
//                   <li><a href="#" className="hover:text-white transition">Block Chain</a></li>
//                 </ul>
//               </div>
//             </div>

//             <div className="space-y-8">
//               <div>
//                 <h4 className="font-bold mb-4">Product</h4>
//                 <ul className="space-y-2 text-sm text-gray-400">
//                   <li><a href="#" className="hover:text-white transition">Invest</a></li>
//                   <li><a href="#" className="hover:text-white transition">Discover</a></li>
//                   <li><a href="#" className="hover:text-white transition">Transact</a></li>
//                   <li><a href="#" className="hover:text-white transition">Manage</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-bold mb-4">Highlights</h4>
//                 <ul className="space-y-2 text-sm text-gray-400">
//                   <li className="mb-2"><a href="#" className="hover:text-white transition">Impact of COVID-19 on the food and beverage industry and the retail sector</a></li>
//                   <li><a href="#" className="hover:text-white transition">Commercial lending during COVID-19: navigating the impact</a></li>
//                 </ul>
//               </div>
//             </div>

//              {/* Mobile layout fix for the last two lists if needed */}
//              <div className="md:hidden space-y-8">
//                <div>
//                   <h4 className="font-bold mb-4">Our Story</h4>
//                   <ul className="space-y-2 text-sm text-gray-400">
//                     <li><a href="#" className="hover:text-white transition">Approach</a></li>
//                     <li><a href="#" className="hover:text-white transition">AboutUs</a></li>
//                   </ul>
//                 </div>
//                  <div>
//                   <h4 className="font-bold mb-4">Knowledge Center</h4>
//                   <ul className="space-y-2 text-sm text-gray-400">
//                     <li><a href="#" className="hover:text-white transition">Resource</a></li>
//                     <li><a href="#" className="hover:text-white transition">Blog</a></li>
//                   </ul>
//                 </div>
//              </div>

//           </div>
          
//            {/* Desktop Only Extra Columns (positioned via grid in real css but here we just append to the 3-col grid logic above or add manually) */}
//            {/* To keep it simple and clean, I merged the logic into the grid above. */}

//         </div>
//       </footer>
//     </div>
//   );
// };

// // Helper for Social Icons
// const SocialIcon = ({ Icon }) => (
//   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#7B5CC6] hover:bg-gray-200 cursor-pointer transition transform hover:scale-110">
//     <Icon size={20} fill="currentColor" className="border-none" />
//   </div>
// );

// export default LandingPage;

import React, { useState } from 'react';
import heroBg from './assets/hero-bg.png';
import phoneLeftMain from './assets/phone-left-main.png';   
import phoneLeftFloat from './assets/phone-left-float.png'; 
import phoneRight from './assets/phone-right.png';
import { 
  ArrowRight, 
  Menu, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
  BarChart,
  Users,
  X
} from 'lucide-react';
// Add these new imports at the top of src/App.jsx
import icon1 from './assets/1.png'; 
import icon2 from './assets/2.png'; 
import icon3 from './assets/3.png'; 
import icon4 from './assets/4.png'; 
import icon5 from './assets/5.png';
const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const globalLexendStyle = { fontFamily: "Lexend, sans-serif" };
  const dmSerifDisplayStyle = { fontFamily: "'DM Serif Display', serif" };

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden relative min-h-screen" style={globalLexendStyle}>
      
      {/* ================= GLOBAL BACKGROUND IMAGE ================= */}
      {/* This sits behind everything at the top-right. 
          z-0 ensures it is behind the text but visible. 
          h-[1200px] ensures it covers the whole hero section area. */}
      <div className="absolute top-0 right-0 w-[41%] h-[1200px] z-0 pointer-events-none">
         <img 
           src={heroBg} 
           alt="Background Texture" 
           className="w-full h-full object-cover rounded-bl-[200px]"
         />
      </div>

      {/* ================= NAVBAR ================= */}
      {/* Removed bg-white so it is transparent to show the purple bg on the right. 
          Added z-50 to sit on top of everything. */}
      <nav className="relative z-50 pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between md:justify-start md:gap-20 items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer shrink-0">
            <svg width="40" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5 0C22.5 0 28 15 28 25C28 35 22.5 40 22.5 40C22.5 40 17 35 17 25C17 15 22.5 0 22.5 0Z" fill="#7B5CC6"/>
              <path d="M45 30C45 30 35 32 28 28C21 24 22.5 40 22.5 40C22.5 40 35 45 40 38C45 31 45 30 45 30Z" fill="#2E2E6A"/>
              <path d="M0 30C0 30 10 32 17 28C24 24 22.5 40 22.5 40C22.5 40 10 45 5 38C0 31 0 30 0 30Z" fill="#2E2E6A"/>
              <path d="M10 10C10 10 18 20 22.5 40C22.5 40 10 35 5 28C0 21 10 10 10 10Z" fill="#BE3E6D" opacity="0.9"/>
              <path d="M35 10C35 10 27 20 22.5 40C22.5 40 35 35 40 28C45 21 35 10 35 10Z" fill="#BE3E6D" opacity="0.9"/>
            </svg>
          </div>

          {/* Links Section */}
          <div className="hidden md:flex flex-1 items-center space-x-8 text-sm font-medium text-gray-600">
             <div className="relative">
                <a href="#" className="text-purple-700 font-bold">Home</a>
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-1.5 h-1.5 rounded-full bg-purple-700"></span>
             </div>
            <a href="#" className="hover:text-purple-600 transition pt-0.5">Network</a>
            <a href="#" className="hover:text-purple-600 transition pt-0.5">Product</a>
            <a href="#" className="hover:text-purple-600 transition pt-0.5">Technology</a>
            <a href="#" className="hover:text-purple-600 transition pt-0.5">Our Story</a>
            <a href="#" className="hover:text-purple-600 transition pt-0.5">Knowledge Center</a>
          </div>

          {/* RIGHT SIDE: Buttons (Inside Navbar now) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 border-white text-white text-sm font-medium w-[157px] h-[58px] rounded-[20px] border-[1.5px] flex items-center justify-center gap-[10px] hover:bg-white/10 transition">
              Contact Us
            </button>
            <button className="px-6 py-2 rounded-xl bg-white text-purple-700 shadow-md text-sm font-bold hover:shadow-lg hover:bg-gray-100 transition w-[127px] h-[58px]">
              Log In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 ml-auto" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 shadow-lg absolute w-full left-0 top-full">
            <a href="#" className="block text-purple-700 font-bold">Home</a>
            <a href="#" className="block text-gray-600 hover:text-purple-600">Network</a>
            <a href="#" className="block text-gray-600 hover:text-purple-600">Product</a>
            <a href="#" className="block text-gray-600 hover:text-purple-600">Technology</a>
            <a href="#" className="block text-gray-600 hover:text-purple-600">Our Story</a>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <button className="px-5 py-2 rounded-full border border-purple-600 text-purple-600 text-sm font-medium">
                Contact Us
              </button>
              <button className="px-6 py-2 rounded-full bg-purple-600 text-white shadow-md text-sm font-bold">
                Log In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}


      {/* 1. Adjusted top padding (pt-8/lg:pt-16) to pull content up higher on the page. */}
      <header className="relative pt-8 pb-20 lg:pt-16 lg:pb-40 overflow-hidden z-10">
        
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div>
            {/* Reduced mb on the Welcome block from mb-6 to mb-4 */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[3px] bg-[#9E2349] rounded-full"></span>
              <span className="text-[#9E2349] font-bold text-sm uppercase tracking-wide">Welcome to the</span>
            </div>
            
            {/* Main Headline (h1) - Fix: mb-0 and added leading-none to remove browser-default line height gap */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-none text-gray-900 mb-0" 
              style={dmSerifDisplayStyle}
            >
              Unprecedented <br />
              Era of <span className="text-[#9E2349]">Real Estate Investing</span>
            </h1>
            
            {/* Lilypads Paragraph (p) - Reduced space between text and button below */}
            <p className="text-gray-500 text-lg mb-6 max-w-lg leading-relaxed">
              Lilypads uses sophisticated technologies for data-driven decisions in investing, managing and funding commercial real estate assets.
            </p>
            
            <button className="bg-[#7B5CC6] text-white px-8 py-4 rounded-full font-medium shadow-xl shadow-purple-200 hover:bg-[#6a4eb0] hover:shadow-2xl transition-all flex items-center gap-2 mb-16 transform hover:-translate-y-1 cursor-pointer">
              Start Investing Now <ArrowRight size={18} />
            </button>
            
            {/* Stats Row */}
            <div className="flex flex-wrap gap-12 border-t border-gray-200 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-purple-700">658+</h3>
                <p className="text-xs text-gray-500 font-bold uppercase mt-1 tracking-wider">Properties Registered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-700">685+</h3>
                <p className="text-xs text-gray-500 font-bold uppercase mt-1 tracking-wider">Deals Cracked</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-700">255+</h3>
                <p className="text-xs text-gray-500 font-bold uppercase mt-1 tracking-wider">Investors</p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Images */}
          <div className="relative h-[650px] w-full hidden lg:block">

            {/* 1. LEFT PHONE (Back - Investments) */}
            <div className="absolute top-0 left-0 w-[325px] z-20">
               <img 
                 src={phoneLeftMain} 
                 alt="Investments List" 
                 className="w-full h-auto drop-shadow-2xl rounded-[30px]"
               />
            </div>

            {/* 2. FLOATING CARD (Gemini) */}
            <div className="absolute top-[65px] -left-12 w-[400px] z-30">
               <img 
                 src={phoneLeftFloat} 
                 alt="Gemini Apartment" 
                 className="w-full h-auto drop-shadow-xl rounded-xl"
               />
            </div>

            {/* 3. RIGHT PHONE (Front - Julie Craig) */}
            <div className="absolute -top-0 -right-24 w-[325px] z-20">
                <img 
                 src={phoneRight} 
                 alt="Julie Craig Profile" 
                 className="w-full h-auto drop-shadow-2xl rounded-[35px]"
               />
            </div>

          </div>
        </div>
      </header>

      {/* ================= ABOUT/FEATURES GRID ================= */}
      <section className="bg-white py-20 border-t border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid Layout: 3 Columns, divided by borders */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-b border-gray-200">
            
            {/* Cell 1: Header */}
            <div className="p-8 lg:p-12 md:pb-24">
               <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[2px] bg-pink-600"></span>
                  <span className="text-pink-600 font-bold text-xs uppercase tracking-wide">About Us</span>
                </div>
                <h2 className="text-3xl font-medium leading-tight text-gray-900" style={dmSerifDisplayStyle}>

                  Lilypad is the only Real Estate Investment tool you need for your business
                </h2>
            </div>

            {/* Cell 2: Data Driven (All hover effects removed) */}
            <div className="p-8 lg:p-12 flex flex-col items-start gap-4 cursor-default">
              <div className="w-[90px] h-[90px] rounded-full bg-pink-50 flex items-center justify-center text-pink-600 mb-2">
                <img src={icon1} alt="Data Driven Icon" className="w-[90px] h-[90px] object-contain" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Become a Data-Driven Investor</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions.
              </p>
            </div>

            {/* Cell 3: Smarter Decisions (All hover effects removed) */}
            <div className="p-8 lg:p-12 flex flex-col items-start gap-4 cursor-default">
              <div className="w-[90px] h-[90px] rounded-full bg-pink-50 flex items-center justify-center text-pink-600 mb-2">
                <img src={icon2} alt="Smarter Decisions Icon" className="w-[90px] h-[90px] object-contain" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Lilypads can help you make smarter decisions.</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Streamline your investment evaluation process and collaborate in reaching your long term investment objectives.
              </p>
            </div>
          </div>

          {/* Row 2 of Grid */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
             
             {/* Cell 4: Due Diligence (All hover effects removed) */}
            <div className="p-8 lg:p-12 flex flex-col items-start gap-4 cursor-default">
               <div className="w-[90px] h-[90px] rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-2">
                 <img src={icon3} alt="Due Diligence Icon" className="w-[90px] h-[90px] object-contain" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Manager Due Diligence</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Evaluate managers against your objectives using traditional risk metrics with the addition of factor analysis.
              </p>
            </div>

            {/* Cell 5: Asset Allocation (All hover effects removed) */}
            <div className="p-8 lg:p-12 flex flex-col items-start gap-4 cursor-default">
               <div className="w-[90px] h-[90px] rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-2">
                 <img src={icon4} alt="Asset Allocation Icon" className="w-[90px] h-[90px] object-contain" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Optimize Asset Allocation</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Understand the underlying risk drivers in your portfolio using the Lilypads analysis factors and then optimize that portfolio.
              </p>
            </div>

            {/* Cell 6: Subscribers (All hover effects removed) */}
            <div className="p-8 lg:p-12 flex flex-col items-start gap-4 cursor-default">
               <div className="w-[90px] h-[90px] rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-2">
                 <img src={icon5} alt="Subscribers Icon" className="w-[90px] h-[90px] object-contain" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Our Subscribers</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Serving a constellation of global subscribers Pension funds, Funds of Funds, Banks, Family offices, Asset managers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          
          {/* LEFT COLUMN: Newsletter & CTA */}
          <div className="lg:w-2/5 space-y-10">
            {/* Newsletter Input */}
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter Your Email Here" 
                className="w-full bg-[#262626] border border-[#333] text-gray-300 py-4 px-6 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-[#2a2a2a] transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#333] hover:bg-[#444] text-white text-xs sm:text-sm font-medium px-6 rounded-lg transition border border-[#444]">
                Subscribe To Newsletter
              </button>
            </div>

            {/* CTA Text */}
            <h2 className="text-3xl font-bold leading-tight">
              Signup and start enjoying the benifits today!
            </h2>

            {/* Big Purple Button */}
            <button className="bg-[#7B5CC6] hover:bg-[#6a4eb0] text-white font-bold py-4 px-8 rounded-2xl w-full sm:w-auto shadow-lg transition transform hover:-translate-y-1">
              Sign Up To Lilypads
            </button>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Youtube} />
              {/* Custom Medium Icon */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#7B5CC6] hover:bg-gray-200 cursor-pointer transition">
                  <span className="font-serif font-bold text-lg">M</span>
              </div>
              {/* Custom Pinterest Icon */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#7B5CC6] hover:bg-gray-200 cursor-pointer transition">
                  <span className="font-serif font-bold text-lg">P</span>
              </div>
            </div>
          </div>

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

          {/* RIGHT COLUMN: Links & Info */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            
            {/* Logo & Address */}
            <div className="space-y-6">
               <div className="w-16 h-12 relative opacity-90">
                 {/* Footer Logo Representation */}
                 <svg viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 0C22.5 0 28 15 28 25C28 35 22.5 40 22.5 40C22.5 40 17 35 17 25C17 15 22.5 0 22.5 0Z" fill="#7B5CC6"/>
                    <path d="M45 30C45 30 35 32 28 28C21 24 22.5 40 22.5 40C22.5 40 35 45 40 38C45 31 45 30 45 30Z" fill="#2E2E6A"/>
                    <path d="M0 30C0 30 10 32 17 28C24 24 22.5 40 22.5 40C22.5 40 10 45 5 38C0 31 0 30 0 30Z" fill="#2E2E6A"/>
                    <path d="M10 10C10 10 18 20 22.5 40C22.5 40 10 35 5 28C0 21 10 10 10 10Z" fill="#BE3E6D" opacity="0.9"/>
                    <path d="M35 10C35 10 27 20 22.5 40C22.5 40 35 35 40 28C45 21 35 10 35 10Z" fill="#BE3E6D" opacity="0.9"/>
                </svg>
               </div>

               <div>
                 <h4 className="text-white font-bold mb-4">Reach Us At</h4>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   6751 Columbia Gateway Dr.,<br />
                   3rd floor, Columbia,<br />
                   MD 21046
                 </p>
               </div>
            </div>

            {/* Link Columns */}
            <div className="space-y-8">
              <div>
                <h4 className="font-bold mb-4">Network</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Community</a></li>
                  <li><a href="#" className="hover:text-white transition">Investor</a></li>
                  <li><a href="#" className="hover:text-white transition">Broker</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Technology</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Artificial Intelligence</a></li>
                  <li><a href="#" className="hover:text-white transition">Block Chain</a></li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Invest</a></li>
                  <li><a href="#" className="hover:text-white transition">Discover</a></li>
                  <li><a href="#" className="hover:text-white transition">Transact</a></li>
                  <li><a href="#" className="hover:text-white transition">Manage</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Highlights</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="mb-2"><a href="#" className="hover:text-white transition">Impact of COVID-19 on the food and beverage industry and the retail sector</a></li>
                  <li><a href="#" className="hover:text-white transition">Commercial lending during COVID-19: navigating the impact</a></li>
                </ul>
              </div>
            </div>

             {/* Mobile layout fix for the last two lists if needed */}
             <div className="md:hidden space-y-8">
               <div>
                  <h4 className="font-bold mb-4">Our Story</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white transition">Approach</a></li>
                    <li><a href="#" className="hover:text-white transition">AboutUs</a></li>
                  </ul>
                </div>
                 <div>
                  <h4 className="font-bold mb-4">Knowledge Center</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white transition">Resource</a></li>
                    <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  </ul>
                </div>
             </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper for Social Icons
const SocialIcon = ({ Icon }) => (
  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#7B5CC6] hover:bg-gray-200 cursor-pointer transition transform hover:scale-110">
    <Icon size={20} fill="currentColor" className="border-none" />
  </div>
);

export default LandingPage;