/**
 * script.js — 单页滚动布局交互
 * 1. 顶部阅读进度条
 * 2. 导航随滚动高亮当前区块
 * 3. 内容入场动画
 * 4. 回到顶部
 */

(function () {
  "use strict";

  const progressBar = document.querySelector("[data-progress]");
  const toTopBtn = document.querySelector("[data-to-top]");
  const navLinks = Array.from(document.querySelectorAll(".nav a[href^='#']"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  /* ---------------- 阅读进度 + 回到顶部 ---------------- */
  let ticking = false;

  function onScroll() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;

    if (progressBar) progressBar.style.width = (ratio * 100).toFixed(2) + "%";

    if (toTopBtn) {
      toTopBtn.classList.toggle("visible", window.scrollY > 640);
    }

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(onScroll);
      }
    },
    { passive: true }
  );

  if (toTopBtn) {
    toTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------- 导航高亮 ---------------- */
  function setActive(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    const visible = new Map();

    const spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = null;
        let bestRatio = 0;
        visible.forEach(function (ratio, id) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        // 滚到页面顶部时强制回到 About
        if (window.scrollY < 120) bestId = "about";
        if (bestId) setActive(bestId);
      },
      {
        rootMargin: "-84px 0px -45% 0px",
        threshold: [0.05, 0.2, 0.45, 0.7],
      }
    );

    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  /* ---------------- 入场动画 ---------------- */
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealItems.length) {
    const revealer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          // 同一批出现的元素做阶梯延迟，避免整块一起弹
          const step = Math.min(Number(entry.target.dataset.idx) || 0, 4);
          window.setTimeout(function () {
            entry.target.classList.add("in");
          }, step * 60);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    revealItems.forEach(function (item, i) {
      item.dataset.idx = String(i % 5);
      revealer.observe(item);
    });

    // 兜底：初始即在视口内的元素（或观察器未及时回调）直接显示
    window.setTimeout(function () {
      revealItems.forEach(function (item) {
        if (item.classList.contains("in")) return;
        var rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.98) item.classList.add("in");
      });
    }, 600);
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("in");
    });
  }

  /* ---------------- 图片兜底 ---------------- */
  document.querySelectorAll(".post-thumb img").forEach(function (img) {
    img.addEventListener("error", function () {
      img.style.display = "none";
      img.parentElement.style.background =
        "linear-gradient(135deg, hsl(240 2% 16%), hsl(240 2% 11%))";
    });
  });

  onScroll();
})();
