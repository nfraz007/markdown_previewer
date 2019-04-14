<template>
  <div class="markdown">
    <div class="container-fluid">
      <div class="gap"></div>
      <div class="row">
        <div class="col-md-6"><p>Markdown</p></div>
        <div class="col-md-6"><p>Preview<span class="float-right">Words : {{words}} | Characters : {{characters}}</span></p></div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <textarea class="markdown-input" v-model="markdown" rows="20"></textarea>
        </div>
        <div class="col-md-6">
          <div class="markdown-output" :key="markdown" v-markdown>{{ markdown }}</div>
        </div>
      </div>
      <div class="gap"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Markdown',
  data() {
    return {
      words: 0,
      characters: 0,
      markdown: (localStorage.markdown) ? localStorage.markdown : "# h1 heading\n## h2 heading\n### h3 heading\n#### h4 heading\n##### h5 heading\n###### h6 heading\n **bold**\n *italic*\n* list 1\n* list 2\n> quatation\nthis is link [my portfolio](http://nfraz.co.nf)\nthis is image ![random_image](https://picsum.photos/500/200)\n`this is single line code`\n```\nthis is multiline code\nline 2\n```\n"
    }
  },
  mounted() {
    this.count_words()
    this.count_characters()
  },
  methods: {
    count_words() {
      // console.log(this.markdown.trim());
      this.words = (this.markdown.trim()) ? this.markdown.split(' ').length : 0
    },
    count_characters() {
      this.characters = this.markdown.length;
    }
  },
  watch: {
    markdown(markdown) {
      localStorage.markdown = markdown
      this.count_words()
      this.count_characters()
    }
  }
}
</script>

<style lang="scss">

</style>
