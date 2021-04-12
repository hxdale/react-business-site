import { Middleware } from 'redux';

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log('更新前: ', store.getState())
  console.log('action: ', action)
  next(action);
  console.log('更新后: ', store.getState())

}