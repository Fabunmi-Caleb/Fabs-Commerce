// 3 categories, clothing, food and gadgets

const clothData = [
  {
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 97,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292198/Fabs-Commerce/zlqk6tsxzcxmuofjbk0z.jpg",
    color: "blue",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Mens Casual Premium Slim Fit T-Shirts",
    price: 85,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable and comfortable wearing...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/tkvdiqtjwnkbrfu8e8gw.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Mens Cotton Jacket",
    price: 73,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/xqxmzukoym9zoydpaaet.jpg",
    color: "brown",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Mens Casual Slim Fit",
    price: 62,
    description:
      "The color could be slightly different between on the screen and in practice...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/bchgdkfmgrcdsmviaisl.jpg",
    color: "blue",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 59,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/x50ixtfhvrjxtpuocxhk.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Solid Gold Petite Micropave",
    price: 44,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292198/Fabs-Commerce/w4t7buznpmzdqszsxqsm.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Silver Plated Princess",
    price: 32,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/wjt9zb6g9yi8xzggrgpl.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 1 },
  },
  {
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 23,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/iyasif8p6gju260jipzk.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 12,
    description:
      "Note: The Jackets is US standard size, Please choose size as your usual wear Material...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292200/Fabs-Commerce/i4ysp78oa5qrmuhyg2uk.jpg",
    color: "purple",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 5,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER)...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292198/Fabs-Commerce/ctdy6occoqafptoimwkx.jpg",
    color: "black",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 92,
    description:
      "Lightweight perfect for trip or casual wear---Long sleeve with hooded...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/lthaiwsewsnrwgtymbrm.jpg",
    color: "blue",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 81,
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/qn4an8zlxmhh6akof7uf.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Opna Women's Short Sleeve Moisture",
    price: 77,
    description: "100% Polyester, Machine wash...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/dr5cwatttuhwoekjkky9.jpg",
    color: "red",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 65,
    description: "95% Cotton, 5% Spandex, Features: Casual, Short Sleeve...",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/oarvbgimiy9ubums6di2.jpg",
    color: "purple",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Stylish Winter Coat",
    price: 90,
    description: "A warm and cozy winter coat perfect for the cold season.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801225/Fabs-Commerce/x0xuyfpjb4xat90pf7pa.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Elegant Wedding Gown",
    price: 85,
    description: "An elegant gown for your special evening occasions.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/rekvb7ohgjtjfeafpt5o.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Trendy Denim Jacket",
    price: 78,
    description: "A stylish denim jacket with a comfortable fit.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/q1vqrhvozz29owsakfhe.webp",
    color: "blue",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Casual Hoodie",
    price: 72,
    description:
      "Perfect for everyday wear, this hoodie is lightweight and soft.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/otrljdlz2derwodt7uhr.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Floral Summer Dress",
    price: 65,
    description: "Light and breezy dress with a charming floral print.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/x5nieuwtk0iwwuwx9pec.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Modern Business Suit",
    price: 55,
    description: "Tailored business suit for a sharp and professional look.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/yevgvbvcdsrjduefwrg2.jpg",
    color: "black",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Premium Red Cotton Shirt",
    price: 45,
    description: "A classic cotton shirt for all-day comfort.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/x5nieuwtk0iwwuwx9pec.jpg",
    color: "red",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "High-Quality Leather Jacket",
    price: 35,
    description: "Premium leather jacket with a stylish design.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/cd40yawql3vcuv7tqwv6.jpg",
    color: "black",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Lightweight Raincoat",
    price: 22,
    description: "Stay dry with this lightweight and packable raincoat.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/lczeconplyje3etluh3p.jpg",
    color: "yellow",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Woolen Scarf",
    price: 12,
    description: "A cozy woolen scarf to keep you warm in the winter.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/sdzxn2tokq4to1hcvpvt.jpg",
    color: "blue",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Classic Blazer",
    price: 95,
    description:
      "A versatile blazer for both formal and semi-casual occasions.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/ffnvc8i3g38imktugusl.jpg",
    color: "grey",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Bohemian Maxi Dress",
    price: 87,
    description: "A free-flowing maxi dress with bohemian vibes.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/q6hedspglyx08d4qt1me.jpg",
    color: "green",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Puffer Jacket",
    price: 76,
    description: "Stay cozy and stylish with this puffer jacket.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801225/Fabs-Commerce/njcxvllikv1q6gpqtnzi.jpg",
    color: "yellow",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Sophisticated White Peacoat",
    price: 66,
    description: "A timeless peacoat design suitable for fall and winter.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/fsop7b5vewi4mwitc6gt.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Sporty Tracksuit",
    price: 53,
    description: "Comfortable and stylish tracksuit for active lifestyles.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/jnaq4mkfbdparpxgtz8f.jpg",
    color: "green",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Contemporary Sneakers",
    price: 41,
    description: "Modern sneakers that combine comfort with fashion.",
    category: "673c62eb2d754368614ef784",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/ogrqrjz5vhiahajx4q23.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
]; //14 to 30 so we need 16

const gadgetData = [
  {
    name: "WD 2TB Portable External Hard Drive",
    price: 44,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/tdvmpad0trraunj9dnk6.jpg",
    color: "black",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 32,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/ir3epzc9tmfyw7o9emcn.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Silicon Power 256GB SSD",
    price: 20,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/bmd9aufvcjj6qsdxk97c.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 10,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/qcozahhc75ok39xyvtj1.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080)",
    price: 9,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/le5j8zx4dg8khdryjcxi.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Samsung 49-Inch 144Hz Curved Gaming Monitor",
    price: 93,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/irtzvelb5mv9hf869cki.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Apple AirPods Pro (2nd Generation)",
    price: 81,
    description:
      "Active Noise Cancellation, Transparency mode, and spatial audio with dynamic head tracking for an immersive sound experience.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/gbcsop3hvooebstc8sbh.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Samsung Galaxy Watch 6",
    price: 76,
    description:
      "Fitness tracking, sleep monitoring, and Bluetooth connectivity in a sleek, durable design.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/r9unpmbxztgfkbqqkag7.jpg",
    color: "black",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Amazon Echo Dot (5th Generation)",
    price: 61,
    description:
      "Smart speaker with Alexa, offering rich sound, voice control, and smart home integration.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/tnjpqcw1qnw5rcfd3cxd.jpg",
    color: "grey",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Anker PowerCore 20000mAh Portable Charger",
    price: 50,
    description:
      "Ultra-high capacity power bank with fast charging for smartphones, tablets, and other USB devices.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/kezbyud6jp6mztr6u0hy.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 1 },
  },
  {
    name: "DJI Mini 3 Pro Drone",
    price: 47,
    description:
      "Compact and lightweight drone with 4K HDR video, obstacle sensing, and long flight time.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/vqeoyikmgsspnaulhvkj.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Logitech MX Master 3S Wireless Mouse",
    price: 33,
    description:
      "Advanced ergonomic mouse with ultra-fast scrolling and customizable buttons for productivity.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/mdk1cc3fitfndvudelfo.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Kindle Paperwhite (11th Generation)",
    price: 29,
    description:
      "Waterproof e-reader with a 6.8-inch display, adjustable warm light, and long battery life.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/yuzmdl8oe27sddzzia3s.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },

  //new Gadget Data

  {
    name: "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
    price: 21,
    description:
      "Industry-leading noise cancellation with exceptional sound quality and 30-hour battery life.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/n9akfez1ygetc19rosof.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Fitbit Charge 6 Fitness Tracker",
    price: 15,
    description:
      "Tracks heart rate, sleep, and workouts with built-in GPS and water resistance.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/r0w6ovc5yoktztawqa4a.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Canon EOS R50 Mirrorless Camera",
    price: 92,
    description:
      "Compact camera with 24.1 MP resolution, 4K video, and advanced autofocus.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/rknyqy2e70ydh7uad9ob.jpg",
    color: "black",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 1 },
  },
  {
    name: "GoPro HERO 12 Action Camera",
    price: 81,
    description:
      "Waterproof action camera with 5.3K video, image stabilization, and voice control.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/tmcem1fhidlmdlthzwsn.jpg",
    color: "black",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Razer BlackWidow V4 Pro Gaming Keyboard",
    price: 77,
    description:
      "Mechanical gaming keyboard with customizable RGB lighting and macro keys.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/fpw5qryp6iieqsvzwsje.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Dyson Supersonic Hair Dryer",
    price: 63,
    description:
      "Powerful hair dryer with intelligent heat control and multiple styling attachments.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/mweqhvlzmena6qfmbcke.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Beats Fit Pro True Wireless Headphones",
    price: 51,
    description:
      "True wireless headphones with spatial audio, sweat resistance, and noise cancellation.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/musk3v5bpi2k1ckjiffm.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 1 },
  },
  {
    name: "Tile Mate Bluetooth Tracker (2024 Edition)",
    price: 37,
    description:
      "Find your lost items with this compact Bluetooth tracker featuring a 250ft range.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/sxgzk4sn68o8vmkcllxn.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Corsair Virtuoso RGB Wireless Gaming Headset",
    price: 29,
    description:
      "Premium wireless headset with 7.1 surround sound and a broadcast-grade microphone.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/wazanyvallqkfub8uyny.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Ring Video Doorbell 4",
    price: 20,
    description:
      "Advanced video doorbell with improved motion detection and color pre-roll video.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/ddafxxqgokzykmeyqptu.webp",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Sony PS5 DualSense Wireless Controller",
    price: 15,
    description:
      "Next-gen wireless controller with haptic feedback and adaptive triggers.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/gj5pfn0nytoonwm09owk.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Microsoft Surface Pro 9",
    price: 90,
    description:
      "2-in-1 detachable tablet and laptop with Windows 11 and 13-inch touchscreen.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/kutjyta5br0bz1z1xp9e.jpg",
    color: "grey",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Bose SoundLink Revolve+ II Speaker",
    price: 86,
    description:
      "Portable Bluetooth speaker with 360-degree sound and water-resistant design.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/bcqfdko77g3itgrakbxx.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 1 },
  },
  {
    name: "Generic Smartwatch",
    price: 71,
    description:
      "Advanced smartwatch with GPS, heart rate monitoring, and workout tracking.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/chkppqmsa5otho9v5z7p.jpg",
    color: "black",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Nest Learning Thermostat (4th Gen)",
    price: 62,
    description:
      "Smart thermostat with automatic scheduling, remote control, and energy savings.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/kv6aas9rsnq4mm0ty6mz.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Streaming Stick 4K+",
    price: 55,
    description:
      "Portable streaming device with 4K HDR, Dolby Vision, and voice remote.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/vq4nyifvagrbtvznic0w.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "HP Envy Photo 7855 Printer",
    price: 43,
    description:
      "All-in-one photo printer with wireless printing, scanning, and copying.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/q6bagkwvqldmtzfoeif1.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Elgato Stream Deck MK.2",
    price: 38,
    description:
      "Customizable control pad for content creators, streamers, and productivity.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/jgae9juexwtdo3wmgocv.jpg",
    color: "black",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Philips Hue White & Color Ambiance Starter Kit",
    price: 30,
    description:
      "Smart lighting kit with three bulbs, a Hue bridge, and app control.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/xs7lpekmo7nksbfjwlqw.jpg",
    color: "white",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 1 },
  },
  {
    name: "HyperX QuadCast S RGB Microphone",
    price: 19,
    description:
      "USB microphone with customizable RGB lighting and anti-vibration shock mount.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/owtuhvri9psdihvvnqdj.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "TP-Link Deco AXE5400 Tri-Band Mesh Wi-Fi System",
    price: 12,
    description:
      "Advanced mesh Wi-Fi system with tri-band connectivity and wide coverage.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/ybikzx7c1hbjxzf0uyig.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Dell UltraBook Laptop",
    price: 88,
    description:
      "Compact and powerful 13.4-inch laptop with Intel Core i3 processor, 18B RAM, 256GB SSD, and a stunning Edge display for professionals on the go.",
    category: "673c63b112ec42c8fadcc07a",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/zns4nosrkb35xslqfrry.jpg",
    color: "grey",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
]; //13 to 35 so we need 22

