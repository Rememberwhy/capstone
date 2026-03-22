import { ImageResponse } from "next/og";
import { caseStudies } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Capstone Case Studies";

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
            "linear-gradient(135deg, rgba(198,165,107,0.30), rgba(17,17,16,1) 54%, rgba(127,145,136,0.22) 100%)",
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
            Case Studies
          </div>
          <div style={{ fontSize: 22, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            CAPSTONE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 840 }}>
          <div style={{ fontSize: 76, lineHeight: 1.02, fontWeight: 700 }}>
            Proof built around outcomes, not just aesthetics.
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.42, color: "rgba(243,240,232,0.72)" }}>
            Brand, website, and growth case studies showing how clearer positioning and better
            digital execution improve trust and conversion.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                flex: 1,
                padding: "20px 22px",
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
                {study.industry}
              </div>
              <div style={{ fontSize: 26, lineHeight: 1.2, fontWeight: 600 }}>{study.title}</div>
              <div style={{ fontSize: 18, lineHeight: 1.4, color: "rgba(243,240,232,0.7)" }}>
                {study.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
