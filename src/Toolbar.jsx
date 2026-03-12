import AlertButton from "./AlertButton";

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing music!">Play</AlertButton>
      <AlertButton message="Uploading file!">Upload</AlertButton>
      <AlertButton message="Saved successfully!">Save</AlertButton>
    </div>
  );
}
