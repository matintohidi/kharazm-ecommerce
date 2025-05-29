export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  discount: number
  image?: string
  category: string
  rating: number
  reviewCount: number
  colors?: { name: string; value: string }[]
  sizes?: string[]
}

// Mock products data
const products: Product[] = [
  {
    id: "1",
    name: "گوشی موبایل سامسونگ گلکسی S23 Ultra",
    description: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra با ظرفیت 256 گیگابایت و رم 12 گیگابایت",
    price: 45000000,
    originalPrice: 49000000,
    discount: 8,
    image: "/placeholder.svg?height=600&width=600&text=S23+Ultra",
    category: "electronics",
    rating: 4.8,
    reviewCount: 124,
    colors: [
      { name: "مشکی", value: "#000000" },
      { name: "سبز", value: "#2e8b57" },
      { name: "کرم", value: "#f5f5dc" },
    ],
  },
  {
    id: "2",
    name: "لپ تاپ اپل مک‌بوک پرو",
    description: "لپ تاپ 14 اینچی اپل مدل MacBook Pro با تراشه M2 Pro و حافظه 16 گیگابایت",
    price: 85000000,
    originalPrice: 92000000,
    discount: 8,
    image: "/placeholder.svg?height=600&width=600&text=MacBook+Pro",
    category: "electronics",
    rating: 4.9,
    reviewCount: 86,
    colors: [
      { name: "نقره‌ای", value: "#c0c0c0" },
      { name: "خاکستری", value: "#808080" },
    ],
  },
  {
    id: "3",
    name: "هدفون بی‌سیم سونی WH-1000XM5",
    description: "هدفون روگوشی بی‌سیم سونی مدل WH-1000XM5 با حذف نویز فعال و کیفیت صدای فوق‌العاده",
    price: 12500000,
    originalPrice: 15000000,
    discount: 17,
    image: "/placeholder.svg?height=600&width=600&text=Sony+WH-1000XM5",
    category: "electronics",
    rating: 4.7,
    reviewCount: 215,
    colors: [
      { name: "مشکی", value: "#000000" },
      { name: "سفید", value: "#ffffff" },
    ],
  },
  {
    id: "4",
    name: "کفش ورزشی نایک ایر مکس",
    description: "کفش ورزشی مردانه نایک مدل Air Max با طراحی مدرن و راحتی فوق‌العاده",
    price: 3200000,
    originalPrice: 3800000,
    discount: 16,
    image: "/placeholder.svg?height=600&width=600&text=Nike+Air+Max",
    category: "fashion",
    rating: 4.5,
    reviewCount: 320,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "مشکی", value: "#000000" },
      { name: "سفید", value: "#ffffff" },
      { name: "آبی", value: "#0000ff" },
    ],
  },
  {
    id: "5",
    name: "ساعت هوشمند اپل واچ سری 8",
    description: "ساعت هوشمند اپل واچ سری 8 با صفحه نمایش همیشه روشن و قابلیت‌های سلامتی پیشرفته",
    price: 18500000,
    originalPrice: 20000000,
    discount: 8,
    image: "/placeholder.svg?height=600&width=600&text=Apple+Watch+S8",
    category: "electronics",
    rating: 4.6,
    reviewCount: 178,
    colors: [
      { name: "نقره‌ای", value: "#c0c0c0" },
      { name: "مشکی", value: "#000000" },
      { name: "قرمز", value: "#ff0000" },
    ],
  },
  {
    id: "6",
    name: "کیف چرم دستی",
    description: "کیف چرم طبیعی دست‌دوز با طراحی کلاسیک و جادار",
    price: 2800000,
    originalPrice: 3500000,
    discount: 20,
    image: "/placeholder.svg?height=600&width=600&text=Leather+Bag",
    category: "fashion",
    rating: 4.4,
    reviewCount: 95,
    colors: [
      { name: "قهوه‌ای", value: "#8b4513" },
      { name: "مشکی", value: "#000000" },
    ],
  },
  {
    id: "7",
    name: "دوربین عکاسی کانن EOS R5",
    description: "دوربین بدون آینه فول فریم کانن مدل EOS R5 با رزولوشن 45 مگاپیکسل و فیلمبرداری 8K",
    price: 125000000,
    originalPrice: 135000000,
    discount: 7,
    image: "/placeholder.svg?height=600&width=600&text=Canon+EOS+R5",
    category: "electronics",
    rating: 4.9,
    reviewCount: 64,
  },
  {
    id: "8",
    name: "عطر مردانه دیور ساواج",
    description: "عطر مردانه دیور مدل Sauvage با رایحه خنک و ماندگاری بالا",
    price: 4500000,
    originalPrice: 4500000,
    discount: 0,
    image: "/placeholder.svg?height=600&width=600&text=Dior+Sauvage",
    category: "beauty",
    rating: 4.7,
    reviewCount: 210,
  },
]

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  // In a real app, this would fetch from an API or database
  return products
}

// Get featured products
export async function getFeaturedProducts(): Promise<Product[]> {
  // In a real app, this would fetch from an API or database
  return products.slice(0, 4)
}

// Get product by ID
export async function getProductById(id: string): Promise<Product | undefined> {
  // In a real app, this would fetch from an API or database
  return products.find((product) => product.id === id)
}

// Get related products
export async function getRelatedProducts(category: string): Promise<Product[]> {
  // In a real app, this would fetch from an API or database
  return products.filter((product) => product.category === category).slice(0, 4)
}
