import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;
    const HEADERS = new HttpHeaders({
      'Authorization': 'Bearer BQB80Wa0HC9LjDI8B_jhRvouAvM4oHek7OxfktAzEIJXTk70yVHIWcv7pgK04oJEJPPJ0Y-LfRNJqwZp3Ig'
    });

    return this.http.get(URL, { headers: HEADERS });
  }

  getNewRelases() {

    return this.getQuery('browse/new-releases?limit=21')
      .pipe(map(data => data['albums'].items));
  }

  getArtists(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=21`)
      .pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTrack(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }
}
