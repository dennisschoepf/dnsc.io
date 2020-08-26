export const shapes = {
  CIRCLE: 'CIRCLE',
  SQUARE: 'SUQARE',
  TRIANGLE: 'TRIANGLE',
};

export default function Shape({ shape, size, color, className }) {
  if (shape === shapes.CIRCLE) {
    return (
      <div
        className={className}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          borderRadius: '50%',
        }}
      ></div>
    );
  }
  if (shape === shapes.SQUARE) {
    return (
      <div
        className={className}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
        }}
      ></div>
    );
  }
  if (shape === shapes.TRIANGLE) {
    return (
      <div
        className={className}
        style={{
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size - 2}px solid ${color}`,
        }}
      ></div>
    );
  }
}