const foodData = [
  {
    name: "Ferrero Rocher Chocolate T3 37.5g",
    price: 12,
    description:
      "A luxurious treat made of whole hazelnuts encased in smooth chocolate and a crispy wafer shell.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/n6ms35c9qouvcccyje3b.jpg",
    color: "brown",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Oreo Double Stuff Sandwich Cookies 303g",
    price: 3,
    description:
      "Classic Oreo cookies with double the creamy filling. Perfect for snacking or sharing.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/e5sxxdsddwfvh8llmy0e.webp",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Barilla Spaghetti Pasta 500g",
    price: 90,
    description:
      "Premium Italian spaghetti pasta made from the finest durum wheat. Cooks to al dente perfection in minutes.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/ymfgfqhjmdgyncoqepcr.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Nutella Hazelnut Spread with Cocoa 750g",
    price: 88,
    description:
      "Creamy hazelnut spread made with skim milk and cocoa. Perfect for breakfast or desserts.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/esrej4rwplhqnczz5jxj.jpg",
    color: "brown",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Lays Classic Potato Chips 200g",
    price: 74,
    description:
      "Crispy and perfectly salted potato chips. A timeless snack favorite for any occasion.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/uh2xttfw8wbp9etljhta.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Heinz Tomato Ketchup 1L",
    price: 63,
    description:
      "Thick and rich tomato ketchup made with sun-ripened tomatoes. America's favorite condiment.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/k1ybc05rjooaetmqhcfn.jpg",
    color: "red",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Skippy Creamy Peanut Butter 462g",
    price: 52,
    description:
      "Smooth and creamy peanut butter made with high-quality roasted peanuts.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/ylfouwdlkhmvw5sedzxo.webp",
    color: "brown",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Quaker Oats Old Fashioned Oatmeal 1kg",
    price: 41,
    description:
      "100% whole grain oats for a heart-healthy and nutritious breakfast option.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/mzu52kn9a5edknxay0th.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 1 },
  },
  {
    name: "Coca-Cola Soft Drink Can 330ml",
    price: 37,
    description:
      "Refreshing and crisp Coca-Cola in a convenient can. Perfect for any occasion.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/a3mlbbacyfvqvuqmneba.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Toblerone Swiss Milk Chocolate 100g",
    price: 22,
    description:
      "Iconic triangular Swiss chocolate with honey and almond nougat.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/atdnnwohx0kxehlajsin.jpg",
    color: "black",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 1 },
  },

  //new Food Data
  {
    name: "Ritz Crackers 200g",
    price: 14,
    description:
      "Buttery, flaky crackers perfect for snacking or pairing with cheese.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/os3okvplunxtkfxdszfj.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 5 },
  },
  {
    name: "Pringles Sour Cream & Onion 158g",
    price: 19,
    description:
      "Crispy potato chips with a tangy sour cream and onion flavor.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802468/Fabs-Commerce/cklomnhhqpcylyz1vowf.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 1 },
  },
  {
    name: "Betty Crocker Chocolate Fudge Brownie Mix 500g",
    price: 27,
    description:
      "Easy-to-make rich chocolate fudge brownie mix for a delightful treat.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802466/Fabs-Commerce/edw9a6qujicrf6ygiobf.jpg",
    color: "brown",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Kellogg’s Corn Flakes 500g",
    price: 18,
    description:
      "Classic golden flakes made from corn, perfect for a wholesome breakfast.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802466/Fabs-Commerce/jtyv89rpoawm1c2xlkjv.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Hershey's Milk Chocolate Bar 43g",
    price: 15,
    description: "Smooth and creamy milk chocolate in a classic bar format.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/zzr4bajmlbdela4azrrn.jpg",
    color: "brown",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Twix Caramel and Biscuit Chocolate Bar 50g",
    price: 17,
    description:
      "Crunchy biscuit topped with caramel and covered in milk chocolate.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/thaw1l0ruekkgmh4drom.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Traditional Italian Pasta Sauce 680g",
    price: 35,
    description:
      "Rich and flavorful pasta sauce made from vine-ripened tomatoes and herbs.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/jsghkxulitwxgxbfkyqr.jpg",
    color: "red",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Doritos Wasabi Nacho Cheese Tortilla Chips 150g",
    price: 20,
    description:
      "Bold and cheesy tortilla chips for a crunchy snack experience.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/s32wszonqbxgzz7dclnp.jpg",
    color: "green",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Twinings English Breakfast Tea Bags 100g",
    price: 25,
    description:
      "Rich and smooth black tea blend, perfect for a classic breakfast experience.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/genjfhkznkuu2xpswl1u.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Pure Premium Orange Juice 1L",
    price: 38,
    description: "100% pure orange juice with no added sugar or preservatives.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/kv1viudk5r5bkl67xrzs.jpg",
    color: "orange",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "KitKat Chocolate Wafer",
    price: 16,
    description: "Crispy wafer layers covered in smooth milk chocolate.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/ymzh9ugbsayegqwps28e.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Maggi Chicken Noodles 70g",
    price: 10,
    description: "Instant noodles with rich chicken flavor, ready in minutes.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/xj3qdqg1swl1sf3y0chg.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Milk Chocolate Bar 100g",
    price: 21,
    description: "Classic milk chocolate bar with a smooth and creamy taste.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/qke1sd2nx3la6ttwqcib.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Nescafe Classic Instant Coffee 200g",
    price: 49,
    description:
      "Rich and aromatic instant coffee made from high-quality beans.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/jyquogmjsb18wxmnvycw.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Pepsi Soft Drink",
    price: 28,
    description:
      "Refreshing cola with a bold and crisp taste, perfect for sharing.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/epadgzoiajqcvuomvueh.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Chocolate Malt Drink",
    price: 25,
    description:
      "Energy-packed chocolate malt drink mix for a nutritious boost.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/fhkgba4jyewekoehxno3.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Lipton Yellow Label Tea Bags",
    price: 14,
    description: "High-quality tea bags for a refreshing and energizing brew.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/efmyb66i5wt0nzmacs5l.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Cream Cheese Spread",
    price: 36,
    description:
      "Smooth and creamy cheese spread, perfect for bagels and recipes.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/weua7oche3ob5ovyigrz.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Cheetos Crunchy Cheese Snacks ",
    price: 20,
    description:
      "Crunchy cheese-flavored snacks for a bold and fun snack experience.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/rmfqazde34w9agqnejib.webp",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Strawberry Jam",
    price: 18,
    description: "Delicious strawberry jam made with sun-ripened strawberries.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/ztxtun5slmm4xxxcd8fi.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 4 },
  },
  {
    name: "Cranberry Juice 50cl",
    price: 30,
    description:
      "100% cranberry juice with a bold and tart flavor, great for hydration.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/oyycinwoksyw2rapagix.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Almond Nuts 150g",
    price: 45,
    description: "Roasted and salted almonds for a crunchy and healthy snack.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/smvccfpe6yh2xiwvtnfx.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 2 },
  },
  {
    name: "Cheddar Crackers",
    price: 18,
    description: "Fun fish-shaped crackers with a rich cheddar cheese flavor.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/qphaz4buw4r9ditmdnwy.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Folgers Classic Roast Ground Coffee 320g",
    price: 43,
    description:
      "Medium roast ground coffee for a smooth and rich morning brew.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/oa2blk0mgq0utvqezxjb.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 3 },
  },
  {
    name: "Haribo Goldbears Gummi Candy 175g",
    price: 9,
    description:
      "Classic gummy bears in a variety of fruity flavors, perfect for a sweet treat any time.",
    category: "67409cc0df46753e30e02de1",
    images:
      "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/kqxy5l2faxmkwuo9z2rz.jpg",
    ratings: { userId: "67126a9f33dfac2efeaabb55", rating: 1 },
  },
]; //10 to 35 so we need 25

