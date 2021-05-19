import { circle } from "better-react-spinkit";

export default function Loading() {
  return (
    <center style={{ display: "grid", placeItem: "center", height: "100vh" }}>
      <div>
        <img src="whatsapp" alt="" height={200} style={{ marginBottom: 10 }} />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}
