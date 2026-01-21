// src/constants/navigation.js

// src/constants/navigation.js

// Main Navigation Structure
export const MAIN_NAV = [
  {
    title: "LIQUIDATIONS",
    href: "/liquidations",
    children: [
      { title: "SHOP CURRENT LIQUIDATIONS", href: "/liquidations/current" },
      { title: "PAST LIQUIDATIONS", href: "/auctions/past-liquidations" },
    ],
  },
  {
    title: "AUCTIONS",
    href: "/auctions",
    children: [
      // { title: "CURRENT AUCTIONS", href: "/auctions" },
      { title: "REGISTER FOR FUTURE AUCTIONS", href: "/auctions/register" },
      { title: "PAST AUCTIONS", href: "/auctions/past-auctions" },
      { title: "GALLERY", href: "/auctions/gallery" },
    ],
  },
  {
    title: "RARE RUGS",
    href: "/rugs",
    children: [
      { title: "RUG APPRAISAL", href: "/rugs/appraisal" },
      { title: "RUG CLEANING & RESTORATION", href: "/rugs/cleaning-restoration" },
      { title: "GALLERY", href: "/rugs/gallery" },
    ],
  },
  {
    title: "ART AND ANTIQUES",
    href: "/art-antiques",
    children: [
      { title: "ART APPRAISAL", href: "/art-antiques/appraisal" },
      { title: "RESTORATION SERVICES", href: "/art-antiques/restoration" },
      { title: "GALLERY", href: "/art-antiques/gallery" },
    ],
  },
  {
    title: "SHOWROOM LOCATIONS",
    href: "/locations",
    children: [
      { title: "PASADENA - GLC ANTIQUES | RUGS | AUCTIONS & GLOBAL LIQUIDATIONS", href: "/locations/pasadena" },
      { title: "SAN CLEMENTE - GLC RUG OUTLET", href: "/locations/san-clemente" },
      // { title: "VIRTUAL TOUR", href: "/locations/virtual-tour" },
    ],
  },
  { title: "ABOUT US", href: "/about" },
  { title: "BLOG", href: "/blog" },
  { title: "CONTACT US", href: "/contact" },
  {
    title: "WE BUY",
    href: "/we-buy",
    children: [
      { title: "LIQUIDATE YOUR ESTATE ITEMS", href: "/liquidations/estate-items" },
      { title: "WE BUY RUGS", href: "/rugs/we-buy-rugs" },
      { title: "WE BUY ART", href: "/art-antiques/we-buy-art" },
    ],
  },
];

// Contact Information
export const CONTACT_INFO = {
  mainLocation: {
    title: "Global Liquidation Company",
    subtitle: "Art | Antiques | Rugs | Auctions",
    email: "info@GLCAuctions.com",
    phones: ["626-744-0404", "888-900-4452"],
  },
  rugOutlet: {
    title: "GLC Rug Outlet",
    subtitle: "Biggest Rug Collection in America",
    phones: ["949-364-6425", "888-900-4452"],
  },
};

// Social Media Links
export const SOCIAL_LINKS = [
  { platform: "Facebook", url: "https://facebook.com/globalliquidationcompany", icon: "facebook" },
  { platform: "Instagram", url: "https://instagram.com/globalliquidationcompany", icon: "instagram" },
  { platform: "Google Business", url: "#", icon: "google" },
  { platform: "WhatsApp", url: "#", icon: "whatsapp" },
];

// Footer Quick Links
export const FOOTER_LINKS = [
  { title: "Home", href: "/" },
  { title: "Liquidations", href: "/liquidations" },
  { title: "Auctions", href: "/auctions" },
  { title: "RARE RUGS", href: "/rugs" },
  { title: "Art and Antiques", href: "/art-antiques" },
  { title: "Showroom Locations", href: "/locations" },
  { title: "About Us", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
  { title: "We Buy", href: "/we-buy" },
];

// Legal Links
export const LEGAL_LINKS = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Legal &amp; Discliamer", href: "/legal" },
  // { title: "Sitemap", href: "/sitemap" },
  // { title: "Accessibility Statement", href: "/accessibility" },
];

// Company Information
export const COMPANY_INFO = {
  name: "Global Liquidation Company",
  tagline: "Art | Antiques | Rugs | Auctions",
  copyright: "© 2025 Global Liquidation Company. All Rights Reserved.",
  contactText: "Feel free to contact us at any time with questions or inquiries.",
};