//this contains the imageUrls for all the data
const imageUrls = [
  //cloth images
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",

  //new cloth Images
  "https://plus.unsplash.com/premium_photo-1674719144570-0728faf14f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R5bGlzaCUyMHdpbnRlciUyMGNvYXR8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1671576642314-11a11284ea36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGVsZWdhbnQlMjBldmVuaW5nJTIwZ293bnxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/475053436/photo/denim-jacket.webp?a=1&b=1&s=612x612&w=0&k=20&c=ApedWQMFt5aIEmmm4ymBMt2igQLDn9g2hHsBa-d-qik=",
  "https://media.istockphoto.com/id/1124815039/photo/white-male-hoodie-sweatshirt-long-sleeve-with-clipping-path-mens-hoody-with-hood-for-your.jpg?s=612x612&w=0&k=20&c=kbLeiAxIz71aokwQpy-2urLOQMoL7L73_UScxv_wpAY=",
  "https://media.istockphoto.com/id/1243116710/photo/fashionable-dress-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=sFTVvuC8ZZOo6X73o4mRDn5l6DesLJf8HH-IuT75jnQ=",
  "https://cdn.pixabay.com/photo/2017/08/28/02/58/suit-2688311_640.jpg",
  "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_640.jpg",
  "https://media.istockphoto.com/id/1711821722/photo/black-leather-biker-jacket-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=EiW08FnQ8p5XzDLnfhoNLAzBPL_woV3TSAcKE8bJiYU=",
  "https://media.istockphoto.com/id/932392632/photo/yellow-rain-coat-isolated.jpg?s=612x612&w=0&k=20&c=RGC6lO1O9zClwlYG287v6lh2ZMqeOz_JCmp9TiWTqjE=",
  "https://media.istockphoto.com/id/924205166/photo/scarf-knitted-handwork-with-fringe-on-white-colorful-woolen-scarf.jpg?s=612x612&w=0&k=20&c=i26cFTwflJZGX7nsi-InaWIfmYKg9X3-6NYr9vHXA1c=",
  "https://media.istockphoto.com/id/1278812464/photo/gray-blazer-from-suit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=IJR5kgXzTIJ-4K_0FFm_oLAAd3WYfL8uzhSHqBIvXbE=",
  "https://media.istockphoto.com/id/2180698547/photo/green-dress-isolated.jpg?s=612x612&w=0&k=20&c=cExQRzyewGe762-L53pZHEXQDOWjOyGFt0t90jYQYN8=",
  "https://media.istockphoto.com/id/1319571126/photo/mens-warm-sport-puffer-jacket-isolated-over-white-background.jpg?s=612x612&w=0&k=20&c=l06JttooaCWedDP0IoB34p84JmzksopHFlE_-t6WTkI=",
  "https://media.istockphoto.com/id/1400108051/photo/blank-white-wool-coat-mockup-front-and-back-view.jpg?s=612x612&w=0&k=20&c=-DdILU3t-x2SUXx9fAdGfQWf0f935L1t9jx-PZ_nOeU=",
  "https://media.istockphoto.com/id/1785541359/photo/a-green-sports-hoodie-and-pants-hang-on-a-wooden-bamboo-hanger.jpg?s=612x612&w=0&k=20&c=1GY7EhKJZl4eqJX5LhUhyQAioHwRzeTgirV4of6OmpY=",
  "https://media.istockphoto.com/id/1417090656/photo/white-leather-sneaker.jpg?s=612x612&w=0&k=20&c=mF0ZLSz0DKnuVgR1KEPhPnGV4xTvWB2R_zsWJIKoko0=",

  //gadget Images
  "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
  "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFpclBvZHMlMjBQcm8lMjAoMm5kJTIwR2VuZXJhdGlvbil8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1691439378545-dd6b35ff2f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbXN1bmclMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1621274147744-cfb5694bb233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW1hem9uJTIwRWNobyUyMERvdCUyMCg1dGglMjBHZW5lcmF0aW9uKXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1596877445530-ad74838754c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QW5rZXIlMjBDaGFyZ2VyfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8REpJJTIwTWluaSUyMDMlMjBQcm8lMjBEcm9uZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9naXRlY2glMjBXaXJlbGVzcyUyME1vdXNlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1622122892817-45b38188db7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHzZWFyY2h8Mjd8fEtpbmRsZSUyMFBhcGVyd2hpdGUlMjAoMTF0aCUyMEdlbmVyYXRpb24pfGVufDB8fDB8fHww",

  //new Gadget Images
  "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHNvbnklMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/1345812741/photo/white-fitness-tracker.jpg?s=612x612&w=0&k=20&c=JrVEAtnY50pnVtUN_gG4hEExZlOP606kQ7XWTEItzkM=",
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2Fub24lMjBDYW1lcmF8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1310250081/photo/new-4k-action-camera-on-a-suction-mount-in-black-color-isolated-white-background.jpg?s=612x612&w=0&k=20&c=SB8mVrlVLYTllQ5Ij7P3TX3eqA2Pm6P1VtZ-NHq2ah0=",
  "https://media.istockphoto.com/id/1405686667/photo/gaming-keyboard-with-rgb-light-on-white.jpg?s=612x612&w=0&k=20&c=lkFhv2Kva-kXLpqqvsVXsufV8yYURtWHJIS5kiCGIm4=",
  "https://media.istockphoto.com/id/1643940443/photo/fashionable-high-end-hair-dryer.jpg?s=612x612&w=0&k=20&c=4xefDnExkERoUXkBwjL16cw7obp0zD4ycKmf9GaVUoY=",
  "https://images.unsplash.com/photo-1689357639029-f9397ac24b6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fEJlYXRzJTIwV2lyZWxlc3MlMjBFYXJidWRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1619948543232-c515a389c22d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFwcGxlJTIwYWlyJTIwdGFnfGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/964985338/photo/in-selective-focus-of-pro-dj-controller-the-dj-console-deejay-mixing-desk-at-music-party-in.jpg?s=612x612&w=0&k=20&c=sUPMLJbD-AYbLwpRP4TQ64s2nyV8WYCGaVsF1skiVq4=",
  "https://media.istockphoto.com/id/2155397552/photo/security-camera-and-intercom-on-a-wooden-fence.webp?a=1&b=1&s=612x612&w=0&k=20&c=pHoOtwP8qyocoSHls8dl_OMnS30MN1Nt84lYUE9hJIg=",
  "https://images.unsplash.com/photo-1670535787435-63a39a5b8d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBTNSUyMENvbnRyb2xsZXJ8ZW58MHx8MHx8fDA%3D",
  "https://cdn.pixabay.com/photo/2020/03/19/15/33/laptop-4947806_640.jpg",
  "https://media.istockphoto.com/id/1183157121/photo/round-a-music-column-on-a-white-background.jpg?s=612x612&w=0&k=20&c=T3yQwiSzVGnHiM995ctUWzmeQ_QxA6jMaP2UA-QmlFc=",
  "https://cdn.pixabay.com/photo/2023/07/29/16/39/smart-8157289_640.jpg",
  "https://media.istockphoto.com/id/1482570581/photo/regulating-heating-temperature-with-a-modern-smart-thermostat.jpg?s=612x612&w=0&k=20&c=lwZXHO9xIcjALT9G3UoKzIr5cp2MZgfuK2NCEGHgBw4=",
  "https://media.istockphoto.com/id/1132796161/photo/receiver-tv-remote-control-white-background.jpg?s=612x612&w=0&k=20&c=U8R09AcEQsd78WpK-dN2rm2BXyIaRe4hwW9ew_9J-JA=",
  "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEhQJTIwUHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1681511753302-a604012bab8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWxnYXRvJTIwU3RyZWFtJTIwRGVjayUyME1LLjJ8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1413427901/photo/diode-light-bulbs-on-a-white-background.jpg?s=612x612&w=0&k=20&c=XS0pRlN9kPISslVqK4jm_uJyll-a3pVxjqo5Li0lkZU=",
  "https://images.unsplash.com/photo-1652071148620-99be24e731a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNiJTIwbWljcm9waG9uZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1681383064412-171e5bee5f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFdpRmklMjBSb3V0ZXJ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fERlbGwlMjBMYXB0b3B8ZW58MHx8MHx8fDA%3D",

  //food images
  "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZlcnJlcm8lMjBSb2NoZXIlMjBDaG9jb2xhdGV8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1497043726/photo/close-up-of-sandwich-chocolade-cookies-with-milky-cream-on-white-isolated-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=vZks6Wxdz8TI0tHd8XauhCPVciHs3-ikwimsfyIQoWk=",
  "https://images.unsplash.com/photo-1718043934012-380f4e72a1cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFyaWxsYSUyMFNwYWdoZXR0aSUyMFBhc3RhfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1543254077-8bd7c22afbf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE51dGVsbGElMjBIYXplbG51dCUyMFNwcmVhZHxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1672753747124-2bd4da9931fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fExheXMlMjBDbGFzc2ljJTIwUG90YXRvJTIwQ2hpcHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1528750596806-ff12e21cda04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGVpbnolMjBUb21hdG8lMjBLZXRjaHVwfGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/587940634/photo/homemade-sweet-cookie-butter.webp?a=1&b=1&s=612x612&w=0&k=20&c=9U6yTxh6PnzQAhu6gZkgAenD0XhqJiE-m7BqkHrwvk0=",
  "https://images.unsplash.com/photo-1510776478953-fa4dc5de04ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UXVha2VyJTIwT2F0cyUyME9hdG1lYWx8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1586197362380-8e4412ebc083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29jYSUyMENvbGElMjBTb2Z0JTIwRHJpbmslMjBDYW58ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1598823248334-90d0b9970773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9ibGVyb25lJTIwY2hvY29sYXRlfGVufDB8fDB8fHww",

  //new Food Images
  "https://media.istockphoto.com/id/1972111475/photo/sweet-and-salty-cookies-on-white-bowl.jpg?s=612x612&w=0&k=20&c=sF352-boWUjgI33x8O7BcbJxR4eEGxMzkGCQc4lDGdY=",
  "https://images.unsplash.com/photo-1702097034631-4283d8979de6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFByaW5nbVzfGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/1728046143/photo/chocolate-brownie-portion-with-chocolate-syrup-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=F4KvhFQdx_fFMuYG1GZUawWN16h2qpju4mp8JbynNpM=",
  "https://images.unsplash.com/photo-1616662707621-9c00d8fb7d5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2VsbG9nZyVFMiU4MCU5OXMlMjBDb3JuJTIwRmxha2VzfGVufDB8fDB8fHww",
  "https://cdn.pixabay.com/photo/2021/07/25/22/46/hersheys-6492925_640.jpg",
  "https://cdn.pixabay.com/photo/2021/07/25/22/46/hersheys-6492925_640.jpg",
  "https://media.istockphoto.com/id/496733936/photo/chutney-stored-in-jars-as-winter-food.jpg?s=612x612&w=0&k=20&c=k9D44u-2s5kBwbZ2Qy8Pr_ct7DoNk0i0QgfzBQY5Ej8=",
  "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9yaXRvc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1730890992281-b8b30e91434e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHdpbmluZ3N8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/855317618/photo/fresh-natural-orange-juice-close-up-shoot.jpg?s=612x612&w=0&k=20&c=qqqH4_5rAnUkl49fkuUxvy0vWxbemvNoYtFpu1y03uQ=",
  "https://images.unsplash.com/flagged/photo-1567708044252-66de978ef021?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNob2NvbGF0ZSUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/174814617/photo/noodles-and-flavor-packet.jpg?s=612x612&w=0&k=20&c=gsG9p9rgyWVvuULdL5xboj1Y7LCgDLjbZqqw_vCUhTs=",
  "https://cdn.pixabay.com/photo/2017/04/04/16/55/chocolate-2201991_1280.jpg",
  "https://images.unsplash.com/photo-1632054010678-7f2e5a1a7355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmVzY2FmZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://cdn.pixabay.com/photo/2020/05/10/05/14/pepsi-5152332_1280.jpg",
  "https://media.istockphoto.com/id/503259445/photo/chocolate-milk-shake-smoothie.jpg?s=612x612&w=0&k=20&c=TiOr6gn_1RkUjmlmiWyCc4c2GPbHQA9zsfzh_kBGWiA=",
  "https://media.istockphoto.com/id/533196329/photo/tea-packaging.jpg?s=612x612&w=0&k=20&c=wcOtMZhaBpcADji9oFgBilVwXJJ0fCYB54e9qiSQNUw=",
  "https://media.istockphoto.com/id/177721417/photo/cream-cheese-isolated.jpg?s=612x612&w=0&k=20&c=tDNMZH2Qy5aPYmsWA-NBDxinoMMjgWsb18W51U0zr3g=",
  "https://media.istockphoto.com/id/175447215/photo/cheese-puff-snacks.webp?a=1&b=1&s=612x612&w=0&k=20&c=ymBhCsYfxkBM2bqo__x4JPAOpdJZT0ig-dwuQ0Ct-4Q=",
  "https://media.istockphoto.com/id/2148299146/photo/strawberry-jam-jar-mockup-with-blank-label.jpg?s=612x612&w=0&k=20&c=uDY24M_B4NKVlsj1m1h8JHMaoGBxIk7M0NYe0aK1cyQ=",
  "https://media.istockphoto.com/id/160434855/photo/tall-glass-of-cranberry-juice-with-a-straw.jpg?s=612x612&w=0&k=20&c=1vgH60xGJaMlA2yKnhWBchHJ-_1eSxDxZkeIS8SSjtA=",
  "https://media.istockphoto.com/id/1074143940/photo/almonds-scattered-on-the-table-selective-focus.jpg?s=612x612&w=0&k=20&c=W0xb8WkBy_gE2m0YQpTV52gWpajskC878B_dyN78V9A=",
  "https://media.istockphoto.com/id/1471458258/photo/orange-cheddar-flavored-soup-crackers-in-a-white-bowl.jpg?s=612x612&w=0&k=20&c=bRfQDtDvctsXlLENPr09CYwz69o_A-gsT5fywizFf24=",
  "https://media.istockphoto.com/id/547239294/photo/italian-coffee-with-ground-coffee-and-a-cup.jpg?s=612x612&w=0&k=20&c=oeAzPxDE5CpUotGIZXBhebKlCQMgY5B2TKi1490F4LI=",
  "https://media.istockphoto.com/id/157380073/photo/assortment-of-colorful-fruity-gummy-bears-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=i5t1cc0WVReAOUlORIvxOiLasYw9jjE_Gw3nzqlmohQ=",
];

