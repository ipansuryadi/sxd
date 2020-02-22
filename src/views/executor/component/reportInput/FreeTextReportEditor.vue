<template>
  <div>
    <div style="height:450px">
      <editor
        @update="test"
        :initialContent="content.content"
        v-bind:activeButtons="['bold','italic','strike','underline',
        'code','paragraph','h1','h2','h3','bullet_list',
        'ordered_list','blockquote','code_block',
        'horizontal_rule','undo','redo']"
      />
    </div>
    <div class="flex justify-between">
      <vs-button class="btnx" color="warning" @click="$emit('reset')">Reset</vs-button>
      <vs-button class="btnx" color="success" @click="$emit('save',result)">Save</vs-button>
    </div>
  </div>
</template>

<script>
import Editor from "@/Editor.vue";

export default {
  props: ["content"],
  components: {
    Editor
  },
  data() {
    return {
      result: ""
    };
  },
  methods: {
    test(a) {
      this.result = a;
    }
  },
  mounted() {
    console.log("pucuk", this.content);
  }
};
</script>
