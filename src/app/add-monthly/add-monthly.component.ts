import { Component ,AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-monthly',
  standalone: true,
  imports: [],
  templateUrl: './add-monthly.component.html',
  styleUrl: './add-monthly.component.css'
})
export class AddMonthlyComponent  implements AfterViewInit {
  constructor(private router: Router) { }


  ngAfterViewInit(): void {
   
      const links = document.querySelectorAll('.clickable') as NodeListOf<HTMLElement>;
  
      links.forEach((link: HTMLElement) => {
        link.addEventListener('click', (event) => {
          event.preventDefault(); 
          links.forEach((link: HTMLElement) => link.classList.remove('red-text')); // Remove red-text class from all links
          link.classList.add('red-text'); 
          const routePath = link.getAttribute('data-route'); 
          if (routePath) {
            this.router.navigate([routePath]);
          }
        });
      }
    );
    };
  values = '';

  onKey(event: any) { 
    this.values += event.target.value + ' ';
  }
}