//These ones have been uploaded to cloudinary
const clothImages = [
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292198/Fabs-Commerce/zlqk6tsxzcxmuofjbk0z.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/tkvdiqtjwnkbrfu8e8gw.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/xqxmzukoym9zoydpaaet.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/bchgdkfmgrcdsmviaisl.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/x50ixtfhvrjxtpuocxhk.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292198/Fabs-Commerce/w4t7buznpmzdqszsxqsm.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/wjt9zb6g9yi8xzggrgpl.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/iyasif8p6gju260jipzk.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292200/Fabs-Commerce/i4ysp78oa5qrmuhyg2uk.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292198/Fabs-Commerce/ctdy6occoqafptoimwkx.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/lthaiwsewsnrwgtymbrm.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/qn4an8zlxmhh6akof7uf.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/dr5cwatttuhwoekjkky9.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/oarvbgimiy9ubums6di2.jpg",

  //new Cloth Images
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801225/Fabs-Commerce/x0xuyfpjb4xat90pf7pa.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/rekvb7ohgjtjfeafpt5o.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/q1vqrhvozz29owsakfhe.webp",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/otrljdlz2derwodt7uhr.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/x5nieuwtk0iwwuwx9pec.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/yevgvbvcdsrjduefwrg2.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/yorf229dbvqwu3frzc0b.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/cd40yawql3vcuv7tqwv6.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/lczeconplyje3etluh3p.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/sdzxn2tokq4to1hcvpvt.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/ffnvc8i3g38imktugusl.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/q6hedspglyx08d4qt1me.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801225/Fabs-Commerce/njcxvllikv1q6gpqtnzi.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/fsop7b5vewi4mwitc6gt.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/jnaq4mkfbdparpxgtz8f.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732801224/Fabs-Commerce/ogrqrjz5vhiahajx4q23.jpg",
];

const gadgetImages = [
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/tdvmpad0trraunj9dnk6.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/ir3epzc9tmfyw7o9emcn.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/bmd9aufvcjj6qsdxk97c.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/qcozahhc75ok39xyvtj1.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292199/Fabs-Commerce/le5j8zx4dg8khdryjcxi.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/irtzvelb5mv9hf869cki.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/gbcsop3hvooebstc8sbh.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/r9unpmbxztgfkbqqkag7.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/tnjpqcw1qnw5rcfd3cxd.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/kezbyud6jp6mztr6u0hy.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/vqeoyikmgsspnaulhvkj.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/mdk1cc3fitfndvudelfo.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/yuzmdl8oe27sddzzia3s.jpg",

  //new Gadget Images
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/n9akfez1ygetc19rosof.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/r0w6ovc5yoktztawqa4a.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/rknyqy2e70ydh7uad9ob.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/tmcem1fhidlmdlthzwsn.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/fpw5qryp6iieqsvzwsje.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/mweqhvlzmena6qfmbcke.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/musk3v5bpi2k1ckjiffm.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/sxgzk4sn68o8vmkcllxn.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/wazanyvallqkfub8uyny.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/ddafxxqgokzykmeyqptu.webp",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/gj5pfn0nytoonwm09owk.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/kutjyta5br0bz1z1xp9e.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/bcqfdko77g3itgrakbxx.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/chkppqmsa5otho9v5z7p.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/kv6aas9rsnq4mm0ty6mz.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/vq4nyifvagrbtvznic0w.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/q6bagkwvqldmtzfoeif1.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/jgae9juexwtdo3wmgocv.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/xs7lpekmo7nksbfjwlqw.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/owtuhvri9psdihvvnqdj.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/ybikzx7c1hbjxzf0uyig.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802353/Fabs-Commerce/zns4nosrkb35xslqfrry.jpg",
];

