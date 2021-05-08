import success from "../images/icons/success.svg";
import warning from "../images/icons/warning.svg";
import cancel from "../images/icons/cancel.svg";
import error from "../images/icons/error.svg";
import T from "../translate/translate";
import { copyTextToClipboard } from "../utils/copy-text-to-clipborad";

const getIcon = (type) => {
  switch (type) {
    case "success":
      return success;
    case "error":
      return warning;
    case "warning":
      return error;

    default:
      return success;
  }
};

const getClassNameTimeLine = (type) => {
  switch (type) {
    case "success":
      return "success";
    case "warning":
      return "warning";
    case "error":
      return "error";
    default:
      return "";
  }
};

const errorInServerText = "خطا در سرور";

export const notifiction = (
  text: string,
  type: "success" | "warning" | "error"
) => {
  const allNotifes = document.getElementsByClassName("notificationSnackBar");
  const count = allNotifes.length;
  const alreadyErrors: any = [];
  let remaning = 100;
  let running = true;
  const notif_id = new Date().getTime().toString();

  if (count) {
    for (let i = 0; i < count; i++) {
      let alreadyInpageTextError = allNotifes[i].querySelectorAll("span")[0]
        .innerHTML;
      alreadyErrors.push(alreadyInpageTextError);
    }
  }

  const networkError = document.getElementsByClassName(
    "network-status-notif notification__comeIn"
  );

  if (alreadyErrors.includes(text)) return;

  if (text === errorInServerText && networkError.length) return;

  if (
    alreadyErrors.includes("خطایی در سرور رخ داده است") &&
    text === errorInServerText
  )
    return;

  const finalRemove = setInterval(() => {
    if (running) {
      const em = notif.getElementsByTagName("em")[0];
      remaning -= 1;
      em.style.width = remaning + "%";
      if (remaning < 0) {
        removeNotif();
      }
    }
  }, 60); // 60ms * 100 = time to remove notif

  const removeNotif = () => {
    clearInterval(finalRemove);
    const thisNotif = document.getElementById(notif_id);
    if (thisNotif) {
      thisNotif.classList.add("notification__comeOut");
      setTimeout(() => {
        const thisNotif = document.getElementById(notif_id);
        if (thisNotif) document.body.removeChild(thisNotif);
      }, 400);
    }
  };

  const notif = document.createElement(`div`);
  notif.id = notif_id;
  notif.ondblclick = () => {
    copyTextToClipboard(T(text));
  };
  const cancelButton = `<img
      alt="cancel"
      src="${cancel}"
      onclick='this.parentElement.classList.add("notification__comeOut");setTimeout(() => {this.parentElement.parentElement.removeChild(this.parentElement)},400)'
    />`;

  const content = `${cancelButton}<div class='icon'> <img alt='icon' src="${getIcon(
    type
  )}" /><span>${T(
    text
  )}</span><em class="timing-shadow-notification ${getClassNameTimeLine(
    type
  )} timeline-start"><em></div>`;

  notif.className = `notificationSnackBar notification__${type}`;
  notif.innerHTML = content;
  notif.classList.add("notification__comeIn");
  document.body.appendChild(notif);

  // notif.style.top = 10 + count * 90 + "px";
  if (allNotifes[count - 1]) {
    notif.style.top =
      allNotifes[count - 1].getBoundingClientRect().top + 90 + "px";
  } else {
    notif.style.top = "90px";
  }

  notif.onmouseover = (e) => {
    running = false;
  };

  notif.onmouseout = (e) => {
    running = true;
  };
};
