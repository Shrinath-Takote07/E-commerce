// // import React from 'react'

// // function Trendings() {
// //   return (
// //     <div>Trendings</div>
// //   )
// // }

// // export default Trendings

// import React, { useState, useEffect, useRef } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   ShoppingCart,
//   Heart,
//   Eye,
//   Tag,
//   Zap,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Trendings = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [slidesPerView, setSlidesPerView] = useState(1);
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const autoSlideRef = useRef(null);

//   const products = [
//     {
//       id: 1,
//       name: "Wireless Bluetooth Headphones",
//       category: "electronics",
//       price: 129.99,
//       originalPrice: 199.99,
//       discount: 35,
//       rating: 4.5,
//       reviewCount: 128,
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
//       tags: ["Wireless", "Noise Cancelling", "30h Battery"],
//       isFeatured: true,
//       isNew: true,
//       colors: ["bg-blue-400", "bg-gray-800", "bg-red-400"],
//       stock: 15,
//     },
//     {
//       id: 2,
//       name: "Premium Leather Backpack",
//       category: "bags",
//       price: 89.99,
//       originalPrice: 149.99,
//       discount: 40,
//       rating: 4.7,
//       reviewCount: 203,
//       image:
//         "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
//       tags: ["Genuine Leather", "Water Resistant", "Laptop Sleeve"],
//       isFeatured: true,
//       isNew: false,
//       colors: ["bg-amber-700", "bg-black", "bg-brown-600"],
//       stock: 8,
//     },
//     {
//       id: 3,
//       name: "Smart Watch Series 5",
//       category: "electronics",
//       price: 299.99,
//       originalPrice: 399.99,
//       discount: 25,
//       rating: 4.6,
//       reviewCount: 312,
//       image:
//         "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
//       tags: ["Heart Rate", "GPS", "Waterproof"],
//       isFeatured: false,
//       isNew: true,
//       colors: ["bg-gray-900", "bg-slate-400", "bg-rose-400"],
//       stock: 22,
//     },
//     {
//       id: 4,
//       name: "Running Shoes Pro",
//       category: "footwear",
//       price: 119.99,
//       originalPrice: 179.99,
//       discount: 33,
//       rating: 4.4,
//       reviewCount: 156,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
//       tags: ["Lightweight", "Breathable", "Shock Absorbing"],
//       isFeatured: true,
//       isNew: false,
//       colors: ["bg-red-500", "bg-blue-500", "bg-black"],
//       stock: 12,
//     },
//     {
//       id: 5,
//       name: "Designer Sunglasses",
//       category: "fashion",
//       price: 89.99,
//       originalPrice: 129.99,
//       discount: 31,
//       rating: 4.3,
//       reviewCount: 89,
//       image:
//         "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60",
//       tags: ["UV Protection", "Polarized", "Style"],
//       isFeatured: false,
//       isNew: true,
//       colors: ["bg-black", "bg-amber-300", "bg-slate-200"],
//       stock: 30,
//     },
//     {
//       id: 6,
//       name: "Organic Face Cream Set",
//       category: "beauty",
//       price: 49.99,
//       originalPrice: 79.99,
//       discount: 38,
//       rating: 4.8,
//       reviewCount: 67,
//       image:
//         "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60",
//       tags: ["Organic", "Vegan", "Cruelty-Free"],
//       isFeatured: true,
//       isNew: false,
//       colors: ["bg-green-100", "bg-white", "bg-amber-50"],
//       stock: 25,
//     },
//     {
//       id: 7,
//       name: "Fitness Tracker Band",
//       category: "electronics",
//       price: 79.99,
//       originalPrice: 129.99,
//       discount: 38,
//       rating: 4.2,
//       reviewCount: 94,
//       image:
//         "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&auto=format&fit=crop&q=60",
//       tags: ["Activity Tracking", "Sleep Monitor", "Smart"],
//       isFeatured: false,
//       isNew: true,
//       colors: ["bg-black", "bg-pink-400", "bg-blue-500"],
//       stock: 18,
//     },
//     {
//       id: 8,
//       name: "Leather Wallet & Card Holder",
//       category: "accessories",
//       price: 34.99,
//       originalPrice: 59.99,
//       discount: 42,
//       rating: 4.5,
//       reviewCount: 178,
//       image:
//         "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60",
//       tags: ["Genuine Leather", "RFID Protection", "Compact"],
//       isFeatured: true,
//       isNew: false,
//       colors: ["bg-brown-800", "bg-black", "bg-gray-300"],
//       stock: 40,
//     },
//   ];

//   const categories = [
//     { id: "all", name: "All Products", count: products.length },
//     {
//       id: "electronics",
//       name: "Electronics",
//       count: products.filter((p) => p.category === "electronics").length,
//     },
//     {
//       id: "fashion",
//       name: "Fashion",
//       count: products.filter(
//         (p) =>
//           p.category === "fashion" ||
//           p.category === "bags" ||
//           p.category === "footwear"
//       ).length,
//     },
//     {
//       id: "beauty",
//       name: "Beauty",
//       count: products.filter((p) => p.category === "beauty").length,
//     },
//     {
//       id: "featured",
//       name: "Featured",
//       count: products.filter((p) => p.isFeatured).length,
//     },
//     {
//       id: "new",
//       name: "New Arrivals",
//       count: products.filter((p) => p.isNew).length,
//     },
//   ];

//   // Filter products based on active category
//   const filteredProducts =
//     activeCategory === "all"
//       ? products
//       : activeCategory === "featured"
//       ? products.filter((p) => p.isFeatured)
//       : activeCategory === "new"
//       ? products.filter((p) => p.isNew)
//       : products.filter((p) => p.category === activeCategory);

//   // Calculate responsive slides per view
//   useEffect(() => {
//     const updateSlidesPerView = () => {
//       const width = window.innerWidth;
//       if (width >= 1280) {
//         setSlidesPerView(4);
//       } else if (width >= 1024) {
//         setSlidesPerView(3);
//       } else if (width >= 768) {
//         setSlidesPerView(2);
//       } else {
//         setSlidesPerView(1);
//       }
//     };

//     updateSlidesPerView();
//     window.addEventListener("resize", updateSlidesPerView);
//     return () => window.removeEventListener("resize", updateSlidesPerView);
//   }, []);

//   // Auto slide functionality
//   useEffect(() => {
//     if (autoSlideRef.current) {
//       clearInterval(autoSlideRef.current);
//     }

//     if (!isHovered) {
//       autoSlideRef.current = setInterval(() => {
//         setCurrentSlide((prev) => {
//           const maxSlide = Math.max(0, filteredProducts.length - slidesPerView);
//           return prev >= maxSlide ? 0 : prev + 1;
//         });
//       }, 4000);
//     }

//     return () => {
//       if (autoSlideRef.current) {
//         clearInterval(autoSlideRef.current);
//       }
//     };
//   }, [isHovered, filteredProducts.length, slidesPerView]);

//   const maxSlide = Math.max(0, filteredProducts.length - slidesPerView);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   // Calculate savings
//   const calculateSavings = (price, originalPrice) => {
//     return originalPrice - price;
//   };

//   // Get stock status
//   const getStockStatus = (stock) => {
//     if (stock > 20) return { text: "In Stock", color: "text-green-500" };
//     if (stock > 10) return { text: "Limited Stock", color: "text-yellow-500" };
//     if (stock > 0) return { text: "Almost Gone", color: "text-orange-500" };
//     return { text: "Out of Stock", color: "text-red-500" };
//   };

