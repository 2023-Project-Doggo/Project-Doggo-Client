import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube032_Material005_0: THREE.Mesh;
    Cube032_Material005_0001: THREE.Mesh;
    Cube033_Material005_0: THREE.Mesh;
    Cube033_Material005_0001: THREE.Mesh;
    Cube034_Material005_0: THREE.Mesh;
    Cube034_Material005_0001: THREE.Mesh;
    Cube035_Material005_0: THREE.Mesh;
    Cube036_Material005_0: THREE.Mesh;
    Cube036_Material005_0001: THREE.Mesh;
    Cube037_Material005_0: THREE.Mesh;
    Cube039_Material005_0: THREE.Mesh;
    Cube040_Material005_0: THREE.Mesh;
    Cube041_Material005_0: THREE.Mesh;
    Cube041_Material005_0001: THREE.Mesh;
    Cube042_Material005_0: THREE.Mesh;
    Cube042_Material005_0001: THREE.Mesh;
    Cube043_Material005_0: THREE.Mesh;
    Cube044_Material005_0: THREE.Mesh;
    Cube045_Material005_0: THREE.Mesh;
    Cube046_Material005_0: THREE.Mesh;
    Cube046_Material005_0001: THREE.Mesh;
    Cube047_Material005_0: THREE.Mesh;
    Cube047_Material005_0001: THREE.Mesh;
    Cube048_Material005_0: THREE.Mesh;
    Cube049_Material005_0: THREE.Mesh;
    Cube050_Material005_0: THREE.Mesh;
    Cube051_Material005_0: THREE.Mesh;
    Cube051_Material005_0001: THREE.Mesh;
    Cube052_Material005_0: THREE.Mesh;
    Cube052_Material005_0001: THREE.Mesh;
    Cube053_Material005_0: THREE.Mesh;
    Cube053_Material005_0001: THREE.Mesh;
    Cube053_Material005_0002: THREE.Mesh;
    Cube053_Material005_0003: THREE.Mesh;
    Cube053_Material005_0004: THREE.Mesh;
    Cube054_Material005_0: THREE.Mesh;
    Cube054_Material005_0001: THREE.Mesh;
    Cube054_Material005_0002: THREE.Mesh;
    Cube055_Material005_0: THREE.Mesh;
    Cube055_Material005_0001: THREE.Mesh;
    Cube055_Material005_0002: THREE.Mesh;
    Cube055_Material005_0003: THREE.Mesh;
    Cube055_Material005_0004: THREE.Mesh;
    Cube056_Material005_0: THREE.Mesh;
    Cube056_Material005_0001: THREE.Mesh;
    Cube057_Material005_0: THREE.Mesh;
    Cylinder007_Material005_0: THREE.Mesh;
    Cylinder008_Material005_0: THREE.Mesh;
    Cylinder009_Material005_0: THREE.Mesh;
    Cylinder011_Material005_0: THREE.Mesh;
    Cylinder012_Material005_0: THREE.Mesh;
    Cylinder013_Material005_0: THREE.Mesh;
    Daisy007_Material005_0: THREE.Mesh;
    Daisy008_Material005_0: THREE.Mesh;
    Daisy009_Material005_0: THREE.Mesh;
    Daisy010_Material005_0: THREE.Mesh;
    Daisy011_Material005_0: THREE.Mesh;
    House003_Material005_0: THREE.Mesh;
    Plane007_Material005_0: THREE.Mesh;
    Tile002_Material005_0: THREE.Mesh;
    TreeSquare005_Material005_0: THREE.Mesh;
    TreeSquare008_Material005_0: THREE.Mesh;
    TreeSquare009_Material005_0: THREE.Mesh;
    TreeSquare010_Material005_0: THREE.Mesh;
    TreeTall010_Material005_0: THREE.Mesh;
    TreeTall010_Material005_0001: THREE.Mesh;
    TreeTall010_Material005_0002: THREE.Mesh;
    TreeTall011_Material005_0: THREE.Mesh;
    TreeTall012_Material005_0: THREE.Mesh;
    TreeTall012_Material005_0001: THREE.Mesh;
    TreeTall012_Material005_0002: THREE.Mesh;
    TreeTall012_Material005_0003: THREE.Mesh;
    TreeTall013_Material005_0: THREE.Mesh;
    TreeTall013_Material005_0001: THREE.Mesh;
    TreeTall014_Material005_0: THREE.Mesh;
    TreeTall015_Material005_0: THREE.Mesh;
    TreeTall015_Material005_0001: THREE.Mesh;
    TreeTall015_Material005_0002: THREE.Mesh;
    TreeTall016_Material005_0: THREE.Mesh;
  };
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
};

