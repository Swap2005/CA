// loader
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};


window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;

  document.getElementById("progress-bar").style.width = progress + "%";
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.onclick=e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      .scrollIntoView({behavior:'smooth'});
  }
});

// fade
const faders=document.querySelectorAll('.fade');
window.addEventListener('scroll',()=>{
  faders.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add('show');
    }
  });
});

// counter
const counters=document.querySelectorAll('.count');
const runCounter = () => {
  counters.forEach(counter=>{
    const target=+counter.getAttribute('data-target');
    let count=0;

    const update=()=>{
      const inc=target/100;
      count+=inc;
      if(count<target){
        counter.innerText=Math.floor(count);
        requestAnimationFrame(update);
      }else{
        counter.innerText=target;
      }
    };

    update();
  });
};

window.addEventListener('scroll', runCounter);

// form
document.querySelector(".contact-form button").onclick = () => {
  alert("Message sent successfully!");
};

document.querySelectorAll(".faq-item").forEach(item=>{
  item.onclick=()=>{
    const p = item.querySelector("p");
    p.style.display = (p.style.display === "block") ? "none" : "block";
  };
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if(window.scrollY > 50){
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});