import "./App.css";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="green" position={[0, 0, 5]} />

      <mesh>
        <boxGeometry args={[10, 10, 2]} />
        <meshPhongMaterial />
      </mesh>
    </Canvas>
  );
}
