import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { NgIf, NgForOf, NgStyle } from '@angular/common';
import { ProductListComponent } from '../../Core/container/product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, NgForOf, NgStyle],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  loading = true;
  colors: string[] = [];
  sizes: string[] = [];
  @Input() productListComp: ProductListComponent = undefined;
  product: any ;
  
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

  if (this.productListComp?.selectedProduct) {
    this.product = this.productListComp.selectedProduct;
    this.colors = this.product.colors?.split(',').map((c: string) => c.trim().toLowerCase());
    this.sizes = this.product.sizes?.split(',').map((s: string) => s.trim());
    this.loading = false;
    return;
  }


  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.productService.getProductById(+id).subscribe({
      next: (data) => {
        this.product = data;
        this.loading = false;
        this.colors = data.colors
          .split(',')
          .map((c: string) => c.trim().toLowerCase());
        
        this.sizes = data.sizes
          ?.split(',')
          .map((s: string) => s.trim());
      },
      error: (err) => {
        console.error('error:', err);
        this.loading = false;
      }
    });
  }
}

}
