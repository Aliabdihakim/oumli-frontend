import "./Spinner.css";

type SpinnerProps = {
  size?: number; // Size of the spinner
  color?: string; // Color of the spinner
};

const Spinner = ({ size = 40, color = "#3498db" }: SpinnerProps) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: `${size / 8}px solid ${color}`,
        borderTop: `${size / 8}px solid transparent`,
      }}
      className="spinner animate-spin"
    />
  );
};

export default Spinner;
