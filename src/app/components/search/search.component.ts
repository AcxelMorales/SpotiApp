import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  search(termino: string) {
    this.loading = true;
    this.spotify.getArtists(termino)
      .subscribe(
        resp => {
          this.artistas = resp
          this.loading = false;
        }, err => console.log(err)
      );
  }

}
