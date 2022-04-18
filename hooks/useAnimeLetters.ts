import anime from "animejs";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../store/type";

const useAnimeLetters = () => {
  const router = useRouter();
  const { currPlayerTrun, players } = useSelector((state: RootState) => state);

  const animeStartGame = () => {
    var ml4: any = {};
    ml4.opacityIn = [0, 1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 700;
    ml4.durationOut = 500;
    ml4.delay = 300;

    const animation = anime
      .timeline()
      .add({
        targets: ".ml4 .letters-1",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-1",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4 .letters-3",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-3",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4",
        opacity: 0,
        duration: 400,
        delay: 400,
      });

    animation.finished.then(() => router.push("/game"));
  };

  const animeTicTacToe = () => {
    var textWrapper = document.querySelector(".ml11 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /./g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml11 .line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
      })
      .add({
        targets: ".ml11 .line",
        translateX: [
          0,
          document.querySelector(".ml11 .letters").getBoundingClientRect()
            .width + 10,
        ],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100,
      })
      .add({
        targets: ".ml11 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: (el, i) => 34 * (i + 1),
      })
      .add({
        targets: ".ml11",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  };

  const animePlayerTurnn = () => {
    if (!document) return;
    const divLeft = document.getElementById(players[0].name);
    const divRight = document.getElementById(players[1].name);

    if (!divRight || !divLeft) return;

    const rectRight = divRight.getBoundingClientRect();
    const rectLeft = divLeft.getBoundingClientRect();

    const distance = rectRight.x - rectLeft.x;

    anime({
      targets: ".your-turn",
      translateX: currPlayerTrun === 1 ? distance : 0,
      duration: 1000,
      easing: "easeInOutExpo",
    });
  };

  return { animeStartGame, animeTicTacToe, animePlayerTurnn };
};

export default useAnimeLetters;
