export default function AlertButton({ message, children }) {
  function handleClick() {
    alert(message);
  }

  return (
    <button onClick={handleClick} style={{ marginRight: "10px", padding: "10px 16px" }}>
      {children}
    </button>
  );
}
