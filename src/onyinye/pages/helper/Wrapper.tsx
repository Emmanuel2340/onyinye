import { FC } from "react";

interface Props {
  children: any;
}
const Wrapper: FC<Props> = (props: any) => {
  return props.children;
};

export default Wrapper;
