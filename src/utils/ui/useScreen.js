import { useSelector } from "react-redux";
import { selectScreen } from "../../redux/reducers/ui/ui.selectors";

export const useScreen = () => {
  const screen = useSelector(selectScreen);

  return screen;
};
