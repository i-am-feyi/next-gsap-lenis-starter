import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create("Anticipate", "M0,0 C0.8,-0.4 0.5,1 1,1");
CustomEase.create(
  "Elastic",
  "M0,0 C0.0127,0.0956 0.0562,0.434 0.076,0.5737 C0.0958,0.7134 0.1077,0.7761 0.1187,0.8382 C0.1297,0.9003 0.1341,0.9145 0.1419,0.9463 C0.1497,0.9781 0.1574,1.0055 0.1654,1.0292 C0.1734,1.0529 0.1814,1.0725 0.1897,1.0886 C0.198,1.1047 0.2086,1.1177 0.2153,1.1258 C0.222,1.1339 0.2248,1.1342 0.2297,1.137 C0.2346,1.1398 0.2396,1.1415 0.2448,1.1424 C0.25,1.1433 0.2554,1.1433 0.261,1.1423 C0.2666,1.1413 0.2704,1.1409 0.2786,1.1366 C0.2868,1.1323 0.2922,1.1308 0.3101,1.1165 C0.328,1.1022 0.3669,1.0665 0.3862,1.0507 C0.4055,1.0349 0.4118,1.0304 0.4257,1.0219 C0.4397,1.0134 0.4548,1.0053 0.4699,0.9995 C0.485,0.9937 0.4967,0.9898 0.5163,0.9872 C0.5359,0.9846 0.5383,0.9819 0.5877,0.9842 C0.6371,0.9865 0.7439,0.9985 0.8126,1.0011 C0.8813,1.0037 0.9688,1.0002 1,1",
);
CustomEase.create("Energy", "0.32, 0.72, 0, 1");
CustomEase.create("Fade", "0.25, 0.1, 0.25, 1");
CustomEase.create("Glide", "0.8, 0, 0.2, 1");
CustomEase.create("Hop", "0.9, 0, 0.1, 1");
CustomEase.create("Osmo", "0.625, 0.05, 0, 1");
CustomEase.create("Quart.inOut", "0.770, 0, 0.175, 1");
CustomEase.create("Relaxed", "0.7, 0, 0.3, 1");
CustomEase.create("SlowDown", "0, 0, 0, 1");
CustomEase.create("Smooth", "0.38, 0.005, 0.215, 1");

export const ease = {
  anticipate: "Anticipate",
  elastic: "Elastic",
  energy: "Energy",
  fade: "Fade",
  glide: "Glide",
  hop: "Hop",
  osmo: "Osmo",
  quart: { inOut: "Quart.inOut" },
  relaxed: "Relaxed",
  slowDown: "SlowDown",
  smooth: "Smooth",
};
