export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';

export interface SetPageTitleAction {
  type: typeof SET_PAGE_TITLE;
  payload: string;
}

export const setPageTitle = (title: string): SetPageTitleAction => ({
  type: SET_PAGE_TITLE,
  payload: title,
});

export type PageActionTypes = SetPageTitleAction;
