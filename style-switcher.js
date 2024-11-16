//============ class open untuk thema warna //===========
const themaColor = document.querySelector(".style-switcher-toggler");
themaColor.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
// ketika ada event scrool hilangkan class open nya!
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// ketika Theme warna di klik aktifkan warnanya //
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
      // simpan tema yang dipilih ke local storage
      localStorage.setItem("activeStyle", color);
    } else {
      style.setAttribute("disabled", true);
    }
  });
}

// ============== Dark mode and light mode ==============
const dayNight = document.querySelector(".day-night");

function tooggleDarkMode() {
  dayNight.querySelector("i").classList.toggle("fa-cloud-moon");
  dayNight.querySelector("i").classList.toggle("fa-cloud-sun");
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

dayNight.addEventListener("click", tooggleDarkMode);
window.addEventListener("load", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.add("fa-cloud-sun");
  } else {
    document.body.classList.remove("dark");
    dayNight.querySelector("i").classList.add("fa-cloud-moon");
  }

  // ambil tema yang dipilih dari local storage
  const activeStyle = localStorage.getItem("activeStyle");
  if (activeStyle) {
    setActiveStyle(activeStyle);
  }
});
// const objek = {
//   name: "Patra",
//   "last name": "dinata",
//   umur: 21,
//   email: "patra dinata08@gmaill.com",
//   cita_cita: "menjadi programmer",
// };

// const grade = (nilai = 65) => {
//   if (nilai >= 85) {
//     return "nilai Kamu A ";
//   } else if (nilai >= 75) {
//     return "Nilai kamu B ";
//   } else if (nilai >= 65) {
//     return "nilai kamu C";
//   } else {
//     return "Maaf anda tidak luluss";
//   }
// };
// grade();
// console.log(grade());

// const objekNotation = {
//   name: "budi",
//   alamat: "jakarta",
//   "last name": "bandung indonesia",
//   age: 21,
// };

// function addName(name, alamat) {
//   return `Halo guys perkenalkan nama saya ${name} saya tinggal di ${alamat}`;
// }
// const name = addName("patra dinata", "Lampung");
// console.log(name);

// // toggle class open untuk navbar
// // function navbar() {
// //   const navbarNav = document.querySelector(".navbar-nav");
// //   const hamburgerMenu = document.querySelector("#hamburger-menu");
// //   hamburgerMenu.addEventListener("click", () => {
// //     navbarNav.classList.toggle("open");
// //   });

// //   // klik di luar elemen untuk menghilangkan class open
// //   document.addEventListener("click", (event) => {
// //     if (!navbarNav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
// //       navbarNav.classList.remove("open");
// //     }
// //   });
// // }
// // navbar();
// //============== Dark and Light mode=================== //

// // ===================Selesai========================== //
// // mengakses objek dengan objek destructuring

// function log() {
//   return "Hello world";
// }
// log();
// console.log(log());

// console.log("hello");

// const objek1 = {
//   name: "patra",
//   age: 21,
//   email: "patra dinata08@gmaill.com",
//   "last name": "dinata",
// };
// console.log(objek1.age);
