import ComicUpload from "../components/ComicUpload";
import "./Upload.css";

export default function Upload() {
  return (
    <div className="upload-page">
      <h1 className="upload-heading">Upload Your Comic</h1>
      <ComicUpload />
    </div>
  );
}
