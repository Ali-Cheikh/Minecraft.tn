
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  }
document.getElementById('whitelistForm').addEventListener('submit', function (event) {
    event.preventDefault();
    submitFormToGoogleSheets();
    document.getElementById('whitelistForm').reset(); // Reset form fields
    document.getElementById('successMessage').style.display = 'block'; // Show success message
});

document.querySelectorAll('.bannedCheckbox').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      // Uncheck all checkboxes except the one that was just clicked
      document.querySelectorAll('.bannedCheckbox').forEach(function(otherCheckbox) {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });

      document.getElementById('bannedReason').disabled = document.getElementById('bannedNo').checked;
    });
  });
  document.getElementById('bannedYes').addEventListener('change', function() {
  if (this.checked) {
      document.getElementById('bannedReasonContainer').style.display = 'none';
      document.getElementById("sa7it").style.display="block";
      document.getElementById('bannedReason').disabled = true;
  }
  });

  document.getElementById('bannedNo').addEventListener('change', function() {
  if (this.checked) {
      document.getElementById('bannedReasonContainer').style.display = 'block';
      document.getElementById("sa7it").style.display="none";
      document.getElementById('bannedReason').disabled = false;
  }
  });

  function displayAlert() {
    // Define an array of random questions about the rules
    const ruleQuestions = [
        "What is the first rule?",
        "Can you explain the second rule?",
        "What does the third rule state?"
        // Add more questions here as needed
    ];

    // Randomly select a question from the array
    const randomQuestion = ruleQuestions[Math.floor(Math.random() * ruleQuestions.length)];

    // Display the alert with the random question
    Swal.fire({
        icon: 'info',
        title: 'Rules Question',
        html: `
            <h4>${randomQuestion}</h4>
            <h5>
                <input placeholder="Your answer" id="ruleAnswer" name="randomQuestion" required>
            </h5>
        `,
        showCancelButton: true,
        cancelButtonText: 'No',
        showConfirmButton: true,
        confirmButtonText: 'Submit',
        allowOutsideClick: false,
        preConfirm: () => {
            // Retrieve the user's answer
            const answer = document.getElementById('ruleAnswer').value;
            // You can process the answer here if needed
            // For now, just display it in console
            console.log("User's answer:", answer);
        }
    });
}

function submitFormToGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyy5nY3y95FEIajQfter324F_P2cOcrmY7nc_f41Prqn0V6n-KpFKdiJDdCH0RvYm-H/exec';
    const form = document.getElementById('whitelistForm');
    Swal.fire({
        icon: 'info',
        title: 'Submitting...',
        text: 'Sending whitelist application request',
        showConfirmButton: false,
        allowOutsideClick: false
    });

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    html: `
                    <h3 style="color:white">
                    Your application is submitted.
                    <u> Thank you!</u>
                    </h3>
                    `,
                    timer: 3000,
                    background: "url(src/download.png)",
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: true
                });
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('Error!', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.'
            });
        });
}

document.addEventListener('scroll', function() {
    var footerPosition = document.querySelector('footer').getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
        document.body.classList.add('footer-reached');
    } else {
        document.body.classList.remove('footer-reached');
    }
});

