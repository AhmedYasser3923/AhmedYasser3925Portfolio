import { Component, AfterViewInit } from '@angular/core';

declare var Isotope: any; // Declare Isotope if using global script

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const grid = document.querySelector('.isotope-container');
    if (grid) {
      const iso = new Isotope(grid, {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry'
      });

      const filtersElem = document.querySelector('.portfolio-filters');
      if (filtersElem) {
        const buttons = filtersElem.querySelectorAll('li');
        buttons.forEach((button: Element) => {
          button.addEventListener('click', function () {
            const filterValue = button.getAttribute('data-filter') || '*';
            iso.arrange({ filter: filterValue });

            // remove 'filter-active' from all buttons
            buttons.forEach(btn => btn.classList.remove('filter-active'));
            button.classList.add('filter-active');
          });
        });
      }
    }
  }
}
