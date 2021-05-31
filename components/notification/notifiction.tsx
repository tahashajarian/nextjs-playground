import style from "./notification.module.scss";
const success = "/images/icons/success.svg";
const warning = "/images/icons/warning.svg";
const error = "/images/icons/error.svg";
const cancel = "/images/icons/cancel.svg";

import { copyTextToClipboard } from "../../utils/copy-text-to-clipborad";

const getIcon = (type) => {
  // return undefined;
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
      return style.success;
    case "warning":
      return style.warning;
    case "error":
      return style.error;
    default:
      return "";
  }
};

const errorInServerText = "خطا در سرور";

export const notification = (
  text: string,
  type: "success" | "warning" | "error"
) => {
  const allNotifes = document.getElementsByClassName(
    style.notificationSnackBar
  );
  const count = allNotifes.length;
  const alreadyErrors: any = [];
  let remaning = 200;
  let running = true;
  const notif_id = new Date().getTime().toString();

  if (count) {
    for (let i = 0; i < count; i++) {
      let alreadyInpageTextError =
        allNotifes[i].querySelectorAll("span")[0].innerHTML;
      alreadyErrors.push(alreadyInpageTextError);
    }
  }

  const networkError = document.getElementsByClassName(
    `${style.networkStatusNotif} ${style.notification__comeIn}`
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
      if (em) em.style.width = remaning + "%";
      if (remaning < 0) {
        removeNotif();
      }
    }
  }, 60); // 60ms * 100 = time to remove notif

  const removeNotif = () => {
    clearInterval(finalRemove);
    const thisNotif = document.getElementById(notif_id);
    if (thisNotif) {
      thisNotif.classList.add(style.notification__comeOut);
      setTimeout(() => {
        const thisNotif = document.getElementById(notif_id);
        if (thisNotif) document.body.removeChild(thisNotif);
      }, 400);
    }
  };

  const notif = document.createElement(`div`);
  notif.id = notif_id;
  notif.ondblclick = () => {
    copyTextToClipboard(text);
  };
  const cancelButton = `<img
      alt="cancel"
      src="${cancel}"
      onclick='this.parentElement.classList.add("${style.notification__comeOut}");setTimeout(() => {this.parentElement.parentElement.removeChild(this.parentElement)},400)'
    />`;

  const content = `${cancelButton}<div class='${
    style.icon
  }'> <img alt='icon' src="${getIcon(type)}" /><span>${text}</span><em class="${
    style.timingShadowNotification
  } ${getClassNameTimeLine(type)} ${style.timelineStart}></em></div>`;

  notif.className = `${style.notificationSnackBar} ${
    style["notification__" + type]
  }`;
  notif.innerHTML = content;
  notif.classList.add(style.notification__comeIn);
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
// import React from "react";
// import { useToasts } from "react-toast-notifications";
// import { useAppContext } from "../context/state";

// interface Props {
//   x: any;
//   y: any;
// }

// const notification = (x, y) => {
//   console.log("add tost => ", x, y);
//   // const { addToast } = useToasts();
//   // addToast(x, {
//   //   appearance: "error",
//   //   autoDismiss: true,
//   // });
//   // const state = useAppContext();
//   // console.log("state => ", state);
//   // alert(x);
//   // return <div></div>;
// };

export default notification;
