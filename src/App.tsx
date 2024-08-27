import "./App.css";
import { Canvas } from "@react-three/fiber";
import ArticleOverview from "./components/ArticleOverview";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.7} color={"yellow"} />

        <OrbitControls enableZoom={false} />
        <ArticleOverview />
      </Canvas>
    </div>
  );
}
