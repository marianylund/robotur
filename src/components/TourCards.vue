<template>
  <v-container>
      <v-layout row wrap>
        <v-flex my-3 xs12 md6 v-for="(project, i) in projects" :key="i">
            <v-card
    class="ma-2"
  >
  
    <v-img
      :src="project.img"
      height="200px"
    ></v-img>

    <v-card-title>{{project.title}}</v-card-title>
    <v-card-subtitle>{{project.subtitle}}, {{project.date}}</v-card-subtitle>
    <v-card-subtitle>{{project.technology}}</v-card-subtitle>

    <v-card-actions>

      <v-btn color="purple" text :disabled="project.disableExplore"
      :href="project.exploreRef"
      > Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="project.show = !project.show"
      >
        <v-icon>{{ project.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="project.show">
        <v-divider></v-divider>

        <v-card-text>
         {{project.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
        </v-flex>
      </v-layout>

  </v-container>

</template>


<script lang="ts">
export default {
  data() {
    return{
        projects: [
        {show: false, title: 'Trondheim Skog', subtitle: 'Fin Natur', date: '2019 Spring',
        img: '/globalwarming.png',
        technology: 'Kongsvingersveien 35', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex magna, commodo in nibh ut, vestibulum dignissim erat. Curabitur sit amet rutrum velit. Nulla faucibus eleifend laoreet. Suspendisse pretium augue ac velit accumsan, sit amet tempus diam tempus. Cras vitae ante ut ipsum rhoncus fermentum. Aenean viverra lobortis mattis. Sed nec ultricies lectus. Maecenas in justo tincidunt, sodales mauris vitae, placerat metus. Maecenas convallis tellus sapien, sed sagittis libero consectetur sit amet. Maecenas sit amet tellus a nibh dapibus blandit. Cras accumsan posuere volutpat. Nullam posuere purus vitae ipsum porta tincidunt. ',
        disableExplore: true,
        exploreRef: '/interactive/rubiks.html',
        },
        {show: false, title: 'Oslo Skog', subtitle: 'Fin Natur Også', date: '2019 Spring',
        img: '/globalwarming.png',
        technology: 'Blablasveien 35', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex magna, commodo in nibh ut, vestibulum dignissim erat. Curabitur sit amet rutrum velit. Nulla faucibus eleifend laoreet. Suspendisse pretium augue ac velit accumsan, sit amet tempus diam tempus. Cras vitae ante ut ipsum rhoncus fermentum. Aenean viverra lobortis mattis. Sed nec ultricies lectus. Maecenas in justo tincidunt, sodales mauris vitae, placerat metus. Maecenas convallis tellus sapien, sed sagittis libero consectetur sit amet. Maecenas sit amet tellus a nibh dapibus blandit. Cras accumsan posuere volutpat. Nullam posuere purus vitae ipsum porta tincidunt. ',
        disableExplore: true,
        exploreRef: '/interactive/rubiks.html',
        },
      ],
    }
  }
}
</script>