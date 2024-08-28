import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 72,
          fontWeight: 700,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            opacity: 0.4,
            filter: "blur(100px)",
            backgroundImage:
              "radial-gradient(circle at 51.63% 52.16%, #22c55e 0%, #3b82f6 20%, #ec4899 40%, #ef4444 60%, #f97316 80%, #a855f7 100%)",
          }}
        ></div>
        <div style={{ zIndex: 4 }}>D: 👋</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
