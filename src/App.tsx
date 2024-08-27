import "./App.css";
import { Canvas } from "@react-three/fiber";
import ArticleOverview from "./components/ArticleOverview";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.3} color={"yellow"} />
        <ArticleOverview />
      </Canvas>
    </div>
  );
}
