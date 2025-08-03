import { ReactNode } from "react";

type Props = { children: ReactNode };

function Button({ children }: Props) {
  return <div>{children}</div>;
}

export default Button;
