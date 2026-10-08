export const menuCategories = [
  { id: 'todos', name: 'Todo el Menú', icon: 'Utensils' },
  { id: 'cortes', name: 'Cortes & Brasa', icon: 'Flame' },
  { id: 'hamburguesas', name: 'Hamburguesas Prime', icon: 'Beef' },
  { id: 'tacos', name: 'Tacos de Autor', icon: 'Disc' },
  { id: 'mixologia', name: 'Mixología Insignia', icon: 'Wine' },
  { id: 'vinos', name: 'Cava & Vinos', icon: 'GlassWater' },
  { id: 'destilados', name: 'Destilados Premium', icon: 'Sparkles' },
  { id: 'cervezas', name: 'Cervezas', icon: 'Beer' },
  { id: 'postres', name: 'Postres', icon: 'Cake' },
  { id: 'infantil', name: 'Menú Infantil', icon: 'Smile' },
  { id: 'sin-alcohol', name: 'Cafetería & Sin Alcohol', icon: 'Coffee' },
];

export const menuItems = [
  // CORTES & BRASA
  {
    id: 'parrillada-mar-y-tierra',
    category: 'cortes',
    name: 'Parrillada Mar y Tierra (Para 3 personas)',
    price: 1700,
    badge: 'Especialidad de la Casa',
    description: 'Combinación magistral de Rib Eye y Arrachera prime con camarones al ajillo y pulpo a las brasas, chiles toreados, papas cambray y elote dorado.',
    image: '/assets/parrillada-brasas.jpg',
    tags: ['Para Compartir', 'Brasa', 'Mar y Tierra']
  },
  {
    id: 'filete-mignon',
    category: 'cortes',
    name: 'Filete Mignon al Vino Tinto',
    price: 450,
    badge: 'Recomendación del Chef',
    description: 'Filete Mignon cocinado en mantequilla de romero, bañado en reducción de vino tinto de la casa, servido sobre cremoso de papa y espárragos asados.',
    image: '/assets/corte-filete-mignon.jpg',
    tags: ['Res Prime', 'Mantequilla de Romero']
  },

  // HAMBURGUESAS
  {
    id: 'hamburguesa-clasica',
    category: 'hamburguesas',
    name: 'Hamburguesa PÚA Clásica',
    price: 245,
    description: 'Carne 100% de res calidad Prime importada en pan brioche artesanal, queso manchego fundido, tocino crispy, aderezo chipotle, pepinillos y vegetación fresca.',
    image: '/assets/tapas-pizza-tabla.jpg',
    tags: ['Res Prime', 'Brioche']
  },
  {
    id: 'hamburguesa-doble-queso',
    category: 'hamburguesas',
    name: 'Hamburguesa Doble Queso & Cebolla Caramelizada',
    price: 285,
    badge: 'Más Vendida',
    description: 'Doble medallón de res con queso Chihuahua gratinado, costra de parmesano, cebolla dulce caramelizada a la brasa y mayonesa de chipotle.',
    image: '/assets/tuetanos-carne-brasas.jpg',
    tags: ['Doble Carne', 'Cebolla Caramelizada']
  },

  // TACOS
  {
    id: 'tacos-lorenzanas',
    category: 'tacos',
    name: 'Tacos Lorenzanas (2 Pzas)',
    price: 220,
    description: 'Arrachera Prime, chistorra artesanal y queso Chihuahua gratinado sobre tortilla de maíz crujiente dorada al carbón, cebolla morada y guacamole suave.',
    image: '/assets/sopa-gourmet-pan.jpg',
    tags: ['Arrachera', 'Chistorra', 'Guacamole']
  },
  {
    id: 'tacos-baja',
    category: 'tacos',
    name: 'Camarones Estilo Baja (2 Pzas)',
    price: 220,
    description: 'Camarones frescos rebozados en tempura de cerveza artesanal, alioli de chipotle y cremoso de aguacate en tortilla suave de harina.',
    image: '/assets/tuna-sashimi-tiradito.jpg',
    tags: ['Camarón Tempura', 'Estilo Baja']
  },
  {
    id: 'tacos-mar-y-tierra',
    category: 'tacos',
    name: 'Tacos Mar y Tierra en Costra de Parmesano (2 Pzas)',
    price: 220,
    badge: 'Imperdible',
    description: 'Camarón crujiente y picaña jugosa con queso Chihuahua, pimiento a la plancha sobre tortilla con costra dorada de parmesano y pico de gallo.',
    image: '/assets/platillo-gourmet-nogada.jpg',
    tags: ['Picaña', 'Costra Parmesano']
  },

  // MIXOLOGÍA
  {
    id: 'trago-pua-insignia',
    category: 'mixologia',
    name: 'PÚA (Trago Insignia)',
    price: 195,
    badge: 'Trago Insignia',
    description: 'Elaborado en honor a nuestros más exigentes comensales. Una alquimia de sabores enigmáticos y balance exquisito ahumado a la brasa.',
    image: '/assets/coctel-tiki-maracuya.jpg',
    tags: ['Exclusivo', 'Ahumado']
  },
  {
    id: 'gim-gimlet-flameado',
    category: 'mixologia',
    name: 'Gim-Gimlet (Flameado en Mesa)',
    price: 195,
    badge: 'Espectáculo en Mesa',
    description: 'Gin tonic ritualizado e iluminado con fuego en tu mesa. Ginebra botánica, miel de agave orgánico y tónica de infusión artesanal.',
    image: '/assets/mixologia-flameada-bar.jpg',
    tags: ['Show en Vivo', 'Ginebra']
  },
  {
    id: 'mezcal-reyes',
    category: 'mixologia',
    name: 'Mezcal Reyes',
    price: 195,
    description: 'Frescura cítrica y picante con pepino macerado, sal de coco escarchada, mezcal artesanal y toque de licor Ancho Reyes.',
    image: '/assets/coctel-hendricks-gin.jpg',
    tags: ['Mezcal', 'Picante Cítrico']
  },
  {
    id: 'gin-princesa',
    category: 'mixologia',
    name: 'Gin Princesa Puerto de Indias',
    price: 195,
    description: 'Ginebra Puerto de Indias infusionada con frutos rojos, puré natural de la casa y brocheta silvestre de frutos del bosque.',
    image: '/assets/coctel-negroni-rojo.jpg',
    tags: ['Frutos Rojos', 'Ginebra Rosa']
  },
  {
    id: 'carajillo-tiki',
    category: 'mixologia',
    name: 'Carajillo Tiki Autor',
    price: 200,
    badge: 'Favorito',
    description: 'Nuestra reinterpretación tropical del carajillo con jugo de cítricos, Licor 43, esencia de naranja y espresso recién extraído.',
    image: '/assets/coctel-tiki-hielo.jpg',
    tags: ['Licor 43', 'Espresso']
  },
  {
    id: 'old-cherry',
    category: 'mixologia',
    name: 'Old Cherry Reserve',
    price: 250,
    badge: 'Luxury Select',
    description: 'Variante de autor del clásico Old Fashioned con bourbon de reserva y un giro distintivo de dulzura de cereza negra ahumada.',
    image: '/assets/coctel-oscuro-velas.jpg',
    tags: ['Bourbon', 'Reserva']
  },

  // VINOS
  {
    id: 'casa-madero-3v',
    category: 'vinos',
    name: 'Casa Madero 3V (Botella)',
    price: 1900,
    badge: 'Cava Recomendada',
    description: 'Cabernet Sauvignon, Merlot y Tempranillo de Parras, Coahuila. Notas de frutos rojos maduros, vainilla y roble tostado.',
    image: '/assets/cava-vino-mesa.jpg',
    tags: ['Vino Mexicano', 'Tinto']
  },
  {
    id: 'casa-madero-cabernet',
    category: 'vinos',
    name: 'Casa Madero Cabernet Sauvignon (Botella)',
    price: 1600,
    description: 'Elegante estructurado con gran cuerpo, perfecto maridaje para nuestros cortes de carne a la brasa.',
    image: '/assets/copa-vino-tinto-lampara.jpg',
    tags: ['Cabernet', 'Cuerpo Intenso']
  },
  {
    id: 'moet-chandon-brut',
    category: 'vinos',
    name: 'Möet & Chandon Brut Imperial (Botella)',
    price: 2900,
    badge: 'Champagne',
    description: 'Champagne francés emblemático con burbujas finas, vibrantes notas de manzana verde, cítricos y matices minerales.',
    image: '/assets/coctel-martini-cristal.jpg',
    tags: ['Champagne', 'Francia']
  },
  {
    id: 'seleccion-del-mes-vino',
    category: 'vinos',
    name: 'Selección de Cava del Mes',
    price: 999,
    badge: 'Oferta Cava',
    description: 'Consulte con nuestro Sommelier la etiqueta especial seleccionada este mes para maridar su cena.',
    image: '/assets/cava-vino-mesa.jpg',
    tags: ['Selección Sommelier']
  },

  // DESTILADOS
  {
    id: 'don-julio-1942',
    category: 'destilados',
    name: 'Don Julio 1942 (Botella)',
    price: 6500,
    badge: 'Ultra Premium',
    description: 'Tequila añejo elaborado en pequeñas partidas, añejado por un mínimo de dos años y medio en barricas de roble blanco americano.',
    image: '/assets/neon-pua-brasa.jpg',
    tags: ['Tequila Añejo', 'Icono']
  },
  {
    id: 'macallan-12',
    category: 'destilados',
    name: 'Macallan 12 Double Cask (Copa $330 / Botella)',
    price: 3100,
    description: 'Single Malt escocés madurado en barricas de roble americano y europeo sazonadas con jerez.',
    image: '/assets/coctel-oscuro-velas.jpg',
    tags: ['Whisky Single Malt', 'Escocia']
  },
  {
    id: 'zacapa-23',
    category: 'destilados',
    name: 'Ron Zacapa Solera 23 (Copa $240 / Botella)',
    price: 2400,
    description: 'Añejado a 2,300 metros sobre el nivel del mar en las montañas de Guatemala con el método Solera.',
    image: '/assets/coctel-cremoso.jpg',
    tags: ['Ron Solera', 'Guatemala']
  },

  // CERVEZAS
  {
    id: 'negra-modelo',
    category: 'cervezas',
    name: 'Negra Modelo (355ml)',
    price: 60,
    description: 'Cerveza tipo Munich oscura mexicana con malta tostada y suave dulzor a caramelo.',
    image: '/assets/terraza-jardin-pua.jpg',
    tags: ['Artesanal Mexicana', 'Malta Tostada']
  },
  {
    id: 'modelo-especial',
    category: 'cervezas',
    name: 'Modelo Especial (355ml)',
    price: 60,
    description: 'Cerveza pilsner dorada de sabor equilibrado y refrescante.',
    image: '/assets/coctel-hendricks-gin.jpg',
    tags: ['Pilsner']
  },

  // POSTRES
  {
    id: 'pastel-de-chocolate-turin',
    category: 'postres',
    name: 'Pastel de Chocolate Semiamargo',
    price: 180,
    badge: 'Delicia de la Casa',
    description: 'Entrecapas de chocolate cremoso con cobertura de chocolate semi amargo 70% cacao y espolvoreado de cocoa fina.',
    image: '/assets/platillo-crema-rosa.jpg',
    tags: ['Chocolate Turin', 'Cacao 70%']
  },
  {
    id: 'crocante-de-zanahoria',
    category: 'postres',
    name: 'Crocante de Zanahoria & Helado Artesanal',
    price: 180,
    badge: 'Creación de Autor',
    description: 'Zanahoria rallada frita hasta alcanzar textura crujiente dorada, helado cremoso de vainilla de papantla, fresas frescas y cajeta artesanal.',
    image: '/assets/postre-crocante-helado.jpg',
    tags: ['Helado Papantla', 'Zanahoria Crujiente']
  },
  {
    id: 'brownie-trufado',
    category: 'postres',
    name: 'Brownie de Chocolate Trufado con Arándanos',
    price: 240,
    description: 'Brownie de chocolate turín trufado relleno de arándanos y cerezas silvestres, acompañado de helado artesanal elaborado en casa.',
    image: '/assets/platillo-especial-rosa.jpg',
    tags: ['Trufado', 'Helado de Casa']
  },

  // MENÚ INFANTIL
  {
    id: 'mini-hamburguesas-infantil',
    category: 'infantil',
    name: 'Mini Hamburguesas Sirloin (2 Pzas)',
    price: 180,
    description: 'Hamburguesas tamaño infantil a base de suave carne de Sirloin Prime, queso Manchego, lechuga y papas a la francesa crujientes.',
    image: '/assets/tapas-pizza-tabla.jpg',
    tags: ['Sirloin', 'Papas Francesas']
  },
  {
    id: 'mini-pizza-horno',
    category: 'infantil',
    name: 'Mini Pizza Artesanal al Horno',
    price: 155,
    description: 'Masa hecha en casa horneada al momento con pomodoro italiano y queso mozzarella gratinado. A elegir: Pepperoni o Hawaiana.',
    image: '/assets/tapas-pizza-tabla.jpg',
    tags: ['Masa Artesanal', 'Pepperoni/Hawaiana']
  },

  // CAFETERÍA & SIN ALCOHOL
  {
    id: 'dolce-amore-mocktail',
    category: 'sin-alcohol',
    name: 'Dolce Amore (Mocktail Sin Alcohol)',
    price: 155,
    badge: 'Coctelería Sin Alcohol',
    description: 'Mezcla artesanal de maracuyá fresca, lychee, infusión de frutos silvestres y toque efervescente.',
    image: '/assets/coctel-tiki-hielo.jpg',
    tags: ['Mocktail', 'Cítrico Dulce']
  },
  {
    id: 'limonada-de-coco',
    category: 'sin-alcohol',
    name: 'Limonada Cremosa de Coco',
    price: 155,
    description: 'Elaborada con leche de coco natural, zumo de limón recién exprimido y menta fresca batida.',
    image: '/assets/coctel-cremoso.jpg',
    tags: ['Leche de Coco', 'Refrescante']
  }
];

