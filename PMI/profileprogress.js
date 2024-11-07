
          // Get elements to make sticky
          const header = document.getElementById("header");
          const profileCard = document.getElementById("profileCard");
          const navigation = document.getElementById("navigation");

          // Get offset positions for the elements
          const headerOffset = header.offsetTop;
          const profileCardOffset = profileCard.offsetTop;
          const navigationOffset = navigation.offsetTop;

          // Scroll event listener
          window.onscroll = function () {
            stickyHeader();
            stickyProfileCard();
            stickyNavigation();
          };

          // Make header sticky
          function stickyHeader() {
            if (window.pageYOffset > headerOffset) {
              header.classList.add("sticky");
            } else {
              header.classList.remove("sticky");
            }
          }

          // Make profile card sticky
          function stickyProfileCard() {
            if (window.pageYOffset > profileCardOffset) {
              profileCard.classList.add("sticky");
            } else {
              profileCard.classList.remove("sticky");
            }
          }

          // Make navigation sticky
          function stickyNavigation() {
            if (window.pageYOffset + window.innerHeight >= document.body.offsetHeight) {
              navigation.classList.add("sticky");
            } else {
              navigation.classList.remove("sticky");
            }
          }
