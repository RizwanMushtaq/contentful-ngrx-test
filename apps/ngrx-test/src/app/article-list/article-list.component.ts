import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { Article } from '../article.model';

@Component({
  selector: 'test-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Entry<Article>[] | null = [];

  ngOnInit(): void {
    console.log(this.articles);
  }
}