//   // Handle touch events for mobile swipe
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);

//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;

//     const distance = touchStart - touchEnd;
//     const minSwipeDistance = 50;

//     if (Math.abs(distance) > minSwipeDistance) {
//       if (distance > 0) {
//         nextSlide();
//       } else {
//         prevSlide();
//       }
//     }

//     setTouchStart(null);
//     setTouchEnd(null);
//   };

//   return (
//     <div className="w-full py-8 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
//       {/* Header Section */}
//       <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 md:mb-8 gap-4">
//         <div>
//           <div className="flex items-center gap-2 mb-2">
//             <Zap className="text-purple-600 w-5 h-5 md:w-6 md:h-6" />
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
//               Trending Products
//             </h2>
//           </div>
//           <p className="text-gray-600 text-sm sm:text-base">
//             Discover our most popular items this season
//           </p>
//         </div>

//         <div className="flex items-center gap-2">
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-3">
//             <button
//               onClick={prevSlide}
//               disabled={currentSlide === 0}
//               className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <div className="flex gap-1">
//               {Array.from({ length: Math.min(5, maxSlide + 1) }).map(
//                 (_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-2 h-2 rounded-full transition-all ${
//                       currentSlide === index
//                         ? "bg-purple-600 w-6"
//                         : "bg-gray-300"
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 )
//               )}
//             </div>
//             <button
//               onClick={nextSlide}
//               disabled={currentSlide === maxSlide}
//               className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow"
//               aria-label="Next slide"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>

//           {/* View All Button */}
//           <Link
//             to="/products"
//             className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base whitespace-nowrap"
//           >
//             View All
//           </Link>
//         </div>
//       </div>

//       {/* Category Filter - Mobile Scrollable */}
//       <div className="mb-6 md:mb-8">
//         <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide -mx-3 px-3">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => {
//                 setActiveCategory(category.id);
//                 setCurrentSlide(0);
//               }}
//               className={`px-4 py-2 rounded-full transition-all whitespace-nowrap flex items-center gap-2 ${
//                 activeCategory === category.id
//                   ? "bg-purple-600 text-white shadow-md"
//                   : "bg-gray-100 hover:bg-gray-200 text-gray-700"
//               }`}
//             >
//               <span className="font-medium">{category.name}</span>
//               <span
//                 className={`text-xs px-1.5 py-0.5 rounded-full ${
//                   activeCategory === category.id
//                     ? "bg-purple-700"
//                     : "bg-gray-300"
//                 }`}
//               >
//                 {category.count}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Swiper Container */}
//       <div
//         className="relative overflow-hidden rounded-xl md:rounded-2xl"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         {/* Swiper Track */}
//         <div
//           className="flex transition-transform duration-500 ease-out touch-pan-x"
//           style={{
//             transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
//           }}
//         >
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="flex-shrink-0 px-2 sm:px-3"
//               style={{ width: `${100 / slidesPerView}%` }}
//             >
//               {/* Product Card */}
//               <div className="group bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col relative">
//                 {/* Product Image Container */}
//                 <div className="relative overflow-hidden">
//                   <div className="aspect-square bg-gray-100 relative">
//                     {/* Image */}
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       loading="lazy"
//                     />

//                     {/* Discount Badge */}
//                     <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 z-10">
//                       <Tag size={10} />
//                       {product.discount}% OFF
//                     </div>

//                     {/* Status Badges */}
//                     <div className="absolute top-3 right-3 flex flex-col gap-1 z-10">
//                       {product.isNew && (
//                         <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//                           NEW
//                         </div>
//                       )}
//                       {product.isFeatured && (
//                         <div className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//                           FEATURED
//                         </div>
//                       )}
//                     </div>

//                     {/* Quick Action Buttons */}
//                     <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 active:scale-95 transition-all">
//                         <Heart size={16} className="text-gray-600" />
//                       </button>
//                       <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 active:scale-95 transition-all">
//                         <Eye size={16} className="text-gray-600" />
//                       </button>
//                     </div>

//                     {/* Color Options */}
//                     <div className="absolute bottom-3 left-3 flex gap-1">
//                       {product.colors.map((color, index) => (
//                         <div
//                           key={index}
//                           className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-white ${color}`}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-3 sm:p-4 flex-1 flex flex-col">
//                   {/* Category & Stock */}
//                   <div className="flex justify-between items-center mb-1">
//                     <span className="text-xs text-purple-600 font-semibold uppercase tracking-wider">
//                       {product.category}
//                     </span>
//                     <span
//                       className={`text-xs font-medium ${
//                         getStockStatus(product.stock).color
//                       }`}
//                     >
//                       {getStockStatus(product.stock).text}
//                     </span>
//                   </div>

//                   {/* Product Name */}
//                   <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-2 line-clamp-2 min-h-[2.5rem]">
//                     {product.name}
//                   </h3>

//                   {/* Rating */}
//                   <div className="flex items-center gap-1 mb-2">
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           size={12}
//                           className={`${
//                             i < Math.floor(product.rating)
//                               ? "text-yellow-400 fill-yellow-400"
//                               : "text-gray-300"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-xs text-gray-600 ml-1">
//                       {product.rating} ({product.reviewCount})
//                     </span>
//                   </div>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
//                     {product.tags.slice(0, 2).map((tag, index) => (
//                       <span
//                         key={index}
//                         className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-200"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Price & CTA */}
//                   <div className="mt-auto pt-2 border-t border-gray-100">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="flex items-baseline gap-1">
//                           <span className="text-lg sm:text-xl font-bold text-gray-800">
//                             ${product.price.toFixed(2)}
//                           </span>
//                           <span className="text-xs sm:text-sm text-gray-400 line-through">
//                             ${product.originalPrice.toFixed(2)}
//                           </span>
//                         </div>
//                         <p className="text-xs text-green-600 font-semibold">
//                           Save $
//                           {calculateSavings(
//                             product.price,
//                             product.originalPrice
//                           ).toFixed(2)}
//                         </p>
//                       </div>

//                       {/* Add to Cart Button */}
//                       <button className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white p-2 sm:px-3 sm:py-2 rounded-lg transition-colors active:scale-95">
//                         <ShoppingCart size={16} className="sm:mr-1" />
//                         <span className="hidden sm:inline text-sm">Add</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Gradient Overlays for Desktop */}
//         <div className="hidden md:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
//         <div className="hidden md:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
//       </div>

//       {/* Mobile Navigation & Info */}
//       <div className="mt-4 sm:mt-6 flex flex-col items-center">
//         {/* Dots for Mobile */}
//         <div className="flex justify-center gap-1.5 mb-3">
//           {Array.from({ length: maxSlide + 1 }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-2 h-2 rounded-full transition-all ${
//                 currentSlide === index ? "bg-purple-600 w-6" : "bg-gray-300"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Mobile Navigation Buttons */}
//         <div className="flex items-center gap-4 sm:hidden">
//           <button
//             onClick={prevSlide}
//             disabled={currentSlide === 0}
//             className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <span className="text-sm text-gray-600">
//             <span className="font-bold">{currentSlide + 1}</span> of{" "}
//             <span className="font-bold">{maxSlide + 1}</span>
//           </span>
//           <button
//             onClick={nextSlide}
//             disabled={currentSlide === maxSlide}
//             className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow"
//             aria-label="Next slide"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         {/* View All Products Button */}
//         <div className="w-full text-center mt-6">
//           <Link
//             to="/products"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
//           >
//             <ShoppingCart size={20} />
//             View All Products ({products.length})
//           </Link>
//           <p className="text-xs text-gray-500 mt-2">
//             Free shipping on orders over $50 • 30-day returns
//           </p>
//         </div>
//       </div>

