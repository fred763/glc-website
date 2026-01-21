// src/app/layout.js -> rename to layout.jsx
import { Dosis, Playfair_Display, Karla } from 'next/font/google';
import Navigation from '@/components/layout/Header/Navigation';
import Footer from '@/components/layout/Footer/Footer';
// import { AllBlogProvider } from '@/context/all-blogs';
import './globals.css';
import Script from 'next/script';
import Image from 'next/image';
import { AllBlogProvider } from "../context/all-blogs";

// Configure fonts
const dosis = Dosis({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dosis',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
});

export const metadata = {
  title: 'Global Liquidation Company',
  description: 'Art | Antiques | Rugs | Auctions',
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${dosis.variable} ${playfair.variable} ${karla.variable}`}
    >
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-63HL22655B"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-63HL22655B');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1168173835084102');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height={1}
            width={1}
            alt="Facebook Pixel Tracker"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1168173835084102&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="min-h-screen bg-background-light font-body antialiased">
        <AllBlogProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </AllBlogProvider>
      </body>
    </html>
  );
}


// // src/app/layout.js -> rename to layout.jsx
// import { Dosis, Playfair_Display, Karla } from 'next/font/google';
// import Navigation from '@/components/layout/Header/Navigation';
// import Footer from '@/components/layout/Footer/Footer';
// // import { AllBlogProvider } from '@/context/all-blogs';
// import './globals.css';

// // Configure fonts
// const dosis = Dosis({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-dosis',
// });

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-playfair',
// });

// const karla = Karla({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-karla',
// });

// export const metadata = {
//   title: 'Global Liquidation Company',
//   description: 'Art | Antiques | Rugs | Auctions',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html 
//       lang="en" 
//       className={`${dosis.variable} ${playfair.variable} ${karla.variable}`}
//     >
//       <body className="min-h-screen bg-background-light font-body antialiased">
//         {/* <AllBlogProvider> */}
//           <Navigation />
//           <main>{children}</main>
//           <Footer />
//         {/* </AllBlogProvider> */}
//       </body>
//     </html>
//   );
// }