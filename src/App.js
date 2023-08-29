import "./styles.css";

export default function Button() {
  return (
    <button
      onClick={function handleClick() {
        alert("You clicked me!");
      }}
    >
      Clicked Me
    </button>
  );
}