export const restaurantInfo = {
  name: 'PÚA Brasa y Vino',
  tagline: 'Gastronomía al Carbón, Mixología de Autor & Cava de Vino',
  phone: '+52 55 1234 5678',
  whatsapp: '525512345678',
  googleMapsUrl: 'https://maps.app.goo.gl/ToxSAbb1hKC4XXQAA',
  address: 'PÚA Brasa y Vino, México',
  hours: [
    { days: 'Lunes a Miércoles', time: '13:00 hrs - 23:00 hrs' },
    { days: 'Jueves a Sábado', time: '13:00 hrs - 01:00 hrs' },
    { days: 'Domingos', time: '13:00 hrs - 20:00 hrs' }
  ],
  features: [
    { title: 'Corte Prime & Fuego', desc: 'Carnes de calidad importada maduradas y selladas a las brasas de leña seleccionada.' },
    { title: 'Cava & Sommelier', desc: 'Más de 50 etiquetas de vinos mexicanos e internacionales seleccionados para maridaje.' },
    { title: 'Mixología Ritual', desc: 'Cócteles de autor ahumados, flameados en mesa e infusiones herbales exclusivas.' },
    { title: 'Espacios Exclusivos', desc: 'Terraza al aire libre, salón principal con cocina abierta y Cava Privada VIP.' }
  ]
};
