"use client";

import {
  captureScreenshot,
  CameraIcon,
} from "@/components/Button/ScreeshotButton";
import { Affix, Button } from "@mantine/core";
import { useRouter } from "next/navigation";

const Interface = () => {
  const router = useRouter();
  return (
    <div className="absolute px-2 py-4 flex items-center justify-between w-full z-10">
      <Button onClick={() => router.push("/")}>{"Home"}</Button>
      <div
        className={"px-4 text-center hover:cursor-pointer"}
        onClick={captureScreenshot}>
        <CameraIcon />
      </div>
    </div>
  );
};

export default Interface;