const foodImages = [
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/n6ms35c9qouvcccyje3b.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/e5sxxdsddwfvh8llmy0e.webp",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/ymfgfqhjmdgyncoqepcr.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/esrej4rwplhqnczz5jxj.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/uh2xttfw8wbp9etljhta.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/k1ybc05rjooaetmqhcfn.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/ylfouwdlkhmvw5sedzxo.webp",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/mzu52kn9a5edknxay0th.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292197/Fabs-Commerce/a3mlbbacyfvqvuqmneba.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732292196/Fabs-Commerce/atdnnwohx0kxehlajsin.jpg",

  //new Food Images
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/os3okvplunxtkfxdszfj.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802468/Fabs-Commerce/cklomnhhqpcylyz1vowf.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802466/Fabs-Commerce/edw9a6qujicrf6ygiobf.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802466/Fabs-Commerce/jtyv89rpoawm1c2xlkjv.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/zzr4bajmlbdela4azrrn.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/thaw1l0ruekkgmh4drom.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/jsghkxulitwxgxbfkyqr.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/s32wszonqbxgzz7dclnp.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/genjfhkznkuu2xpswl1u.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/kv1viudk5r5bkl67xrzs.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/ymzh9ugbsayegqwps28e.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/xj3qdqg1swl1sf3y0chg.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/qke1sd2nx3la6ttwqcib.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/jyquogmjsb18wxmnvycw.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/epadgzoiajqcvuomvueh.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/fhkgba4jyewekoehxno3.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/efmyb66i5wt0nzmacs5l.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/weua7oche3ob5ovyigrz.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/rmfqazde34w9agqnejib.webp",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/ztxtun5slmm4xxxcd8fi.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/oyycinwoksyw2rapagix.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/smvccfpe6yh2xiwvtnfx.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/qphaz4buw4r9ditmdnwy.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/oa2blk0mgq0utvqezxjb.jpg",
  "https://res.cloudinary.com/dhhw6vpfh/image/upload/v1732802467/Fabs-Commerce/kqxy5l2faxmkwuo9z2rz.jpg",
];

const allSeedData = [...clothData, ...gadgetData, ...foodData];
console.log(allSeedData.length);

export { imageUrls, allSeedData };

// const moreClothData = [
//   {
//     name: "Stylish Winter Coat",
//     price: 90,
//     description: "A warm and cozy winter coat perfect for the cold season.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://plus.unsplash.com/premium_photo-1674719144570-0728faf14f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R5bGlzaCUyMHdpbnRlciUyMGNvYXR8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     name: "Elegant Wedding gown",
//     price: 85,
//     description: "An elegant gown for your special evening occasions.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://plus.unsplash.com/premium_photo-1671576642314-11a11284ea36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGVsZWdhbnQlMjBldmVuaW5nJTIwZ293bnxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     name: "Trendy Denim Jacket",
//     price: 78,
//     description: "A stylish denim jacket with a comfortable fit.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://media.istockphoto.com/id/475053436/photo/denim-jacket.webp?a=1&b=1&s=612x612&w=0&k=20&c=ApedWQMFt5aIEmmm4ymBMt2igQLDn9g2hHsBa-d-qik=",
//     color: "blue",
//   },
//   {
//     name: "Casual Hoodie",
//     price: 72,
//     description:
//       "Perfect for everyday wear, this hoodie is lightweight and soft.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://media.istockphoto.com/id/1124815039/photo/white-male-hoodie-sweatshirt-long-sleeve-with-clipping-path-mens-hoody-with-hood-for-your.jpg?s=612x612&w=0&k=20&c=kbLeiAxIz71aokwQpy-2urLOQMoL7L73_UScxv_wpAY=",
//     color: "white",
//   },
//   {
//     name: "Floral Summer Dress",
//     price: 65,
//     description: "Light and breezy dress with a charming floral print.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://media.istockphoto.com/id/1243116710/photo/fashionable-dress-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=sFTVvuC8ZZOo6X73o4mRDn5l6DesLJf8HH-IuT75jnQ=",
//   },
//   {
//     name: "Modern Business Suit",
//     price: 55,
//     description: "Tailored business suit for a sharp and professional look.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://cdn.pixabay.com/photo/2017/08/28/02/58/suit-2688311_640.jpg",
//     color: "black",
//   },
//   {
//     name: "Premium Red Cotton Shirt",
//     price: 45,
//     description: "A classic cotton shirt for all-day comfort.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_640.jpg",
//     color: "red",
//   },
//   {
//     name: "High-Quality Leather Jacket",
//     price: 35,
//     description: "Premium leather jacket with a stylish design.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://media.istockphoto.com/id/1711821722/photo/black-leather-biker-jacket-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=EiW08FnQ8p5XzDLnfhoNLAzBPL_woV3TSAcKE8bJiYU=",
//     color: "black",
//   },
//   {
//     name: "Lightweight Raincoat",
//     price: 22,
//     description: "Stay dry with this lightweight and packable raincoat.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://media.istockphoto.com/id/932392632/photo/yellow-rain-coat-isolated.jpg?s=612x612&w=0&k=20&c=RGC6lO1O9zClwlYG287v6lh2ZMqeOz_JCmp9TiWTqjE=",
//     color: "yellow",
//   },
//   {
//     name: "Woolen Scarf",
//     price: 12,
//     description: "A cozy woolen scarf to keep you warm in the winter.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://media.istockphoto.com/id/924205166/photo/scarf-knitted-handwork-with-fringe-on-white-colorful-woolen-scarf.jpg?s=612x612&w=0&k=20&c=i26cFTwflJZGX7nsi-InaWIfmYKg9X3-6NYr9vHXA1c=",
//     color: "blue",
//   },
//   {
//     name: "Classic Blazer",
//     price: 95,
//     description:
//       "A versatile blazer for both formal and semi-casual occasions.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://media.istockphoto.com/id/1278812464/photo/gray-blazer-from-suit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=IJR5kgXzTIJ-4K_0FFm_oLAAd3WYfL8uzhSHqBIvXbE=",
//     color: "grey",
//   },
//   {
//     name: "Bohemian Maxi Dress",
//     price: 87,
//     description: "A free-flowing maxi dress with bohemian vibes.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://media.istockphoto.com/id/2180698547/photo/green-dress-isolated.jpg?s=612x612&w=0&k=20&c=cExQRzyewGe762-L53pZHEXQDOWjOyGFt0t90jYQYN8=",
//     color: "green",
//   },
//   {
//     name: "Puffer Jacket",
//     price: 76,
//     description: "Stay cozy and stylish with this puffer jacket.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://media.istockphoto.com/id/1319571126/photo/mens-warm-sport-puffer-jacket-isolated-over-white-background.jpg?s=612x612&w=0&k=20&c=l06JttooaCWedDP0IoB34p84JmzksopHFlE_-t6WTkI=",
//     color: "yellow",
//   },
//   {
//     name: "Sophisticated White Peacoat",
//     price: 66,
//     description: "A timeless peacoat design suitable for fall and winter.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://media.istockphoto.com/id/1400108051/photo/blank-white-wool-coat-mockup-front-and-back-view.jpg?s=612x612&w=0&k=20&c=-DdILU3t-x2SUXx9fAdGfQWf0f935L1t9jx-PZ_nOeU=",
//     color: "white",
//   },
//   {
//     name: "Sporty Tracksuit",
//     price: 53,
//     description: "Comfortable and stylish tracksuit for active lifestyles.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://media.istockphoto.com/id/1785541359/photo/a-green-sports-hoodie-and-pants-hang-on-a-wooden-bamboo-hanger.jpg?s=612x612&w=0&k=20&c=1GY7EhKJZl4eqJX5LhUhyQAioHwRzeTgirV4of6OmpY=",
//     color: "green",
//   },
//   {
//     name: "Contemporary Sneakers",
//     price: 41,
//     description: "Modern sneakers that combine comfort with fashion.",
//     category: "673c62eb2d754368614ef784",
//     images:
//       "https://media.istockphoto.com/id/1417090656/photo/white-leather-sneaker.jpg?s=612x612&w=0&k=20&c=mF0ZLSz0DKnuVgR1KEPhPnGV4xTvWB2R_zsWJIKoko0=",
//     color: "white",
//   },
// ];

// const moreClothImages = [
//   "https://plus.unsplash.com/premium_photo-1674719144570-0728faf14f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R5bGlzaCUyMHdpbnRlciUyMGNvYXR8ZW58MHx8MHx8fDA%3D",
//   "https://plus.unsplash.com/premium_photo-1671576642314-11a11284ea36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGVsZWdhbnQlMjBldmVuaW5nJTIwZ293bnxlbnwwfHwwfHx8MA%3D%3D",
//   "https://media.istockphoto.com/id/475053436/photo/denim-jacket.webp?a=1&b=1&s=612x612&w=0&k=20&c=ApedWQMFt5aIEmmm4ymBMt2igQLDn9g2hHsBa-d-qik=",
//   "https://media.istockphoto.com/id/1124815039/photo/white-male-hoodie-sweatshirt-long-sleeve-with-clipping-path-mens-hoody-with-hood-for-your.jpg?s=612x612&w=0&k=20&c=kbLeiAxIz71aokwQpy-2urLOQMoL7L73_UScxv_wpAY=",
//   "https://media.istockphoto.com/id/1243116710/photo/fashionable-dress-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=sFTVvuC8ZZOo6X73o4mRDn5l6DesLJf8HH-IuT75jnQ=",
//   "https://cdn.pixabay.com/photo/2017/08/28/02/58/suit-2688311_640.jpg",
//   "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_640.jpg",
//   "https://media.istockphoto.com/id/1711821722/photo/black-leather-biker-jacket-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=EiW08FnQ8p5XzDLnfhoNLAzBPL_woV3TSAcKE8bJiYU=",
//   "https://media.istockphoto.com/id/932392632/photo/yellow-rain-coat-isolated.jpg?s=612x612&w=0&k=20&c=RGC6lO1O9zClwlYG287v6lh2ZMqeOz_JCmp9TiWTqjE=",
//   "https://media.istockphoto.com/id/924205166/photo/scarf-knitted-handwork-with-fringe-on-white-colorful-woolen-scarf.jpg?s=612x612&w=0&k=20&c=i26cFTwflJZGX7nsi-InaWIfmYKg9X3-6NYr9vHXA1c=",
//   "https://media.istockphoto.com/id/1278812464/photo/gray-blazer-from-suit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=IJR5kgXzTIJ-4K_0FFm_oLAAd3WYfL8uzhSHqBIvXbE=",
//   "https://media.istockphoto.com/id/2180698547/photo/green-dress-isolated.jpg?s=612x612&w=0&k=20&c=cExQRzyewGe762-L53pZHEXQDOWjOyGFt0t90jYQYN8=",
//   "https://media.istockphoto.com/id/1319571126/photo/mens-warm-sport-puffer-jacket-isolated-over-white-background.jpg?s=612x612&w=0&k=20&c=l06JttooaCWedDP0IoB34p84JmzksopHFlE_-t6WTkI=",
//   "https://media.istockphoto.com/id/1400108051/photo/blank-white-wool-coat-mockup-front-and-back-view.jpg?s=612x612&w=0&k=20&c=-DdILU3t-x2SUXx9fAdGfQWf0f935L1t9jx-PZ_nOeU=",
//   "https://media.istockphoto.com/id/1785541359/photo/a-green-sports-hoodie-and-pants-hang-on-a-wooden-bamboo-hanger.jpg?s=612x612&w=0&k=20&c=1GY7EhKJZl4eqJX5LhUhyQAioHwRzeTgirV4of6OmpY=",
//   "https://media.istockphoto.com/id/1417090656/photo/white-leather-sneaker.jpg?s=612x612&w=0&k=20&c=mF0ZLSz0DKnuVgR1KEPhPnGV4xTvWB2R_zsWJIKoko0=",
// ];

