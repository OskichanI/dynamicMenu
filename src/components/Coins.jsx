import { IconPadelCoin } from "../Functions/Icons";

const Coins = () => {
  return (
    <div className="tool-coins down">
      <span data-icon="coin">
        <IconPadelCoin />
      </span>
      <span data-coins>0</span>
    </div>
  );
};

export default Coins;
