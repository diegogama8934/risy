'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const Moon = () => {
  const moonRef = useRef<THREE.Mesh>(null);
  const textureLoader = new THREE.TextureLoader();

  const moonTexture = textureLoader.load('/texture/moonmap4k.jpg');
  const bumpTexture = textureLoader.load('/texture/moonbump4k.jpg');

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={moonRef} castShadow receiveShadow>
      <sphereGeometry args={[0.98, 32, 32]} />
      <meshPhongMaterial map={moonTexture} bumpMap={bumpTexture} bumpScale={0.02} />
    </mesh>
  );
};

const MoonScene = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 4], fov: 60 }} style={{ height: '70dvh', backgroundColor: '#020617' }}>
      {/* Luces */}
      <ambientLight intensity={0.05} />
      <pointLight position={[-5, 2, -6]} intensity={30} castShadow color="#fff" />

      {/* Estrellas de fondo */}
      <Stars radius={80} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

      {/* Luna */}
      <Moon />

      {/* Controles de órbita */}
      <OrbitControls enableZoom={false} />

      {/* Efecto de Bloom */}
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.4} intensity={2} radius={0} />
      </EffectComposer>
    </Canvas>
  );
};

export default MoonScene;