export default function BackgroundGlow() {
  return (
    <>
      <div
        className="
          fixed
          -top-56
          -left-52
          h-[520px]
          w-[520px]
          rounded-full
          blur-[180px]
          opacity-15
          pointer-events-none
        "
        style={{
          background: "#5A4331",
        }}
      />

      <div
        className="
          fixed
          bottom-0
          right-0
          h-[460px]
          w-[460px]
          rounded-full
          blur-[180px]
          opacity-15
          pointer-events-none
        "
        style={{
          background: "#8B6B4A",
        }}
      />
    </>
  );
}
