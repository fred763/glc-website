// // src/components/layout/Footer/Header/Navigation.jsx

"use client"
import { useState, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { MAIN_NAV, SOCIAL_LINKS } from '@/constants/navigation';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-[100]">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Global Liquidation Company"
                width={160}
                height={60}
                priority
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {MAIN_NAV.map((item) => (
              <div 
                key={item.href} 
                className="relative inline-block text-sm"
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={item.href} legacyBehavior>
                  <a className="inline-flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                    {item.title}
                  </a>
                </Link>

                {item.children && (
                  <Transition
                    show={hoveredItem === item.href}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="absolute left-0 mt-1 w-72 bg-white border border-gray-200 shadow-lg rounded-md z-[110]">
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} legacyBehavior>
                            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 border-b last:border-0">
                              {child.title}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Transition>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <Transition
          show={mobileMenuOpen}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="lg:hidden py-2 absolute left-0 right-0 bg-white border-b border-gray-200 z-[110]">
            {MAIN_NAV.map((item) => (
              <div key={item.href} className="px-2 py-1">
                <Link href={item.href} legacyBehavior>
                  <a
                    className="block px-3 py-2 text-sm text-gray-900"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.title}
                  </a>
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} legacyBehavior>
                        <a
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileMenuOpen(false);
                          }}
                        >
                          {child.title}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Transition>
      </nav>
    </header>
  );
};

export default Navigation;

// "use client"
// import { useState, Fragment } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Transition } from '@headlessui/react';
// import { Menu as MenuIcon, X } from 'lucide-react';
// import { MAIN_NAV, SOCIAL_LINKS } from '@/constants/navigation';

// const Navigation = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-[100]">
//       <nav className="container mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" legacyBehavior>
//             <a className="flex-shrink-0">
//               <Image
//                 src="/images/logo.png"
//                 alt="Global Liquidation Company"
//                 width={160}
//                 height={60}
//                 priority
//               />
//             </a>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-6">
//             {MAIN_NAV.map((item) => (
//               <div 
//                 key={item.href} 
//                 className="relative inline-block text-sm"
//                 onMouseEnter={() => setHoveredItem(item.href)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 <Link href={item.href} legacyBehavior>
//                   <a className="inline-flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
//                     {item.title}
//                   </a>
//                 </Link>

//                 {item.children && (
//                   <Transition
//                     show={hoveredItem === item.href}
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="opacity-0 scale-95"
//                   >
//                     <div className="absolute left-0 mt-1 w-72 bg-white border border-gray-200 shadow-lg rounded-md z-[110]">
//                       <div className="py-1">
//                         {item.children.map((child) => (
//                           <Link key={child.href} href={child.href} legacyBehavior>
//                             <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 border-b last:border-0">
//                               {child.title}
//                             </a>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </Transition>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             type="button"
//             className="lg:hidden"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <span className="sr-only">Open menu</span>
//             {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <Transition
//           show={mobileMenuOpen}
//           enter="transition duration-200 ease-out"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition duration-100 ease-in"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <div className="lg:hidden py-2 absolute left-0 right-0 bg-white border-b border-gray-200 z-[110]">
//             {MAIN_NAV.map((item) => (
//               <div key={item.href} className="px-2 py-1">
//                 <Link href={item.href} legacyBehavior>
//                   <a
//                     className="block px-3 py-2 text-sm text-gray-900"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setMobileMenuOpen(false);
//                     }}
//                   >
//                     {item.title}
//                   </a>
//                 </Link>
//                 {item.children && (
//                   <div className="pl-4">
//                     {item.children.map((child) => (
//                       <Link key={child.href} href={child.href} legacyBehavior>
//                         <a
//                           className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setMobileMenuOpen(false);
//                           }}
//                         >
//                           {child.title}
//                         </a>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </Transition>
//       </nav>
//     </header>
//   );
// };

// export default Navigation;
