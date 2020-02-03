import { combineReducers } from 'redux';
import count from './count'; //←countを結合(combine)する

export default combineReducers({ count }) //storeを作るために、export する。

/** Actionに定義されたTypeに応じて、
 * どのような処理（反応）を行うかを定義するオブジェクトが、Reducer。
 * 
 * 本ファイル（index.js）は、Reducerのトップレベルにあたるオブジェクトになる。
 * アプリケーションに配置されているreducerを総括する。
 */