import { Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";

type PropsType = {
  showPass: boolean;
  setShowPass: Dispatch<SetStateAction<boolean>>;
};
export default function PassShowingToggler({
  setShowPass,
  showPass,
}: PropsType) {
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
