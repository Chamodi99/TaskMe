import { Component,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-weekly',
  standalone: true,
  imports: [],
  templateUrl: './add-weekly.component.html',
  styleUrl: './add-weekly.component.css'
})
export class AddWeeklyComponent implements AfterViewInit {
  constructor(private router: Router) { }

  ngAfterViewInit(): void {
   
      const links = document.querySelectorAll('.clickable') as NodeListOf<HTMLElement>;
  
      links.forEach((link: HTMLElement) => {
        link.addEventListener('click', (event) => {
          event.preventDefault(); 
          links.forEach((link: HTMLElement) => link.classList.remove('red-text')); 
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

