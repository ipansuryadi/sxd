export default {
    filteredJobLists: state => state.jobLists.filter((jobList) => {
        if (state.jobList_filter == 'selling') return jobList.type.includes("Selling") && ( jobList.name.toLowerCase().includes(state.jobListSearchQuery.toLowerCase()) );
        if (state.jobList_filter == 'sampling') return jobList.type.includes("Sampling") && ( jobList.name.toLowerCase().includes(state.jobListSearchQuery.toLowerCase()) );
        if (state.jobList_filter == 'guerilla') return jobList.type.includes("Guerilla") && ( jobList.name.toLowerCase().includes(state.jobListSearchQuery.toLowerCase()) );
        if (state.jobList_filter == 'education') return jobList.type.includes("Education") && ( jobList.name.toLowerCase().includes(state.jobListSearchQuery.toLowerCase()) );
        if (state.jobList_filter == 'exhibition') return jobList.type.includes("Exhibition") && ( jobList.name.toLowerCase().includes(state.jobListSearchQuery.toLowerCase()) );
        if (state.jobList_filter == 'special_exhibition') jobList.type.includes("Special Exhibition") && ( jobList.name.toLowerCase().includes(state.jobListSearchQuery.toLowerCase()) );
        if (state.jobList_filter == 'thematic_event') jobList.type.includes("Thematic Event") && ( jobList.name.toLowerCase().includes(state.jobListSearchQuery.toLowerCase()) );
        if (state.jobList_filter == 'gathering') jobList.type.includes("Gathering") && ( jobList.name.toLowerCase().includes(state.jobListSearchQuery.toLowerCase()) );
        if (state.jobList_filter == 'launching') jobList.type.includes("Launching") && ( jobList.name.toLowerCase().includes(state.jobListSearchQuery.toLowerCase()) );
        if (state.jobList_filter == 'mice') jobList.type.includes("MICE") && ( jobList.name.toLowerCase().includes(state.jobListSearchQuery.toLowerCase()) );
    }).reverse(),
    getMail: state => (jobListId) => state.jobLists.filter((jobList) => jobList.id == jobListId)[0],
}