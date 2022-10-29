import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { ArticleListComponent } from './article-list/article-list.component';
import { StoreModule } from '@ngrx/store';
import { articlesReducer } from './store/articles.reducer';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, ArticleListComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      articles: articlesReducer,
    }),
    // for debugging enable this instrument in development mode
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent],
})
export class AppModule {}
