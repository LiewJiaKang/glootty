"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame, type RootState } from "@react-three/fiber";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/3d/book.glb");
  useGLTF.preload("/3d/book.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame((_state: RootState) => {
    if (modelRef.current) {
      modelRef.current.rotation.x = -Math.PI / 6; // Tilt forward
      modelRef.current.rotation.y = Math.PI / 6; // Slight turn to the right
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={3}
      position={[0, -0.5, 0]}
    />
  );
}

export function ThreeDModel() {
  return (
    <div className="w-full h-full min-h-[500px] block">
      <Canvas
        camera={{
          fov: 40,
          near: 0.1,
          far: 200,
          position: [0, 2, 6],
        }}
      >
        <Environment preset="city" />
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
} 