// const allClothData = [...clothData, ...moreClothData];
//All Cloth Color Data Analysis
//Unspecified - 7
//White - 5
//Blue - 5
//Black - 3
//Red - 2
//Green - 2
//Yellow - 2
//Purple - 2
//Grey - 1
//Brown - 1

//authentic with cloudinary urls

// const moreGadgetData = [
//   {
//     name: "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
//     price: 21,
//     description:
//       "Industry-leading noise cancellation with exceptional sound quality and 30-hour battery life.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHNvbnklMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
//     color: "white",
//   },
//   {
//     name: "Fitbit Charge 6 Fitness Tracker",
//     price: 15,
//     description:
//       "Tracks heart rate, sleep, and workouts with built-in GPS and water resistance.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://media.istockphoto.com/id/1345812741/photo/white-fitness-tracker.jpg?s=612x612&w=0&k=20&c=JrVEAtnY50pnVtUN_gG4hEExZlOP606kQ7XWTEItzkM=",
//     color: "white",
//   },
//   {
//     name: "Canon EOS R50 Mirrorless Camera",
//     price: 92,
//     description:
//       "Compact camera with 24.1 MP resolution, 4K video, and advanced autofocus.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2Fub24lMjBDYW1lcmF8ZW58MHx8MHx8fDA%3D",
//     color: "black",
//   },
//   {
//     name: "GoPro HERO 12 Action Camera",
//     price: 81,
//     description:
//       "Waterproof action camera with 5.3K video, image stabilization, and voice control.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://media.istockphoto.com/id/1310250081/photo/new-4k-action-camera-on-a-suction-mount-in-black-color-isolated-white-background.jpg?s=612x612&w=0&k=20&c=SB8mVrlVLYTllQ5Ij7P3TX3eqA2Pm6P1VtZ-NHq2ah0=",
//     color: "black",
//   },
//   {
//     name: "Razer BlackWidow V4 Pro Gaming Keyboard",
//     price: 77,
//     description:
//       "Mechanical gaming keyboard with customizable RGB lighting and macro keys.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://media.istockphoto.com/id/1405686667/photo/gaming-keyboard-with-rgb-light-on-white.jpg?s=612x612&w=0&k=20&c=lkFhv2Kva-kXLpqqvsVXsufV8yYURtWHJIS5kiCGIm4=",
//   },
//   {
//     name: "Dyson Supersonic Hair Dryer",
//     price: 63,
//     description:
//       "Powerful hair dryer with intelligent heat control and multiple styling attachments.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://media.istockphoto.com/id/1643940443/photo/fashionable-high-end-hair-dryer.jpg?s=612x612&w=0&k=20&c=4xefDnExkERoUXkBwjL16cw7obp0zD4ycKmf9GaVUoY=",
//     color: "white",
//   },
//   {
//     name: "Beats Fit Pro True Wireless Headphones",
//     price: 51,
//     description:
//       "True wireless headphones with spatial audio, sweat resistance, and noise cancellation.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://images.unsplash.com/photo-1689357639029-f9397ac24b6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fEJlYXRzJTIwV2lyZWxlc3MlMjBFYXJidWRzfGVufDB8fDB8fHww",
//   },
//   {
//     name: "Tile Mate Bluetooth Tracker (2024 Edition)",
//     price: 37,
//     description:
//       "Find your lost items with this compact Bluetooth tracker featuring a 250ft range.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://images.unsplash.com/photo-1619948543232-c515a389c22d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFwcGxlJTIwYWlyJTIwdGFnfGVufDB8fDB8fHww",
//   },
//   {
//     name: "Corsair Virtuoso RGB Wireless Gaming Headset",
//     price: 29,
//     description:
//       "Premium wireless headset with 7.1 surround sound and a broadcast-grade microphone.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://media.istockphoto.com/id/964985338/photo/in-selective-focus-of-pro-dj-controller-the-dj-console-deejay-mixing-desk-at-music-party-in.jpg?s=612x612&w=0&k=20&c=sUPMLJbD-AYbLwpRP4TQ64s2nyV8WYCGaVsF1skiVq4=",
//     color: "white",
//   },
//   {
//     name: "Ring Video Doorbell 4",
//     price: 20,
//     description:
//       "Advanced video doorbell with improved motion detection and color pre-roll video.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://media.istockphoto.com/id/2155397552/photo/security-camera-and-intercom-on-a-wooden-fence.webp?a=1&b=1&s=612x612&w=0&k=20&c=pHoOtwP8qyocoSHls8dl_OMnS30MN1Nt84lYUE9hJIg=",
//   },
//   {
//     name: "Sony PS5 DualSense Wireless Controller",
//     price: 15,
//     description:
//       "Next-gen wireless controller with haptic feedback and adaptive triggers.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://images.unsplash.com/photo-1670535787435-63a39a5b8d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBTNSUyMENvbnRyb2xsZXJ8ZW58MHx8MHx8fDA%3D",
//     color: "white",
//   },
//   {
//     name: "Microsoft Surface Pro 9",
//     price: 90,
//     description:
//       "2-in-1 detachable tablet and laptop with Windows 11 and 13-inch touchscreen.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://cdn.pixabay.com/photo/2020/03/19/15/33/laptop-4947806_640.jpg",
//     color: "grey",
//   },
//   {
//     name: "Bose SoundLink Revolve+ II Speaker",
//     price: 86,
//     description:
//       "Portable Bluetooth speaker with 360-degree sound and water-resistant design.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://media.istockphoto.com/id/1183157121/photo/round-a-music-column-on-a-white-background.jpg?s=612x612&w=0&k=20&c=T3yQwiSzVGnHiM995ctUWzmeQ_QxA6jMaP2UA-QmlFc=",
//   },
//   {
//     name: "Generic Smartwatch",
//     price: 71,
//     description:
//       "Advanced smartwatch with GPS, heart rate monitoring, and workout tracking.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://cdn.pixabay.com/photo/2023/07/29/16/39/smart-8157289_640.jpg",
//     color: "black",
//   },
//   {
//     name: "Nest Learning Thermostat (4th Gen)",
//     price: 62,
//     description:
//       "Smart thermostat with automatic scheduling, remote control, and energy savings.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://media.istockphoto.com/id/1482570581/photo/regulating-heating-temperature-with-a-modern-smart-thermostat.jpg?s=612x612&w=0&k=20&c=lwZXHO9xIcjALT9G3UoKzIr5cp2MZgfuK2NCEGHgBw4=",
//   },
//   {
//     name: "Streaming Stick 4K+",
//     price: 55,
//     description:
//       "Portable streaming device with 4K HDR, Dolby Vision, and voice remote.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://media.istockphoto.com/id/1132796161/photo/receiver-tv-remote-control-white-background.jpg?s=612x612&w=0&k=20&c=U8R09AcEQsd78WpK-dN2rm2BXyIaRe4hwW9ew_9J-JA=",
//   },
//   {
//     name: "HP Envy Photo 7855 Printer",
//     price: 43,
//     description:
//       "All-in-one photo printer with wireless printing, scanning, and copying.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEhQJTIwUHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
//     color: "white",
//   },
//   {
//     name: "Elgato Stream Deck MK.2",
//     price: 38,
//     description:
//       "Customizable control pad for content creators, streamers, and productivity.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://plus.unsplash.com/premium_photo-1681511753302-a604012bab8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWxnYXRvJTIwU3RyZWFtJTIwRGVjayUyME1LLjJ8ZW58MHx8MHx8fDA%3D",
//     color: "black",
//   },
//   {
//     name: "Philips Hue White & Color Ambiance Starter Kit",
//     price: 30,
//     description:
//       "Smart lighting kit with three bulbs, a Hue bridge, and app control.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://media.istockphoto.com/id/1413427901/photo/diode-light-bulbs-on-a-white-background.jpg?s=612x612&w=0&k=20&c=XS0pRlN9kPISslVqK4jm_uJyll-a3pVxjqo5Li0lkZU=",
//     color: "white",
//   },
//   {
//     name: "HyperX QuadCast S RGB Microphone",
//     price: 19,
//     description:
//       "USB microphone with customizable RGB lighting and anti-vibration shock mount.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://images.unsplash.com/photo-1652071148620-99be24e731a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNiJTIwbWljcm9waG9uZXxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     name: "TP-Link Deco AXE5400 Tri-Band Mesh Wi-Fi System",
//     price: 12,
//     description:
//       "Advanced mesh Wi-Fi system with tri-band connectivity and wide coverage.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://images.unsplash.com/photo-1681383064412-171e5bee5f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFdpRmklMjBSb3V0ZXJ8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     name: "Dell UltraBook Laptop",
//     price: 88,
//     description:
//       "Compact and powerful 13.4-inch laptop with Intel Core i3 processor, 18B RAM, 256GB SSD, and a stunning Edge display for professionals on the go.",
//     category: "673c63b112ec42c8fadcc07a",
//     images:
//       "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fERlbGwlMjBMYXB0b3B8ZW58MHx8MHx8fDA%3D",
//     color: "grey",
//   },
// ];

