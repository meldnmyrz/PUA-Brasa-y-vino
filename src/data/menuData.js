// Official Menu Data extracted from menu-pua.vercel.app
export const restaurantInfo = {
  "name": "PÚA Brasa y Vino",
  "subtitle": "Menú Gastronómico Oficial",
  "tagline": "Fuego de Encino & Cava de Autor",
  "address": "Av. Presidente Masaryk, Polanco, CDMX",
  "phone": "+52 (55) 8900-7821",
  "whatsapp": "525589007821",
  "googleMapsUrl": "https://maps.google.com/?q=Polanco+CDMX",
  "hours": [
    {
      "days": "Lunes a Miércoles",
      "time": "13:00 hrs - 23:00 hrs"
    },
    {
      "days": "Jueves a Sábado",
      "time": "13:00 hrs - 01:00 hrs"
    },
    {
      "days": "Domingo",
      "time": "13:00 hrs - 20:00 hrs"
    }
  ]
};

export const menuCategories = [
  {
    "id": "todos",
    "name": "Todo el Menú",
    "icon": "Utensils"
  },
  {
    "id": "maridajes",
    "name": "Para Maridar",
    "icon": "Wine"
  },
  {
    "id": "entradas",
    "name": "Entradas",
    "icon": "Sparkles"
  },
  {
    "id": "sopas",
    "name": "Sopas & Cremas",
    "icon": "Soup"
  },
  {
    "id": "ensaladas",
    "name": "Ensaladas",
    "icon": "Leaf"
  },
  {
    "id": "cortes",
    "name": "Cortes Prime (Angus)",
    "icon": "Flame"
  },
  {
    "id": "pastas",
    "name": "Pastas de Autor",
    "icon": "UtensilsCrossed"
  },
  {
    "id": "mariscos",
    "name": "Especialidades del Mar",
    "icon": "Fish"
  },
  {
    "id": "postres",
    "name": "Postres",
    "icon": "Cake"
  },
  {
    "id": "mixologia",
    "name": "Mixología & Cava",
    "icon": "GlassWater"
  }
];

