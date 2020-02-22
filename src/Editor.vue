<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <span v-for="actionName in activeButtons" :key="actionName">
          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'bold'"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <icon name="bold" />
          </vs-button>
          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'italic'"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <icon name="italic" />
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'strike'"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <icon name="strike" />
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'underline'"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <icon name="underline" />
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'code'"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <icon name="code" />
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'paragraph'"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <icon name="paragraph" />
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'h1'"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            <span style="color:black">H1</span>
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'h2'"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            <span style="color:black">H2</span>
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'h3'"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            <span style="color:black">H3</span>
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'bullet_list'"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <icon name="ul" />
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'ordered_list'"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <icon name="ol" />
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'blockquote'"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <icon name="quote" />
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'code_block'"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <icon name="code" />
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'horizontal_rule'"
            @click="commands.horizontal_rule"
          >
            <icon name="hr" />
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'undo'"
            @click="commands.undo"
          >
            <icon name="undo" />
          </vs-button>

          <vs-button
            size="small"
            type="border"
            class="m-1 p-2"
            v-if="actionName === 'redo'"
            @click="commands.redo"
          >
            <icon name="redo" />
          </vs-button>
        </span>
      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import Icon from "./Icon";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from "tiptap-extensions";

export default {
  name: "editor",
  components: {
    EditorContent,
    EditorMenuBar,
    Icon
  },
  props: {
    initialContent: {
      type: String,
      required: true,
      default: "<em>editable text</em>"
    },
    activeButtons: {
      type: Array,
      validator: function(list) {
        for (let el of list) {
          // The value must match one of these strings
          if (
            [
              "bold",
              "italic",
              "strike",
              "underline",
              "code",
              "paragraph",
              "h1",
              "h2",
              "h3",
              "bullet_list",
              "ordered_list",
              "blockquote",
              "code_block",
              "horizontal_rule",
              "undo",
              "redo"
            ].indexOf(el) === -1
          ) {
            return -1;
          }
        }
        return 1;
      },
      default: ["bold", "italic"]
    }
  },
  data() {
    return {
      html: "",
      json: "",
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: this.initialContent
      })
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  created() {
    this.html = this.editor.getHTML();
    this.json = this.editor.getJSON();

    this.editor.on("update", () => {
      this.html = this.editor.getHTML();
      this.json = this.editor.getJSON();
      this.$emit("update", this.html);
    });
  }
};
</script>

<style lang="css" scoped>
</style>
