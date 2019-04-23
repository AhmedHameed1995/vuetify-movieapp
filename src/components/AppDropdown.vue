<template>

  <v-navigation-drawer
    :mini-variant.sync="mini"
    v-model="drawer"
    hide-overlay
    stateless
    class="blue darken-3 aside_drawer" 
    dark
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title id="jo">John Leider</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="item.link"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard', link: '/' },
          { title: 'Form', icon: 'question_answer', link: 'form' }
        ],
        mini: true,
        right: null
    }
  }
}
</script>
<style>
.aside_drawer {
    height: auto !important;
}
</style>
