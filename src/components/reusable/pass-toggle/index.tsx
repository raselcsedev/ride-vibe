import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type PropsType = {
  showPass: boolean;
  setShowPass: Dispatch<SetStateAction<boolean>>;
};
export default function PassToggle({ setShowPass, showPass }: PropsType) {
  return (
    <Button
      onClick={() => setShowPass(!showPass)}
      type="button"
      variant={"outline"}
      className=""
    >
      {!showPass ? <EyeOff /> : <Eye />}
    </Button>
  );
}
