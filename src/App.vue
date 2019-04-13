<template>
  <div id="app">
    <Header/>
    <Markdown/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/include/Header';
import Footer from './components/include/Footer';
import Markdown from './components/Markdown';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Markdown
  }
}
</script>

<style>

</style>
