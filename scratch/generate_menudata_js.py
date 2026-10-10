import json

with open("src/data/extracted_menu.json", "r", encoding="utf-8") as f:
    items = json.load(f)

categories = [
  {"id": "todos", "name": "Todo el Menú", "icon": "Utensils"},
  {"id": "maridajes", "name": "Para Maridar", "icon": "Wine"},
  {"id": "entradas", "name": "Entradas", "icon": "Sparkles"},
  {"id": "sopas", "name": "Sopas & Cremas", "icon": "Soup"},
  {"id": "ensaladas", "name": "Ensaladas", "icon": "Leaf"},
  {"id": "cortes", "name": "Cortes Prime (Angus)", "icon": "Flame"},
  {"id": "pastas", "name": "Pastas de Autor", "icon": "UtensilsCrossed"},
  {"id": "mariscos", "name": "Especialidades del Mar", "icon": "Fish"},
  {"id": "postres", "name": "Postres", "icon": "Cake"},
  {"id": "mixologia", "name": "Mixología & Cava", "icon": "GlassWater"}
]

restaurantInfo = {
  "name": "PÚA Brasa y Vino",
  "subtitle": "Menú Gastronómico Oficial",
  "tagline": "Fuego de Encino & Cava de Autor",
  "address": "Av. Presidente Masaryk, Polanco, CDMX",
  "phone": "+52 (55) 8900-7821",
  "whatsapp": "525589007821",
  "googleMapsUrl": "https://maps.google.com/?q=Polanco+CDMX",
  "hours": [
    {"days": "Lunes a Miércoles", "time": "13:00 hrs - 23:00 hrs"},
    {"days": "Jueves a Sábado", "time": "13:00 hrs - 01:00 hrs"},
    {"days": "Domingo", "time": "13:00 hrs - 20:00 hrs"}
  ]
}

js_content = f"""// Official Menu Data extracted from menu-pua.vercel.app
export const restaurantInfo = {json.dumps(restaurantInfo, ensure_ascii=False, indent=2)};

export const menuCategories = {json.dumps(categories, ensure_ascii=False, indent=2)};

export const menuItems = {json.dumps(items, ensure_ascii=False, indent=2)};
"""

with open("src/data/menuData.js", "w", encoding="utf-8") as out:
    out.write(js_content)

print("Generated src/data/menuData.js successfully!")
