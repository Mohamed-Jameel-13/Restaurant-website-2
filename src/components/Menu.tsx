import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function Menu() {
  const containerRef = React.useRef(null);
  const menuCategories = [
    {
      name: 'Appetizers',
      description: 'Start your culinary journey',
      items: [
        {
          name: 'Tandoori Prawns',
          description: 'Tiger prawns marinated in aromatic spices, cooked in clay oven',
          price: 850,
          image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2050&auto=format&fit=crop',
          spiceLevel: 2,
          isVeg: false,
        },
        {
          name: 'Paneer Tikka',
          description: 'Cottage cheese marinated in yogurt and spices, grilled to perfection',
          price: 450,
          image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=2070&auto=format&fit=crop',
          spiceLevel: 1,
          isVeg: true,
        },
      ],
    },
    {
      name: 'Main Course',
      description: 'Indulge in our signature dishes',
      items: [
        {
          name: 'Butter Chicken',
          description: 'Tender chicken in rich tomato and butter gravy',
          price: 750,
          image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop',
          spiceLevel: 2,
          isVeg: false,
        },
        {
          name: 'Dal Makhani',
          description: 'Black lentils slow-cooked overnight with cream and spices',
          price: 450,
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop',
          spiceLevel: 1,
          isVeg: true,
        },
      ],
    },
  ];

  // Add smooth scroll function
  const scrollToSection = (target: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: target,
        offsetY: 80 // Adjust this value based on your header height
      },
      ease: "power3.inOut"
    });
  };

  useGSAP(() => {
    menuCategories.forEach((category, index) => {
      gsap.from(`.menu-category-${index}`, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `.menu-category-${index}`,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      });

      category.items.forEach((_, itemIndex) => {
        gsap.from(`.menu-item-${index}-${itemIndex}`, {
          opacity: 0,
          x: itemIndex % 2 === 0 ? -30 : 30,
          duration: 0.8,
          delay: 0.2 * itemIndex,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.menu-item-${index}-${itemIndex}`,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse',
          },
        });
      });
    });

    // Add smooth scroll behavior
    gsap.utils.toArray('a[href^="#"]').forEach((anchor: any) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const target = anchor.getAttribute('href');
        scrollToSection(target);
      });
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative py-24"
      style={{ backgroundColor: 'black' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-medium tracking-widest uppercase mb-2">Our Menu</h2>
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white">Culinary Excellence</h3>
        </div>

        <div className="space-y-20">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.name} className={`menu-category-${categoryIndex}`}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-playfair text-amber-500 mb-4">{category.name}</h3>
                <p className="text-gray-400">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className={`menu-item-${categoryIndex}-${itemIndex} group relative overflow-hidden rounded-lg`}
                  >
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>

                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-2xl font-playfair text-white group-hover:text-amber-500 transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-amber-500 font-medium">₹{item.price}</span>
                      </div>

                      <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${
                                i < item.spiceLevel ? 'bg-red-500' : 'bg-gray-500'
                              }`}
                            />
                          ))}
                        </div>
                        <span className={`text-sm ${item.isVeg ? 'text-green-500' : 'text-red-500'}`}>
                          {item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}