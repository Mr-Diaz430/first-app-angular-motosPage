import { Injectable } from '@angular/core';

export interface Product{ 
  id: number,
  nombre: string,
  descripcion: string,
  precio: number,
  imagen: string
}

@Injectable({
  providedIn: 'root',
})

export class ProductsService {
  private products: Product[] = [
    { id: 1, nombre: 'Honda Transalp', 
      descripcion: 'Ideal para ciudad',
      precio: 6500, 
      imagen: '/img/moto-bike-1.jpg' 
    },
    { id: 2, 
      nombre: 'Kawasaki 600',   
      descripcion: 'Potente y elegante', 
      precio: 9200, 
      imagen: '/img/moto-bike-2.jpg' 
    },
    { id: 3, 
      nombre: 'Kawasaki KX 250', 
      descripcion: 'Moderna y económica', 
      precio: 3900, 
      imagen: '/img/moto-bike-3.jpg' },
    { id: 4, 
      nombre: 'Suzuki 1200', 
      descripcion: 'Moderna y económica', 
      precio: 13900, 
      imagen: '/img/moto-bike-4.jpg' 
    }
  ]

  getProducts() : Product[] {
    return this.products
  }
}
