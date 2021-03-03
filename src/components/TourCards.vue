// Creates cards and adds it to the grid based on the data in the script

<template>
  <v-container>
      <v-layout row wrap>
        <v-flex my-3 xs12 md6 v-for="(tour, i) in tours" :key="i">
            <v-card
    class="ma-2"
  >
  
    <v-img
      :src="tour.img"
      height="200px"
    ></v-img>

    <v-card-title>{{tour.title}}</v-card-title>
    <v-card-subtitle>{{tour.subtitle}}, {{tour.date}}</v-card-subtitle>
    <v-card-subtitle>{{tour.adress}}</v-card-subtitle>

    <v-card-actions>

      <v-btn color="purple" text :disabled="tour.disableExplore"
      @click="$router.push(tour.exploreRef)"
      > Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="tour.show = !tour.show"
      >
        <v-icon>{{ tour.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="tour.show">
        <v-divider></v-divider>

        <v-card-text>
         {{tour.description}}
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
     tours: [
        {show: false, title: 'Trondheim Skog', subtitle: 'Fin Natur', date: '2019 Spring',
        img: '/images/tourimage.png',
        adress: 'Kongsvingersveien 35', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex magna, commodo in nibh ut, vestibulum dignissim erat. Curabitur sit amet rutrum velit. Nulla faucibus eleifend laoreet. Suspendisse pretium augue ac velit accumsan, sit amet tempus diam tempus. Cras vitae ante ut ipsum rhoncus fermentum. Aenean viverra lobortis mattis. Sed nec ultricies lectus. Maecenas in justo tincidunt, sodales mauris vitae, placerat metus. Maecenas convallis tellus sapien, sed sagittis libero consectetur sit amet. Maecenas sit amet tellus a nibh dapibus blandit. Cras accumsan posuere volutpat. Nullam posuere purus vitae ipsum porta tincidunt. ',
        disableExplore: false,
        exploreRef: '/trondheimtour',
        },
        
        {show: false, title: 'Oslo Skog', subtitle: 'Fin Natur Også', date: '2019 Spring',
        img: '/images/tourimage.png',
        adress: 'Blablasveien 35', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex magna, commodo in nibh ut, vestibulum dignissim erat. Curabitur sit amet rutrum velit. Nulla faucibus eleifend laoreet. Suspendisse pretium augue ac velit accumsan, sit amet tempus diam tempus. Cras vitae ante ut ipsum rhoncus fermentum. Aenean viverra lobortis mattis. Sed nec ultricies lectus. Maecenas in justo tincidunt, sodales mauris vitae, placerat metus. Maecenas convallis tellus sapien, sed sagittis libero consectetur sit amet. Maecenas sit amet tellus a nibh dapibus blandit. Cras accumsan posuere volutpat. Nullam posuere purus vitae ipsum porta tincidunt. ',
        disableExplore: true,
        exploreRef: '',
        },
      ],
    }
  }
}
</script>