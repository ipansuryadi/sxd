<template>
  <div>
    <div>
      <h4>
        Period {{ data.fromDate | moment("DD MMMM YYYY")
        }}
        <span class="px-5">-</span>
        {{ data.toDate | moment("DD MMMM YYYY") }}
      </h4>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <vs-table :data="summary">
          <template slot="thead">
            <vs-th class="text-success"></vs-th>
            <vs-th v-for="(header, index) in table('columnHeader')" :key="index">{{ header.name }}</vs-th>
          </template>
          <template slot-scope="{ summary }">
            <vs-tr v-for="(y, idy) in table('rowHeader')" :key="idy">
              <vs-td>{{ y.name }}</vs-td>
              <vs-td v-for="(x, idx) in table('columnHeader')" :key="idx">
                {{
                displayValue(x.code, y.code)
                }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data", "summary"],
  methods: {
    table(type) {
      let columnHeader;
      let rowHeader;
      if (this.data.column.code === "joblist") {
        columnHeader = this.data.joblistFields;
        rowHeader = this.data.venueFields;
      } else {
        columnHeader = this.data.venueFields;
        rowHeader = this.data.joblistFields;
      }
      return type === "columnHeader" ? columnHeader : rowHeader;
    },
    displayValue(x, y) {
      const jobCode = this.data.column.code === "joblist" ? x : y;
      const venueCode = this.data.column.code === "venue" ? x : y;
      const obj = this.summary.find(o => {
        return o.jobCode === jobCode && o.venueCode === venueCode;
      });
      return (obj && obj.value) || 0;
    }
  }
};
</script>
