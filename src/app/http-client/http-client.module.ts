import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class HttpClientModule { 

  HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService,
    { dataEncapsulation: false } )
}
