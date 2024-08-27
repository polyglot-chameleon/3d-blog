import { Text3D } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

export default function ArticleOverview() {
  const text3D = useRef<Mesh>(null);
  text3D.current?.rotateY(-0.2);
  text3D.current?.rotateZ(-0.2);

  return (
    <Text3D ref={text3D!} font={import.meta.env.VITE_FONT_PATH} size={0.3}>
      hi there! this is my new 3d blog!
      <meshStandardMaterial />
    </Text3D>
  );
}