//       {/* Stats Bar */}
//       <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
//           <div className="text-2xl font-bold text-purple-600 mb-1">
//             {products.length}+
//           </div>
//           <div className="text-sm text-gray-600">Products</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
//           <div className="text-2xl font-bold text-purple-600 mb-1">4.5★</div>
//           <div className="text-sm text-gray-600">Avg Rating</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
//           <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
//           <div className="text-sm text-gray-600">Support</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
//           <div className="text-2xl font-bold text-purple-600 mb-1">Free</div>
//           <div className="text-sm text-gray-600">Shipping</div>
//         </div>
//       </div>

//       {/* Auto-slide Indicator */}
//       <div className="mt-6 flex items-center justify-center gap-2">
//         <div className="flex items-center gap-1 text-sm text-gray-500">
//           <div
//             className={`w-2 h-2 rounded-full ${
//               isHovered ? "bg-gray-300" : "bg-purple-500 animate-pulse"
//             }`}
//           />
//           <span>{isHovered ? "Paused" : "Auto-scrolling"}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trendings;

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect, useRef } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   ShoppingCart,
//   Heart,
//   Eye,
//   Tag,
//   Zap,
//   AlertCircle,
//   CheckCircle,
//   Bell,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// // import { useWishlist } from "../context/WishlistContext"; // Assuming you have a wishlist context
// // import { useWishlist } from "../my-project/src/Whislist/Wislits.jsx";

// const Trendings = () => {
//   // //////////////////////////////////////////////////////////////////////////

//   // const [localWishlist, setLocalWishlist] = useState([]);

//   // useEffect(() => {
//   //   fetch("http://localhost:8080/api/products")
//   //     .then((res) => res.json())
//   //     .then((json) => setLocalWishlist(json))
//   //     .catch((err) => console.error("Error fetching users:", err));
//   // }, []);

//   // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [slidesPerView, setSlidesPerView] = useState(1);
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [wishlistStatus, setWishlistStatus] = useState({});
//   const [showWishlistToast, setShowWishlistToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [toastProduct, setToastProduct] = useState(null);
//   const autoSlideRef = useRef(null);
//   const toastTimeoutRef = useRef(null);

//   // In a real app, you would use context or state management
//   // For this example, I'll create a local wishlist state
//   // const [localWishlist, setLocalWishlist] = useState([]);

//   //////////////////////////////////////////////////////////////////////////////////////// to featch the data from backend
//   // const [wishlistItems, setWishlistItems] = useState([]);
//   // const [localWishlist, setLocalWishlist] = useState([]);

//   // useEffect(() => {
//   //   fetch("http://localhost:8080/api/products")
//   //     .then((res) => res.json())
//   //     .then((json) => setLocalWishlist(json))
//   //     .catch((err) => console.error("Error fetching users:", err));
//   // }, []);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);

