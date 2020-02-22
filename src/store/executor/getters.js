export default {
  jobs: (state, getters) => {
    const { jobName } = state.jobFilter;
    if (jobName) {
      return getters.jobFilteredByName;
    }
    return getters.jobsFilteredByStatus;
  },
  reports: state => {
    return state.reports;
  },
  jobsFilteredByStatus: state => {
    const { jobStatus } = state;
    return state.jobList.filter(item => item.status === jobStatus);
  },
  countPendingJob: state => {
    const pendingJob = state.jobList.filter(item => item.status === "pending");
    return pendingJob.length;
  },
  jobFilteredByName: (state, getters) => {
    const { jobName } = state.jobFilter;
    return getters.jobsFilteredByStatus.filter(item =>
      item.name.toLowerCase().includes(jobName.toLowerCase())
    );
  },
  selectedJob: state => id => {
    return state.jobList.find(job => job.id === id);
  },
  summary: state => {
    return state.summary;
  }
};
