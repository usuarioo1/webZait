import { ImageResponse } from "next/og";

export const alt = "WebZait - Desarrollo web en Chile";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #020617 0%, #172554 55%, #581c87 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div style={{ color: "#60a5fa", fontSize: 34, marginBottom: 24 }}>
          WEBZAIT.CL
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          Desarrollo web que impulsa tu negocio
        </div>
        <div style={{ color: "#d1d5db", fontSize: 34, marginTop: 32 }}>
          Sitios web, e-commerce y aplicaciones a medida
        </div>
      </div>
    ),
    size
  );
}
