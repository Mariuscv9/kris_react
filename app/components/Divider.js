export default function Divider(props) {
  return (
    <footer>
      <div fluid className="bg-dark divider">
        <h2>{props.text}</h2>
      </div>
    </footer>
  );
}
