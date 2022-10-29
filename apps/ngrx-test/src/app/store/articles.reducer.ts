import { Entry } from 'contentful';
import { Article } from '../article.model';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { retrievedArticleList } from './articles.actions';

export const initialState: Entry<Article>[] = [];

export const articlesReducer = createReducer(
  initialState,
  on(retrievedArticleList, (state, { articles }) => articles)
);

export const selectArticles =
  createFeatureSelector<Entry<Article>[]>('articles');