//         // Initialize wishlist status
//         const initial = {};
//         data.forEach((p) => (initial[p.id] = p.isInWishlist || false));
//         setWishlistStatus(initial);
//       })
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   // const products = [
//   //   {
//   //     id: 1,
//   //     name: "Wireless Bluetooth Headphones",
//   //     category: "electronics",
//   //     price: 129.99,
//   //     originalPrice: 199.99,
//   //     discount: 35,
//   //     rating: 4.5,
//   //     reviewCount: 128,
//   //     image:
//   //       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
//   //     tags: ["Wireless", "Noise Cancelling", "30h Battery"],
//   //     isFeatured: true,
//   //     isNew: true,
//   //     colors: ["bg-blue-400", "bg-gray-800", "bg-red-400"],
//   //     stock: 15,
//   //     isInWishlist: false,
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Premium Leather Backpack",
//   //     category: "bags",
//   //     price: 89.99,
//   //     originalPrice: 149.99,
//   //     discount: 40,
//   //     rating: 4.7,
//   //     reviewCount: 203,
//   //     image:
//   //       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
//   //     tags: ["Genuine Leather", "Water Resistant", "Laptop Sleeve"],
//   //     isFeatured: true,
//   //     isNew: false,
//   //     colors: ["bg-amber-700", "bg-black", "bg-brown-600"],
//   //     stock: 8,
//   //     isInWishlist: true,
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Smart Watch Series 5",
//   //     category: "electronics",
//   //     price: 299.99,
//   //     originalPrice: 399.99,
//   //     discount: 25,
//   //     rating: 4.6,
//   //     reviewCount: 312,
//   //     image:
//   //       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
//   //     tags: ["Heart Rate", "GPS", "Waterproof"],
//   //     isFeatured: false,
//   //     isNew: true,
//   //     colors: ["bg-gray-900", "bg-slate-400", "bg-rose-400"],
//   //     stock: 22,
//   //     isInWishlist: false,
//   //   },
//   //   {
//   //     id: 4,
//   //     name: "Running Shoes Pro",
//   //     category: "footwear",
//   //     price: 119.99,
//   //     originalPrice: 179.99,
//   //     discount: 33,
//   //     rating: 4.4,
//   //     reviewCount: 156,
//   //     image:
//   //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
//   //     tags: ["Lightweight", "Breathable", "Shock Absorbing"],
//   //     isFeatured: true,
//   //     isNew: false,
//   //     colors: ["bg-red-500", "bg-blue-500", "bg-black"],
//   //     stock: 12,
//   //     isInWishlist: false,
//   //   },
//   //   {
//   //     id: 5,
//   //     name: "Designer Sunglasses",
//   //     category: "fashion",
//   //     price: 89.99,
//   //     originalPrice: 129.99,
//   //     discount: 31,
//   //     rating: 4.3,
//   //     reviewCount: 89,
//   //     image:
//   //       "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60",
//   //     tags: ["UV Protection", "Polarized", "Style"],
//   //     isFeatured: false,
//   //     isNew: true,
//   //     colors: ["bg-black", "bg-amber-300", "bg-slate-200"],
//   //     stock: 30,
//   //     isInWishlist: true,
//   //   },
//   //   {
//   //     id: 6,
//   //     name: "Organic Face Cream Set",
//   //     category: "beauty",
//   //     price: 49.99,
//   //     originalPrice: 79.99,
//   //     discount: 38,
//   //     rating: 4.8,
//   //     reviewCount: 67,
//   //     image:
//   //       "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60",
//   //     tags: ["Organic", "Vegan", "Cruelty-Free"],
//   //     isFeatured: true,
//   //     isNew: false,
//   //     colors: ["bg-green-100", "bg-white", "bg-amber-50"],
//   //     stock: 25,
//   //     isInWishlist: false,
//   //   },
//   //   {
//   //     id: 7,
//   //     name: "Fitness Tracker Band",
//   //     category: "electronics",
//   //     price: 79.99,
//   //     originalPrice: 129.99,
//   //     discount: 38,
//   //     rating: 4.2,
//   //     reviewCount: 94,
//   //     image:
//   //       "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&auto=format&fit=crop&q=60",
//   //     tags: ["Activity Tracking", "Sleep Monitor", "Smart"],
//   //     isFeatured: false,
//   //     isNew: true,
//   //     colors: ["bg-black", "bg-pink-400", "bg-blue-500"],
//   //     stock: 18,
//   //     isInWishlist: false,
//   //   },
//   //   {
//   //     id: 8,
//   //     name: "Leather Wallet & Card Holder",
//   //     category: "accessories",
//   //     price: 34.99,
//   //     originalPrice: 59.99,
//   //     discount: 42,
//   //     rating: 4.5,
//   //     reviewCount: 178,
//   //     image:
//   //       "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60",
//   //     tags: ["Genuine Leather", "RFID Protection", "Compact"],
//   //     isFeatured: true,
//   //     isNew: false,
//   //     colors: ["bg-brown-800", "bg-black", "bg-gray-300"],
//   //     stock: 40,
//   //     isInWishlist: false,
//   //   },
//   // ];
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   const categories = [
//     { id: "all", name: "All Products", count: products.length },
//     {
//       id: "electronics",
//       name: "Electronics",
//       count: products.filter((p) => p.category === "electronics").length,
//     },
//     {
//       id: "fashion",
//       name: "Fashion",
//       count: products.filter(
//         (p) =>
//           p.category === "fashion" ||
//           p.category === "bags" ||
//           p.category === "footwear"
//       ).length,
//     },
//     {
//       id: "beauty",
//       name: "Beauty",
//       count: products.filter((p) => p.category === "beauty").length,
//     },
//     {
//       id: "featured",
//       name: "Featured",
//       count: products.filter((p) => p.isFeatured).length,
//     },
//     {
//       id: "new",
//       name: "New Arrivals",
//       count: products.filter((p) => p.isNew).length,
//     },
//     {
//       id: "wishlist",
//       name: "In Wishlist",
//       count: products.filter((p) => p.isInWishlist).length,
//     },
//   ];

//   // Initialize wishlist status
//   useEffect(() => {
//     const initialStatus = {};
//     products.forEach((product) => {
//       initialStatus[product.id] = product.isInWishlist;
//     });
//     setWishlistStatus(initialStatus);
//   }, []);

//   // Filter products based on active category
//   const filteredProducts =
//     activeCategory === "all"
//       ? products
//       : activeCategory === "featured"
//       ? products.filter((p) => p.isFeatured)
//       : activeCategory === "new"
//       ? products.filter((p) => p.isNew)
//       : activeCategory === "wishlist"
//       ? products.filter((p) => wishlistStatus[p.id])
//       : products.filter((p) => p.category === activeCategory);

//   // Calculate responsive slides per view
//   useEffect(() => {
//     const updateSlidesPerView = () => {
//       const width = window.innerWidth;
//       if (width >= 1280) {
//         setSlidesPerView(4);
//       } else if (width >= 1024) {
//         setSlidesPerView(3);
//       } else if (width >= 768) {
//         setSlidesPerView(2);
//       } else {
//         setSlidesPerView(1);
//       }
//     };

//     updateSlidesPerView();
//     window.addEventListener("resize", updateSlidesPerView);
//     return () => window.removeEventListener("resize", updateSlidesPerView);
//   }, []);

//   // Auto slide functionality
//   useEffect(() => {
//     if (autoSlideRef.current) {
//       clearInterval(autoSlideRef.current);
//     }

//     if (!isHovered) {
//       autoSlideRef.current = setInterval(() => {
//         setCurrentSlide((prev) => {
//           const maxSlide = Math.max(0, filteredProducts.length - slidesPerView);
//           return prev >= maxSlide ? 0 : prev + 1;
//         });
//       }, 4000);
//     }

//     return () => {
//       if (autoSlideRef.current) {
//         clearInterval(autoSlideRef.current);
//       }
//     };
//   }, [isHovered, filteredProducts.length, slidesPerView]);

//   const maxSlide = Math.max(0, filteredProducts.length - slidesPerView);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   // Calculate savings
//   const calculateSavings = (price, originalPrice) => {
//     return originalPrice - price;
//   };

//   // Get stock status
//   const getStockStatus = (stock) => {
//     if (stock > 20) return { text: "In Stock", color: "text-green-500" };
//     if (stock > 10) return { text: "Limited Stock", color: "text-yellow-500" };
//     if (stock > 0) return { text: "Almost Gone", color: "text-orange-500" };
//     return { text: "Out of Stock", color: "text-red-500" };
//   };

//   // Handle touch events for mobile swipe
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);

//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;

//     const distance = touchStart - touchEnd;
//     const minSwipeDistance = 50;

//     if (Math.abs(distance) > minSwipeDistance) {
//       if (distance > 0) {
//         nextSlide();
//       } else {
//         prevSlide();
//       }
//     }

//     setTouchStart(null);
//     setTouchEnd(null);
//   };

//   // Wishlist Functions
//   const toggleWishlist = (product) => {
//     const isInWishlist = wishlistStatus[product.id];

//     // Update local state
//     setWishlistStatus((prev) => ({
//       ...prev,
//       [product.id]: !isInWishlist,
//     }));

//     // Update local wishlist array
//     if (isInWishlist) {
//       setLocalWishlist((prev) => prev.filter((item) => item.id !== product.id));
//     } else {
//       setLocalWishlist((prev) => [...prev, product]);
//     }

//     // Show toast notification
//     setToastProduct(product);
//     setToastMessage(
//       !isInWishlist
//         ? `"${product.name}" added to your wishlist!`
//         : `"${product.name}" removed from wishlist`
//     );
//     setShowWishlistToast(true);

//     // Auto-hide toast after 3 seconds
//     if (toastTimeoutRef.current) {
//       clearTimeout(toastTimeoutRef.current);
//     }

//     toastTimeoutRef.current = setTimeout(() => {
//       setShowWishlistToast(false);
//     }, 3000);

//     // In a real app, you would also update the backend/context
//     // Example with context:
//     // const { addToWishlist, removeFromWishlist } = useWishlist();
//     // if (isInWishlist) {
//     //   removeFromWishlist(product.id);
//     // } else {
//     //   addToWishlist(product);
//     // }
//   };

//   // Add to cart function
//   const handleAddToCart = (product) => {
//     // In a real app, this would add to cart
//     alert(`Added "${product.name}" to cart!`);
//   };

//   // Quick view function
//   const handleQuickView = (product) => {
//     // In a real app, this would open a quick view modal
//     alert(`Quick view for "${product.name}"`);
//   };

//   // Price drop notification function
//   const handlePriceDropNotify = (product) => {
//     alert(`You'll be notified when "${product.name}" price drops!`);
//   };

//   // Calculate wishlist count
//   const wishlistCount = Object.values(wishlistStatus).filter(
//     (status) => status
//   ).length;

