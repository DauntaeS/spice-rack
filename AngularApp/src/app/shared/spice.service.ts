import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

import { Spice } from './spice.model';

@Injectable({
  providedIn: 'root'
})
export class SpiceService {
  selectedSpice: Spice = new Spice;
  spices: Spice[] = [];
  readonly baseURL = 'http://localhost:3000/spices';

  constructor(private http: HttpClient) { }

  postSpice(spc : Spice){
    return this.http.post(this.baseURL, spc);
  }

}