function alertt(){
    document.getElementById('submit').style.display = 'none';
    Swal.fire({
        title: 'You must accept the rules.',
        html: `
        <a class="btny btn btn-warning" onclick="rules()"><i class="fas fa-info-circle"></i></a>`,
        icon: 'warning',
        confirmButtonText: 'OK',
        showConfirmButton: false,
        allowOutsideClick: false
    });
}
// Define the content for the Sweet Alert
var content = `
<div style="color:white">
<header>
        <br><br>
        <h1 style="color: rgb(221, 22, 22); text-align: center; text-shadow: rgb(0, 0, 0) 1px 2px 20px;">Minecraft<span style="color: white">.tn</span> <span style="color: wheat">Rules List</span></h1><br>
    </header>
                <section class="rule-section" id="gameplay-rules">
                    <h2>Gameplay Rules</h2>
                    <br>
                    <br>
                    <ul>
                        <li><span class="list-title">Scamming:</span><br> Scamming ya3ni kif t9alleb player.</li>
                        <li><span class="list-title">Bug / Glitch Abuse:</span><br> Bug Abuse ya3ni kif tal9a bug tfidek ou tfid players o5rin ou to93dou testa3mou feha. Kima duplication glitch.</li>
                        <li><span class="list-title">Inappropriate Stuff:</span><br> Inappropriate Stuff ya3ni kif twarri 7aje mayhech mounasba siwa  <span style="background-color: rgb(81, 180, 86);color:red"> BAN </span> ya, skin, esmek wele ay 7aje</li>
                        <li><span class="list-title">Lag Machines/AFK Machines:</span><br> Machines Ilagiw <span style="color: yellow">server</span> mamnou3in! Machines Anti AFK mamnou3in zede!</li>
                        <li><span class="list-title">Trapping:</span><br> Trapping ya3ni kif ta7ser player fi blasa. Siwa tebni 7ofra bch ta7ser lplayer wele ay 7aje.</li>
                        <li><span class="list-title">BAN  Evasion:</span><br>  <span style="background-color: rgb(81, 180, 86);color:red"> BAN</span>  Evasion hiya kif tet <span style="background-color: rgb(81, 180, 86);color:red"> BAN </span> e m<span style="color: yellow">server</span> ou t7awel tod5ol marra o5ra.</li>
                        <li><span class="list-title">Mute Evasion:</span><br> Mute Evasion kif tekel mute f<span style="color: yellow">server</span> ou t7awel ta7ki marra o5ra.</li>
                        <li><span class="list-title">Hacking:</span><br> Hacking ya3ni kif tsob 7aje lel minecraft tsahhallek fl3eb. (Schematica, Optifine and Shaders miselch ay 7aje o5ra LE!!). Ay client feha hack mamnou3a!!!</li>
                        <li><span class="list-title">Auto-Click:</span><br> Auto-Click hiya faze ta3malha bch souris mta3ek to93od tenzel mn8er mat7ot 3leha sob3ok</li>
                        <li><span class="list-title">Alting:</span><br> Alting hiya kif yabda 3andek account/esm fl minecraft tal3ab bih ou ta3mel account/esm e5er. (Kif yelzmek ta3mel account e5er bellehi 9oulenna!)</li>
                        <li><span class="list-title">Bot/DDoS Attack:</span><br> Bot/DDoS Attack hiya kif tsayyeb bots/fake players l<span style="color: yellow">server</span> bch ifarg3ouh.</li>
                        <li><span class="list-title">Player Disturbing:</span><br> 5alliw lplayers raydhin ou mat9all9ouhomch.</li>
                    </ul>
                </section>
                <section class="rule-section" id="chat-discord-rules">
                    <h2>Chat/Discord Rules</h2>
                    <br>
                    <ul>
                        <li><span class="list-title">Caps Lock:</span><br> CAPS LOCK YA3NI KIF TEKTEB KOL CHAY BLKBIR KIMA HAKKA TAW</li>
                        <li><span class="list-title">Spam/Flood:</span><br> Spam/Flood hiya kif tekteb oura ba3dhou fchat</li>
                        <li><span class="list-title">Swearing/Dirty Words:</span><br> Swearing/Dirty Words hiya kif t9oul kelma 5ayba fchat. (Kif t9oulou kelma 5ayba bch tsebbou beha player hedhika tet7sablek Disrespectful/Toxic Behavior!!)</li>
                        <li><span class="list-title">Toxic Behavior:</span><br> Kif tsebbou players wele "tedhomer"</li>
                        <li><span class="list-title">Lying:</span><br> Hiya Lkethb. Kif tekdheb 3al players wele 3al <span style='color:rgb(237, 73, 73)'> @staff</span> team.</li>
                        <li><span class="list-title">Death Threats:</span><br> Hiya tahdid ay player bl mot.</li>
                        <li><span class="list-title">Unidentified Links:</span><br> Houma lien/links mafihomch thi9a (www.freeCandy.tn/jij&&%ASfsaf etc...)</li>
                        <li><span class="list-title">Religious/Political Topics:</span><br> Hiya kif ta7kiw 3addin wele syasa. (Players mdyana lkol mar7be bihom!)</li>
                        <li><span class="list-title">Threats:</span><br> Hiya tahdid. Kif thadded player wele thadded <span style="color: yellow">server</span>.</li>
                        <li><span class="list-title">Impersonation:</span><br> Hiya kif te7sbou rwa7kom player e5er bch tetrolliw players o5rin. Siwa te7sbou rwa7kom player ma3rouf wele <span style="color: yellow">server</span> <span style='color:rgb(237, 73, 73)'> @staff</span> wele ay player e5er.</li>
                        <li><span class="list-title">Racism/Discriminations:</span><br> Hiya l3onsouriya wele Discriminations (Sexism etc..).</li>
                        <li><span class="list-title">Kofr:</span><br> A3rfou chnouwa t5arrjou mn ffamkom.</li>
                        <li><span class="list-title">Getting Personal:</span><br> Hiya kif tsebbou 3ayelt lplayer. Siwa lbou, lom wele ay wa7d ml3ayla mta3 lplayer.</li>
                        <li><span class="list-title">Advertising:</span><br> Hiya kif ta3mel echhar/publicite l<span style="color: yellow">server</span> e5er. Kif player doub mad5al l<span style="color: yellow">server</span> ou ya3mel Pub ye5ou perma  <span style="background-color: rgb(81, 180, 86);color:red"> BAN </span> !!</li>
                        <li><span class="list-title">Begging for <span style='color:rgb(237, 73, 73)'> @staff</span> or Free Stuff:</span><br> Hiya kif t9arr9ou b<span style='color:rgb(237, 73, 73)'> @staff</span> bch ya3tyoukom op wele <span style="color: blue">Admin</span> wele bch te5dhou 7ajet blech.</li>
                        <li><span class="list-title">False Accusations:</span><br> Hiya kif techki bplayer bl8alet mn8er proof ou houwa ma3mal chay</li>
                        <li><span class="list-title">Revealing Personal Informations:</span><br> Hiya kif twarri 7ajet personel mta3 ay 3abd ou tab3athhom lel public honi</li>
                    </ul>
                </section>
                <section class="rule-section" id="staff-rules">
                    <h2><span style='color:rgb(237, 73, 73)'> @staff</span> Rules</h2>
                    <br>
                    <ul>
                        <li><span class="list-title">Power Abuse:</span><br> Power Abuse hiya kif tsta3mel l permissions mta3ek 5arej l5edma bch tfid ro7ek behom.</li>
                        <li><span class="list-title">Survival Mode:</span><br> <span style='color:rgb(237, 73, 73)'> @staff</span> majbour 3lehom bch yam3lou Survival kif ay member e5er. Emme femme permissions 3andhom l7a9 ysta3mlohom.</li>
                        <li><span class="list-title">Activity:</span><br> <span style='color:rgb(237, 73, 73)'> @staff</span> majbour 3lehom bch ikounou dima ma7loulin f<span style="color: yellow">server</span>! Hedhi a9wa rule bch <span style='color:rgb(237, 73, 73)'> @staff</span> yched blastou!</li>
                        <li><span class="list-title">Kounou professionell:</span><br> Dima a3rfou kifech tjawbou ou kifech ta7kiw m3al players.</li>
                        <li><span class="list-title">Dima Es2lou!:</span><br> Ay 7aje tos3ob 3likom, dima es2lou <span style='color:rgb(237, 73, 73)'> @staff</span> member e5er yabda 3andou akther experience. Mata3mlou chay mn m5a5kom!!</li>
                        <li><span class="list-title">Tet3ark m3a member fl private Chat as a <span style='color:rgb(237, 73, 73)'> @staff</span>:</span><br> Ma3andkomch l7a9 tet3arkou m3a ay player fl private ka <span style='color:rgb(237, 73, 73)'> @staff</span>! 7atte kif members yt3arekou m3a <span style='color:rgb(237, 73, 73)'> @staff</span> fi 7aje tab3a <span style="color: yellow">server</span> zede yt3a9eb!</li>
                        <li><span class="list-title"><span style='color:rgb(237, 73, 73)'> @staff</span> Chat to93od serr!:</span><br> Ay 7aje tetktab fl <span style='color:rgb(237, 73, 73)'> @staff</span> Chat to93od serr ou matwarryouh l7ad ken l<span style='color:rgb(237, 73, 73)'> @staff</span> members!</li>
                        <li><span class="list-title"><span style='color:rgb(237, 73, 73)'> @staff</span> Chat Mayhech Private!:</span><br> <span style='color:rgb(237, 73, 73)'> @staff</span> Chat rahou mayet7sabch private chat! Rahou yt7sab ka ay channel o5ra honi. Ya3ni a3rfou chnouwa t9oulou ou tab3thou!</li>
                        <li><span class="list-title">Tabb9ou l punishments-duration:</span><br> Dima kif bch t3a9bou players dima tabb9ou l punishments-duration . Choufou cha3mel lplayer ou 8adi choufou 9adde moddet lpunishment ou ken feha warn welle le. Mat3a9bouch mn ryouskom!!</li>
                        <li>< class="list-title"> <span style="background-color: rgb(81, 180, 86);color:red"> BAN </span> ned Players ya5dhou <span style='color:black;background-color: white;'>@ banned</span> role!:</span><br> Kif Player yt  BAN  a 3adiscord wele ingame, mat BAN youhouch completely. A3tyouh role <span style='color:black;background-color: white;'>@ BANned.</span> Kek lplayer yo93od ba9i 3andou access 3al informations mta3 <span style="color: yellow">server</span> emme maynejjem ichouf 7atte chay e5er!</li>
                    </ul>
                </section>
                <section id="pvp-rules" class="rule-section">
                    <h2>PVP Rules</h2>
                    <br>
                    <ul>
                        <li><span class="list-title">PVP Evasion:</span><br> PVP Evasion hiya kif tabda inti fl PVP arena ou 9bal matmout t7awel to5roj ml arena.</li>
                        <li><span class="list-title">PVP Arena rahya public!:</span><br> Femmech 1v1 wele "le tfahamna bch a7ne 5 bark nt3arkou hedha mnin je?", Larena rahye public ou lkol tnejjem tahbet ou to9tol!!</li>
                        <li><span class="list-title">Elli imout 7ajetou iti7ou!:</span><br> Kif player imout 7ajetou LKOL elli kenou fl inventory mta3ou idhi3ou! 7atte kif tabdaw mtfahmin ou ba3d lplayer marajja3lekch 7ajetek tet7ammel mas2oulitek!!</li>
                        <li><span class="list-title">Lkol tal3ab mtfahma m3a b3adhha ou mn8er machakel!! PVP rahya optional ou mayhech aham 7aje f<span style="color: yellow">server</span>!</span></li>
                    </ul>
                </section>
                <section id="additional-rules" class="rule-section">
                    <h2>Additional Rules</h2>
                    <br>
                    <ul>
                        <li>Ta3ti l3abd /trust tet7ammel mas2oulitek!!: Kif tabda 3andek <span style="color: rgb(81, 180, 86)">claim</span> ou ta3ti l3abd /Trust ou yasr9ek rahye mayhech mochkolt <span style='color:rgb(237, 73, 73)'> @staff</span>!. Tet7ammel mas2oulitek!!</li>
                        <li>Matespamyouch <span style="color: lightgreen"><span style="color: lightgreen">Ticket</span>s</span>!!: Kif <span style='color:rgb(237, 73, 73)'> @staff</span> isakkroulek <span style="color: lightgreen">Ticket</span> ou inti to93od tspami fehom, tet3addelek player disturbing ou tet3a9b 3leha!!</li>
                        <li>Eb3dou 50 Blocks mn <span style="color: rgb(81, 180, 86)">claims</span> mta3 la3bed lo5rin ou a3mlou elli t7ebbou!: Matols9ouch lel <span style="color: rgb(81, 180, 86)">claims</span> mta3 playersl o5rin, Eb3dou 50 blocks. Rule hedhi tettabba9 3al  <span style="background-color: rgb(81, 180, 86);color:red"> BAN </span> i wele zede 3al takksir!! Hedhi griefing! (<span style="color: rgb(81, 180, 86)">claims</span> yelzemhom ikounou ma39oulin bien sur! Mch juste <span style="color: rgb(81, 180, 86)">claims</span> z8ar wele far8in. Yelzem ikounou <span style="color: rgb(81, 180, 86)">claims</span> official!)</li>
                        <li>Lflous yo93doulkom lekom intouma ou mata3tyohom l7ad, kounch taftoufa miselch!: Bellehi 7awlou dabbrou flouskom wa77adkom ou 5allyohom lekom intouma, yomken test7a99ouhom mba3d. Manamn3ouch bch ta3tiw flous l8erkom emme chniya fayda fl game ken player yod5ol new ou yal9a lflous elli ya7tejou.</li>
                        <li><span style="color: rgb(81, 180, 86)">claims</span> ytna77aw ba3d 35 days!: Players elli 3andhom 35 ayyem wele chhar ma7allech, <span style="color: rgb(81, 180, 86)">claims</span> mta3hom ytna77aw!!</li>
                        <li>I7tarmou <span style='color:rgb(237, 73, 73)'> @staff</span> Team!: Blech <span style='color:rgb(237, 73, 73)'> @staff</span> Team, <span style="color: yellow">server</span> hedha ma3andou wen yousol. Danc bellehi e7tarmohom ou elli i9oulouhoulkom tabb9ouh. Btw, <span style='color:rgb(237, 73, 73)'> @staff</span> 3andhom rules itabb9ouhom zede ya3ni ye5dhou punishments zede kif ay player e5er (Ou yomken yt3a9bou akther 5aterna 3atin fehom thi9a).</li>
                        <li>Dima a9raw lpinned messages!!: Pinned messages tl9awohom lfo9 3allimin discord mta3kom. awwenhi tabda ibra enzlou 3leha. 8adi tal9aw information mouhemmin barche!!</li>
                        <li>Dima a9raw l⁠📣│announcements﻿!!: Kif <span style="color: yellow">server</span> ytsakker mithel mato93douch tektbou wa9tech yt7al. Tal9aw kol chay fl ⁠📣│announcements﻿!!</li>
                    </ul>
                </section>
                <section id="additional-rules" class="rule-section">
                    <h2>Additional Rules</h2>
                    <br>
                    <ul>
                        <li>Ta3ti l3abd /trust tet7ammel mas2oulitek!!: Kif tabda 3andek <span style="color: rgb(81, 180, 86)">claim</span> ou ta3ti l3abd /Trust ou yasr9ek rahye mayhech mochkolt <span style='color:rgb(237, 73, 73)'> @staff</span>!. Tet7ammel mas2oulitek!!</li>
                        <li>Matespamyouch <span style="color: lightgreen"><span style="color: lightgreen">Ticket</span>s</span>!!: Kif <span style='color:rgb(237, 73, 73)'> @staff</span> isakkroulek <span style="color: lightgreen">Ticket</span> ou inti to93od tspami fehom, tet3addelek player disturbing ou tet3a9b 3leha!!</li>
                        <li>Eb3dou 50 Blocks mn <span style="color: rgb(81, 180, 86)">claims</span> mta3 la3bed lo5rin ou a3mlou elli t7ebbou!: Matols9ouch lel <span style="color: rgb(81, 180, 86)">claims</span> mta3 playersl o5rin, Eb3dou 50 blocks. Rule hedhi tettabba9 3al  <span style="background-color: rgb(81, 180, 86);color:red"> BAN </span> i wele zede 3al takksir!! Hedhi griefing! (<span style="color: rgb(81, 180, 86)">claims</span> yelzemhom ikounou ma39oulin bien sur! Mch juste <span style="color: rgb(81, 180, 86)">claims</span> z8ar wele far8in. Yelzem ikounou <span style="color: rgb(81, 180, 86)">claims</span> official!)</li>
                        <li>Lflous yo93doulkom lekom intouma ou mata3tyohom l7ad, kounch taftoufa miselch!: Bellehi 7awlou dabbrou flouskom wa77adkom ou 5allyohom lekom intouma, yomken test7a99ouhom mba3d. Manamn3ouch bch ta3tiw flous l8erkom emme chniya fayda fl game ken player yod5ol new ou yal9a lflous elli ya7tejou.</li>
                        <li><span style="color: rgb(81, 180, 86)">claims</span> ytna77aw ba3d 35 days!: Players elli 3andhom 35 ayyem wele chhar ma7allech, <span style="color: rgb(81, 180, 86)">claims</span> mta3hom ytna77aw!!</li>
                    </ul>
                </section>
                <section id="additional-rules-2" class="rule-section">
                    <h2>Additional Rules 2</h2>
                    <br>
                    <ul>
                        <li>A3mlou <span style="color: rgb(81, 180, 86)">claim</span> Lel  <span style="background-color: rgb(81, 180, 86);color:red"> BAN </span> yat mta3kom!!: Kif Player yasra9kom wele darek tsirelha 7aje na7ne manach mas2ouli</li>
                        <li>Proof/Dalil 3ale kol 7aje tsirlek!!: Siwa tetchakkaw/report mn player wele dha3etelkom/saretelkom 7aje mn glitch wele bug. Ab3thenna dalil taswira capture wele video capture wele ay dalil bch nsadd9ouk!!</li>
                        <li>Nidham fi discord!!: Ektbou kol chay mnadheb fdiscord! Kif 3andek mochkle ektbou fl ⁠🙋│help ﻿ wele tetchakkaw mn player 7ellou ⁠🎫│<span style="color: lightgreen"><span style="color: lightgreen">Ticket</span>s</span> oul bots sta3mlouhom fl ⁠🤖│commands, photography﻿ 3al ⁠📷│photography etc..!</li>
                        <li>Matab3thouch lel <span style='color:rgb(237, 73, 73)'> @staff</span> friend requests!: Kif 7achetkom b7aje awwena ⁠🙋│help ﻿ channel ma7loul. Matab3thouch l<span style='color:rgb(237, 73, 73)'> @staff</span> privet wele friend requests ken 3andkom mochkla f<span style="color: yellow">server</span></li>
                        <li>Mata3mlouch <span style="color: rgb(81, 180, 86)">claims</span> far8a!: Mat7arramch lel 3bed l <span style="background-color: rgb(81, 180, 86);color:red"> BAN </span> i.</li>
                        <li>Mata3mlouch <span style="color: rgb(81, 180, 86)">claims</span> l7ajet mta3 public!: Femme 7ajet ya7tejohom players o5rin kif el end portal wele 7aje. Hedhom ytsemmew 7ajet public ya3ni nes lkol ysta3mlohom. Matkounch anani</li>
                    </ul>
                </section>
            </div>
`;
function rules() {
    document.getElementById('submit').style.display = 'block';
    document.getElementById('sayee').style.display = 'block';

    Swal.fire({
        html: content,
        customClass: {
            // Add a custom class to the modal
            popup: 'custom-swal-width'
        },
        width: window.innerWidth < 576 ? '100%' : '75%', // Set width to 100% for smaller screens, 75% for larger screens
        padding: '3rem',
        background: `url('src/download.png')`,
        backdrop: `
            rgba(0,0,0,0.4)
            url("https://media.giphy.com/media/l0HlNcFo8oWv7WPSs/giphy.gif")
            center
            no-repeat
        `,
        showConfirmButton: true,
        confirmButtonText: 'I understand',
        didOpen: () => {
            // Checkbox is checked when the modal is opened
            document.getElementById('acceptRulesYes').checked = true;
        }
    });
}