// Route Paths (for programmatic usage)
export const ROUTES = {
  HOME: "/",
  WE_BUY: {
    ROOT: "/we-buy",
    ESTATE_ITEMS: "/liquidations/estate-items",
    RUGS: "/rugs/we-buy-rugs",
    ART: "/art-antiques/we-buy-art",
  },
  LIQUIDATIONS: {
    ROOT: "/liquidations",
    CURRENT: "/liquidations/current",
    PAST_LIQUIDATIONS: "/auctions/past-liquidations",
  },
  AUCTIONS: {
    ROOT: "/auctions",
    REGISTER: "/auctions/register",
    PAST: "/auctions/past-auctions",
    GALLERY: "/auctions/gallery",
  },
  RUGS: {
    ROOT: "/rugs",
    SHOP: "/rugs/shop",
    APPRAISAL: "/rugs/appraisal",
    CLEANING: "/rugs/cleaning-restoration",
    GALLERY: "/rugs/gallery",
  },
  ART_ANTIQUES: {
    ROOT: "/art-antiques",
    SHOP: "/art-antiques/shop",
    APPRAISAL: "/art-antiques/appraisal",
    RESTORATION: "/art-antiques/restoration",
    GALLERY: "/art-antiques/gallery",
  },
  LOCATIONS: {
    ROOT: "/locations",
    PASADENA: "/locations/pasadena",
    SAN_CLEMENTE: "/locations/san-clemente",
    // VIRTUAL_TOUR: "/locations/virtual-tour",
  },
  ABOUT: "/about",
  BLOG: {
    ROOT: "/blog",
    ARTICLE1: "/blog/article1",
  },
  CONTACT: "/contact",
  LEGAL: {
    PRIVACY: "/privacy-policy",
    TERMS: "/legal",
    SITEMAP: "/sitemap",
    ACCESSIBILITY: "/accessibility",
  },
};

// // src/constants/navigation.js

// // Main Navigation Structure
// export const MAIN_NAV = [
//   {
//     title: "LIQUIDATIONS",
//     href: "/liquidations",
//     children: [
//       { title: "SHOP CURRENT LIQUIDATIONS", href: "/liquidations/current" },
//       { title: "LIQUIDATE YOUR ESTATE ITEMS", href: "/liquidations/estate-items" },
//       { title: "PAST LIQUIDATIONS", href: "/auctions/past-liquidations" },
//     ],
//   },
//   {
//     title: "AUCTIONS",
//     href: "/auctions",
//     children: [
//       // { title: "CURRENT AUCTIONS", href: "/auctions" },
//       { title: "REGISTER FOR FUTURE AUCTIONS", href: "/auctions/register" },
//       { title: "PAST AUCTIONS", href: "/auctions/past-auctions" },
//       { title: "GALLERY", href: "/auctions/gallery" },

//     ],
//   },
//   {
//     title: "RARE RUGS",
//     href: "/rugs",
//     children: [
//       { title: "WE BUY RUGS", href: "/rugs/we-buy-rugs" },
//       { title: "RUG APPRAISAL", href: "/rugs/appraisal" },
//       { title: "RUG CLEANING & RESTORATION", href: "/rugs/cleaning-restoration" },
//       { title: "GALLERY", href: "/rugs/gallery" },
//     ],
//   },
//   {
//     title: "ART AND ANTIQUES",
//     href: "/art-antiques",
//     children: [
//       { title: "WE BUY ART", href: "/art-antiques/we-buy-art" },
//       { title: "ART APPRAISAL", href: "/art-antiques/appraisal" },
//       { title: "RESTORATION SERVICES", href: "/art-antiques/restoration" },
//       { title: "GALLERY", href: "/art-antiques/gallery" },
//     ],
//   },
//   {
//     title: "SHOWROOM LOCATIONS",
//     href: "/locations",
//     children: [
//       { title: "PASADENA - GLC ANTIQUES | RUGS | AUCTIONS & GLOBAL LIQUIDATIONS", href: "/locations/pasadena" },
//       { title: "SAN CLEMENTE - GLC RUG OUTLET", href: "/locations/san-clemente" },
//       // { title: "VIRTUAL TOUR", href: "/locations/virtual-tour" },
//     ],
//   },
//   { title: "ABOUT US", href: "/about" },
//   { title: "BLOG", href: "/blog" },
//   { title: "CONTACT US", href: "/contact" },
// ];

