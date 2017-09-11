import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlBusqueda:string = 'https://api.spotify.com/v1/search';
  urlArista:string = 'https://api.spotify.com/v1/artists';
  token:string = 'Bearer BQAtenERIuzkDLxe3DCyBrMtvT6mrR4OrEHb0MEq77Wpfxv8wKmqe2FasntFHe6j6iO6JwG_mIPty7qJiDYdJA';
  constructor(private http: Http) {
  }

  getArtistas(termino: string) {

    let headers = new Headers();
    headers.append('authorization', this.token);

    let query: string = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, {headers})
      .map(res => {
        this.artistas = res.json().artists.items;
        console.log(  this.artistas );
        // return this.artistas;
      });

  }

  getArtista(id: string) {

    let headers = new Headers();
    headers.append('authorization', this.token);

    let query: string = `/${ id }`;
    let url = this.urlArista + query;

    return this.http.get(url, {headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      });

  }

  getTop(id: string) {

    let headers = new Headers();
    headers.append('authorization', this.token);

    let query: string = `/${ id }/top-tracks?country=US`;
    let url = this.urlArista + query;

    return this.http.get(url, {headers})
      .map(res => {
        console.log(res.json());
        return res.json().tracks;
      });

  }



}
