import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const colours = {"Medium Aquamarine":"5cdb95","Celadon":"8ee4af","Beige":"edf5e1","Prussian Blue":"05386b","Illuminating Emerald":"379683","Mandarin":"ef7b45","Rich Black FOGRA 29":"040611"};

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
    theme: {
        themes: { 
            dark: {
                primary: "#" + colours["Prussian Blue"], 
                secondary: "#" + colours["Illuminating Emerald"], 
                background: "#" + colours.Celadon, 
                accent: "#" + colours.Mandarin,
                error: "#" + colours.Mandarin, 
                info: "#" + colours.Beige,
                success: "#" + colours["Prussian Blue"], 
                warning: "#" + colours.Mandarin, 
                anchor: "#" + colours["Rich Black FOGRA 29"],

                textLight: "#" + colours.Beige, 
                textDark: "#" + colours["Rich Black FOGRA 29"],
                
                Aquamarine: "#" + colours["Medium Aquamarine"],
                Celadon: "#" + colours.Celadon,
                Beige: "#" + colours.Beige,
                Prussian: "#" + colours["Prussian Blue"],
                Emerald: "#" + colours["Illuminating Emerald"],
                Mandarin: "#" + colours.Mandarin,
                Black: "#" + colours["Rich Black FOGRA 29"],
            } },
        dark: true,
    },
});

/*
    Hovedfarge/Bakgrunn: Aquamarine, Celadon
    Alternativ farge: Beige
    Fremhevingsfarge: Prussian, Emerald
    Kontrastfarge: Mandarin
    Tekst: Beige, Rich Black
*/
