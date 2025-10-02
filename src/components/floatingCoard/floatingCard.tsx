interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  delay = 0,
}) => (
  <div
    className="floating-card"
    style={{
      transform: `translateY(${Math.sin(Date.now() * 0.001 + delay) * 10}px)`,
      animation: `float 6s ease-in-out infinite ${delay}s`,
    }}
  >
    {children}
  </div>
);
