
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
}

export const categories: Category[] = [
  {
    id: "makeup-rooms",
    name: "Гримерные комнаты",
    description: "Просторные и функциональные гримерки различных размеров с профессиональным освещением",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "furniture",
    name: "Мебель для съемок",
    description: "Стильная и функциональная мебель для оформления съемочных площадок и декораций",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lighting",
    name: "Освещение",
    description: "Профессиональное осветительное оборудование для создания нужной атмосферы",
    image: "https://images.unsplash.com/photo-1565896311009-382b9e813b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "accessories",
    name: "Аксессуары",
    description: "Дополнительные элементы для комфортной работы съемочной группы",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const products: Product[] = [
  // Гримерные комнаты
  {
    id: "makeup-room-standard",
    name: "Стандартная гримерка",
    description: "Функциональная гримерная комната с комфортным освещением и местом для 2-3 человек",
    price: 15000,
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "makeup-rooms",
    tags: ["стандарт", "компактная"]
  },
  {
    id: "makeup-room-premium",
    name: "Премиум гримерка",
    description: "Расширенная гримерка с профессиональным LED-освещением, зеркалами и местом для 5-6 человек",
    price: 25000,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "makeup-rooms",
    tags: ["премиум", "просторная"]
  },
  {
    id: "makeup-room-mobile",
    name: "Мобильная гримерка",
    description: "Компактная передвижная гримерная, идеальная для локаций вне студии",
    price: 12000,
    image: "https://images.unsplash.com/photo-1568385247005-0d371d214a2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "makeup-rooms",
    tags: ["мобильная", "компактная"]
  },

  // Мебель для съемок
  {
    id: "sofa-retro",
    name: "Ретро диван",
    description: "Винтажный диван в стиле 70-х годов, идеален для исторических съемок",
    price: 8000,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "furniture",
    tags: ["диван", "ретро", "винтаж"]
  },
  {
    id: "chair-director",
    name: "Режиссерское кресло",
    description: "Классическое режиссерское кресло с вышитым именем",
    price: 3500,
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "furniture",
    tags: ["кресло", "режиссерское"]
  },
  {
    id: "table-makeup",
    name: "Гримерный стол",
    description: "Профессиональный стол для гримера с ящиками и подсветкой",
    price: 7000,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "furniture",
    tags: ["стол", "гримерный"]
  }
];
