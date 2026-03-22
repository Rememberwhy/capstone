import { ImageResponse } from "next/og";
import { proposalTracks } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Capstone Proposal Request";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(135deg, rgba(198,165,107,0.28), rgba(17,17,16,1) 55%, rgba(142,154,130,0.20) 100%)",
          color: "#f3f0e8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              border: "1px solid rgba(243,240,232,0.14)",
              borderRadius: 999,
              padding: "10px 18px",
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#c6a56b",
            }}
          >
            Proposal Request
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            CAPSTONE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 860 }}>
          <div style={{ display: "flex", fontSize: 74, lineHeight: 1.02, fontWeight: 700 }}>
            Start with the right proposal track.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.42,
              color: "rgba(243,240,232,0.72)",
            }}
          >
            Share context for brand, website, campaign, or enterprise product work and get the
            clearest next step back.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {proposalTracks.map((track) => (
            <div
              key={track.name}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                flex: 1,
                padding: "18px 20px",
                borderRadius: 24,
                border: "1px solid rgba(243,240,232,0.12)",
                background: "rgba(11,11,10,0.28)",
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#c6a56b",
                }}
              >
                {track.startingFrom}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  lineHeight: 1.2,
                  fontWeight: 600,
                }}
              >
                {track.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
