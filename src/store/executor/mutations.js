export default {
  SET_JOB_SEARCH_QUERY(state, payload) {
    state.jobFilter = payload;
  },
  SET_JOB_STATUS(state, payload) {
    state.jobStatus = payload;
  },
  RESET_SEARCH(state) {
    state.jobFilter = {
      jobName: "",
      jobDueDateFrom: "",
      jobDueDateTo: ""
    };
  },
  SUBMIT_JOB_DETAIL(state, payload) {
    const { activeJob } = payload;
    delete payload.activeJob;
    const index = state.jobList.findIndex(item => item.id === activeJob);
    state.jobList[index].status = "done";
    state.jobList[index].jobForm = { ...payload };
  },
  UPDATE_REPORT(state, payload) {
    const index = state.reports.findIndex(o => o.id === payload.id);
    state.reports[index] = JSON.parse(JSON.stringify(payload));
  },
  UPDATE_REPORT_LAYOUT(state, payload) {
    const { reportId, newLayout } = payload;
    const index = state.reports.findIndex(o => o.id === reportId);
    state.reports[index].layout = newLayout;
  },
  UPDATE_REPORT_PUBLISHED(state, payload) {
    const index = state.reports.findIndex(o => o.id === payload.id);
    state.reports[index].isPublished = true;
  }
};
