/* =========================================================
   ✏️ 사진/선수 정보는 이 파일에서만 관리하세요.
   index.html, style.css, app.js 는 건드릴 필요 없어요.

   이미지는 저장소에 images 폴더를 만들어 올린 뒤
   "images/파일명.jpg" 형태로 경로만 적어주면 됩니다.
   아직 사진이 없으면 "" 로 두면 빈 박스가 표시돼요.

   [폴더 정리 추천 예시]
   images/
     favorite/2627/사진1.jpg   ← 최애, 시즌별로 폴더 분리
     favorite/2526/사진1.jpg
     favorite/2425/사진1.jpg
     players/선수A/사진1.jpg    ← 다른 선수는 시즌 상관없이 폴더만 구분
     players/선수B/사진1.jpg
   이렇게 정리해두면 나중에 경로 적을 때 헷갈리지 않아요.
   ========================================================= */

const FAVORITE = {
  name: "선수 이름",
  team: "소속팀 · 포지션 · #00",
  note: "여기에 최애로 정한 이유나 코멘트를 적어보세요.",
  // 최신 시즌이 맨 위로 오도록, 배열 순서를 현재 → 과거로 적어주세요.
  seasons: [
    { label: "2026-27", photos: ["", "", "", ""] },
    { label: "2025-26", photos: ["", "", "", "", ""] },
    { label: "2024-25", photos: ["", "", ""] }
  ]
};

// 한 선수(POSTS 항목 하나)당 여러 장의 사진을 images 배열에 쌓으면 됩니다.
// 이적이 잦은 선수는 사진마다 tag를 붙여주세요. tag는 팀명이든 시즌이든 자유롭게 적으면 되고,
// 상세보기를 열면 이 tag들이 버튼으로 나타나서 골라 볼 수 있어요.
// 필요한 만큼 아래에 계속 이어붙이세요. 무한 스크롤이 알아서 나눠서 보여줍니다.
const POSTS = [
  { name: "선수 A", team: "포지션 · 팀명", images: [
      { img: "", tag: "삼성" },
      { img: "", tag: "삼성" },
      { img: "", tag: "한화" },
      { img: "", tag: "한화" }
  ]},
  { name: "선수 B", team: "포지션 · 팀명", images: [
      { img: "", tag: "2025-26" },
      { img: "", tag: "2025-26" },
      { img: "", tag: "2024-25" }
  ]},
  { name: "선수 C", team: "포지션 · 팀명", images: [
      { img: "", tag: "롯데" },
      { img: "", tag: "롯데" },
      { img: "", tag: "롯데" },
      { img: "", tag: "기아" },
      { img: "", tag: "기아" }
  ]},
  { name: "선수 D", team: "포지션 · 팀명", images: [
      { img: "", tag: "LG" },
      { img: "", tag: "LG" }
  ]},
  { name: "선수 E", team: "포지션 · 팀명", images: [
      { img: "", tag: "NC" },
      { img: "", tag: "NC" },
      { img: "", tag: "두산" },
      { img: "", tag: "두산" }
  ]},
  { name: "선수 F", team: "포지션 · 팀명", images: [
      { img: "", tag: "SSG" },
      { img: "", tag: "SSG" },
      { img: "", tag: "SSG" }
  ]},
  { name: "선수 G", team: "포지션 · 팀명", images: [
      { img: "", tag: "KT" },
      { img: "", tag: "KT" }
  ]},
  { name: "선수 H", team: "포지션 · 팀명", images: [
      { img: "", tag: "키움" },
      { img: "", tag: "키움" }
  ]}
];