// // Contact Information
// export const CONTACT_INFO = {
//   mainLocation: {
//     title: "Global Liquidation Company",
//     subtitle: "Art | Antiques | Rugs | Auctions",
//     email: "info@GLCAuctions.com",
//     phones: ["626-744-0404", "888-900-4452"],
//   },
//   rugOutlet: {
//     title: "GLC Rug Outlet",
//     subtitle: "Biggest Rug Collection in America",
//     phones: ["949-364-6425", "888-900-4452"],
//   },
// };

// // Social Media Links
// export const SOCIAL_LINKS = [
//   { platform: "Facebook", url: "https://facebook.com/globalliquidationcompany", icon: "facebook" },
//   { platform: "Instagram", url: "https://instagram.com/globalliquidationcompany", icon: "instagram" },
//   { platform: "Google Business", url: "#", icon: "google" },
//   { platform: "WhatsApp", url: "#", icon: "whatsapp" },
// ];

// // Footer Quick Links
// export const FOOTER_LINKS = [
//   { title: "Home", href: "/" },
//   { title: "Liquidations", href: "/liquidations" },
//   { title: "Auctions", href: "/auctions" },
//   { title: "RARE RUGS", href: "/rugs" },
//   { title: "Art and Antiques", href: "/art-antiques" },
//   { title: "Showroom Locations", href: "/locations" },
//   { title: "About Us", href: "/about" },
//   { title: "Blog", href: "/blog" },
//   { title: "Contact Us", href: "/contact" },
// ];

// // Legal Links
// export const LEGAL_LINKS = [
//   { title: "Privacy Policy", href: "/privacy-policy" },
//   { title: "Legal &amp; Discliamer", href: "/legal" },
//   // { title: "Sitemap", href: "/sitemap" },
//   // { title: "Accessibility Statement", href: "/accessibility" },
// ];

// // Company Information
// export const COMPANY_INFO = {
//   name: "Global Liquidation Company",
//   tagline: "Art | Antiques | Rugs | Auctions",
//   copyright: "© 2025 Global Liquidation Company. All Rights Reserved.",
//   contactText: "Feel free to contact us at any time with questions or inquiries.",
// };

// // Route Paths (for programmatic usage)
// export const ROUTES = {
//   HOME: "/",
//   LIQUIDATIONS: {
//     ROOT: "/liquidations",
//     CURRENT: "/liquidations/current",
//     ESTATE: "/liquidations/estate-items",
//     PAST_LIQUIDATIONS: "/auctions/past-liquidations",
//   },
//   AUCTIONS: {
//     ROOT: "/auctions",
//     REGISTER: "/auctions/register",
//     PAST: "/auctions/past-auctions",
//     GALLERY: "/auctions/gallery",
//   },
//   RUGS: {
//     ROOT: "/rugs",
//     BUY: "/rugs/we-buy-rugs",
//     APPRAISAL: "/rugs/appraisal",
//     CLEANING: "/rugs/cleaning-restoration",
//     GALLERY: "/rugs/gallery",
//   },
//   ART_ANTIQUES: {
//     ROOT: "/art-antiques",
//     BUY: "/art-antiques/we-buy-art",
//     APPRAISAL: "/art-antiques/appraisal",
//     RESTORATION: "/art-antiques/restoration",
//     GALLERY: "/art-antiques/gallery",
//   },
//   LOCATIONS: {
//     ROOT: "/locations",
//     PASADENA: "/locations/pasadena",
//     SAN_CLEMENTE: "/locations/san-clemente",
//     // VIRTUAL_TOUR: "/locations/virtual-tour",
//   },
//   ABOUT: "/about",
//   BLOG: {
//     ROOT: "/blog",
//     ARTICLE1: "/blog/article1",
//   },
//   CONTACT: "/contact",
//   LEGAL: {
//     PRIVACY: "/privacy-policy",
//     TERMS: "/legal",
//     SITEMAP: "/sitemap",
//     ACCESSIBILITY: "/accessibility",
//   },
// };

// // src/constants/navigation.js

