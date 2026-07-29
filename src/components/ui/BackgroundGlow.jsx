export default function BackgroundGlow() {
  return (
    <>
      {/* Base Background */}
      <div className="fixed inset-0 -z-50 bg-[#171311]" />

      {/* Top Left Glow */}
      <div
        className="
          fixed
          -top-64
          -left-64
          h-[720px]
          w-[720px]
          rounded-full
          blur-[220px]
          pointer-events-none
          -z-40
        "
        style={{
          background: "#5B4633",
          opacity: 0.22,
        }}
      />

      {/* Bottom Right Glow */}
      <div
        className="
          fixed
          -bottom-64
          -right-64
          h-[760px]
          w-[760px]
          rounded-full
          blur-[240px]
          pointer-events-none
          -z-40
        "
        style={{
          background: "#8C6A45",
          opacity: 0.18,
        }}
      />

      {/* Center Soft Glow */}
      <div
        className="
          fixed
          top-1/2
          left-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[220px]
          pointer-events-none
          -z-40
        "
        style={{
          background: "#3D2D23",
          opacity: 0.12,
        }}
      />
    </>
  );
}
