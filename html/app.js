const { ref } = Vue

// Customize language for dialog menus and carousels here

const load = Vue.createApp({
  setup () {
    return {
      CarouselText1: 'Willkommen auf unserem Server, wir hoffen ihr habt hier so viel Spaß wie wir.',
      CarouselSubText1: 'Photo captured by: Markyoo#8068',
      CarouselText2: 'Wenn ihr Fragen, Ideen, Konzepte, etc. habt, dann eröffnet einfach ein Ticket.',
      CarouselSubText2: 'Photo captured by: ihyajb#9723',
      CarouselText3: 'Unsere wichtigsten Menüs laufen über F1 oder Left-ALT.',
      CarouselSubText3: 'Photo captured by: FLAPZ[INACTIV]#9925',
      CarouselText4: 'Handelt immer so, wie ihr auch in echt handeln würdet.',
      CarouselSubText4: 'Photo captured by: Robinerino#1312',

      DownloadTitle: 'Downloading My Life Be Like',
      DownloadDesc: "Bleibt dran, solange wir die nötigen Daten für den Server downloaden. \n\nNachdem der Donwload erfolgreich war, wird dieser Screen verschwinden und ihr landet auf dem Server. ",

      SettingsTitle: 'Settings',
      AudioTrackDesc1: 'Wenn ausgeschaltet, wird das Lied gestoppt.',
      AutoPlayDesc2: 'Wenn ausgeschaltet, wird das letzte Bild angezeigt.',
      PlayVideoDesc3: '´Wenn ausgeschaltet, stoppt das Video.',

      KeybindTitle: 'Default Keybinds',
      Keybind1: 'Open Inventory',
      Keybind2: 'Cycle Proximity',
      Keybind3: 'Open Phone',
      Keybind4: 'Toggle Seat Belt',
      Keybind5: 'Open Target Menu',
      Keybind6: 'Radial Menu',
      Keybind7: 'Open Hud Menu',
      Keybind8: 'Talk Over Radio',
      Keybind9: 'Open Scoreboard',
      Keybind10: 'Vehicle Locks',
      Keybind11: 'Toggle Engine',
      Keybind12: 'Pointer Emote',
      Keybind13: 'Keybind Slots',
      Keybind14: 'Hands Up Emote',
      Keybind15: 'Use Item Slots',
      Keybind16: 'Cruise Control',

      firstap: ref(true),
      secondap: ref(true),
      thirdap: ref(true),
      firstslide: ref(1),
      secondslide: ref('1'),
      thirdslide: ref('5'),
      audioplay: ref(true),
      playvideo: ref(true),
      download: ref(true),
      settings: ref(false),
    }
  }
})

load.use(Quasar, { config: {} })
load.mount('#loading-main')

var audio = document.getElementById("audio");
audio.volume = 0.05;

function audiotoggle() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function videotoggle() {
    var x = document.getElementById("video");
    if (video.paused) {
        x.play();
    } else {
        x.pause();
    }
}

let count = 0;
let thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (data.idx / count) * 100 + "%";
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;

        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (thisCount / count) * 100 + "%";
    },
};

window.addEventListener("message", function (e) {
    (handlers[e.data.eventName] || function () {})(e.data);
});
