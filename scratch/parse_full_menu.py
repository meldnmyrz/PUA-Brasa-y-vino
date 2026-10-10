import re
import json

file_path = r"C:\Users\alina\.gemini\antigravity\brain\0404b0d5-60f1-4389-b628-413f03f2244d\.system_generated\steps\968\content.md"

with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

# Match item objects
raw_items = re.findall(r'\{id:`([^`]+)`,name:`([^`]+)`,price:(\d+),description:`([^`]+)`([^}]*)\}', text)

print(f"FOUND {len(raw_items)} ITEMS")

parsed_items = []
for item_id, name, price, desc, extra in raw_items:
    # Extract image if present
    img_match = re.search(r'image:`([^`]+)`', extra)
    img = img_match.group(1) if img_match else "/assets/images/material_pua/dish_1.jpg"
    
    # Extract tags
    tags_match = re.search(r'tags:\[([^\]]+)\]', extra)
    tags = [t.replace('`','').strip() for t in tags_match.group(1).split(',')] if tags_match else []
    
    # Extract pairing
    pair_match = re.search(r'pairing:`([^`]+)`', extra)
    pairing = pair_match.group(1) if pair_match else None
    
    cat = "entradas"
    if item_id.startswith("mar-"): cat = "maridajes" if int(item_id.split("-")[1]) <= 6 else "mariscos"
    elif item_id.startswith("ent-"): cat = "entradas"
    elif item_id.startswith("sop-"): cat = "sopas"
    elif item_id.startswith("ens-"): cat = "ensaladas"
    elif item_id.startswith("cor-"): cat = "cortes"
    elif item_id.startswith("pas-"): cat = "pastas"
    elif item_id.startswith("pos-"): cat = "postres"
    elif item_id.startswith("mix-") or item_id.startswith("beb-"): cat = "mixologia"
    
    obj = {
        "id": item_id,
        "category": cat,
        "name": name,
        "price": int(price),
        "description": desc,
        "image": img,
        "tags": tags,
        "pairing": pairing
    }
    parsed_items.append(obj)

with open(r"C:\Users\alina\Downloads\PUA BRASA Y VINO\src\data\extracted_menu.json", "w", encoding="utf-8") as out:
    json.dump(parsed_items, out, ensure_ascii=False, indent=2)

print("Saved extracted_menu.json with", len(parsed_items), "dishes!")
