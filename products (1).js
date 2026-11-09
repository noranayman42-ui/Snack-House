// =====================================================
//  ملف المنتجات والأقسام — Snack House
//  الأسهل: افتح admin.html، ضيف/عدّل، وحمّل الملف ده جاهز.
//  (ولو حبيت تعدل بإيدك: كل منتج سطر واحد)
// =====================================================

const categories = [
  {"name":"شوكولاتة","emoji":"🍫"},
  {"name":"حلوى","emoji":"🍬"},
  {"name":"بسكويت","emoji":"🍪"},
  {"name":"هدايا","emoji":"🎁"},
];

const products = [
  {"id":8,"name":"Swissfru Dark Chocolate with Hazelnuts Cream","origin":"","image":"IMAGES/photo_7_2026-11-09_03-29-58.jpg","price":115,"desc":"شوكولاتة داكنة فاخرة مع كريمة البندق الذائبة والكرسبي","category":"شوكولاتة"},
  {"id":7,"name":"Swissfru Dark Chocolate Whole Hazelnuts","origin":"","image":"IMAGES/photo_4_2026-11-09_03-29-58.jpg","price":115,"desc":"شوكولاتة داكنة محشوة بحبات البندق الكاملة المقرمشة","category":"شوكولاتة"},
  {"id":1,"name":"Swissfru Milk Chocolate Whole Hazelnuts","origin":"","image":"IMAGES/photo_6_2026-11-09_03-29-58.jpg","price":115,"desc":"شوكولاتة الحليب الفاخرة بحبات البندق الكاملة المحمصة","category":"شوكولاتة"},
  {"id":2,"name":"Swissfru Dark Chocolate with Pistachio Cream","origin":"","image":"IMAGES/photo_3_2026-11-09_03-29-58.jpg","price":115,"desc":"شوكولاتة داكنة غنية بحشوة كريمة الفستق الفاخرة والكرسبي المقرمش","category":"شوكولاتة"},
  {"id":3,"name":"Swissfru Dark Chocolate with Strawberry Cream","origin":"","image":"IMAGES/photo_5_2026-11-09_03-29-58.jpg","price":115,"desc":"شوكولاتة داكنة مميزة محشوة بكريمة الفراولة اللذيذة والكرسبي","category":"شوكولاتة"},
  {"id":4,"name":"Swissfru Milk Chocolate Whole Almond","origin":"","image":"IMAGES/photo_2_2026-11-09_03-29-58.jpg","price":115,"desc":"شوكولاتة الحليب الناعمة مع حبات اللوز الكاملة والمقرمشة","category":"شوكولاتة"},
  {"id":5,"name":"Swissfru Dark Chocolate Whole Almond","origin":"","image":"IMAGES/photo_8_2026-11-09_03-29-58.jpg","price":115,"desc":"شوكولاتة داكنة فاخرة مع قطع اللوز المقرمش الغنية","category":"شوكولاتة"},
  {"id":6,"name":"Swissfru Milk Chocolate with Strawberry Cream","origin":"","image":"IMAGES/photo_1_2026-11-09_03-29-58.jpg","price":115,"desc":"شوكولاتة الحليب الغنية بحشوة كريمة الفراولة الطازجة والكرسبي.","category":"شوكولاتة"},
];
