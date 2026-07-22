export default function BackgroundGlow() {
  return (
    <>
      {/* Cyan Glow */}
      <div className="absolute left-[-120px] top-[-80px] h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[170px]" />

      {/* Purple Glow */}
      <div className="absolute right-[-120px] top-[120px] h-[350px] w-[350px] rounded-full bg-violet-500/15 blur-[180px]" />

      {/* Bottom Blue Glow */}
      <div className="absolute bottom-[-180px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/8 blur-[220px]" />
    </>
  );
}