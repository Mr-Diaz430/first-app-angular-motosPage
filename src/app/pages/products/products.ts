import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService, Product } from '../../services/products-service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  private productsService = inject(ProductsService);
  productos: Product[] = this.productsService.getProducts();
}