//   return (
//     <div className="w-full py-8 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative">
//       {/* Wishlist Toast Notification */}
//       {showWishlistToast && toastProduct && (
//         <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 animate-fade-in">
//           <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-sm">
//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0">
//                 <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
//                   <img
//                     src={toastProduct.image}
//                     alt={toastProduct.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="flex-1">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <Heart
//                       className={`w-4 h-4 ${
//                         wishlistStatus[toastProduct.id]
//                           ? "fill-red-500 text-red-500"
//                           : "text-gray-400"
//                       }`}
//                     />
//                     <span className="font-medium text-sm text-gray-800">
//                       {wishlistStatus[toastProduct.id]
//                         ? "Added to Wishlist"
//                         : "Removed from Wishlist"}
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => setShowWishlistToast(false)}
//                     className="text-gray-400 hover:text-gray-600"
//                   >
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 <p className="text-sm text-gray-600 mt-1 line-clamp-2">
//                   {toastMessage}
//                 </p>
//                 <div className="mt-2 flex gap-2">
//                   <Link
//                     to="/wishlist"
//                     className="text-xs text-purple-600 hover:text-purple-700 font-medium"
//                   >
//                     View Wishlist ({wishlistCount})
//                   </Link>
//                   <Link
//                     to="/cart"
//                     className="text-xs text-gray-600 hover:text-gray-700"
//                   >
//                     View Cart →
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Header Section */}
//       <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 md:mb-8 gap-4">
//         <div>
//           <div className="flex items-center gap-2 mb-2">
//             <Zap className="text-purple-600 w-5 h-5 md:w-6 md:h-6" />
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
//               Trending Products
//             </h2>
//           </div>
//           <p className="text-gray-600 text-sm sm:text-base">
//             Discover our most popular items this season
//           </p>
//         </div>

//         <div className="flex items-center gap-2">
//           {/* Wishlist Count Badge */}
//           <Link
//             to="/wishlist"
//             className="relative flex items-center gap-1 text-sm text-gray-600 hover:text-purple-600"
//           >
//             <Heart className="w-5 h-5" />
//             {wishlistCount > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                 {wishlistCount}
//               </span>
//             )}
//             <span className="hidden sm:inline">Wishlist</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-3">
//             <button
//               onClick={prevSlide}
//               disabled={currentSlide === 0}
//               className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <div className="flex gap-1">
//               {Array.from({ length: Math.min(5, maxSlide + 1) }).map(
//                 (_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-2 h-2 rounded-full transition-all ${
//                       currentSlide === index
//                         ? "bg-purple-600 w-6"
//                         : "bg-gray-300"
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 )
//               )}
//             </div>
//             <button
//               onClick={nextSlide}
//               disabled={currentSlide === maxSlide}
//               className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow"
//               aria-label="Next slide"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>

//           {/* View All Button */}
//           <Link
//             to="/products"
//             className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base whitespace-nowrap"
//           >
//             View All
//           </Link>
//         </div>
//       </div>

//       {/* Category Filter - Mobile Scrollable */}
//       <div className="mb-6 md:mb-8">
//         <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide -mx-3 px-3">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => {
//                 setActiveCategory(category.id);
//                 setCurrentSlide(0);
//               }}
//               className={`px-4 py-2 rounded-full transition-all whitespace-nowrap flex items-center gap-2 ${
//                 activeCategory === category.id
//                   ? "bg-purple-600 text-white shadow-md"
//                   : "bg-gray-100 hover:bg-gray-200 text-gray-700"
//               }`}
//             >
//               <span className="font-medium">{category.name}</span>
//               <span
//                 className={`text-xs px-1.5 py-0.5 rounded-full ${
//                   activeCategory === category.id
//                     ? "bg-purple-700"
//                     : "bg-gray-300"
//                 }`}
//               >
//                 {category.count}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Swiper Container */}
//       <div
//         className="relative overflow-hidden rounded-xl md:rounded-2xl"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         {/* Swiper Track */}
//         <div
//           className="flex transition-transform duration-500 ease-out touch-pan-x"
//           style={{
//             transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
//           }}
//         >
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="flex-shrink-0 px-2 sm:px-3"
//               style={{ width: `${100 / slidesPerView}%` }}
//             >
//               {/* Product Card */}
//               <div className="group bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col relative">
//                 {/* Product Image Container */}
//                 <div className="relative overflow-hidden">
//                   <div className="aspect-square bg-gray-100 relative">
//                     {/* Image */}
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       loading="lazy"
//                     />

//                     {/* Discount Badge */}
//                     <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 z-10">
//                       <Tag size={10} />
//                       {product.discount}% OFF
//                     </div>

//                     {/* Status Badges */}
//                     <div className="absolute top-3 right-3 flex flex-col gap-1 z-10">
//                       {product.isNew && (
//                         <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//                           NEW
//                         </div>
//                       )}
//                       {product.isFeatured && (
//                         <div className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//                           FEATURED
//                         </div>
//                       )}
//                       {wishlistStatus[product.id] && (
//                         <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//                           WISHLIST
//                         </div>
//                       )}
//                     </div>

//                     {/* Quick Action Buttons */}
//                     <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       {/* Wishlist Button */}
//                       <button
//                         onClick={() => toggleWishlist(product)}
//                         className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-all ${
//                           wishlistStatus[product.id]
//                             ? "bg-red-50 hover:bg-red-100"
//                             : "bg-white hover:bg-gray-50"
//                         }`}
//                         aria-label={
//                           wishlistStatus[product.id]
//                             ? "Remove from wishlist"
//                             : "Add to wishlist"
//                         }
//                       >
//                         <Heart
//                           size={16}
//                           className={
//                             wishlistStatus[product.id]
//                               ? "fill-red-500 text-red-500"
//                               : "text-gray-600"
//                           }
//                         />
//                       </button>

//                       {/* Quick View Button */}
//                       <button
//                         onClick={() => handleQuickView(product)}
//                         className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 active:scale-95 transition-all"
//                         aria-label="Quick view"
//                       >
//                         <Eye size={16} className="text-gray-600" />
//                       </button>
//                     </div>

//                     {/* Color Options */}
//                     <div className="absolute bottom-3 left-3 flex gap-1">
//                       {product.colors.map((color, index) => (
//                         <div
//                           key={index}
//                           className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-white ${color}`}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-3 sm:p-4 flex-1 flex flex-col">
//                   {/* Category & Stock */}
//                   <div className="flex justify-between items-center mb-1">
//                     <span className="text-xs text-purple-600 font-semibold uppercase tracking-wider">
//                       {product.category}
//                     </span>
//                     <span
//                       className={`text-xs font-medium ${
//                         getStockStatus(product.stock).color
//                       }`}
//                     >
//                       {getStockStatus(product.stock).text}
//                     </span>
//                   </div>

//                   {/* Product Name */}
//                   <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-2 line-clamp-2 min-h-[2.5rem]">
//                     {product.name}
//                   </h3>

//                   {/* Rating */}
//                   <div className="flex items-center gap-1 mb-2">
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           size={12}
//                           className={`${
//                             i < Math.floor(product.rating)
//                               ? "text-yellow-400 fill-yellow-400"
//                               : "text-gray-300"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-xs text-gray-600 ml-1">
//                       {product.rating} ({product.reviewCount})
//                     </span>
//                   </div>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
//                     {product.tags.slice(0, 2).map((tag, index) => (
//                       <span
//                         key={index}
//                         className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-200"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Price & CTA */}
//                   <div className="mt-auto pt-2 border-t border-gray-100">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="flex items-baseline gap-1">
//                           <span className="text-lg sm:text-xl font-bold text-gray-800">
//                             ${product.price.toFixed(2)}
//                           </span>
//                           <span className="text-xs sm:text-sm text-gray-400 line-through">
//                             ${product.originalPrice.toFixed(2)}
//                           </span>
//                         </div>
//                         <p className="text-xs text-green-600 font-semibold">
//                           Save $
//                           {calculateSavings(
//                             product.price,
//                             product.originalPrice
//                           ).toFixed(2)}
//                         </p>
//                       </div>

