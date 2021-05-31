export const downloadFile = (data, fileName) => {
  console.log("download this file => ", data.type, fileName);
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(data);
  console.log(downloadLink);
  downloadLink.target = "_blank";
  downloadLink.download = fileName;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
};
