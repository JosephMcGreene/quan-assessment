export default function CircleDecoration({ diameter, top, left }) {
  return (
    <div
      className="circle-decoration"
      style={{ width: diameter, top: top, left: left }}
    ></div>
  );
}
