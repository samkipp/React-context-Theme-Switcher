import Button from "./Button";

export default function Card({ switchTheme, title }) {
  return (
    <div className="card">
      <p>This is a {title} card</p>
      <Button switchTheme={switchTheme} />
    </div>
  );
}
