import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;

    this.route.params.subscribe(
      resp => {
        this.getTopTracks(resp['id']);
        this.spotify.getArtist(resp['id'])
          .subscribe(
            resp => {
              this.artista = resp;
              this.loading = false;
            }, err => console.log(err)
          );
      }, err => console.log(err)
    );
  }

  getTopTracks(id: string) {
    this.spotify.getTopTrack(id)
      .subscribe(
        resp => {
          console.log(resp);
          this.topTracks = resp;
        }, err => console.log(err)
      );
  }

}
