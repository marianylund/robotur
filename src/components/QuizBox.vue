<template>
  <v-card class="mx-auto primary ma-2" max-width="600" min-height="420">
    <v-card-text class="pb-0">
      <p class="display-1 text--primary">
        Quiz
      </p>
    </v-card-text>
    <v-card-text v-show="!finished">
      Nå som du har fullført turen kan du gjennomføre denne quizen for å se hva
      du husker!
    </v-card-text>
    <v-card-text v-show="finished">
      <p>Herlig, du fullførte quizen!</p>
      <p>Dette ble resultatet:</p>
      <v-list dense color="primary">
        <v-list-item v-for="(answer, index) in answers" :key="index">
          <v-list-item-icon>
            <v-icon>{{
              correct[index] == answer ? "mdi-check" : "mdi-close"
            }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{
              alternatives[index][answer]
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      Du fikk riktig på {{ corrAns }} av {{ correct.length }} spørsmål.
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="accent"
        @click="
          {
            started = true;
            question = 0;
            corrAns = 0;
          }
        "
      >
        {{ finished ? "Prøv igjen" : "Start quiz" }}
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="started"
        class="transition-fast-in-fast-out v-card--started primary"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="display-1 text--primary">
            <v-icon>{{ "mdi-help-box" }}</v-icon> Spørsmål
            {{ question + 1 }}
          </p>
          <p>
            {{ questions[question] }}
          </p>
          <v-card>
            <v-list>
              <v-list-item-group v-model="answers[question]">
                <v-list-item
                  v-for="(question, i) in alternatives[question]"
                  :key="i"
                  :disabled="false"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="question"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          <br />
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            color="accent"
            @click="
              {
                question -= 1;
              }
            "
            :disabled="question == 0"
          >
            <v-icon>{{ "mdi-arrow-left" }}</v-icon> Forrige
          </v-btn>
          <v-spacer></v-spacer>

          <v-btn
            color="accent"
            @click="
              {
                question += 1;
              }
            "
            :disabled="
              question == questions.length - 1 ||
                answers[question][0] == 'default'
            "
            v-show="question != questions.length - 1"
          >
            Neste <v-icon>{{ "mdi-arrow-right" }}</v-icon>
          </v-btn>
          <v-btn
            color="accent"
            @click="
              {
                finished = true;
                started = false;
                for (const i in answers) {
                  if (answers[i] == correct[i]) {
                    corrAns += 1;
                  }
                }
              }
            "
            :disabled="
              question != questions.length - 1 ||
                answers[question][0] == 'default'
            "
            v-show="question == questions.length - 1"
          >
            Ferdig <v-icon>{{ "mdi-check" }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      started: false,
      finished: false,
      answers: [
        ["default"],
        ["default"],
        ["default"],
        ["default"],
        ["default"],
      ],
      correct: [2, 1, 0, 2, 2],
      corrAns: 0,
      question: 0,
      questions: [
        "Hvor gammel kan en gran bli?",
        "Hvorfor bruker man munnbind?",
        "Hvordan har Geitfjellet fått sitt navn?",
        "Hva betyr det at skogen er vernet?",
        "Hvor lang tid tar det før plastposer brytes ned i naturen?",
      ] as any,
      alternatives: [
        ["A. 1 år", "B. 1000 år", "C. 500 år", "D. Hva er en gran?"],
        [
          "A. For å pynte seg",
          "B. For å unngå dråpesmitte",
          "C. For å unngå og røre seg i ansiktet",
          "D. Fordi snømannen har det på seg ",
        ],
        [
          "A. Fordi fjellet ser ut som en geit ",
          "B. Fordi det bruker å være geit på fjellet",
          "C. Fordi geit var favorittdyret til de som bestemte navnet",
          "D. Fordi geit er Norges nasjonaldyr",
        ],
        [
          "A. At det er et fint turområde",
          "B. At det ikke er lov å være i skogen",
          "C. At det ikke er lov å gjøre noe som kan ødelegge skogen",
          "D. At skogen skal hogges ned",
        ],
        [
          "A. Det tar mellom 1-2 måneder ",
          "B. Det tar mellom 1-2 år ",
          "C. Det tar mellom 10-20 år ",
          "D. Det tar mellom 100-200 år ",
        ],
      ] as any,
    };
  },
  created() {
    console.log(this.answers);
  },
});
</script>

<style scoped>
.v-card--started {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
