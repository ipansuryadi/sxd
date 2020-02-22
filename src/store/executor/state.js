export default {
  jobFilter: {
    jobName: "",
    jobDueDateFrom: "",
    jobDueDateTo: ""
  },
  jobStatus: "pending",
  jobList: [
    {
      id: "1",
      name: "Open Job Number",
      stages: ["Project IKEA", "Operation & Production", "Pitching", "Brief"],
      dueDate: "20-10-2019",
      status: "done",
      jobNo: "XA/BSE/19/08/001",
      project: "Project IKEA 1",
      dueDate: "20 Okt 2019",
      client: "Bukan Sembarang, PT",
      jobForm: {
        q1: "",
        q2: "",
        q3: "",
        q4: ""
      }
    },
    {
      id: "2",
      name: "Draft Proposal for Venue",
      stages: ["Project IKEA", "Operation & Production", "Pitching", "Brief"],
      dueDate: "20-10-2019",
      status: "done",
      jobNo: "XA/BSE/19/08/001",
      project: "Project IKEA 1",
      dueDate: "20 Okt 2019",
      client: "Bukan Sembarang, PT",
      jobForm: {
        q1: "",
        q2: "",
        q3: "",
        q4: ""
      }
    },
    {
      id: "3",
      name: "Venue Options",
      stages: ["Project IKEA", "Operation & Production", "Pitching", "Brief"],
      dueDate: "20-10-2019",
      status: "pending",
      jobNo: "XA/BSE/19/08/001",
      project: "Project IKEA 1",
      dueDate: "20 Okt 2019",
      client: "Bukan Sembarang, PT",
      jobForm: {
        q1: "",
        q2: "",
        q3: "",
        q4: ""
      }
    },
    {
      id: "4",
      name: "Venue Price",
      stages: ["Project IKEA", "Operation & Production", "Pitching", "Brief"],
      dueDate: "20-10-2019",
      status: "pending",
      jobNo: "XA/BSE/19/08/001",
      project: "Project IKEA 1",
      dueDate: "20 Okt 2019",
      client: "Bukan Sembarang, PT",
      jobForm: {
        q1: "",
        q2: "",
        q3: "",
        q4: ""
      }
    }
  ],
  reports: [
    {
      id: 1,
      name: "a",
      page: "Page 1",
      screenShot: "content-img-1.jpg",
      isPublished: false,
      layout: "four-four",
      layoutContent: [
        {
          type: "freetext",
          content:
            "<h1>Title</h1><h3>Subtitle</h3><p></p><p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<u> ullamco laboris nisi ut aliq</u>uip ex ea commodo consequat. </p><p></p><blockquote><p>Duis aute irure dolor in reprehenderit in <em>voluptate velit esse cillum dolore eu fugiat nulla pariatur</em>. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></blockquote>"
        },
        {
          type: "table",
          content: {
            column: { code: "joblist", name: "Job List" },
            row: { code: "venue", name: "Venue" },
            joblistFields: [
              { code: "expected-audience", name: "Expected Audiens" },
              { code: "actual-audience", name: "Actual Audiens" },
              { code: "selling", name: "Selling" }
            ],
            venueFields: [
              { code: "uin", name: "Universitas Islam Negeri" },
              { code: "sman-52", name: "SMAN 52" },
              { code: "ug", name: "Universitas Gunadarma" }
            ],
            fromDate: "2019-11-01T14:14:00.000Z",
            toDate: "2019-11-12T14:14:00.000Z"
          }
        },
        {
          type: "chart",
          content: {
            chartType: { code: "line", name: "Line" },
            column: { code: "joblist", name: "Job List" },
            row: { code: "venue", name: "Venue" },
            joblistFields: [
              { code: "expected-audience", name: "Expected Audiens" },
              { code: "actual-audience", name: "Actual Audiens" },
              { code: "selling", name: "Selling" }
            ],
            venueFields: [
              { code: "uin", name: "Universitas Islam Negeri" },
              { code: "sman-52", name: "SMAN 52" },
              { code: "ug", name: "Universitas Gunadarma" }
            ],
            fromDate: null,
            toDate: null
          }
        }
      ]
    },
    {
      id: 2,
      name: "b",
      page: "Page 2",
      screenShot: "content-img-2.jpg",
      isPublished: false,
      layout: null,
      layoutContent: []
    },
    {
      id: 3,
      name: "c",
      page: "Page 3",
      screenShot: "content-img-3.jpg",
      isPublished: false,
      layout: null,
      layoutContent: []
    }
  ],
  summary: [
    {
      jobCode: "actual-audience",
      venueCode: "uin",
      value: 123
    },
    {
      jobCode: "actual-audience",
      venueCode: "sman-52",
      value: 400
    },
    {
      jobCode: "actual-audience",
      venueCode: "ug",
      value: 650
    },
    {
      jobCode: "selling",
      venueCode: "uin",
      value: 700
    },
    {
      jobCode: "selling",
      venueCode: "sman-52",
      value: 80
    },
    {
      jobCode: "selling",
      venueCode: "ug",
      value: 457
    },
    {
      jobCode: "expected-audience",
      venueCode: "uin",
      value: 338
    },
    {
      jobCode: "expected-audience",
      venueCode: "sman-52",
      value: 133
    },
    {
      jobCode: "expected-audience",
      venueCode: "ug",
      value: 100
    }
  ]
};
