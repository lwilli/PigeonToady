// list of the sounds files as they appear in ./sounds/
const soundFiles = [
"hylmn1.wav",
"hylmn2.wav",
"hylmn3.wav",
"hylmn4.wav",
"hylmn_flop.wav",
"cool_brah.wav",
"(speechless).wav",
"whatup.wav",
"sorry.wav",
"brah.wav",
"mind_blown.wav",
"yes.wav",
"oh_thats_cool.wav",
"cool_metal_thing_brah.wav",
"cool_no_big_deal.wav",
"(explosions).wav",
"goodbye.wav",
"check_out_my_girlfriend.wav",
"you_catch_the_game.wav",
"look_at_her.wav",
"mumble_girlfriend.wav",
"oh.wav",
"whats_that.wav",
"she_exists_brah.wav",
"she_migrated.wav",
"shes_in_canada.wav",
"shes_not_made_up.wav",
"thought_we_were_vibing.wav",
"wait_a_second.wav",
"there_was_no_game.wav",
"dance_break.wav",
"my_towel_blew_away.wav",
"ouch.wav",
"hylmn_song_full.wav",
"game_last_night_full.wav"
]


// Add a new sound box for each sound in the given soundFiles list
function addSounds() {
   for(var i=0; i < soundFiles.length; i++){
      var newAudio = document.createElement('audio');
      newAudio.src = "./sounds/" + soundFiles[i];
      newAudio.id = soundFiles[i].slice(0, -4);
      newAudio.autostart = "false";
      document.head.appendChild(newAudio);
   }

   for(var i=0; i < soundFiles.length; i++){
      var newButton = document.createElement('button');
      var soundName = soundFiles[i].slice(0, -4);
      newButton.id = soundName + "-button";
      newButton.onclick = function() { 
         document.getElementById(this.id.slice(0, -7)).play();
      };
      newButton.className = 'sound-button';
      newButton.innerText = soundName;
      document.getElementById("sound-container").appendChild(newButton);
   }
}


document.body.onload = addSounds;

