// Creates cards and adds it to the grid based on the data in the script

<template>
  <v-container>
      <v-layout row wrap>
        <v-flex my-3 xs12 md6 v-for="(tour, i) in tours" :key="i">
            <v-card
    class="primary ma-2"
  >
  
    <v-img
      :src="tour.img"
      height="200px"
    ></v-img>

    <v-card-title>{{tour.title}}</v-card-title>
    <v-card-subtitle>{{tour.subtitle}}</v-card-subtitle>

    <v-card-actions>

      <v-btn color="accent" text :disabled="tour.disableExplore"
      @click="$router.push(tour.exploreRef)"
      > Start turen </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="tour.show = !tour.show"
      >
        <v-icon color="accent">{{ tour.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
        {show: false, title: 'Dreiers Minne', 
        subtitle: 'Bli med til bymarka - Trondheims største friluftsområde! Denne turen går til Dreiers minne, en naturhytte bygd inn i terrenget. Turen er på ca. 7,5 km og tar mellom 2-3 timer, om du ønsker å gå den selv.',
        img: '/TrondheimTour/dreiers minne25.jpg',
        description: 'Jeg tar deg gjerne med på en digital tur hit, hvor vi sammen følger turens rute og du får se bilder av stien, planter og bygninger vi møter langs veien. På den digitale turen kan du lære om naturen og dyrelivet man kan møte på i løpet av turen, og om det historiske minnesmerket Dreiers minne. Hvis du vil ta turen selv: Turen begynner ved Baklidammen. For å komme seg dit kan man ta bussrute 26 og gå av på bussholdeplass Baklia, eller man kan parkere på Baklidammen Parkering. Fra Baklidammen går turen videre mot Lavollen, og derfra går man videre til Helkansætra. Herfra går man mot Geitfjellet, før man så går videre for å komme til Dreiers minne. Deretter går man mot Lavollen, og følger derfra ruta man startet for å komme seg tilbake til Baklidammen hvor turen ender.',
        disableExplore: false,
        exploreRef: '/trondheimtour',
        },
        
        {show: false, title: 'Oslo Skog', subtitle: 'Neste digital tur er til Oslo og den kommer snarest!', 
        img: '/images/tourimage.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex magna, commodo in nibh ut, vestibulum dignissim erat. Curabitur sit amet rutrum velit. Nulla faucibus eleifend laoreet. Suspendisse pretium augue ac velit accumsan, sit amet tempus diam tempus. Cras vitae ante ut ipsum rhoncus fermentum. Aenean viverra lobortis mattis. Sed nec ultricies lectus. Maecenas in justo tincidunt, sodales mauris vitae, placerat metus. Maecenas convallis tellus sapien, sed sagittis libero consectetur sit amet. Maecenas sit amet tellus a nibh dapibus blandit. Cras accumsan posuere volutpat. Nullam posuere purus vitae ipsum porta tincidunt. ',
        disableExplore: true,
        exploreRef: '',
        },
      ],
    }
  }
}
</script>