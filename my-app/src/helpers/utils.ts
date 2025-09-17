import { User } from "@/dto";
import type { Product } from '@/dto';

export const sumar = (a: number, b: number): number => {
  return a + b;
};

export const multiplicar = (a: number, b: number): number => {
  return a * b;
};

export const restar = (a: number, b: number): number => {
  return a - b;
};

export const Users: User[] = [
    {
        name: "Juan",
        password: "12345",
        email: "juan@example.com"
    }, {
        name: "Maria",
        password: "25",
        email: "maria@example.com"
    }, {
        name: "Pedro",
        password: "35",
        email: "pedro@example.com"
    }
];



export const PRODUCTS: Product[] = [
  {
    id: 'p-001',
    name: 'wireless mouse pro',
    brand: 'acme',
    quantity: 35,
    price: { amount: 29_99, currency: 'USD' },
    isActive: true,
    specs: { color: 'gray' },
  },
  {
    id: 'p-002',
    name: 'mechanical keyboard tkl',
    brand: 'keyworld',
    quantity: 0,
    price: { amount: 89_99, currency: 'USD' },
    isActive: false,
  },
];

// Capitaliza la primera letra de cada palabra
export function capitalize(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Convierte un texto a minúsculas de forma segura
export function toLowerCaseSafe(text: string | null | undefined): string {
  return text ? text.toLowerCase() : '';
}

// Recorta un texto si es demasiado largo y agrega "..."
export function truncate(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}

// Formatea precios según su moneda
export function formatPrice(amount: number, currency: 'COP' | 'USD'): string {
  if (currency === 'COP') {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(amount);
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount / 100);
}