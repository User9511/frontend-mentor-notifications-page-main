let notificationNumber = document.getElementById("notification-number");
let notifications = 3;
let btnMarkRead = document.getElementById("mark-read");
let unreadIcon = document.querySelectorAll(".unread-icon");
let notificationContainer = document.querySelectorAll(".notification");
notificationNumber.innerHTML = `${notifications}`;

// Mark all notifications as read
function markAllAsRead() {
  btnMarkRead.addEventListener("click", () => {
    notificationNumber.innerHTML = "0";

    unreadIcon.forEach((icon) => {
      icon.style.display = "none";
    });

    notificationContainer.forEach((unread) => {
      unread.classList.remove("unread");
    });
  });
}

markAllAsRead();

// Function to update each notification count
let notificationCounter = () => {
  notificationNumber.innerHTML = `${notifications}`;
};

notificationContainer.forEach((notification, index) => {
  let handleClick = (e) => {
    if (e.type === "click" || (e.type === "keydown" && (e.key === "" || e.key === "Enter"))) {
      if (notification.classList.contains("unread") && notifications > 0) {
        notifications--;
        notification.classList.remove("unread");

        const clickedIcon = unreadIcon[index];
        if (clickedIcon) {
          clickedIcon.classList.remove("unread-icon");
        }

        notificationCounter();
        notification.removeEventListener("click", handleClick);
      }
    }
  };

  notification.addEventListener("click", handleClick);
});
