import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  constructor() { }

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const links = document.querySelectorAll('.clickable') as NodeListOf<HTMLElement>;
  
      links.forEach((link: HTMLElement) => {
        link.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default action of the link
          links.forEach((link: HTMLElement) => link.classList.remove('red-text')); // Remove red-text class from all links
          link.classList.add('red-text'); // Add red-text class to the clicked link
        });
      });
    });
  }
}
