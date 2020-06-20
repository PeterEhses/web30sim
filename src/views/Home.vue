<template>
  <div class="home">

    <section class="hero is-dark is-bold ">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Test Page RiTa
          </h1>
          <h2 class="subtitle">
            balls
          </h2>
        </div>
      </div>
</section>


<section class="section">
    <div class="container">
      <h1 class="title">RiTa Phonemes</h1>
      <h2 class="subtitle">
        {{ ritaContent }}
      </h2>
    </div>
  </section>

  <section class="section">
      <div class="container">
        <h1 class="title">RiTa Markov</h1>
        <h2 class="subtitle">
          {{ genText }}
        </h2>
      </div>
    </section>

  </div>
</template>

<script>

export default {
  name: 'Home',

  components: {
  },
  data: function() {
    return {
        kickText : "",
        genText : "",
      }
    },
    watch: {
      kickText: function(){
        this.ritaMarkov();
      }
    },
  computed: {
    ritaContent:  function() {
      let rs = this.$rita.getPhonemes("The elephant took a bite!");
      return rs;
    },

  },
  methods: {
    ritaMarkov: function() {
      let rm = new this.$rita.RiMarkov(4);
      rm.loadText(this.kickText);
      this.genText = rm.generateSentences(10).join(" ");
    }
  },
  created: function() {
    let self = this;
    //
    this.$nextTick(function() {
      fetch('./data/kickstarterTexts.txt')
      .then(response => response.text())
      .then(text => self.kickText = text)
    })


  }

}


</script>
