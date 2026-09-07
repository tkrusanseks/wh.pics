/* =========================================================
   아래는 자동으로 화면을 그려주는 코드예요.
   사진/선수 추가는 이 파일이 아니라 data.js 에서 하세요.
   ========================================================= */

function cell(img){
  return img ? `<img src="${img}" alt="">` : `<div class="ph">사진 없음</div>`;
}

// ---- 최애 탭 ----
document.getElementById('favName').textContent = FAVORITE.name;
document.getElementById('favTeam').textContent = FAVORITE.team;
document.getElementById('favNote').textContent = FAVORITE.note;
document.getElementById('favSeasons').innerHTML = FAVORITE.seasons.map(s => `
  <div class="season-block">
    <p class="season-label">${s.label}</p>
    <div class="fav-grid">
      ${s.photos.map(p => `<div class="cell">${cell(p)}</div>`).join('')}
    </div>
  </div>
`).join('');

// ---- 전체 탭 : 무한 스크롤 ----
const PAGE_SIZE = 6;
let loaded = 0;
const postGrid = document.getElementById('postGrid');
const loadingHint = document.getElementById('loadingHint');
document.getElementById('allCount').textContent = POSTS.length + "명";

function renderPostCard(post, index){
  const cover = post.images[0] ? post.images[0].img : "";
  return `
    <div class="post-card" data-index="${index}">
      ${cell(cover)}
      <span class="count-badge">${post.images.length}장</span>
      <span class="name-tag">${post.name}</span>
    </div>
  `;
}

function loadMore(){
  const next = POSTS.slice(loaded, loaded + PAGE_SIZE);
  if(next.length === 0){
    loadingHint.textContent = "모두 불러왔어요";
    return;
  }
  next.forEach((post, i) => {
    postGrid.insertAdjacentHTML('beforeend', renderPostCard(post, loaded + i));
  });
  loaded += next.length;
  if(loaded >= POSTS.length){
    loadingHint.textContent = "모두 불러왔어요";
  }
}
loadMore();

const sentinel = document.getElementById('sentinel');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) loadMore();
  });
}, { rootMargin: "300px" });
observer.observe(sentinel);

// ---- 게시글 클릭 → 모달로 사진 전부 보기 ----
const modal = document.getElementById('modal');
postGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.post-card');
  if(!card) return;
  const post = POSTS[Number(card.dataset.index)];

  document.getElementById('modalName').textContent = post.name;
  document.getElementById('modalSub').textContent = post.team + " · " + post.images.length + "장";

  // 이 선수 사진들에 붙은 tag 종류를 중복 없이 뽑아내기
  const tags = [...new Set(post.images.map(p => p.tag).filter(Boolean))];

  const tagBar = document.getElementById('modalTags');
  const grid = document.getElementById('modalGrid');

  tagBar.innerHTML = tags.map(t => `<button class="tag-btn" data-tag="${t}">${t}</button>`).join('');
  grid.innerHTML = `<p class="tag-hint">위에서 태그를 선택하면 사진이 보여요</p>`;

  tagBar.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tagBar.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selected = btn.dataset.tag;
      const matched = post.images.filter(p => p.tag === selected);
      grid.innerHTML = matched.map(p => `<div class="cell">${cell(p.img)}</div>`).join('');
    });
  });

  modal.classList.add('open');
});
document.getElementById('modalClose').addEventListener('click', () => {
  modal.classList.remove('open');
});

// ---- 탭 전환 ----
const tabs = document.querySelectorAll('.tab');
tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('view-' + btn.dataset.tab).classList.add('active');
  });
});
// 기본으로 "전체" 탭이 열리도록
tabs[0].classList.add('active');
document.getElementById('view-all').classList.add('active');
