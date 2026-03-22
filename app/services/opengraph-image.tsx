import { ImageResponse } from "next/og";
import { services } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Capstone Services";

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
            "linear-gradient(135deg, rgba(198,165,107,0.28), rgba(17,17,16,1) 56%, rgba(142,154,130,0.22) 100%)",
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
            Services
          </div>
          <div style={{ fontSize: 22, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            CAPSTONE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 840 }}>
          <div style={{ fontSize: 76, lineHeight: 1.02, fontWeight: 700 }}>
            Brand, website, product, and growth services built to convert.
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.42, color: "rgba(243,240,232,0.72)" }}>
            Explore strategy, identity, redesign, development, campaign, and growth support
            services for businesses that need clearer positioning and stronger digital trust.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {services.slice(0, 4).map((service) => (
            <div
              key={service.slug}
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
                Service
              </div>
              <div style={{ fontSize: 24, lineHeight: 1.2, fontWeight: 600 }}>
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
