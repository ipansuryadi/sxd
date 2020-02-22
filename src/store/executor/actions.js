export default {
  setJobSearchQuery({ commit }, payload) {
    commit("SET_JOB_SEARCH_QUERY", payload);
  },
  setJobStatus({ commit }, payload) {
    commit("SET_JOB_STATUS", payload);
  },
  resetSearch({ commit }) {
    commit("RESET_SEARCH");
  },
  submitJobDetail({ commit }, payload) {
    commit("SUBMIT_JOB_DETAIL", payload);
  },
  updateReport({ commit }, payload) {
    commit("UPDATE_REPORT", payload);
  },
  updateReportLayout({ commit }, payload) {
    commit("UPDATE_REPORT_LAYOUT", payload);
  },
  updateReportPublished({ commit }, payload) {
    commit("UPDATE_REPORT_PUBLISHED", payload);
  }
};
