
import { Paddle, formatPrice, formatPercentile } from "@/types/paddle";

const rawData = [
  {
    Company: "CRBN",
    Paddle: "CRBN 1X",
    CoreThickness: 14,
    Price: "$229.99",
    Shape: "Elongated",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Toray Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2244,
    SpinPercentile: "80%",
    Length: 16.5,
    Width: 7.3,
    HandleLength: 5.5,
    StaticWeight: 8,
    SwingWeight: 116,
    SwingWeightPercentile: "56%",
    TwistWeight: 5.78,
    TwistWeightPercentile: "20%",
    BalancePoint: 24.2,
    BalancePointPercentile: "67%",
    ServeSpeed: 54.7,
    PowerPercentile: "35%",
    PunchVolleySpeed: 34.4,
    PopPercentile: "25%",
    Firepower: 30
  },
  {
    Company: "CRBN",
    Paddle: "CRBN 2X",
    CoreThickness: 16,
    Price: "$229.99",
    Shape: "Standard",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Toray Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 1975,
    SpinPercentile: "32%",
    Length: 15.8,
    Width: 8,
    HandleLength: 4.75,
    StaticWeight: 8,
    SwingWeight: 110,
    SwingWeightPercentile: "27%",
    TwistWeight: 7.5,
    TwistWeightPercentile: "99%",
    BalancePoint: 23.5,
    BalancePointPercentile: "25%",
    ServeSpeed: 53.5,
    PowerPercentile: "17%",
    PunchVolleySpeed: 34.4,
    PopPercentile: "25%",
    Firepower: 21
  }
] as const;

const paddles: Paddle[] = rawData.map(paddle => ({
  ...paddle,
  Price: formatPrice(paddle.Price),
  SpinPercentile: formatPercentile(paddle.SpinPercentile),
  SwingWeightPercentile: formatPercentile(paddle.SwingWeightPercentile),
  TwistWeightPercentile: formatPercentile(paddle.TwistWeightPercentile),
  BalancePointPercentile: formatPercentile(paddle.BalancePointPercentile),
  PowerPercentile: formatPercentile(paddle.PowerPercentile),
  PopPercentile: formatPercentile(paddle.PopPercentile),
}));

export default paddles;
