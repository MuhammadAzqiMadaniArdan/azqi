export default function Bubble({ className }) {
  return (
    <div
      className={`absolute rounded-full bg-gradient-to-r from-green-700 to-green-500 shadow-[0_30px_15px_rgba(0,0,0,0.15)] ${className}`}
    />
  );
}
