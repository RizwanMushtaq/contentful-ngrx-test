import { createAction, props, State } from '@ngrx/store';
import { Entry } from 'contentful';
import { Article } from '../article.model';

export const retrievedArticleList = createAction(
  '[Article List/API] Retrieve Articles Success',
  props<{ articles: Entry<Article>[] }>()
);
