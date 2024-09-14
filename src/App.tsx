import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import ArticleOverview from "./components/ArticleOverview";

export default function App() {
  return (
    <div id="root">
      <Canvas camera={{ fov: 45, near: .1, far: 100, position: [-5, -10, 7] }}>
        <ambientLight intensity={0.7} color={"pink"} />

        <OrbitControls enableZoom={false} />
        <ArticleOverview />
      </Canvas>
    </div>
  );
}
