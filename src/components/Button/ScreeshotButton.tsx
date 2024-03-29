import { Button } from "@mantine/core";

export const CameraIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#ffffff"
      className="bi bi-camera-fill"
      viewBox="0 0 16 16">
      <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
      <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
    </svg>
  );
};

export const captureScreenshot = () => {
  const canvas = document.querySelector("canvas");
  if (!canvas) return;

  // Convert canvas content to data URL
  const dataURL = canvas.toDataURL("image/png");

  // Create a download link and trigger download
  const link = document.createElement("a");
  link.setAttribute("download", "canvas.png");
  link.setAttribute("href", dataURL.replace("image/png", "image/octet-stream"));
  link.click();
};

const ScreeshotButton = () => {
  return (
    <Button
      className="bg-sky-500 hover:bg-sky-300"
      variant="filled"
      onClick={captureScreenshot}>
      {"SCREENSHOT"}
    </Button>
  );
};

export default ScreeshotButton;