//                       {/* Action Buttons */}
//                       <div className="flex items-center gap-2">
//                         {/* Price Drop Notification */}
//                         {product.discount > 30 && (
//                           <button
//                             onClick={() => handlePriceDropNotify(product)}
//                             className="hidden sm:flex p-1.5 text-blue-600 hover:text-blue-700"
//                             aria-label="Notify when price drops"
//                           >
//                             <Bell size={16} />
//                           </button>
//                         )}

//                         {/* Add to Cart Button */}
//                         <button
//                           onClick={() => handleAddToCart(product)}
//                           className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white p-2 sm:px-3 sm:py-2 rounded-lg transition-colors active:scale-95"
//                         >
//                           <ShoppingCart size={16} className="sm:mr-1" />
//                           <span className="hidden sm:inline text-sm">Add</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Additional Actions for Mobile */}
//                 <div className="sm:hidden p-3 border-t border-gray-100">
//                   <div className="flex items-center justify-between">
//                     <button
//                       onClick={() => toggleWishlist(product)}
//                       className={`flex items-center gap-1 text-sm ${
//                         wishlistStatus[product.id]
//                           ? "text-red-600"
//                           : "text-gray-600 hover:text-gray-800"
//                       }`}
//                     >
//                       <Heart
//                         size={14}
//                         className={
//                           wishlistStatus[product.id] ? "fill-red-500" : ""
//                         }
//                       />
//                       {wishlistStatus[product.id] ? "Saved" : "Save"}
//                     </button>

//                     <button
//                       onClick={() => handleQuickView(product)}
//                       className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800"
//                     >
//                       <Eye size={14} />
//                       Quick View
//                     </button>

//                     {product.discount > 30 && (
//                       <button
//                         onClick={() => handlePriceDropNotify(product)}
//                         className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
//                       >
//                         <Bell size={14} />
//                         Notify
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Gradient Overlays for Desktop */}
//         <div className="hidden md:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
//         <div className="hidden md:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
//       </div>

//       {/* Mobile Navigation & Info */}
//       <div className="mt-4 sm:mt-6 flex flex-col items-center">
//         {/* Dots for Mobile */}
//         <div className="flex justify-center gap-1.5 mb-3">
//           {Array.from({ length: maxSlide + 1 }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-2 h-2 rounded-full transition-all ${
//                 currentSlide === index ? "bg-purple-600 w-6" : "bg-gray-300"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Mobile Navigation Buttons */}
//         <div className="flex items-center gap-4 sm:hidden">
//           <button
//             onClick={prevSlide}
//             disabled={currentSlide === 0}
//             className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <span className="text-sm text-gray-600">
//             <span className="font-bold">{currentSlide + 1}</span> of{" "}
//             <span className="font-bold">{maxSlide + 1}</span>
//           </span>
//           <button
//             onClick={nextSlide}
//             disabled={currentSlide === maxSlide}
//             className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow"
//             aria-label="Next slide"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         {/* View All Products Button */}
//         <div className="w-full text-center mt-6">
//           <Link
//             to="/products"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
//           >
//             <ShoppingCart size={20} />
//             View All Products ({products.length})
//           </Link>
//           <p className="text-xs text-gray-500 mt-2">
//             Free shipping on orders over $50 • 30-day returns
//           </p>
//         </div>
//       </div>

//       {/* Stats Bar */}
//       <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
//           <div className="text-2xl font-bold text-purple-600 mb-1">
//             {products.length}+
//           </div>
//           <div className="text-sm text-gray-600">Products</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
//           <div className="text-2xl font-bold text-purple-600 mb-1">
//             {wishlistCount}
//           </div>
//           <div className="text-sm text-gray-600">In Wishlist</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
//           <div className="text-2xl font-bold text-purple-600 mb-1">4.5★</div>
//           <div className="text-sm text-gray-600">Avg Rating</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
//           <div className="text-2xl font-bold text-purple-600 mb-1">Free</div>
//           <div className="text-sm text-gray-600">Shipping</div>
//         </div>
//       </div>

//       {/* Auto-slide Indicator */}
//       <div className="mt-6 flex items-center justify-center gap-2">
//         <div className="flex items-center gap-1 text-sm text-gray-500">
//           <div
//             className={`w-2 h-2 rounded-full ${
//               isHovered ? "bg-gray-300" : "bg-purple-500 animate-pulse"
//             }`}
//           />
//           <span>{isHovered ? "Paused" : "Auto-scrolling"}</span>
//         </div>
//       </div>

//       {/* CSS Animation for Toast */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Trendings;

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect, useRef } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   ShoppingCart,
//   Heart,
//   Eye,
//   Tag,
//   Zap,
//   Bell,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Trendings = () => {
//   // ----------------------- FIXED: PRODUCTS STATE --------------------
//   const [products, setProducts] = useState([]);
//   const [wishlistStatus, setWishlistStatus] = useState({});
//   const [activeCategory, setActiveCategory] = useState("all");

//   // Slider & UI state
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [slidesPerView, setSlidesPerView] = useState(1);
//   const [isHovered, setIsHovered] = useState(false);

//   // Toast state
//   const [showWishlistToast, setShowWishlistToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [toastProduct, setToastProduct] = useState(null);

//   const autoSlideRef = useRef(null);
//   const toastTimeoutRef = useRef(null);

//   // ----------------------- FETCH PRODUCTS FROM BACKEND --------------------
//   useEffect(() => {
//     fetch("http://localhost:8080/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);

//         // Initialize wishlist status
//         const initial = {};
//         data.forEach((p) => (initial[p.id] = p.isInWishlist || false));
//         setWishlistStatus(initial);
//       })
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   // ----------------------- CATEGORY LIST --------------------
//   const categories = [
//     { id: "all", name: "All Products", count: products.length },
//     {
//       id: "electronics",
//       name: "Electronics",
//       count: products.filter((p) => p.category === "electronics").length,
//     },
//     {
//       id: "fashion",
//       name: "Fashion",
//       count: products.filter((p) =>
//         ["fashion", "bags", "footwear"].includes(p.category)
//       ).length,
//     },
//     {
//       id: "beauty",
//       name: "Beauty",
//       count: products.filter((p) => p.category === "beauty").length,
//     },
//     {
//       id: "featured",
//       name: "Featured",
//       count: products.filter((p) => p.isFeatured).length,
//     },
//     {
//       id: "new",
//       name: "New Arrivals",
//       count: products.filter((p) => p.isNew).length,
//     },
//     {
//       id: "wishlist",
//       name: "In Wishlist",
//       count: Object.values(wishlistStatus).filter((s) => s).length,
//     },
//   ];

//   // ----------------------- FILTERED PRODUCTS --------------------
//   const filteredProducts =
//     activeCategory === "all"
//       ? products
//       : activeCategory === "featured"
//       ? products.filter((p) => p.isFeatured)
//       : activeCategory === "new"
//       ? products.filter((p) => p.isNew)
//       : activeCategory === "wishlist"
//       ? products.filter((p) => wishlistStatus[p.id])
//       : products.filter((p) => p.category === activeCategory);

