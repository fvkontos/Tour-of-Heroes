import { Injectable } from '@angular/core';

@Injectable()
export class PostheroService {

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero,
    this.httpOptions).pipe(
    tap((newHero: Hero) => this.log(`added hero w/
    id=${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero')) ); }
    
  constructor() { }

}