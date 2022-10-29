import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful.service';
import { Entry } from 'contentful';
import { Article } from './article.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectArticles } from './store/articles.reducer';
import { retrievedArticleList } from './store/articles.actions';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  articles$: Observable<Entry<Article>[]> = this.store.select(selectArticles);

  articles: Entry<Article>[] = [];
  constructor(
    private contentfulService: ContentfulService,
    private store: Store
  ) {}

  ngOnInit() {
    this.contentfulService.getProducts().then((articles: Entry<Article>[]) => {
      this.articles = articles;
      this.store.dispatch(retrievedArticleList({ articles: articles }));
      console.log(articles);
    });
  }
}
