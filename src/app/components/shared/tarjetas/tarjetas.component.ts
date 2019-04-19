import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  viewArtist(item: any) {
    let id;

    if (item.type === 'artist') {
      id = item.id;
    } else {
      id = item.artists[0].id;
    }

    this.router.navigate(['/artist', id]);
  }

}
