import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchMoviesReject, fetchMoviesSuccess } from './index';
import fetchMovies from '../../utils/fetchMovies';

function* workMoviesFetch() {
  try {
    const response = yield call(fetchMovies);
    yield put(fetchMoviesSuccess(response));
  } catch (error) {
    yield put(fetchMoviesReject('Hmm... Looks like there is some network issue!!\n \nErro no request \n'));
  }
}

export function* moviesSaga() {
  yield takeEvery('movies/fetchMovies', workMoviesFetch);
}
