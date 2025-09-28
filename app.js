const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})
// ===== Sidebar Menu Toggle =====
const menuIcon = document.querySelector('.menu-icon i');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon i');

// Open Sidebar
menuIcon.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Close Sidebar
closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Close sidebar when clicking on any link
document.querySelectorAll('.sidebar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});

// ===== Auto Blur Effect for Sections =====
const autoBlurElements = document.querySelectorAll('.autoBlur');

window.addEventListener('scroll', () => {
  autoBlurElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.filter = "blur(0px)";
      el.style.opacity = "1";
      el.style.transition = "all 1s ease-in-out";
    } else {
      el.style.filter = "blur(5px)";
      el.style.opacity = "0.5";
    }
  });
});

// ===== Auto Display Animation =====
const autoDisplayElements = document.querySelectorAll('.autoDisplay');

window.addEventListener('scroll', () => {
  autoDisplayElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
      el.style.transition = "all 1s ease-in-out";
    } else {
      el.style.transform = "translateY(50px)";
      el.style.opacity = "0";
    }
  });
});

// ===== Contact Form Validation (Optional) =====
const contactBtn = document.querySelector('.contact-box button');
if (contactBtn) {
  contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("🚀 Thank you for reaching out! I’ll get back to you soon.");
  });
}
