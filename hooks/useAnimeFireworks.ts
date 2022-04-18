import anime from "animejs";
import { FireWorkPoint } from "../store/type";

const useAnimeFireworks = () => {
  const autoClick = () => {
    const canvasEl = document.querySelector(".fireworks") as HTMLCanvasElement;
    const nextEl = document.querySelector("#__next") as HTMLElement;
    if (!canvasEl) return;

    canvasEl.width = nextEl.clientWidth;
    canvasEl.height = 500;
    canvasEl.style.width = "100%";
    const ctx = canvasEl.getContext("2d");

    const centerX = canvasEl.width / 2;
    const centerY = canvasEl.height / 2;
    animateParticules(
      anime.random(
        centerX - window.innerWidth / 2,
        centerX + window.innerWidth / 2
      ),
      anime.random(centerY - 200, centerY + 200),
      ctx
    );
    anime({ duration: 200 }).finished.then(autoClick);
  };

  const renderParticule = (anim) => {
    for (let i = 0; i < anim.animatables.length; i++) {
      anim.animatables[i].target.draw();
    }
  };

  const animateParticules = (
    x: number,
    y: number,
    ctx: CanvasRenderingContext2D
  ) => {
    const numberOfParticules = 30;

    const particules: FireWorkPoint[] = [];
    for (let i = 0; i < numberOfParticules; i++) {
      particules.push(createParticule(x, y, ctx));
    }
    anime.timeline().add({
      targets: particules,
      x: (p: FireWorkPoint) => {
        return p.endPos.x;
      },
      y: (p: FireWorkPoint) => {
        return p.endPos.y;
      },
      radius: 0.1,
      duration: anime.random(1200, 1800),
      easing: "easeOutExpo",
      update: renderParticule,
    });
  };

  const setParticuleDirection = (
    x: number,
    y: number
  ): FireWorkPoint["endPos"] => {
    const angle = (anime.random(0, 360) * Math.PI) / 180;
    const value = anime.random(50, 180);
    const radius = [-1, 1][anime.random(0, 1)] * value;
    return {
      x: x + radius * Math.cos(angle),
      y: y + radius * Math.sin(angle),
    };
  };

  const createParticule = (
    x: number,
    y: number,
    ctx: CanvasRenderingContext2D
  ): FireWorkPoint => {
    const colors = ["#50fa7b", "#ffb86c", "#ff79c6", "#bd93f9", "#ff5555"];

    let p = {
      x,
      y,
      color: colors[anime.random(0, colors.length - 1)],
      radius: anime.random(16, 32),
      endPos: setParticuleDirection(x, y),
      draw: () => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
      },
    };

    return p;
  };

  return { autoClick };
};

export default useAnimeFireworks;
