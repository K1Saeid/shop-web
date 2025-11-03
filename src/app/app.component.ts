import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from "./top-header/top-header.component";
import { ContainerComponent } from "./container/container.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TopHeaderComponent, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-web';
}

