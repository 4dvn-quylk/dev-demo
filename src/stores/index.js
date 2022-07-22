import { createStore } from './store';

export const initialStore = { user: undefined, listVideos: [] };

export const AppStore = createStore(initialStore);
export const useAppStore = AppStore.useStore;