// // Main Navigation Structure
// export const MAIN_NAV = [
//     {
//       title: "LIQUIDATIONS",
//       href: "/liquidations",
//       children: [
//         { title: "SHOP CURRENT LIQUIDATIONS", href: "/liquidations/current" },
//         { title: "LIQUIDATE YOUR ESTATE ITEMS", href: "/liquidations/estate-items" },
//       ],
//     },
//     { title: "AUCTIONS", href: "/auctions" },
//     {
//       title: "RARE RUGS",
//       href: "/rugs",
//       children: [
//         { title: "WE BUY RUGS", href: "/rugs/we-buy-rugs" },
//         { title: "RUG APPRAISAL", href: "/rugs/appraisal" },
//         { title: "RUG CLEANING & RESTORATION", href: "/rugs/cleaning-restoration" },
//         { title: "GALLERY", href: "/rugs/gallery" },
//       ],
//     },
//     {
//       title: "ART AND ANTIQUES",
//       href: "/art-antiques",
//       children: [{ title: "GALLERY", href: "/art-antiques/gallery" }],
//     },
//     {
//       title: "SHOWROOM LOCATIONS",
//       href: "/locations",
//       children: [
//         { title: "PASADENA - GLC ANTIQUES | RUGS | AUCTIONS & GLOBAL LIQUIDATIONS", href: "/locations/pasadena" },
//         { title: "SAN CLEMENTE - GLC RUG OUTLET", href: "/locations/san-clemente" },
//       ],
//     },
//     { title: "ABOUT US", href: "/about" },
//     // { title: "BLOG", href: "/blog" },
//     { title: "CONTACT US", href: "/contact" },
//   ];
  
//   // Contact Information
//   export const CONTACT_INFO = {
//     mainLocation: {
//       title: "Global Liquidation Company",
//       subtitle: "Art | Antiques | Rugs | Auctions",
//       email: "info@GLCAuctions.com",
//       phones: ["626-744-0404", "888-900-4452"],
//     },
//     rugOutlet: {
//       title: "GLC Rug Outlet",
//       phones: ["949-364-6425", "888-900-4452"],
//     },
//   };
  
//   // Social Media Links
//   export const SOCIAL_LINKS = [
//     { platform: "Facebook", url: "https://facebook.com/globalliquidationcompany", icon: "facebook" },
//     { platform: "Instagram", url: "https://instagram.com/globalliquidationcompany", icon: "instagram" },
//     { platform: "Google Business", url: "#", icon: "google" },
//     { platform: "WhatsApp", url: "#", icon: "whatsapp" },
//   ];
  
//   // Footer Quick Links
//   export const FOOTER_LINKS = [
//     { title: "Home", href: "/" },
//     { title: "Liquidations", href: "/liquidations" },
//     { title: "Auctions", href: "/auctions" },
//     { title: "RARE RUGS", href: "/rugs" },
//     { title: "Art and Antiques", href: "/art-antiques" },
//     { title: "Showroom Locations", href: "/locations" },
//     { title: "About Us", href: "/about" },
//     { title: "Contact Us", href: "/contact" },
//   ];
  
//   // Legal Links
//   export const LEGAL_LINKS = [
//     { title: "Privacy Policy", href: "/privacy-policy" },
//     { title: "Sitemap", href: "/sitemap" },
//     { title: "Accessibility Statement", href: "/accessibility" },
//   ];
  
//   // Company Information
//   export const COMPANY_INFO = {
//     name: "Global Liquidation Company",
//     tagline: "Art | Antiques | Rugs | Auctions",
//     copyright: "© 2025 Global Liquidation Company. All Rights Reserved.",
//     contactText: "Feel free to contact us at any time with questions or inquiries.",
//   };
  
//   // Route Paths (for programmatic usage)
//   export const ROUTES = {
//     HOME: "/",
//     LIQUIDATIONS: {
//       ROOT: "/liquidations",
//       CURRENT: "/liquidations/current",
//       ESTATE: "/liquidations/estate-items",
//     },
//     AUCTIONS: "/auctions",
//     RUGS: {
//       ROOT: "/rugs",
//       BUY: "/rugs/we-buy-rugs",
//       APPRAISAL: "/rugs/appraisal",
//       CLEANING: "/rugs/cleaning-restoration",
//       GALLERY: "/rugs/gallery",
//     },
//     ART_ANTIQUES: {
//       ROOT: "/art-antiques",
//       GALLERY: "/art-antiques/gallery",
//     },
//     LOCATIONS: {
//       ROOT: "/locations",
//       PASADENA: "/locations/pasadena",
//       SAN_CLEMENTE: "/locations/san-clemente",
//       VIRTUAL_TOUR: "/locations/virtual-tour",
//     },
//     ABOUT: "/about",
//     // BLOG: "/blog",
//     CONTACT: "/contact",
//     LEGAL: {
//       PRIVACY: "/privacy-policy",
//       SITEMAP: "/sitemap",
//       ACCESSIBILITY: "/accessibility",
//     },
//   };
  