export const menuItems = [
  {
    "id": "mar-1",
    "category": "maridajes",
    "name": "Queso Camembert Rostizado",
    "price": 330,
    "description": "Pieza de suave camembert arropado de chutney de pera, frutas del bosque, jamón serrano y arúgula.",
    "image": "/assets/platillo-crema-rosa.jpg",
    "tags": [
      "Maridaje",
      "Chef Pick"
    ],
    "pairing": "Casa Madero 2V / Chardonnay"
  },
  {
    "id": "mar-2",
    "category": "maridajes",
    "name": "Jamón Ibérico (100 grs.)",
    "price": 345,
    "description": "Corte fino realizado al momento en mesa, que resalta la textura y complejidad aromática de este jamón de alta calidad. Su curación prolongada de 24 meses revela matices intensos, untuosos y delicadamente salinos, ofreciendo una experiencia auténtica y refinada.",
    "image": "/assets/platillo-gourmet-nogada.jpg",
    "tags": [
      "Curado 24 Meses",
      "Servicio en Mesa",
      "Premium"
    ],
    "pairing": "Casa Madero Cabernet Sauvignon / Vino Tinto Reserva"
  },
  {
    "id": "mar-3",
    "category": "maridajes",
    "name": "Tapa Mediterránea (4 piezas)",
    "price": 210,
    "description": "Base de delicada salsa italiana acompañada de jitomate deshidratado, arúgula fresca, alcaparras y jamón ibérico de excelente curación. Una armonía de sabores del viejo continente.",
    "image": "/assets/tapas-pizza-tabla.jpg",
    "tags": [
      "4 piezas",
      "Entrante"
    ],
    "pairing": "Negroni o Aperol Spritz"
  },
  {
    "id": "mar-4",
    "category": "maridajes",
    "name": "Tapa de Salmón (4 piezas)",
    "price": 210,
    "description": "Salmón sellado a las finas hierbas, servido con un dip cremoso de chipotle especiado y cebolla desflemada. Una propuesta sutilmente ahumada con matices delicados.",
    "image": "/assets/tapas-pizza-tabla.jpg",
    "tags": [
      "4 piezas",
      "Mar"
    ],
    "pairing": "Brisa del Mar / Casa Madero Chardonnay"
  },
  {
    "id": "mar-5",
    "category": "maridajes",
    "name": "Tapa Púa (4 piezas)",
    "price": 210,
    "description": "Fina combinación de manzana caramelizada y queso camembert. Un contraste entre dulzura y suavidad que seduce al paladar con cada bocado.",
    "image": "/assets/tapas-pizza-tabla.jpg",
    "tags": [
      "4 piezas",
      "Insignia"
    ],
    "pairing": "Martini Tropical / Clericot"
  },
  {
    "id": "mar-6",
    "category": "maridajes",
    "name": "Tabla de Quesos",
    "price": 375,
    "description": "Cuidadosa selección de quesos, frutas de temporada y frutos secos.",
    "image": "/assets/cava-vino-mesa.jpg",
    "tags": [
      "Para Compartir",
      "Artesanal"
    ],
    "pairing": "Casa Madero 3V"
  },
  {
    "id": "ent-1",
    "category": "entradas",
    "name": "Portobellos",
    "price": 280,
    "description": "Selección a elegir: • Gratinados con puntas de picaña y cebolla caramelizada • Horneados con mantequilla, higos, jamón serrano y miel de agave • Horneados con chimichurri y pesto, servidos con cherrys confitados, albahaca y parmesano.",
    "image": "/assets/images/material_pua/dish_7.jpg",
    "tags": [
      "3 Preparaciones",
      "Gourmet"
    ],
    "pairing": null
  },
  {
    "id": "ent-2",
    "category": "entradas",
    "name": "Espárragos",
    "price": 185,
    "description": "Envueltos en tocino, con queso parmesano y reducción de balsámico y vino tinto.",
    "image": "/assets/images/material_pua/dish_8.jpg",
    "tags": [
      "Clásico Brasa"
    ],
    "pairing": null
  },
  {
    "id": "ent-3",
    "category": "entradas",
    "name": "Betabel Rostizado",
    "price": 240,
    "description": "Gajos de betabel rostizado glaseado con reducción de balsámico, servido sobre cama de queso de cabra.",
    "image": "/assets/images/material_pua/dish_9.jpg",
    "tags": [
      "Vegetariano"
    ],
    "pairing": null
  },
  {
    "id": "ent-4",
    "category": "entradas",
    "name": "Coliflor al Huichol",
    "price": 230,
    "description": "Barnizada en alioli de huichol, montada sobre una cama de mayo de ajo rostizado.",
    "image": "/assets/images/material_pua/dish_10.jpg",
    "tags": [
      "Picante Sutil"
    ],
    "pairing": null
  },
  {
    "id": "ent-5",
    "category": "entradas",
    "name": "Chicharrón de la Ramos",
    "price": 350,
    "description": "Frito al momento, acompañado de guacamole y totopos.",
    "image": "/assets/images/material_pua/dish_11.jpg",
    "tags": [
      "Para compartir",
      "Favorito"
    ],
    "pairing": null
  },
  {
    "id": "ent-6",
    "category": "entradas",
    "name": "Tuétanos con Pulpo",
    "price": 360,
    "description": "Exquisito hueso de res horneado con salsas negras con pulpo al ajillo receta secreta de la casa, acompañado de tortillas y salsa de chile ajo.",
    "image": "/assets/tuetanos-carne-brasas.jpg",
    "tags": [
      "Tiempo de espera",
      "Imperdible",
      "Mar y Tierra"
    ],
    "pairing": null
  },
  {
    "id": "ent-7",
    "category": "entradas",
    "name": "Ola de Aguacate",
    "price": 265,
    "description": "Láminas de aguacate rellenas de refrescante encurtido tropical de salmón fresco acompañado de salsas frutales.",
    "image": "/assets/images/material_pua/dish_13.jpg",
    "tags": [
      "Tiempo de espera",
      "Fresco"
    ],
    "pairing": null
  },
  {
    "id": "ent-8",
    "category": "entradas",
    "name": "Chicharrón de Pulpo",
    "price": 350,
    "description": "Crujiente pulpo frito al momento con un toque de alioli de habanero con guacamole.",
    "image": "/assets/images/pulpo_brasa.png",
    "tags": [
      "Crujiente",
      "Mar"
    ],
    "pairing": null
  },
  {
    "id": "ent-9",
    "category": "entradas",
    "name": "Aguachile de Rib Eye",
    "price": 295,
    "description": "Rib eye sellado y bañado en salsas negras de la casa, arúgula, jalapeño, rábano sandía y cebolla encurtida.",
    "image": "/assets/images/material_pua/dish_14.jpg",
    "tags": [
      "Corte Sellado",
      "Salsas Negras"
    ],
    "pairing": null
  },
  {
    "id": "sop-1",
    "category": "sopas",
    "name": "Crema de Espárragos",
    "price": 180,
    "description": "Espárrago al dente preparado tradicionalmente con crema dulce y notas de almendra.",
    "image": "/assets/images/material_pua/dish_15.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "sop-2",
    "category": "sopas",
    "name": "Crema de Arándano Deshidratado",
    "price": 180,
    "description": "Dulce crema de arándano deshidratado especiada, con un toque crujiente de hojaldre y almendra.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "De Autor"
    ],
    "pairing": null
  },
  {
    "id": "sop-3",
    "category": "sopas",
    "name": "Sinfonía de Cremas",
    "price": 250,
    "description": "Dúo de cremas de elote y chile poblano servida en pan de masa madre y un toque de parmesano.",
    "image": "/assets/images/material_pua/dish_16.jpg",
    "tags": [
      "En Masa Madre",
      "Especialidad"
    ],
    "pairing": null
  },
  {
    "id": "sop-4",
    "category": "sopas",
    "name": "Sopa Toscana",
    "price": 250,
    "description": "Tradicional preparación de tocino, papas cambray, picaña sofrita, servida en fondo especial de la casa y crotones de parmesano.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "sop-5",
    "category": "sopas",
    "name": "Sopa de Cebolla",
    "price": 150,
    "description": "Tradicional sopa francesa de cebollas caramelizadas, acompañada de crujiente crotón gratinado con parmesano.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Tradicional"
    ],
    "pairing": null
  },
  {
    "id": "sop-6",
    "category": "sopas",
    "name": "Jugo de Carne",
    "price": 185,
    "description": "Jugo de res acompañado de hortalizas del huerto y delicados trozos de picaña de primera calidad.",
    "image": "/assets/images/material_pua/dish_17.jpg",
    "tags": [
      "Picaña Prime"
    ],
    "pairing": null
  },
  {
    "id": "ens-1",
    "category": "ensaladas",
    "name": "Ensalada de Betabel con Manzana",
    "price": 200,
    "description": "Acompañada de arúgula en vinagreta de naranja, aderezo de yogurth con eneldo y coronada con jamón serrano.",
    "image": "/assets/images/material_pua/dish_18.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "ens-2",
    "category": "ensaladas",
    "name": "Ensalada de Frutos Rojos",
    "price": 200,
    "description": "Selección de lechugas, aderezo miel mostaza, selección de frutos rojos, queso de cabra y frutos secos.",
    "image": "/assets/images/material_pua/dish_19.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "ens-3",
    "category": "ensaladas",
    "name": "César Natural",
    "price": 220,
    "description": "Selección de hojas de lechuga fresca, bañadas en su clásico aderezo, queso parmesano y crotones.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "ens-4",
    "category": "ensaladas",
    "name": "César con Pollo o Camarón",
    "price": 290,
    "description": "Clásica ensalada césar acompañada de proteína a elegir: pollo a las brasas o camarón al grill.",
    "image": "/assets/images/material_pua/dish_20.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "cor-1",
    "category": "cortes",
    "name": "Cowboy (Calidad angus 800 grs.)",
    "price": 1300,
    "description": "Corte grueso Angus con hueso, sartenado a la mantequilla de romero y asado a las brasas.",
    "image": "/assets/parrillada-brasas.jpg",
    "tags": [
      "Angus 800g",
      "Guarnición Incluida"
    ],
    "pairing": null
  },
  {
    "id": "cor-2",
    "category": "cortes",
    "name": "Porter House (Calidad angus 1100 grs.)",
    "price": 2100,
    "description": "Imponente corte que reúne New York y Tenderloin en un solo hueso en forma de T.",
    "image": "/assets/corte-filete-mignon.jpg",
    "tags": [
      "Angus 1100g",
      "Tiempo de espera",
      "Guarnición Incluida"
    ],
    "pairing": null
  },
  {
    "id": "cor-3",
    "category": "cortes",
    "name": "Tomahawk (Calidad angus 1500 grs.)",
    "price": 2700,
    "description": "El rey de la parrilla Angus, madurado y flameado a la mesa con mantequilla de finas hierbas.",
    "image": "/assets/corte-filete-mignon.jpg",
    "tags": [
      "Angus 1500g",
      "Tiempo de espera",
      "Flameado en Mesa"
    ],
    "pairing": null
  },
  {
    "id": "cor-4",
    "category": "cortes",
    "name": "Picaña (Calidad angus 400 grs.)",
    "price": 550,
    "description": "Jugosa picaña a la espada con capa de grasa crujiente y sellado perfecto.",
    "image": "/assets/images/material_pua/dish_22.jpg",
    "tags": [
      "Angus 400g",
      "Guarnición Incluida"
    ],
    "pairing": null
  },
  {
    "id": "cor-5",
    "category": "cortes",
    "name": "Arrachera (Calidad angus 400 grs.)",
    "price": 450,
    "description": "Suave arrachera marinada en hierbas y cítricos, suave y llena de jugo.",
    "image": "/assets/images/material_pua/dish_23.jpg",
    "tags": [
      "Angus 400g",
      "Guarnición Incluida"
    ],
    "pairing": null
  },
  {
    "id": "cor-6",
    "category": "cortes",
    "name": "New York (Calidad angus 400 grs.)",
    "price": 750,
    "description": "Corte clásico con intenso marmoleo Angus y sabor concentrado.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Angus 400g",
      "Guarnición Incluida"
    ],
    "pairing": null
  },
  {
    "id": "cor-7",
    "category": "cortes",
    "name": "Rib Eye (Calidad angus 550 grs.)",
    "price": 850,
    "description": "Corte suave con el marmoleo característico del Rib Eye a fuego de brasas.",
    "image": "/assets/images/steak_vino_tinto.jpg",
    "tags": [
      "Angus 550g",
      "Guarnición Incluida"
    ],
    "pairing": null
  },
  {
    "id": "pas-1",
    "category": "pastas",
    "name": "Fettuccini a la Naranja",
    "price": 350,
    "description": "En crema de naranja de la casa, atún sellado con costra de ajonjolí y espárragos.",
    "image": "/assets/images/material_pua/dish_24.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "pas-2",
    "category": "pastas",
    "name": "Fettuccini al Pesto",
    "price": 350,
    "description": "Con salmón horneado, pulpo y mix de nueces selectas.",
    "image": "/assets/images/material_pua/dish_25.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "pas-3",
    "category": "pastas",
    "name": "Fettuccini Púa",
    "price": 290,
    "description": "Salsa blanca con parmesano reggiano, puntas de arrachera y espárragos salteados.",
    "image": "/assets/images/fetuccini_pua.jpg",
    "tags": [
      "Insignia",
      "Recomendado"
    ],
    "pairing": null
  },
  {
    "id": "pas-4",
    "category": "pastas",
    "name": "Fettuccini con Camarones",
    "price": 290,
    "description": "Pasta fettuccini al dente, bañado en un cremoso bisque de camarón. Un clásico con sabor del mar.",
    "image": "/assets/images/material_pua/dish_26.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "pas-5",
    "category": "pastas",
    "name": "Pasta de Trufa",
    "price": 430,
    "description": "Pasta al dente envuelta en el perfume del aceite trufado, con nuez tostada y láminas de trufa de verano bañada con queso parmesano.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Trufa de Verano",
      "Gourmet"
    ],
    "pairing": null
  },
  {
    "id": "pas-6",
    "category": "pastas",
    "name": "Pasta Carbonara",
    "price": 350,
    "description": "Pasta con crujiente tocino y una sedosa mezcla de huevo especiado y bañada con queso parmesano.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mar-10",
    "category": "mariscos",
    "name": "Perla del Mar",
    "price": 360,
    "description": "Combinación de mariscos, pulpo, camarón y robalo sobre cama de pepino fresco y salsa confitada de habanero con toques de chiles secos.",
    "image": "/assets/images/material_pua/dish_27.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mar-11",
    "category": "mariscos",
    "name": "Carmesí",
    "price": 360,
    "description": "Mix de mariscos, pulpo, camarón y robalo servido en una salsa hecha de flor de jamaica y chiles secos servido con cebollas encurtidas.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mar-12",
    "category": "mariscos",
    "name": "Aguachile Verde de Camarón",
    "price": 295,
    "description": "Camarón encurtido en corte mariposa, cebolla morada, pepino, rábano sandía y salsa verde de aguachile.",
    "image": "/assets/images/material_pua/dish_28.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mar-13",
    "category": "mariscos",
    "name": "Tiradito de Atún",
    "price": 275,
    "description": "Opciones de preparación: • Finas láminas de atún fresco con sandía, aderezo de chipotle, cremoso de aguacate, vinagreta de tamarindo y queso de cabra. • Filete de atún en láminas, encurtido en reducción de soya/limón, arúgula, rábano sandía y ajonjolí tostado.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mar-14",
    "category": "mariscos",
    "name": "Tostadas de Robalo",
    "price": 250,
    "description": "Ceviche de robalo encurtido con piña, naranja y cilantro servido en crujiente tostada hecha en casa y un toque cremoso de aguacate.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mar-15",
    "category": "mariscos",
    "name": "Pulpo Brasa",
    "price": 585,
    "description": "Pulpo marinado con mayonesa y chipotle cocinado al grill acompañado con una salsa chili garlic.",
    "image": "/assets/images/pulpo_brasa.png",
    "tags": [
      "Al Grill",
      "Especialidad"
    ],
    "pairing": null
  },
  {
    "id": "mar-16",
    "category": "mariscos",
    "name": "Salmón en Bálsamo de Tinto",
    "price": 385,
    "description": "Horneado y barnizado en mantequilla, bañado en bálsamo de vino tinto y chiles secos, acompañado de papas cambray a las finas hierbas y vino blanco.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mar-17",
    "category": "mariscos",
    "name": "Salmón Mantequilla de Tuétano",
    "price": 385,
    "description": "Horneado con mantequilla de tuétano, puré de coliflor, y reducción de espárragos y jitomate cherry.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mar-18",
    "category": "mariscos",
    "name": "Cola de Langosta (500 grs.)",
    "price": 1550,
    "description": "Realizada con un delicado toque de vino blanco, mantequilla de finas hierbas y salsa de soya.",
    "image": "/assets/images/material_pua/dish_29.jpg",
    "tags": [
      "500 grs",
      "Tiempo de espera",
      "Premium"
    ],
    "pairing": null
  },
  {
    "id": "mar-19",
    "category": "mariscos",
    "name": "Ceviche de Coco",
    "price": 330,
    "description": "Cuadros de atún, mango y coco, en nuestra salsa de coco servidos con un cremoso de aguacate, cilantro y rábano sandía.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "esp-1",
    "category": "entradas",
    "name": "Cordero",
    "price": 620,
    "description": "3 Formas de preparación: • Cocinado en salsa de vino tinto acompañado de espárragos y cremoso de papa. • Horneado a las finas hierbas servido en cama de ensalada de arúgula y espárragos, papas y cherrys confitados acompañado de gravy de vino blanco. • Sellado en mantequilla de finas hierbas, papas cambray y portobellos salteados con salsa de mostaza y naranja agridulce.",
    "image": "/assets/images/material_pua/dish_30.jpg",
    "tags": [
      "3 Preparaciones",
      "Gourmet"
    ],
    "pairing": null
  },
  {
    "id": "esp-2",
    "category": "entradas",
    "name": "Coco Relleno",
    "price": 420,
    "description": "Coco tierno relleno con una selecta combinación de mariscos y pimientos, bañados en una suave salsa bechamel y gratinado con queso.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "esp-3",
    "category": "entradas",
    "name": "Tacos de Langosta",
    "price": 450,
    "description": "Langosta de primera calidad, en una sedosa salsa cremosa de queso crema y chipotle, acompañada con tortillas de harina y decorada con finos cacahuates.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Langosta Prime"
    ],
    "pairing": null
  },
  {
    "id": "esp-4",
    "category": "entradas",
    "name": "Beef Wellington",
    "price": 590,
    "description": "Exquisito filete mignon cocinado en mantequilla de ajo y romero, envuelto en masa hojaldre con una mezcla de semillas tostadas y suave puré de papa, finalizado con gravy de champiñones.",
    "image": "/assets/images/material_pua/dish_31.jpg",
    "tags": [
      "Tiempo de espera",
      "Hojaldre"
    ],
    "pairing": null
  },
  {
    "id": "esp-5",
    "category": "entradas",
    "name": "Wellington Púa",
    "price": 550,
    "description": "Exquisito filete mignon cocinado en mantequilla de ajo y romero, combinado con una mezcla de semillas tostadas, suave puré de papa, finalizado con gravy de champiñones y hojaldre crujiente.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Insignia"
    ],
    "pairing": null
  },
  {
    "id": "esp-6",
    "category": "entradas",
    "name": "Salmón Almendrado",
    "price": 475,
    "description": "Insólita conjugación de salmón servido sobre una crema de almendras al vino blanco, acompañado de un dúo de puré de papa y camote.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "esp-7",
    "category": "entradas",
    "name": "Rib Eye en Vino Tinto",
    "price": 650,
    "description": "Rib eye acompañado con una suave combinación de puré de chícharo y salsa de vino tinto, servido con espárragos trufados y crocante de parmesano.",
    "image": "/assets/images/steak_vino_tinto.jpg",
    "tags": [
      "Alta Cocina"
    ],
    "pairing": null
  },
  {
    "id": "esp-8",
    "category": "entradas",
    "name": "Pollo de Leche Agridulce",
    "price": 490,
    "description": "Pollo horneado relleno de frutas aromatizadas, acompañado de papas al romero y plátano confitado con salsa de frutos rojos, durazno y naranja.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Tiempo de espera"
    ],
    "pairing": null
  },
  {
    "id": "esp-9",
    "category": "entradas",
    "name": "Pollo de Leche al Coco y Anís",
    "price": 490,
    "description": "Horneado en mantequilla de hierbas y jengibre, relleno de nueces, servido con salsa cremosa de coco y anís.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Tiempo de espera"
    ],
    "pairing": null
  },
  {
    "id": "esp-10",
    "category": "entradas",
    "name": "Parrillada (Para 3 personas)",
    "price": 1500,
    "description": "Combinación de rib eye, arrachera y picaña, complementada con chiles toreados, queso fundido con chistorra, papas cambray y elote dorado.",
    "image": "/assets/images/material_pua/dish_32.jpg",
    "tags": [
      "Para 3 Personas",
      "Brasas"
    ],
    "pairing": null
  },
  {
    "id": "esp-11",
    "category": "entradas",
    "name": "Parrillada Mar y Tierra (Para 3 personas)",
    "price": 1700,
    "description": "Combinación de rib eye y arrachera con camarones al ajillo y pulpo a las brasas, complementada con chiles toreados, papas cambray y elote dorado.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Para 3 Personas",
      "Mar y Tierra"
    ],
    "pairing": null
  },
  {
    "id": "esp-12",
    "category": "entradas",
    "name": "Filete Mignon",
    "price": 450,
    "description": "Filete mignon cocinado en mantequilla de romero, bañado en salsa de vino tinto, acompañado de cremoso de papa y espárragos.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "ham-1",
    "category": "entradas",
    "name": "Clásica",
    "price": 245,
    "description": "Carne 100% de res, calidad prime importada, con pan brioche, queso manchego, tocino crispy, aderezo mayonesa, chipotle, pepinillos, lechuga y jitomate.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Res Prime"
    ],
    "pairing": null
  },
  {
    "id": "ham-2",
    "category": "entradas",
    "name": "Doble Queso",
    "price": 285,
    "description": "Queso chihuahua, parmesano con cebolla caramelizada, mayonesa chipotle, lechuga y jitomate.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Doble Queso"
    ],
    "pairing": null
  },
  {
    "id": "tac-1",
    "category": "entradas",
    "name": "Lorenzanas (2 Piezas)",
    "price": 220,
    "description": "Arrachera, chistorra y queso chihuahua sobre tortilla de maíz dorada, cebolla morada, guacamole y salsa mexicana.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "2 Piezas"
    ],
    "pairing": null
  },
  {
    "id": "tac-2",
    "category": "entradas",
    "name": "Camarones Estilo Baja (2 Piezas)",
    "price": 220,
    "description": "Tacos de camarones rebozados en tempura de cerveza, alioli chipotle, cremo aguacate en tortilla de harina.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "2 Piezas",
      "Baja Tempura"
    ],
    "pairing": null
  },
  {
    "id": "tac-3",
    "category": "entradas",
    "name": "Mar y Tierra (2 Piezas)",
    "price": 220,
    "description": "Tacos de camarón, picaña, queso chihuahua, pimiento a la plancha en tortilla de harina con costra de parmesano, acompañados de guacamole y salsa mexicana.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "2 Piezas",
      "Costra de Parmesano"
    ],
    "pairing": null
  },
  {
    "id": "pos-1",
    "category": "postres",
    "name": "Pastel de Chocolate",
    "price": 180,
    "description": "Entrecapas de chocolate cremoso con una cobertura de chocolate semi amargo y un espolvoreado de cocoa.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "pos-2",
    "category": "postres",
    "name": "Pastel de Coco",
    "price": 180,
    "description": "Entrecapas de un preparado cremoso con una mezcla de coco y nuez. Con cobertura al costado de coco rallado y nuez molida superior.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "pos-3",
    "category": "postres",
    "name": "Crocante de Zanahoria",
    "price": 180,
    "description": "Zanahoria rallada frita hasta alcanzar una textura crujiente, presentada junto a helado de vainilla, fresas frescas y un toque de cajeta.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "pos-4",
    "category": "postres",
    "name": "Brownie de Chocolate",
    "price": 240,
    "description": "Brownie de chocolate turín trufado relleno de arándanos y cerezas, con cremoso helado hecho en casa.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Chocolate Turín",
      "Helado Artesanal"
    ],
    "pairing": null
  },
  {
    "id": "pos-5",
    "category": "postres",
    "name": "Strudel",
    "price": 240,
    "description": "Crujiente masa de hojaldre rellena con la creación del día.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Tiempo de espera"
    ],
    "pairing": null
  },
  {
    "id": "inf-1",
    "category": "entradas",
    "name": "Mini Hamburguesas",
    "price": 180,
    "description": "2 pzas. De hamburguesas a base de carne de sirloin, lechuga fresca, jitomate y pepinillos servidas con papas a la francesa.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "inf-2",
    "category": "entradas",
    "name": "Mini Pastas",
    "price": 150,
    "description": "Especialidades a elegir, fettuccini PÚA o al burro.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "inf-3",
    "category": "entradas",
    "name": "Mini Pizza",
    "price": 155,
    "description": "Masa hecha en casa con salsa italiana y queso gratinado, horneada al momento. Especialidad a elegir: Hawaiana o Peperoni.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "inf-4",
    "category": "entradas",
    "name": "Tacos Mini",
    "price": 185,
    "description": "Tacos mini de arrachera acompañados de papas a la francesa.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-1",
    "category": "mixologia",
    "name": "Martini Dry",
    "price": 195,
    "description": "Todo un clásico elaborado a base de ginebra, vermouth, aceituna.",
    "image": "/assets/images/martini_bar.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-2",
    "category": "mixologia",
    "name": "Martini Swet",
    "price": 195,
    "description": "Nuestra variante de martini con un toque dulce, ginebra, vermouth rosso y cereza.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-3",
    "category": "mixologia",
    "name": "Negroni",
    "price": 195,
    "description": "Un clásico italiano, ginebra, vermouth rosso y campari.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-4",
    "category": "mixologia",
    "name": "Whisky Sour",
    "price": 195,
    "description": "Un clásico espumoso a base de whiskey bourbon, limón, aquafaba y un toque de angostura.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-5",
    "category": "mixologia",
    "name": "Aperol Spritz",
    "price": 195,
    "description": "Excelente coctel para cualquier ocasión, aperol, agua mineral y vino espumoso.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-6",
    "category": "mixologia",
    "name": "Martini Tropical",
    "price": 195,
    "description": "Toque de curacao, ginebra cítrica, piña y amaretto.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-7",
    "category": "mixologia",
    "name": "Martini Caramelo",
    "price": 195,
    "description": "Cremoso martini a base de caramelo, vodka vermouth blanco y caramelo.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-8",
    "category": "mixologia",
    "name": "Púa (Trago Insignia)",
    "price": 195,
    "description": "Elaborado en honor a nuestros más exigentes comensales; sabores enigmáticos y balance exquisito.",
    "image": "/assets/images/drinks_pua_hero.jpg",
    "tags": [
      "Trago Insignia",
      "Casa"
    ],
    "pairing": null
  },
  {
    "id": "mix-9",
    "category": "mixologia",
    "name": "Hani",
    "price": 195,
    "description": "Trago corto, semidulce, sabor a piña refrescante, tequila, limón y sal de jamaica.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-10",
    "category": "mixologia",
    "name": "Mezcal Reyes",
    "price": 195,
    "description": "Cítrico y picante, pepino macerado, sal de coco, mezcal ancho reyes y limón.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-11",
    "category": "mixologia",
    "name": "Mezcal Tiki",
    "price": 195,
    "description": "Sabor frutal con toque de avellana, mezcal de la casa, mango y piña.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-12",
    "category": "mixologia",
    "name": "Carajillo Tiki",
    "price": 200,
    "description": "Carajillo de autor con jugo de frutas, licor 43, naranja y café.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-13",
    "category": "mixologia",
    "name": "Carajillo 43",
    "price": 200,
    "description": "Elaborado con licor 43, café y canela.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-14",
    "category": "mixologia",
    "name": "Amareto Spritz",
    "price": 220,
    "description": "Sabor dulce y almendrado del amaretto con prosecco y ligero toque de naranja.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-15",
    "category": "mixologia",
    "name": "Tinto de Verano",
    "price": 210,
    "description": "Vino tinto de la casa, toque de ginebra y jugo de naranja.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-16",
    "category": "mixologia",
    "name": "Brisa del Mar",
    "price": 210,
    "description": "Vino blanco con toque agridulce y club soda de la casa.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-17",
    "category": "mixologia",
    "name": "Kalimotxo",
    "price": 210,
    "description": "Clásico español; vino tinto, dulzura y efervescencia de cola.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-18",
    "category": "mixologia",
    "name": "Whiskey Púa",
    "price": 195,
    "description": "Trago corto semidulce con Jim Beam, toque de vino tinto y durazno.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-19",
    "category": "mixologia",
    "name": "Gin Asiático",
    "price": 195,
    "description": "Infusión de té de especias orientales, notas de vainilla sobre gin tonic.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-20",
    "category": "mixologia",
    "name": "Martini Tiramisú",
    "price": 200,
    "description": "Mixología con notas de cacao y licor de almendras.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-21",
    "category": "mixologia",
    "name": "Mezcal Navarro",
    "price": 195,
    "description": "Mezcal de la casa, frutos rojos del bosque y licor ancho reyes.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-22",
    "category": "mixologia",
    "name": "Gim-Gimlet",
    "price": 195,
    "description": "Gin tonic flameado en mesa, ginebra, miel de agave y agua tónica.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Flameado en Mesa"
    ],
    "pairing": null
  },
  {
    "id": "mix-23",
    "category": "mixologia",
    "name": "St Germain Spritz",
    "price": 240,
    "description": "Sabor dulce y floral de St Germain, vino espumoso y jugo de limón.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-24",
    "category": "mixologia",
    "name": "Naked & Famous",
    "price": 240,
    "description": "Intensidad de mezcal con limón; complejo y equilibrado.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-25",
    "category": "mixologia",
    "name": "Old Cherry",
    "price": 250,
    "description": "Variante del Old Fashioned con un giro distintivo de dulzura.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-26",
    "category": "mixologia",
    "name": "Clericot",
    "price": 195,
    "description": "Vino tinto, frutas frescas de temporada y licor cítrico.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-27",
    "category": "mixologia",
    "name": "Maracuya 23",
    "price": 220,
    "description": "Ron añejo, maracuyá y balance cítrico. Fresco, tropical.",
    "image": "/assets/images/maracuya_23.jpg",
    "tags": [
      "Fresco Tropical",
      "Popular"
    ],
    "pairing": null
  },
  {
    "id": "mix-28",
    "category": "mixologia",
    "name": "Martini Jamaica",
    "price": 195,
    "description": "Jarabe de jamaica artesanal con vodka.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-29",
    "category": "mixologia",
    "name": "Gin Princesa",
    "price": 195,
    "description": "Ginebra Puerto de Indias con infusión de frutos rojos, puré natural y brocheta de frutos del bosque.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-30",
    "category": "mixologia",
    "name": "Martini de Lychee",
    "price": 220,
    "description": "Vodka y licor de flor de saúco.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "mix-31",
    "category": "mixologia",
    "name": "Sangría",
    "price": 210,
    "description": "Ginebra, refresco de jengibre y vino de la casa.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "vin-1",
    "category": "entradas",
    "name": "Casa Madero Cabernet Sauvignon",
    "price": 1600,
    "description": "Cuerpo estructurado, notas a frutos rojos maduros, pimienta negra y madera noble.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "vin-2",
    "category": "entradas",
    "name": "Casa Madero Merlot",
    "price": 1500,
    "description": "Sedoso y equilibrado con matices de ciruela, cacao y vainilla.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "vin-3",
    "category": "entradas",
    "name": "Casa Madero Shiraz",
    "price": 1500,
    "description": "Potente aromáticamente, notas especiadas, mora y final persistente.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "vin-4",
    "category": "entradas",
    "name": "Casa Madero 3V",
    "price": 1900,
    "description": "Mezcla insignia de Cabernet Sauvignon, Merlot y Tempranillo. Alta complejidad.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Recomendación Sommelier"
    ],
    "pairing": null
  },
  {
    "id": "vin-5",
    "category": "entradas",
    "name": "Casa Madero 2V",
    "price": 1400,
    "description": "Ensamble blanco de Chardonnay y Chenin Blanc. Frescura vibrante.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "vin-6",
    "category": "entradas",
    "name": "Casa Madero V",
    "price": 1200,
    "description": "Vino tinto joven, ágil, frutal y muy versátil con cortes marinados.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "vin-7",
    "category": "entradas",
    "name": "Casa Madero Chardonnay",
    "price": 1200,
    "description": "Notas cítricas, manzana verde, manzanilla y un paso suave.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [],
    "pairing": null
  },
  {
    "id": "vin-8",
    "category": "entradas",
    "name": "Selección del Mes",
    "price": 999,
    "description": "Consulta con el sommelier o mesero nuestra etiqueta mensual elegida.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Precio Especial"
    ],
    "pairing": null
  },
  {
    "id": "sin-1",
    "category": "entradas",
    "name": "Dolce Amore",
    "price": 155,
    "description": "Creación mocktail dulce con mezcla frutal.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Sin Alcohol"
    ],
    "pairing": null
  },
  {
    "id": "sin-2",
    "category": "entradas",
    "name": "Caribbean",
    "price": 155,
    "description": "Notas tropicales de piña, coco y cítricos.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Sin Alcohol"
    ],
    "pairing": null
  },
  {
    "id": "sin-3",
    "category": "entradas",
    "name": "Lychee Extravaganza",
    "price": 155,
    "description": "Infusión aromática de lychee y toques refrescantes.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Sin Alcohol"
    ],
    "pairing": null
  },
  {
    "id": "sin-4",
    "category": "entradas",
    "name": "Limonada de Coco",
    "price": 155,
    "description": "Cremosa preparación con limón y crema de coco.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Sin Alcohol"
    ],
    "pairing": null
  },
  {
    "id": "sin-5",
    "category": "entradas",
    "name": "Conga",
    "price": 80,
    "description": "Mezcla clásica de jugos frutales.",
    "image": "/assets/images/material_pua/dish_1.jpg",
    "tags": [
      "Sin Alcohol"
    ],
    "pairing": null
  }
];
