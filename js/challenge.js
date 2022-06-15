document.addEventListener("DOMContentLoaded", function(){}) 

function numberArray(a) {
    if (Array.isArray(a)) {
      for (let b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
      return c;
    }
    return Array.from(a);
  }

  let counting = !0,
  timer = function () {
    return setInterval(function () {
      let a = document.getElementById("counter"),
        b = parseInt(a.innerText);
      a.innerText = b + 1;
    }, 1e3);
  },

  interval = timer(),
  minus = document.getElementById("minus"),
  plus = document.getElementById("plus"),
  heart = document.getElementById("heart"),
  pause = document.getElementById("pause"),
  commentForm = document.getElementsByTagName("form")[0];
minus.addEventListener("click", function () {
  let a = document.getElementById("counter"),
    b = parseInt(a.innerText);
  a.innerText = b - 1;
}),

  plus.addEventListener("click", function () {
    let a = document.getElementById("counter"),
      b = parseInt(a.innerText);
    a.innerText = b + 1;
  }),
  heart.addEventListener("click", function () {
    let a = document.getElementById("counter"),
      b = parseInt(a.innerText),
      c = document.querySelector(".likes"),
      d = void 0;
      if (
        []
          .concat(numberArray(c.children))
          .map(function (a) {
            return parseInt(a.dataset.num);
          })
          .includes(b)
      ) {
        d = document.querySelector('[data-num="' + b + '"]');
        let e = parseInt(d.children[0].innerText);
        d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
      } else (d = document.createElement("li")).setAttribute("data-num", b), (d.innerHTML = b + " has been liked <span>1</span> time"), c.appendChild(d);
    })
    ,
  pause.addEventListener("click", function () {
    counting
      ? ((counting = !1), clearInterval(interval), (this.innerText = "resume"))
      : ((counting = !0), (interval = timer()), (this.innerText = "pause")),
      []
        .concat( numberArray(document.getElementsByTagName("button")))
        .forEach(function (a) {
          "pause" !== a.id && (a.disabled = !counting);
        });
  }),
  commentForm.addEventListener("submit", function (a) {
    a.preventDefault();
    let b = this.children[0],
      c = b.value;
    b.value = "";
    let d = document.querySelector(".comments"),
      e = document.createElement("p");
    (e.innerText = c), d.appendChild(e);
  });
