import { Component, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from
'@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-inmemory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]  
})

@NgModule({ imports:
  [ HttpClientModule, ],
  })

export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  title = 'Tour of Heroes';
}