export function Ground(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/assets/start.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group>
        <group scale={0.01}>
          <group>
            <group
              position={[189.911, -24.534, -111.908]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube032_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube032_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0, 0.957, 0]}
              />
            </group>
            <group
              position={[190.669, -24.534, -11.911]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube033_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube033_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0, 0.957, 0]}
              />
            </group>
            <group
              position={[191.426, -24.534, 88.086]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube034_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube034_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0, 0.957, 0]}
              />
            </group>
            <group
              position={[192.184, -24.534, 188.083]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube035_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[89.156, -24.534, -211.148]}
              rotation={[-Math.PI / 2, 0, 0.008]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube036_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube036_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0, 0.976, 0]}
              />
            </group>
            <group
              position={[89.914, -24.534, -111.151]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube037_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[90.671, -24.534, -11.153]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube039_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[91.43, -24.534, 88.844]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube040_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[92.187, -24.534, 188.841]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube041_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube041_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0.934, 0, 0]}
              />
            </group>
            <group
              position={[-10.841, -24.534, -210.39]}
              rotation={[-Math.PI / 2, 0, 1.578]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube042_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube042_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0.977, 0, 0]}
              />
            </group>
            <group
              position={[-10.083, -24.534, -110.393]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube043_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-9.325, -24.534, -10.396]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube044_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-8.568, -24.534, 89.601]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube045_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-7.81, -24.534, 189.598]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube046_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube046_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0.934, 0, 0]}
              />
            </group>
            <group
              position={[-110.838, -24.534, -209.632]}
              rotation={[-Math.PI / 2, 0, -3.134]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube047_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube047_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0, -0.979, 0]}
              />
            </group>
            <group
              position={[-110.08, -24.534, -109.635]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube048_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-109.323, -24.534, -9.638]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube049_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-108.565, -24.534, 90.359]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube050_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-107.807, -24.534, 190.356]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube051_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube051_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0.934, 0, 0]}
              />
            </group>
            <group
              position={[-210.835, -24.534, -208.875]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube052_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube052_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[-0.975, 0.007, 0]}
              />
            </group>
            <group
              position={[-210.078, -24.534, -108.878]}
              rotation={[-Math.PI / 2, 0, 0.008]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube053_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube053_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[-0.971, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube053_Material005_0002.geometry}
                material={materials["Material.005"]}
                position={[-1.949, 0.007, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube053_Material005_0003.geometry}
                material={materials["Material.005"]}
                position={[-0.963, 0.975, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube053_Material005_0004.geometry}
                material={materials["Material.005"]}
                position={[-1.941, 0.982, 0]}
              />
            </group>
            <group
              position={[-209.32, -24.534, -8.88]}
              rotation={[-Math.PI / 2, 0, 1.578]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube054_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube054_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0, 0.971, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube054_Material005_0002.geometry}
                material={materials["Material.005"]}
                position={[0.007, 1.949, 0]}
              />
            </group>
            <group
              position={[-208.562, -24.534, 91.117]}
              rotation={[-Math.PI / 2, 0, -3.134]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube055_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube055_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0.971, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube055_Material005_0002.geometry}
                material={materials["Material.005"]}
                position={[1.949, -0.007, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube055_Material005_0003.geometry}
                material={materials["Material.005"]}
                position={[0.978, 0.981, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube055_Material005_0004.geometry}
                material={materials["Material.005"]}
                position={[1.956, 0.974, 0]}
              />
            </group>
            <group
              position={[-207.804, -24.534, 191.114]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube056_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube056_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0.981, -0.007, 0]}
              />
            </group>
            <group
              position={[-50.667, 28.466, -171.74]}
              rotation={[-Math.PI / 2, 0, 0.008]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube057_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-73.516, 12.572, -49.325]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={199.03}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-75.092, 12.572, -17.88]}
              rotation={[-Math.PI / 2, 0, 2.302]}
              scale={199.03}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-102.888, 12.572, -36.108]}
              rotation={[-Math.PI / 2, 0, -2.373]}
              scale={199.03}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-135.817, 12.572, 6.027]}
              rotation={[-Math.PI / 2, 0, -1.355]}
              scale={199.03}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder011_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-104.527, 12.572, -3.284]}
              rotation={[-Math.PI / 2, 0, -0.123]}
              scale={199.03}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder012_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-130.393, 12.572, -25.374]}
              rotation={[-Math.PI / 2, 0, -2.639]}
              scale={199.03}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder013_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-62.852, 26.261, 15.175]}
              rotation={[-Math.PI, 0.993, -Math.PI]}
              scale={40}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-95.574, 26.261, 28.254]}
              rotation={[0, 1.197, 0]}
              scale={30.268}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-45.157, 26.261, -141.52]}
              rotation={[0, 1.197, 0]}
              scale={30.268}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[178.609, 26.261, -225.642]}
              rotation={[-Math.PI, 1.05, -Math.PI]}
              scale={30.268}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[194.241, 26.261, -240.707]}
              rotation={[0, 1.282, 0]}
              scale={23.356}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy011_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[40.294, 28.466, -60.773]}
              rotation={[0, -1.374, 0]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-195.758, 25.466, -196.695]}
              rotation={[Math.PI / 2, 0, 1.563]}
              scale={[-100, -125.298, -100]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[189.154, -24.534, -211.905]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tile002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[212.41, 26.466, -235.001]}
              rotation={[-1.58, 0.001, -2.174]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeSquare005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[169.743, 26.466, -186.345]}
              rotation={[-1.544, -0.003, -1.475]}
              scale={85.292}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeSquare008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[171.375, 26.466, 59.465]}
              rotation={[-1.612, 0.002, -0.819]}
              scale={90.136}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeSquare009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[108.8, 26.466, 115.673]}
              rotation={[-1.531, -0.006, 1.494]}
              scale={76.879}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeSquare010_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[0.102, -1.315, -0.007]}
              />
            </group>
            <group
              position={[-163.778, 27.293, 203.31]}
              rotation={[-Math.PI / 2, 0, -2.219]}
              scale={93.359}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall010_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[-0.016, 0.789, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall010_Material005_0002.geometry}
                material={materials["Material.005"]}
                position={[-4.338, -2.483, 0]}
              />
            </group>
            <group
              position={[-99.875, 27.293, 202.365]}
              rotation={[-1.603, 0.028, -2.71]}
              scale={106.579}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall011_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-0.073, -0.163, 0.006]}
              />
            </group>
            <group
              position={[-41.019, 27.293, 202.839]}
              rotation={[-Math.PI / 2, 0, -1.748]}
              scale={106.054}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall012_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall012_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[0.362, 0.891, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall012_Material005_0002.geometry}
                material={materials["Material.005"]}
                position={[-4.697, -0.843, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall012_Material005_0003.geometry}
                material={materials["Material.005"]}
                position={[-4.335, 0.048, 0]}
              />
            </group>
            <group
              position={[21.968, 27.293, 202.361]}
              rotation={[-1.581, 0.009, -0.961]}
              scale={92.687}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall013_Material005_0.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall013_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[-4.477, 3.126, 0.056]}
              />
            </group>
            <group
              position={[85.425, 27.293, 203.26]}
              rotation={[-Math.PI / 2, 0, -1.748]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall014_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-0.13, -0.024, 0]}
              />
            </group>
            <group
              position={[150.258, 27.293, 203.688]}
              rotation={[-1.561, -0.009, 3.09]}
              scale={107.288}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall015_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[0.059, 0.004, 0.001]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall015_Material005_0001.geometry}
                material={materials["Material.005"]}
                position={[1.638, 0.708, 0.022]}
                rotation={[0, 0, -2.173]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall015_Material005_0002.geometry}
                material={materials["Material.005"]}
                position={[0.644, -3.842, -0.035]}
              />
            </group>
            <group
              position={[214.631, 27.293, 204.12]}
              rotation={[-1.562, 0.015, -1.783]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall016_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/start.glb");
