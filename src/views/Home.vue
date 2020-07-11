<template>

  <v-app id="home">


    <v-parallax
    dark
    src="https://picsum.photos/seed/picsum/1024"
    >
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Test Page
          </h1>
          <h2 class="subtitle">
            {{ $route.name }}
          </h2>
        </div>
      </div>
</v-parallax>

<v-card
    class="mx-auto"
    max-width="400"
  >
    <div class="container">
      <v-card-title>Path Info</v-card-title>
       <v-card-text class="text--primary">
        {{ $route.params }}
      </v-card-text>
    </div>
  </v-card>

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
        <h1 class="title">markov-string</h1>
        <h2 class="subtitle">
          {{ genText }}
        </h2>
      </div>
    </section>

  </v-app>
</template>

<script>

export default {
  name: 'Home',

  components: {
  },
  data: function() {
    return {
      drawer: null,
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
      //let rm = new this.$rita.RiMarkov(4);
      //rm.loadText(this.kickText);
      this.genText = "placeholder"//rm.generateSentences(10).join(" ");
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