// const moreGadgetImages = [
//   "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHNvbnklMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
//   "https://media.istockphoto.com/id/1345812741/photo/white-fitness-tracker.jpg?s=612x612&w=0&k=20&c=JrVEAtnY50pnVtUN_gG4hEExZlOP606kQ7XWTEItzkM=",
//   "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2Fub24lMjBDYW1lcmF8ZW58MHx8MHx8fDA%3D",
//   "https://media.istockphoto.com/id/1310250081/photo/new-4k-action-camera-on-a-suction-mount-in-black-color-isolated-white-background.jpg?s=612x612&w=0&k=20&c=SB8mVrlVLYTllQ5Ij7P3TX3eqA2Pm6P1VtZ-NHq2ah0=",
//   "https://media.istockphoto.com/id/1405686667/photo/gaming-keyboard-with-rgb-light-on-white.jpg?s=612x612&w=0&k=20&c=lkFhv2Kva-kXLpqqvsVXsufV8yYURtWHJIS5kiCGIm4=",
//   "https://media.istockphoto.com/id/1643940443/photo/fashionable-high-end-hair-dryer.jpg?s=612x612&w=0&k=20&c=4xefDnExkERoUXkBwjL16cw7obp0zD4ycKmf9GaVUoY=",
//   "https://images.unsplash.com/photo-1689357639029-f9397ac24b6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fEJlYXRzJTIwV2lyZWxlc3MlMjBFYXJidWRzfGVufDB8fDB8fHww",
//   "https://images.unsplash.com/photo-1619948543232-c515a389c22d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFwcGxlJTIwYWlyJTIwdGFnfGVufDB8fDB8fHww",
//   "https://media.istockphoto.com/id/964985338/photo/in-selective-focus-of-pro-dj-controller-the-dj-console-deejay-mixing-desk-at-music-party-in.jpg?s=612x612&w=0&k=20&c=sUPMLJbD-AYbLwpRP4TQ64s2nyV8WYCGaVsF1skiVq4=",
//   "https://media.istockphoto.com/id/2155397552/photo/security-camera-and-intercom-on-a-wooden-fence.webp?a=1&b=1&s=612x612&w=0&k=20&c=pHoOtwP8qyocoSHls8dl_OMnS30MN1Nt84lYUE9hJIg=",
//   "https://images.unsplash.com/photo-1670535787435-63a39a5b8d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBTNSUyMENvbnRyb2xsZXJ8ZW58MHx8MHx8fDA%3D",
//   "https://cdn.pixabay.com/photo/2020/03/19/15/33/laptop-4947806_640.jpg",
//   "https://media.istockphoto.com/id/1183157121/photo/round-a-music-column-on-a-white-background.jpg?s=612x612&w=0&k=20&c=T3yQwiSzVGnHiM995ctUWzmeQ_QxA6jMaP2UA-QmlFc=",
//   "https://cdn.pixabay.com/photo/2023/07/29/16/39/smart-8157289_640.jpg",
//   "https://media.istockphoto.com/id/1482570581/photo/regulating-heating-temperature-with-a-modern-smart-thermostat.jpg?s=612x612&w=0&k=20&c=lwZXHO9xIcjALT9G3UoKzIr5cp2MZgfuK2NCEGHgBw4=",
//   "https://media.istockphoto.com/id/1132796161/photo/receiver-tv-remote-control-white-background.jpg?s=612x612&w=0&k=20&c=U8R09AcEQsd78WpK-dN2rm2BXyIaRe4hwW9ew_9J-JA=",
//   "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEhQJTIwUHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1681511753302-a604012bab8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWxnYXRvJTIwU3RyZWFtJTIwRGVjayUyME1LLjJ8ZW58MHx8MHx8fDA%3D",
//   "https://media.istockphoto.com/id/1413427901/photo/diode-light-bulbs-on-a-white-background.jpg?s=612x612&w=0&k=20&c=XS0pRlN9kPISslVqK4jm_uJyll-a3pVxjqo5Li0lkZU=",
//   "https://images.unsplash.com/photo-1652071148620-99be24e731a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNiJTIwbWljcm9waG9uZXxlbnwwfHwwfHx8MA%3D%3D",
//   "https://images.unsplash.com/photo-1681383064412-171e5bee5f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFdpRmklMjBSb3V0ZXJ8ZW58MHx8MHx8fDA%3D",
//   "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fERlbGwlMjBMYXB0b3B8ZW58MHx8MHx8fDA%3D",
// ];

// const allGadgetData = [...gadgetData, ...moreGadgetData];
//All Gadget Color Data Analysis
// Unspecified - 16
//White - 10
//Black - 6
//Grey - 3

//authentic with cloudinary urls

// const moreFoodData = [
//   {
//     name: "Ritz Crackers 200g",
//     price: 14,
//     description:
//       "Buttery, flaky crackers perfect for snacking or pairing with cheese.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/1972111475/photo/sweet-and-salty-cookies-on-white-bowl.jpg?s=612x612&w=0&k=20&c=sF352-boWUjgI33x8O7BcbJxR4eEGxMzkGCQc4lDGdY=",
//   },
//   {
//     name: "Pringles Sour Cream & Onion 158g",
//     price: 19,
//     description:
//       "Crispy potato chips with a tangy sour cream and onion flavor.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://images.unsplash.com/photo-1702097034631-4283d8979de6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFByaW5nbGVzfGVufDB8fDB8fHww",
//   },
//   {
//     name: "Betty Crocker Chocolate Fudge Brownie Mix 500g",
//     price: 27,
//     description:
//       "Easy-to-make rich chocolate fudge brownie mix for a delightful treat.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/1728046143/photo/chocolate-brownie-portion-with-chocolate-syrup-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=F4KvhFQdx_fFMuYG1GZUawWN16h2qpju4mp8JbynNpM=",
//     color: "brown",
//   },
//   {
//     name: "Kellogg’s Corn Flakes 500g",
//     price: 18,
//     description:
//       "Classic golden flakes made from corn, perfect for a wholesome breakfast.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://images.unsplash.com/photo-1616662707621-9c00d8fb7d5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2VsbG9nZyVFMiU4MCU5OXMlMjBDb3JuJTIwRmxha2VzfGVufDB8fDB8fHww",
//   },
//   {
//     name: "Hershey's Milk Chocolate Bar 43g",
//     price: 15,
//     description: "Smooth and creamy milk chocolate in a classic bar format.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://cdn.pixabay.com/photo/2021/07/25/22/46/hersheys-6492925_640.jpg",
//     color: "brown",
//   },
//   {
//     name: "Twix Caramel and Biscuit Chocolate Bar 50g",
//     price: 17,
//     description:
//       "Crunchy biscuit topped with caramel and covered in milk chocolate.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://cdn.pixabay.com/photo/2021/07/25/22/46/hersheys-6492925_640.jpg",
//   },
//   {
//     name: "Traditional Italian Pasta Sauce 680g",
//     price: 35,
//     description:
//       "Rich and flavorful pasta sauce made from vine-ripened tomatoes and herbs.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/496733936/photo/chutney-stored-in-jars-as-winter-food.jpg?s=612x612&w=0&k=20&c=k9D44u-2s5kBwbZ2Qy8Pr_ct7DoNk0i0QgfzBQY5Ej8=",
//     color: "red",
//   },
//   {
//     name: "Doritos Wasabi Nacho Cheese Tortilla Chips 150g",
//     price: 20,
//     description:
//       "Bold and cheesy tortilla chips for a crunchy snack experience.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9yaXRvc3xlbnwwfHwwfHx8MA%3D%3D",
//     color: "green",
//   },
//   {
//     name: "Twinings English Breakfast Tea Bags 100g",
//     price: 25,
//     description:
//       "Rich and smooth black tea blend, perfect for a classic breakfast experience.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://images.unsplash.com/photo-1730890992281-b8b30e91434e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHdpbmluZ3N8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     name: "Pure Premium Orange Juice 1L",
//     price: 38,
//     description: "100% pure orange juice with no added sugar or preservatives.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/855317618/photo/fresh-natural-orange-juice-close-up-shoot.jpg?s=612x612&w=0&k=20&c=qqqH4_5rAnUkl49fkuUxvy0vWxbemvNoYtFpu1y03uQ=",
//     color: "orange",
//   },
//   {
//     name: "KitKat Chocolate Wafer",
//     price: 16,
//     description: "Crispy wafer layers covered in smooth milk chocolate.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://images.unsplash.com/flagged/photo-1567708044252-66de978ef021?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNob2NvbGF0ZSUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     name: "Maggi Chicken Noodles 70g",
//     price: 10,
//     description: "Instant noodles with rich chicken flavor, ready in minutes.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/174814617/photo/noodles-and-flavor-packet.jpg?s=612x612&w=0&k=20&c=gsG9p9rgyWVvuULdL5xboj1Y7LCgDLjbZqqw_vCUhTs=",
//   },
//   {
//     name: "Milk Chocolate Bar 100g",
//     price: 21,
//     description: "Classic milk chocolate bar with a smooth and creamy taste.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://cdn.pixabay.com/photo/2017/04/04/16/55/chocolate-2201991_1280.jpg",
//   },
//   {
//     name: "Nescafe Classic Instant Coffee 200g",
//     price: 49,
//     description:
//       "Rich and aromatic instant coffee made from high-quality beans.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://images.unsplash.com/photo-1632054010678-7f2e5a1a7355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmVzY2FmZXxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     name: "Pepsi Soft Drink",
//     price: 28,
//     description:
//       "Refreshing cola with a bold and crisp taste, perfect for sharing.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://cdn.pixabay.com/photo/2020/05/10/05/14/pepsi-5152332_1280.jpg",
//   },
//   {
//     name: "Chocolate Malt Drink",
//     price: 25,
//     description:
//       "Energy-packed chocolate malt drink mix for a nutritious boost.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/503259445/photo/chocolate-milk-shake-smoothie.jpg?s=612x612&w=0&k=20&c=TiOr6gn_1RkUjmlmiWyCc4c2GPbHQA9zsfzh_kBGWiA=",
//   },
//   {
//     name: "Lipton Yellow Label Tea Bags",
//     price: 14,
//     description: "High-quality tea bags for a refreshing and energizing brew.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/533196329/photo/tea-packaging.jpg?s=612x612&w=0&k=20&c=wcOtMZhaBpcADji9oFgBilVwXJJ0fCYB54e9qiSQNUw=",
//   },
//   {
//     name: "Cream Cheese Spread",
//     price: 36,
//     description:
//       "Smooth and creamy cheese spread, perfect for bagels and recipes.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/177721417/photo/cream-cheese-isolated.jpg?s=612x612&w=0&k=20&c=tDNMZH2Qy5aPYmsWA-NBDxinoMMjgWsb18W51U0zr3g=",
//   },
//   {
//     name: "Cheetos Crunchy Cheese Snacks ",
//     price: 20,
//     description:
//       "Crunchy cheese-flavored snacks for a bold and fun snack experience.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/175447215/photo/cheese-puff-snacks.webp?a=1&b=1&s=612x612&w=0&k=20&c=ymBhCsYfxkBM2bqo__x4JPAOpdJZT0ig-dwuQ0Ct-4Q=",
//   },
//   {
//     name: "Strawberry Jam",
//     price: 18,
//     description: "Delicious strawberry jam made with sun-ripened strawberries.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/2148299146/photo/strawberry-jam-jar-mockup-with-blank-label.jpg?s=612x612&w=0&k=20&c=uDY24M_B4NKVlsj1m1h8JHMaoGBxIk7M0NYe0aK1cyQ=",
//   },
//   {
//     name: "Cranberry Juice 50cl",
//     price: 30,
//     description:
//       "100% cranberry juice with a bold and tart flavor, great for hydration.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/160434855/photo/tall-glass-of-cranberry-juice-with-a-straw.jpg?s=612x612&w=0&k=20&c=1vgH60xGJaMlA2yKnhWBchHJ-_1eSxDxZkeIS8SSjtA=",
//   },
//   {
//     name: "Almond Nuts 150g",
//     price: 45,
//     description: "Roasted and salted almonds for a crunchy and healthy snack.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/1074143940/photo/almonds-scattered-on-the-table-selective-focus.jpg?s=612x612&w=0&k=20&c=W0xb8WkBy_gE2m0YQpTV52gWpajskC878B_dyN78V9A=",
//   },
//   {
//     name: "Cheddar Crackers",
//     price: 18,
//     description: "Fun fish-shaped crackers with a rich cheddar cheese flavor.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/1471458258/photo/orange-cheddar-flavored-soup-crackers-in-a-white-bowl.jpg?s=612x612&w=0&k=20&c=bRfQDtDvctsXlLENPr09CYwz69o_A-gsT5fywizFf24=",
//   },
//   {
//     name: "Folgers Classic Roast Ground Coffee 320g",
//     price: 43,
//     description:
//       "Medium roast ground coffee for a smooth and rich morning brew.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/547239294/photo/italian-coffee-with-ground-coffee-and-a-cup.jpg?s=612x612&w=0&k=20&c=oeAzPxDE5CpUotGIZXBhebKlCQMgY5B2TKi1490F4LI=",
//   },
//   {
//     name: "Haribo Goldbears Gummi Candy 175g",
//     price: 9,
//     description:
//       "Classic gummy bears in a variety of fruity flavors, perfect for a sweet treat any time.",
//     category: "67409cc0df46753e30e02de1",
//     images:
//       "https://media.istockphoto.com/id/157380073/photo/assortment-of-colorful-fruity-gummy-bears-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=i5t1cc0WVReAOUlORIvxOiLasYw9jjE_Gw3nzqlmohQ=",
//   },
// ];

