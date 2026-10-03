import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Producto } from '../producto';

@Component({
  selector: 'app-productos',
  imports: [MatTableModule, NgOptimizedImage, CommonModule],
  templateUrl: './productos.component.html',
  standalone: true,
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {
  displayedColumns: string[] = ['name', 'precio', 'imagen'];
  ProductoService = inject(ProductoService);
  productos: Producto[] = []; // Aquí se guardarán los productos
  ngOnInit(): void {
    this.productos = this.ProductoService.getProductos(); // Aquí cargamos los productos
  }
}
