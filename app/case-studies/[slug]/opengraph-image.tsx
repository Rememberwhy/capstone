import { ImageResponse } from "next/og";
import { getCaseStudyBySlug } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type OpengraphImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function OpenGraphImage({
  params,
}: OpengraphImageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0b0b0a",
            color: "#f3f0e8",
            fontSize: 54,
            fontFamily: "sans-serif",
          }}
        >
          Capstone Case Study
        </div>
      ),
      size,
    );
  }

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
          background: `linear-gradient(135deg, ${study.visual.primary}42, rgba(17,17,16,1) 52%, ${study.visual.secondary}28 100%)`,
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
              fontSize: 18,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#c6a56b",
            }}
          >
            {study.category}
          </div>
          <div style={{ fontSize: 22, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            {study.timeline}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 840 }}>
          <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 700 }}>{study.title}</div>
          <div style={{ fontSize: 28, lineHeight: 1.4, color: "rgba(243,240,232,0.76)" }}>
            {study.result}
          </div>
        </div>

        <div style={{ display: "flex", gap: 18 }}>
          {study.kpis.map((kpi) => (
            <div
              key={kpi.label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
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
                {kpi.label}
              </div>
              <div style={{ fontSize: 26, lineHeight: 1.2, fontWeight: 600 }}>{kpi.value}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
