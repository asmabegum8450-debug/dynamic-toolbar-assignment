function AlertButton({ message, children }) {
  function handleClick() {
    alert(message);
  }

  return (
    <button style={{margin:10,padding:10}} onClick={handleClick}>
      {children}
    </button>
  );
}

function Toolbar() {
  const buttons = [
    { id: 1, message: "Downloading!", children: "Download File" },
    { id: 2, message: "Sharing!", children: "Share Document" },
    { id: 3, message: "Uploading!", children: "Upload Image" },
    { id: 4, message: "Saving!", children: "Save Draft" }
  ];

  return (
    <div>
      <h1>Dynamic Alert Buttons</h1>

      {buttons.map((btn) => (
        <AlertButton key={btn.id} message={btn.message}>
          {btn.children}
        </AlertButton>
      ))}

    </div>
  );
}

export default function App() {
  return <Toolbar />;
}