//   // ----------------------- RESPONSIVE SLIDES --------------------
//   useEffect(() => {
//     const updateSlides = () => {
//       const width = window.innerWidth;
//       if (width >= 1280) setSlidesPerView(4);
//       else if (width >= 1024) setSlidesPerView(3);
//       else if (width >= 768) setSlidesPerView(2);
//       else setSlidesPerView(1);
//     };

//     updateSlides();
//     window.addEventListener("resize", updateSlides);
//     return () => window.removeEventListener("resize", updateSlides);
//   }, []);

//   // ----------------------- AUTO SLIDER --------------------
//   useEffect(() => {
//     if (autoSlideRef.current) clearInterval(autoSlideRef.current);

//     if (!isHovered) {
//       autoSlideRef.current = setInterval(() => {
//         setCurrentSlide((prev) => {
//           const maxSlide = Math.max(0, filteredProducts.length - slidesPerView);
//           return prev >= maxSlide ? 0 : prev + 1;
//         });
//       }, 4000);
//     }

//     return () => clearInterval(autoSlideRef.current);
//   }, [isHovered, filteredProducts, slidesPerView]);

//   const maxSlide = Math.max(0, filteredProducts.length - slidesPerView);

//   // ----------------------- WISHLIST --------------------
//   const toggleWishlist = (product) => {
//     const inWishlist = wishlistStatus[product.id];

//     setWishlistStatus((prev) => ({
//       ...prev,
//       [product.id]: !inWishlist,
//     }));

//     // Toast
//     setToastProduct(product);
//     setToastMessage(
//       !inWishlist
//         ? `"${product.name}" added to wishlist`
//         : `"${product.name}" removed from wishlist`
//     );
//     setShowWishlistToast(true);

//     clearTimeout(toastTimeoutRef.current);
//     toastTimeoutRef.current = setTimeout(
//       () => setShowWishlistToast(false),
//       3000
//     );
//   };

//   const wishlistCount = Object.values(wishlistStatus).filter((s) => s).length;

//   // ----------------------- UTIL --------------------
//   const calculateSavings = (p, o) => o - p;

//   const getStockStatus = (stock) => {
//     if (stock > 20) return { text: "In Stock", color: "text-green-500" };
//     if (stock > 10) return { text: "Limited Stock", color: "text-yellow-500" };
//     if (stock > 0) return { text: "Almost Gone", color: "text-orange-500" };
//     return { text: "Out of Stock", color: "text-red-500" };
//   };

//   // ----------------------- RENDER --------------------
//   return (
//     <div className="w-full py-10 px-4 bg-gradient-to-b from-gray-50 to-white">
//       {/* ---- Toast ---- */}
//       {showWishlistToast && toastProduct && (
//         <div className="fixed top-5 right-5 bg-white shadow-lg border p-4 rounded-lg z-50 animate-fade-in">
//           <div className="flex gap-2">
//             <img src={toastProduct.image} className="w-12 h-12 rounded" />
//             <div className="flex-1">
//               <p className="text-sm font-semibold">{toastMessage}</p>
//               <Link
//                 to="/wishlist"
//                 className="text-xs text-purple-600 mt-1 inline-block"
//               >
//                 View Wishlist ({wishlistCount})
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ---------------- HEADER ---------------- */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold flex items-center gap-2">
//           <Zap className="text-purple-600" /> Trending Products
//         </h2>

//         <Link
//           to="/wishlist"
//           className="relative flex items-center text-gray-700"
//         >
//           <Heart className="w-6 h-6" />
//           {wishlistCount > 0 && (
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
//               {wishlistCount}
//             </span>
//           )}
//         </Link>
//       </div>

//       {/* ---------------- CATEGORY FILTER ---------------- */}
//       <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
//         {categories.map((cat) => (
//           <button
//             key={cat.id}
//             onClick={() => {
//               setActiveCategory(cat.id);
//               setCurrentSlide(0);
//             }}
//             className={`px-4 py-2 rounded-full ${
//               activeCategory === cat.id
//                 ? "bg-purple-600 text-white"
//                 : "bg-gray-100"
//             }`}
//           >
//             {cat.name} ({cat.count})
//           </button>
//         ))}
//       </div>

//       {/* ---------------- PRODUCTS SLIDER ---------------- */}
//       <div className="relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-500"
//           style={{
//             transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
//           }}
//         >
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="px-3"
//               style={{ width: `${100 / slidesPerView}%` }}
//             >
//               {/* Product Card */}
//               <div className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden">
//                 <div className="relative">
//                   <img
//                     src={product.image}
//                     className="w-full h-60 object-cover"
//                   />

//                   {/* Discount */}
//                   <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs rounded-full flex items-center gap-1">
//                     <Tag size={12} /> {product.discount}% OFF
//                   </div>

//                   {/* Wishlist */}
//                   <button
//                     onClick={() => toggleWishlist(product)}
//                     className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
//                   >
//                     <Heart
//                       size={18}
//                       className={
//                         wishlistStatus[product.id]
//                           ? "text-red-500 fill-red-500"
//                           : "text-gray-600"
//                       }
//                     />
//                   </button>
//                 </div>

//                 {/* Info */}
//                 <div className="p-4">
//                   <p className="text-xs text-purple-600 uppercase">
//                     {product.category}
//                   </p>

//                   <h3 className="font-bold line-clamp-2">{product.name}</h3>

//                   <div className="flex items-center mt-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={12}
//                         className={
//                           i < Math.floor(product.rating)
//                             ? "text-yellow-400 fill-yellow-400"
//                             : "text-gray-300"
//                         }
//                       />
//                     ))}
//                     <span className="text-xs text-gray-500 ml-1">
//                       {product.rating}
//                     </span>
//                   </div>

//                   <div className="mt-3 flex justify-between items-center">
//                     <div>
//                       <span className="text-xl font-bold">
//                         ${product.price.toFixed(2)}
//                       </span>
//                       <span className="text-xs line-through text-gray-400 ml-1">
//                         ${product.originalPrice.toFixed(2)}
//                       </span>
//                     </div>

//                     <button className="bg-purple-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1">
//                       <ShoppingCart size={16} /> Add
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Slider Controls */}
//         <div className="absolute inset-y-0 left-0 flex items-center">
//           <button
//             onClick={() => setCurrentSlide((p) => (p <= 0 ? maxSlide : p - 1))}
//             className="bg-white border shadow p-2 rounded-full"
//           >
//             <ChevronLeft />
//           </button>
//         </div>

