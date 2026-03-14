const products = {
    'blue-raspberry': {
        name: 'Blue Raspberry',
        category: 'Hydration',
        price: '$29.99',
        image: 'https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_bluerasberry_0000_2000x.png?v=1656076581',
        bgColor: 'linear-gradient(135deg, #E0F2FE 0%, #FFFFFF 100%)',
        description: 'Bold flavor and thirst-quenching hydration. Blue Raspberry Prime is the perfect refresh to refuel your body.',
        highlights: ['10% Coconut Water', '825mg Electrolytes', '250mg BCAAs', 'Antioxidants & B Vitamins']
    },
    'tropical-punch': {
        name: 'Tropical Punch',
        category: 'Hydration',
        price: '$29.99',
        image: 'https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_tropicalpunch_0000_1200x.png?v=1656076860',
        bgColor: 'linear-gradient(135deg, #FEE2E2 0%, #FFFFFF 100%)',
        description: 'A classic, bold flavor with the function you need. Tropical Punch brings the island vibes to your daily routine.',
        highlights: ['10% Coconut Water', '825mg Electrolytes', '250mg BCAAs', 'Antioxidants & B Vitamins']
    },
    'ice-pop': {
        name: 'Ice Pop',
        category: 'Hydration',
        price: '$29.99',
        image: 'https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_IcePop_0000_1200x.png?v=1656076690',
        bgColor: 'linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 100%)',
        description: 'The taste of summer in every sip. Ice Pop captures the nostalgic flavor of your favorite frozen treats.',
        highlights: ['10% Coconut Water', '825mg Electrolytes', '250mg BCAAs', 'Antioxidants & B Vitamins']
    },
    'lemon-lime': {
        name: 'Lemon Lime',
        category: 'Hydration',
        price: '$29.99',
        image: 'https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_lemonlime_0000_1200x.png?v=1656076731',
        bgColor: 'linear-gradient(135deg, #DCFCE7 0%, #FFFFFF 100%)',
        description: 'Crisp, clean, and classic. Our Lemon Lime flavor provides a timeless refreshing experience.',
        highlights: ['10% Coconut Water', '825mg Electrolytes', '250mg BCAAs', 'Antioxidants & B Vitamins']
    },
    'meta-moon': {
        name: 'Meta Moon',
        category: 'Hydration',
        price: '$29.99',
        image: 'https://drinkprime.com/cdn/shop/products/Prime-Metamoon-ProductDetail-front_1200x.png?v=1662754165',
        bgColor: 'linear-gradient(135deg, #E6E6FA 0%, #FFFFFF 100%)',
        description: 'An out-of-this-world mystery flavor. Meta Moon is smooth, bold, and ready for your next mission.',
        highlights: ['10% Coconut Water', '825mg Electrolytes', '250mg BCAAs', 'Antioxidants & B Vitamins']
    },
    'strawberry-watermelon': {
        name: 'Strawberry Watermelon',
        category: 'Hydration',
        price: '$29.99',
        image: 'https://drinkprime.com/cdn/shop/products/Front_1200x.png?v=1672937745',
        bgColor: 'linear-gradient(135deg, #FFD1DC 0%, #FFFFFF 100%)',
        description: 'The ultimate fruit duo. Sweet strawberry meets juicy watermelon for a refreshingly balanced taste.',
        highlights: ['10% Coconut Water', '825mg Electrolytes', '250mg BCAAs', 'Antioxidants & B Vitamins']
    },
    'glowberry': {
        name: 'Glowberry',
        category: 'Hydration',
        price: '$29.99',
        image: 'https://drinkprime.com/cdn/shop/files/GB_Product_Page_-_Front_2000x.png?v=1722366864',
        bgColor: 'linear-gradient(135deg, #F0FFF0 0%, #FFFFFF 100%)',
        description: 'Electrifying flavor that stands out in a crowd. Glowberry is bold, bright, and uniquely Prime.',
        highlights: ['10% Coconut Water', '825mg Electrolytes', '250mg BCAAs', 'Antioxidants & B Vitamins']
    },
    'cherry-freeze': {
        name: 'Cherry Freeze',
        category: 'Hydration',
        price: '$29.99',
        image: 'https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_CherryFreeze_Fortis_00000_1200x.png?v=1745589968',
        bgColor: 'linear-gradient(135deg, #E0FFFF 0%, #FFFFFF 100%)',
        description: 'Cool down with the intense flavor of Cherry Freeze. Bold cherry taste with a refreshing icy finish.',
        highlights: ['10% Coconut Water', '825mg Electrolytes', '250mg BCAAs', 'Antioxidants & B Vitamins']
    },
    'energy-strawberry-watermelon': {
        name: 'Strawberry Watermelon',
        category: 'Energy',
        price: '$29.99',
        image: 'https://drinkprime.com/cdn/shop/products/Front_1200x.png?v=1672937745',
        bgColor: 'linear-gradient(135deg, #FFD1DC 0%, #FFFFFF 100%)',
        description: 'Clean energy for the modern hustle. 200mg Caffeine and 300mg Electrolytes with zero sugar.',
        highlights: ['200mg Caffeine', '300mg Electrolytes', 'Zero Sugar', 'Antioxidants & B Vitamins']
    },
    'energy-blue-raspberry': {
        name: 'Blue Raspberry',
        category: 'Energy',
        price: '$29.99',
        image: 'https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_bluerasberry_0000_2000x.png?v=1656076581',
        bgColor: 'linear-gradient(135deg, #E0F2FE 0%, #FFFFFF 100%)',
        description: 'Clean energy for the modern hustle. 200mg Caffeine and 300mg Electrolytes with zero sugar.',
        highlights: ['200mg Caffeine', '300mg Electrolytes', 'Zero Sugar', 'Antioxidants & B Vitamins']
    },
    'energy-tropical-punch': {
        name: 'Tropical Punch',
        category: 'Energy',
        price: '$29.99',
        image: 'https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_tropicalpunch_0000_1200x.png?v=1656076860',
        bgColor: 'linear-gradient(135deg, #FEE2E2 0%, #FFFFFF 100%)',
        description: 'Clean energy for the modern hustle. 200mg Caffeine and 300mg Electrolytes with zero sugar.',
        highlights: ['200mg Caffeine', '300mg Electrolytes', 'Zero Sugar', 'Antioxidants & B Vitamins']
    },
    'energy-lemon-lime': {
        name: 'Lemon Lime',
        category: 'Energy',
        price: '$29.99',
        image: 'https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_lemonlime_0000_1200x.png?v=1656076731',
        bgColor: 'linear-gradient(135deg, #DCFCE7 0%, #FFFFFF 100%)',
        description: 'Clean energy for the modern hustle. 200mg Caffeine and 300mg Electrolytes with zero sugar.',
        highlights: ['200mg Caffeine', '300mg Electrolytes', 'Zero Sugar', 'Antioxidants & B Vitamins']
    }
};

window.productsData = products;
