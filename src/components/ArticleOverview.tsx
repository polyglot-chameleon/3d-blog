import { RoundedBox, Text3D } from "@react-three/drei";
import useArticles from "../hooks/useArticles";

export default function ArticleOverview() {
  const texts = useArticles();

  let OffSetY = 0;

  return (
    <>
      {texts.map((text) => (
        <RoundedBox position={[0, OffSetY--, 0]} args={[3.5, 0.9, 0.3]} key={text.title}>
          <Text3D
            font={import.meta.env.VITE_FONT_PATH}
            size={0.3}
            position={[-1.5, 0.1, 0]}
          >
            {text.title}
            <meshStandardMaterial />
          </Text3D>
          <Text3D
            font={import.meta.env.VITE_FONT_PATH}
            size={0.2}
            position={[-1.5, -0.3, 0]}
          >
            {text.desc}
            <meshStandardMaterial />
          </Text3D>

          <meshStandardMaterial opacity={0.5} />
        </RoundedBox>
      ))}
    </>
  );
}
