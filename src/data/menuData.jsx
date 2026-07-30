import React from 'react';

export const menuData = [
  {
    category: 'Coffee',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    ),
    items: [
      { id: 'c1', name: 'Cappuccino', desc: 'Rich espresso with steamed milk and a layer of foamed milk.', price: '₹150', image: '/assets/latte_1784909179484.png', popular: true },
      { id: 'c2', name: 'Iced Latte', desc: 'Smooth espresso blended with cold milk and ice.', price: '₹180', image: '/assets/cold_brew_1784909191364.png' },
      { id: 'c3', name: 'Espresso', desc: 'Strong and bold single shot of pure espresso.', price: '₹100', image: '/assets/mocha_1784909204523.png' },
      { id: 'c4', name: 'Mocha', desc: 'Espresso with chocolate, steamed milk, and a touch of cocoa.', price: '₹160', image: '/assets/latte_1784909179484.png' },
      { id: 'c5', name: 'Flat White', desc: 'Smooth espresso with velvety steamed milk.', price: '₹170', image: '/assets/flat_white_1784929444560.png' },
      { id: 'c6', name: 'Caramel Macchiato', desc: 'Espresso with vanilla syrup, steamed milk and caramel drizzle.', price: '₹200', image: '/assets/caramel_macchiato_1784929455041.png' }
    ]
  },
  {
    category: 'Non-Coffee',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
        <path d="M2 22l6.2-6.2"></path>
      </svg>
    ),
    items: [
      { id: 'nc1', name: 'Matcha Latte', desc: 'Premium matcha blended with steamed milk.', price: '₹220', image: '/assets/cheesecake_1784909217833.png' },
      { id: 'nc2', name: 'Hot Chocolate', desc: 'Rich chocolate blended with steamed milk.', price: '₹180', image: '/assets/mocha_1784909204523.png' },
      { id: 'nc3', name: 'Chai Tea Latte', desc: 'Spiced black tea blended with steamed milk.', price: '₹150', image: '/assets/chai_tea_latte_1784929464327.png' },
      { id: 'nc4', name: 'Strawberry Smoothie', desc: 'Fresh strawberries blended with yogurt and honey.', price: '₹200', image: '/assets/strawberry_smoothie_1784929475341.png' }
    ]
  },
  {
    category: 'Tea',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    items: [
      { id: 't1', name: 'English Breakfast', desc: 'Classic black tea with a rich and robust flavor.', price: '₹120', image: '/assets/cold_brew_1784909191364.png' },
      { id: 't2', name: 'Chamomile Tea', desc: 'Calming herbal tea made from sweet chamomile flowers.', price: '₹140', image: '/assets/latte_1784909179484.png' },
      { id: 't3', name: 'Green Tea', desc: 'Light and refreshing traditional green tea.', price: '₹110', image: '/assets/green_tea_1784929485519.png' },
      { id: 't4', name: 'Earl Grey', desc: 'Black tea infused with fragrant bergamot oil.', price: '₹130', image: '/assets/earl_grey_1784929495194.png' }
    ]
  },
  {
    category: 'Food',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
        <path d="M7 2v20"></path>
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
      </svg>
    ),
    items: [
      { id: 'f1', name: 'Grilled Sandwich', desc: 'Toasted sandwich with fresh veggies, cheese and our special sauce.', price: '₹160', image: '/assets/croissant_1784909233340.png' },
      { id: 'f2', name: 'Chicken Wrap', desc: 'Grilled chicken wrap with greens and homemade dressing.', price: '₹220', image: '/assets/cheesecake_1784909217833.png' },
      { id: 'f3', name: 'Avocado Toast', desc: 'Mashed avocado on sourdough bread with cherry tomatoes.', price: '₹250', image: '/assets/avocado_toast_1784929509510.png' },
      { id: 'f4', name: 'Breakfast Croissant', desc: 'Flaky butter croissant filled with egg and cheese.', price: '₹180', image: '/assets/breakfast_croissant_1784929522475.png' }
    ]
  },
  {
    category: 'Dessert',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
        <path d="M2 21h20"></path>
        <path d="M7 8v3"></path>
        <path d="M12 8v3"></path>
        <path d="M17 8v3"></path>
        <path d="M7 4h10"></path>
      </svg>
    ),
    items: [
      { id: 'd1', name: 'Chocolate Brownie', desc: 'Warm brownie served with chocolate sauce.', price: '₹150', image: '/assets/mocha_1784909204523.png' },
      { id: 'd2', name: 'Cheesecake', desc: 'Creamy cheesecake with a rich berry compote.', price: '₹220', image: '/assets/cheesecake_1784909217833.png' },
      { id: 'd3', name: 'Tiramisu', desc: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.', price: '₹240', image: '/assets/tiramisu_1784929531808.png' },
      { id: 'd4', name: 'Lemon Tart', desc: 'Zesty lemon curd in a buttery pastry shell.', price: '₹180', image: '/assets/lemon_tart_1784929541611.png' }
    ]
  }
];
