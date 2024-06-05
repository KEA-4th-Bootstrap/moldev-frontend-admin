import { useCallback } from 'react';
import { DirectionalLight } from 'three';

export const useIsland = () => {
  const lightIntensity = 10.0;

  const positions = [
    // points of cube, 8 points, length of each side is 10, center is (0, 0, 0)
    [5, 5, 5],
    [5, 5, -5],
    [5, -5, 5],
    [5, -5, -5],
    [-5, 5, 5],
    [-5, 5, -5],
    [-5, -5, 5],
    [-5, -5, -5],
  ];

  const colors = [
    '#FF2450',
    '#008060',
    '#6A0DAD',
    '#FFD700',
    '#007FFF',
    '#FF9500',
    '#00A78B',
    '#FF5078',
  ];
  const useGettingShadowRef = () => {
    const shadowLightRef = useCallback((node: DirectionalLight) => {
      if (node !== null) {
        const shadow = node.shadow;
        shadow.mapSize.width = 3000;
        shadow.mapSize.height = 3000;
        shadow.camera.near = 10;
        shadow.camera.far = 500;
        shadow.camera.left = -200;
        shadow.camera.right = 200;
        shadow.camera.top = 200;
        shadow.camera.bottom = -200;
        shadow.radius = 5;
      }
    }, []);

    return [shadowLightRef];
  };

  const [shadowLightRef] = useGettingShadowRef();
  const [shadowLightRef2] = useGettingShadowRef();

  return {
    lightIntensity,
    positions,
    colors,
    shadowLightRef,
    shadowLightRef2,
  };
};