// const moreFoodImages = [
//   "https://media.istockphoto.com/id/1972111475/photo/sweet-and-salty-cookies-on-white-bowl.jpg?s=612x612&w=0&k=20&c=sF352-boWUjgI33x8O7BcbJxR4eEGxMzkGCQc4lDGdY=",
//   "https://images.unsplash.com/photo-1702097034631-4283d8979de6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFByaW5nbVzfGVufDB8fDB8fHww",
//   "https://media.istockphoto.com/id/1728046143/photo/chocolate-brownie-portion-with-chocolate-syrup-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=F4KvhFQdx_fFMuYG1GZUawWN16h2qpju4mp8JbynNpM=",
//   "https://images.unsplash.com/photo-1616662707621-9c00d8fb7d5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2VsbG9nZyVFMiU4MCU5OXMlMjBDb3JuJTIwRmxha2VzfGVufDB8fDB8fHww",
//   "https://cdn.pixabay.com/photo/2021/07/25/22/46/hersheys-6492925_640.jpg",
//   "https://cdn.pixabay.com/photo/2021/07/25/22/46/hersheys-6492925_640.jpg",
//   "https://media.istockphoto.com/id/496733936/photo/chutney-stored-in-jars-as-winter-food.jpg?s=612x612&w=0&k=20&c=k9D44u-2s5kBwbZ2Qy8Pr_ct7DoNk0i0QgfzBQY5Ej8=",
//   "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9yaXRvc3xlbnwwfHwwfHx8MA%3D%3D",
//   "https://images.unsplash.com/photo-1730890992281-b8b30e91434e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHdpbmluZ3N8ZW58MHx8MHx8fDA%3D",
//   "https://media.istockphoto.com/id/855317618/photo/fresh-natural-orange-juice-close-up-shoot.jpg?s=612x612&w=0&k=20&c=qqqH4_5rAnUkl49fkuUxvy0vWxbemvNoYtFpu1y03uQ=",
//   "https://images.unsplash.com/flagged/photo-1567708044252-66de978ef021?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNob2NvbGF0ZSUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D",
//   "https://media.istockphoto.com/id/174814617/photo/noodles-and-flavor-packet.jpg?s=612x612&w=0&k=20&c=gsG9p9rgyWVvuULdL5xboj1Y7LCgDLjbZqqw_vCUhTs=",
//   "https://cdn.pixabay.com/photo/2017/04/04/16/55/chocolate-2201991_1280.jpg",
//   "https://images.unsplash.com/photo-1632054010678-7f2e5a1a7355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmVzY2FmZXxlbnwwfHwwfHx8MA%3D%3D",
//   "https://cdn.pixabay.com/photo/2020/05/10/05/14/pepsi-5152332_1280.jpg",
//   "https://media.istockphoto.com/id/503259445/photo/chocolate-milk-shake-smoothie.jpg?s=612x612&w=0&k=20&c=TiOr6gn_1RkUjmlmiWyCc4c2GPbHQA9zsfzh_kBGWiA=",
//   "https://media.istockphoto.com/id/533196329/photo/tea-packaging.jpg?s=612x612&w=0&k=20&c=wcOtMZhaBpcADji9oFgBilVwXJJ0fCYB54e9qiSQNUw=",
//   "https://media.istockphoto.com/id/177721417/photo/cream-cheese-isolated.jpg?s=612x612&w=0&k=20&c=tDNMZH2Qy5aPYmsWA-NBDxinoMMjgWsb18W51U0zr3g=",
//   "https://media.istockphoto.com/id/175447215/photo/cheese-puff-snacks.webp?a=1&b=1&s=612x612&w=0&k=20&c=ymBhCsYfxkBM2bqo__x4JPAOpdJZT0ig-dwuQ0Ct-4Q=",
//   "https://media.istockphoto.com/id/2148299146/photo/strawberry-jam-jar-mockup-with-blank-label.jpg?s=612x612&w=0&k=20&c=uDY24M_B4NKVlsj1m1h8JHMaoGBxIk7M0NYe0aK1cyQ=",
//   "https://media.istockphoto.com/id/160434855/photo/tall-glass-of-cranberry-juice-with-a-straw.jpg?s=612x612&w=0&k=20&c=1vgH60xGJaMlA2yKnhWBchHJ-_1eSxDxZkeIS8SSjtA=",
//   "https://media.istockphoto.com/id/1074143940/photo/almonds-scattered-on-the-table-selective-focus.jpg?s=612x612&w=0&k=20&c=W0xb8WkBy_gE2m0YQpTV52gWpajskC878B_dyN78V9A=",
//   "https://media.istockphoto.com/id/1471458258/photo/orange-cheddar-flavored-soup-crackers-in-a-white-bowl.jpg?s=612x612&w=0&k=20&c=bRfQDtDvctsXlLENPr09CYwz69o_A-gsT5fywizFf24=",
//   "https://media.istockphoto.com/id/547239294/photo/italian-coffee-with-ground-coffee-and-a-cup.jpg?s=612x612&w=0&k=20&c=oeAzPxDE5CpUotGIZXBhebKlCQMgY5B2TKi1490F4LI=",
//   "https://media.istockphoto.com/id/157380073/photo/assortment-of-colorful-fruity-gummy-bears-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=i5t1cc0WVReAOUlORIvxOiLasYw9jjE_Gw3nzqlmohQ=",
// ];

// const allFoodData = [...foodData, ...moreFoodData];
//All Food Color Data Analysis
//Unspecified - 25
//Brown - 5
//Red -2
//Black - 1
//Orange - 1
//Green - 1
