const state = {
  pageAuthData: []
};
const mutations = {
  SET_PAGE_AUTH: (state: any, pageAuthData: any) => {
    state.pageAuthData = pageAuthData;
  }
};

const actions = {
  
};
const getters = {
    pageAuthData: (state:any) => state.pageAuthData
}
export default {
  state,
  mutations,
  actions
};