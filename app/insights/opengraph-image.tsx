import { ImageResponse } from "next/og";
import { insights } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Capstone Insights";

export default function OpenGraphImage() {
  const topics = insights.slice(0, 4);

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
            "linear-gradient(135deg, rgba(198,165,107,0.28), rgba(17,17,16,1) 55%, rgba(127,145,136,0.24) 100%)",
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
            Insights
          </div>
          <div style={{ fontSize: 22, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            CAPSTONE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 820 }}>
          <div style={{ fontSize: 76, lineHeight: 1.02, fontWeight: 700 }}>
            Brand, website, product, and growth insight articles.
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.45, color: "rgba(243,240,232,0.72)" }}>
            Clearer diagnosis for businesses deciding what to fix first and where to invest next.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {topics.map((article) => (
            <div
              key={article.slug}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                width: 250,
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
                {article.category}
              </div>
              <div style={{ fontSize: 24, lineHeight: 1.2, fontWeight: 600 }}>{article.title}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
