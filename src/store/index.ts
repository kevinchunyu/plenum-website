import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/types';
import { profile } from '@/store/modules/profile/profile';
import { menuTree } from '@/store/modules/menuTree/menuTree';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0', // a simple property
    },
    modules: {
        profile,
        menuTree,
    },
};

export default new Vuex.Store<RootState>(store);
