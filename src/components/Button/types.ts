export interface IButton {
  handleClick?: () => void;
  name?: string;
  types: "default" | "resetButton";
}