//         <div className="absolute inset-y-0 right-0 flex items-center">
//           <button
//             onClick={() => setCurrentSlide((p) => (p >= maxSlide ? 0 : p + 1))}
//             className="bg-white border shadow p-2 rounded-full"
//           >
//             <ChevronRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trendings;
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingCart,
  Heart,
  Tag,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Trendings = () => {
  // ----------------------- FIXED: PRODUCTS STATE --------------------
  const [products, setProducts] = useState([]);
  const [wishlistStatus, setWishlistStatus] = useState({});
  const [activeCategory, setActiveCategory] = useState("all");

  // Slider & UI state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Toast state
  const [showWishlistToast, setShowWishlistToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastProduct, setToastProduct] = useState(null);

  const autoSlideRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  // Helper function to fetch wishlist status
  const fetchWishlistStatus = () => {
    fetch("http://localhost:8080/api/wishlist")
      .then((res) => res.json())
      .then((wishlistData) => {
        const wishlistMap = {};
        wishlistData.forEach((item) => {
          wishlistMap[item.id] = true;
        });
        setWishlistStatus(wishlistMap);
      })
      .catch((err) => console.error("Error fetching wishlist:", err));
  };

  // ----------------------- FETCH PRODUCTS & WISHLIST --------------------
  useEffect(() => {
    // Fetch products
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));

    // Fetch wishlist items
    fetch("http://localhost:8080/api/wishlist")
      .then((res) => res.json())
      .then((wishlistData) => {
        // Create a map of wishlist items by product ID
        const wishlistMap = {};
        wishlistData.forEach((item) => {
          wishlistMap[item.id] = true;
        });
        setWishlistStatus(wishlistMap);
      })
      .catch((err) => console.error("Error fetching wishlist:", err));
  }, []);

  // ----------------------- CATEGORIES --------------------
  const categories = [
    { id: "all", name: "All Products", count: products.length },
    {
      id: "electronics",
      name: "Electronics",
      count: products.filter((p) => p.category === "electronics").length,
    },
    {
      id: "fashion",
      name: "Fashion",
      count: products.filter((p) =>
        ["fashion", "bags", "footwear"].includes(p.category)
      ).length,
    },
    {
      id: "beauty",
      name: "Beauty",
      count: products.filter((p) => p.category === "beauty").length,
    },
    {
      id: "featured",
      name: "Featured",
      count: products.filter((p) => p.isFeatured).length,
    },
    {
      id: "new",
      name: "New Arrivals",
      count: products.filter((p) => p.isNew).length,
    },
    {
      id: "wishlist",
      name: "In Wishlist",
      count: Object.values(wishlistStatus).filter(Boolean).length,
    },
  ];

  // ----------------------- FILTERED PRODUCTS --------------------
  const filteredProducts =
    activeCategory === "all"
      ? products
      : activeCategory === "featured"
      ? products.filter((p) => p.isFeatured)
      : activeCategory === "new"
      ? products.filter((p) => p.isNew)
      : activeCategory === "wishlist"
      ? products.filter((p) => wishlistStatus[p.id])
      : products.filter((p) => p.category === activeCategory);

  // ----------------------- RESPONSIVE SLIDES --------------------
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width >= 1280) setSlidesPerView(4);
      else if (width >= 1024) setSlidesPerView(3);
      else if (width >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // ----------------------- AUTO SLIDER --------------------
  useEffect(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);

    if (!isHovered) {
      autoSlideRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const max = Math.max(0, filteredProducts.length - slidesPerView);
          return prev >= max ? 0 : prev + 1;
        });
      }, 4000);
    }

    return () => clearInterval(autoSlideRef.current);
  }, [isHovered, filteredProducts, slidesPerView]);

  const maxSlide = Math.max(0, filteredProducts.length - slidesPerView);

  // ----------------------- WISHLIST --------------------

  // ////////////////////////////////////////////////////////////////////////////////

  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const wishlistCount = Object.values(wishlistStatus).filter(Boolean).length;

  // ----------------------- RENDER --------------------
  return (
    <div className="w-full py-10 px-4 bg-gradient-to-b from-gray-50 to-white">
      {/* ---- Toast ---- */}
      {showWishlistToast && toastProduct && (
        <div className="fixed top-5 right-5 bg-white shadow-lg border p-4 rounded-lg z-50 animate-fade-in">
          <div className="flex gap-2">
            <img src={toastProduct.image} className="w-12 h-12 rounded" />
            <div className="flex-1">
              <p className="text-sm font-semibold">{toastMessage}</p>
              <Link
                to="/wishlist"
                className="text-xs text-purple-600 mt-1 inline-block"
              >
                View Wishlist ({wishlistCount})
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- HEADER ---------------- */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Zap className="text-purple-600" /> Trending Products
        </h2>

        <Link
          to="/wishlist"
          className="relative flex items-center text-gray-700"
        >
          <Heart className="w-6 h-6" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              {wishlistCount}
            </span>
          )}
        </Link>
      </div>

      {/* ---------------- CATEGORY FILTER ---------------- */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setCurrentSlide(0);
            }}
            className={`px-4 py-2 rounded-full ${
              activeCategory === cat.id
                ? "bg-purple-600 text-white"
                : "bg-gray-100"
            }`}
          >
            {cat.name} ({cat.count})
          </button>
        ))}
      </div>

      {/* ---------------- PRODUCTS SLIDER ---------------- */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="px-3"
              style={{ width: `${100 / slidesPerView}%` }}
            >
              {/* Product Card */}
              <div className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    className="w-full h-60 object-cover"
                  />

                  {/* Discount */}
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs rounded-full flex items-center gap-1">
                    <Tag size={12} /> {product.discount}% OFF
                  </div>
                  {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Wishlish chnages */}
                  {/* Wishlist */}

                  <button
                    onClick={async () => {
                      try {
                        const isAlreadyInWishlist = wishlistStatus[product.id];

                        if (isAlreadyInWishlist) {
                          // Remove from wishlist
                          const response = await axios.delete(
                            `http://localhost:8080/api/wishlist/${product.id}`
                          );
                          setToastMessage(
                            `Removed "${product.name}" from wishlist`
                          );
                          setToastProduct(product);
                        } else {
                          // Add to wishlist
                          const response = await axios.post(
                            "http://localhost:8080/api/wishlist",
                            {
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              category: product.category,
                              image: product.image,
                              originalPrice: product.originalPrice,
                              discount: product.discount,
                              rating: product.rating,
                            }
                          );
                          setToastMessage(
                            `Added "${product.name}" to wishlist!`
                          );
                          setToastProduct(product);
                        }

                        // Refetch wishlist status from database
                        fetchWishlistStatus();

                        setShowWishlistToast(true);

                        if (toastTimeoutRef.current) {
                          clearTimeout(toastTimeoutRef.current);
                        }
                        toastTimeoutRef.current = setTimeout(() => {
                          setShowWishlistToast(false);
                        }, 2000);
                      } catch (error) {
                        console.error("Error updating wishlist:", error);
                        if (error.response?.status === 409) {
                          setToastMessage("Already in your wishlist!");
                        } else if (error.response?.status === 400) {
                          setToastMessage(
                            error.response.data.error || "Invalid request"
                          );
                        } else {
                          setToastMessage("Error updating wishlist");
                        }
                        setToastProduct(product);
                        setShowWishlistToast(true);
                      }
                    }}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:shadow-lg transition"
                  >
                    <Heart
                      size={18}
                      className={
                        wishlistStatus[product.id]
                          ? "text-red-500 fill-red-500"
                          : "text-gray-600 hover:text-red-500"
                      }
                    />
                  </button>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-xs text-purple-600 uppercase">
                    {product.category}
                  </p>

                  <h3 className="font-bold line-clamp-2">{product.name}</h3>

                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      {product.rating}
                    </span>
                  </div>

                  <div className="mt-3 flex justify-between items-center">
                    <div>
                      <span className="text-xl font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-xs line-through text-gray-400 ml-1">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>

                    <button className="bg-purple-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1">
                      <ShoppingCart size={16} /> Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={() => setCurrentSlide((p) => (p <= 0 ? maxSlide : p - 1))}
            className="bg-white border shadow p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={() => setCurrentSlide((p) => (p >= maxSlide ? 0 : p + 1))}
            className="bg-white border shadow p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trendings;
