import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpeakersResult } from '../shared/speakers-result';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  private apiUrl = 'https://randomuser.me/api/';
  private seed = 'frontendcodingchallenge';
  private nat = 'us';

  constructor(private http: HttpClient) {}

  public getPage(results: number, page: number) {
    const params = {
      nat: this.nat,
      seed: this.seed,
      results,
      page,
    };
    return this.http.get<SpeakersResult>(this.apiUrl, { params });
  }
}
