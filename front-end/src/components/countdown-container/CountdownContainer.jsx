import './CountdownContainer.css';

/**
 * @description Function component for countdown
 * @returns {Object}
 */
export default function CountdownContainer() {
  return (
    <div className="countdown-container">
      <div className="header-2-bold">Next Giveaway: 05/15/21 @ 12 PM EST</div>
      <div className="header-2-bold">Prize: 50$ (USD) In ADA or BTC (your choice)</div>
    </div>
  );
}