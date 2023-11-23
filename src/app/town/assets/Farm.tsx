import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Arch001_Material005_0: THREE.Mesh;
    Barn001_Material005_0: THREE.Mesh;
    Barrell001_Material005_0: THREE.Mesh;
    Barrell002_Material005_0: THREE.Mesh;
    Barrell003_Material005_0: THREE.Mesh;
    Barrell004_Material005_0: THREE.Mesh;
    Barrell005_Material005_0: THREE.Mesh;
    Barrell006_Material005_0: THREE.Mesh;
    Barrell007_Material005_0: THREE.Mesh;
    Barrell008_Material005_0: THREE.Mesh;
    Barrell009_Material005_0: THREE.Mesh;
    Barrell010_Material005_0: THREE.Mesh;
    Barrell011_Material005_0: THREE.Mesh;
    Barrell012_Material005_0: THREE.Mesh;
    Barrell013_Material005_0: THREE.Mesh;
    Barrell014_Material005_0: THREE.Mesh;
    Bench001_Material005_0: THREE.Mesh;
    Bench002_Material005_0: THREE.Mesh;
    Bench003_Material005_0: THREE.Mesh;
    Bench004_Material005_0: THREE.Mesh;
    Bench005_Material005_0: THREE.Mesh;
    Bench006_Material005_0: THREE.Mesh;
    Bench007_Material005_0: THREE.Mesh;
    Bench008_Material005_0: THREE.Mesh;
    Bench009_Material005_0: THREE.Mesh;
    Bench010_Material005_0: THREE.Mesh;
    Bench011_Material005_0: THREE.Mesh;
    Bench012_Material005_0: THREE.Mesh;
    Bench013_Material005_0: THREE.Mesh;
    Bench014_Material005_0: THREE.Mesh;
    Bench015_Material005_0: THREE.Mesh;
    Bench016_Material005_0: THREE.Mesh;
    Bench017_Material005_0: THREE.Mesh;
    Bench018_Material005_0: THREE.Mesh;
    Bench019_Material005_0: THREE.Mesh;
    Boulder_Material005_0: THREE.Mesh;
    Boulder002_Material005_0: THREE.Mesh;
    Boulder003_Material005_0: THREE.Mesh;
    Boulder004_Material005_0: THREE.Mesh;
    Boulder005_Material005_0: THREE.Mesh;
    Boulder006_Material005_0: THREE.Mesh;
    Boulder007_Material005_0: THREE.Mesh;
    Boulder008_Material005_0: THREE.Mesh;
    Boulder009_Material005_0: THREE.Mesh;
    Boulder010_Material005_0: THREE.Mesh;
    Coffin001_Material005_0: THREE.Mesh;
    Coffin002_Material005_0: THREE.Mesh;
    Coffin003_Material005_0: THREE.Mesh;
    Coffin004_Material005_0: THREE.Mesh;
    Coffin005_Material005_0: THREE.Mesh;
    Crate001_Material005_0: THREE.Mesh;
    Crate002_Material005_0: THREE.Mesh;
    Crate003_Material005_0: THREE.Mesh;
    Crate004_Material005_0: THREE.Mesh;
    Crate005_Material005_0: THREE.Mesh;
    Crate006_Material005_0: THREE.Mesh;
    Crate007_Material005_0: THREE.Mesh;
    Crate008_Material005_0: THREE.Mesh;
    Crate009_Material005_0: THREE.Mesh;
    Crate010_Material005_0: THREE.Mesh;
    Crate011_Material005_0: THREE.Mesh;
    Crate012_Material005_0: THREE.Mesh;
    Crate013_Material005_0: THREE.Mesh;
    Crate014_Material005_0: THREE.Mesh;
    Crate015_Material005_0: THREE.Mesh;
    Crate016_Material005_0: THREE.Mesh;
    Crate017_Material005_0: THREE.Mesh;
    Crate018_Material005_0: THREE.Mesh;
    Crate019_Material005_0: THREE.Mesh;
    Crate020_Material005_0: THREE.Mesh;
    Crate021_Material005_0: THREE.Mesh;
    Crate022_Material005_0: THREE.Mesh;
    Crate023_Material005_0: THREE.Mesh;
    Crate024_Material005_0: THREE.Mesh;
    Crate025_Material005_0: THREE.Mesh;
    Crate026_Material005_0: THREE.Mesh;
    Crate027_Material005_0: THREE.Mesh;
    Crate028_Material005_0: THREE.Mesh;
    Crate029_Material005_0: THREE.Mesh;
    Crate030_Material005_0: THREE.Mesh;
    Crate031_Material005_0: THREE.Mesh;
    Crate032_Material005_0: THREE.Mesh;
    Crate033_Material005_0: THREE.Mesh;
    Crate034_Material005_0: THREE.Mesh;
    Crate035_Material005_0: THREE.Mesh;
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
    Cube053_Material005_0: THREE.Mesh;
    Cube053_Material005_0001: THREE.Mesh;
    Cube054_Material005_0: THREE.Mesh;
    Cube054_Material005_0001: THREE.Mesh;
    Cube054_Material005_0002: THREE.Mesh;
    Cube054_Material005_0003: THREE.Mesh;
    Cube055_Material005_0: THREE.Mesh;
    Cube055_Material005_0001: THREE.Mesh;
    Cube056_Material005_0: THREE.Mesh;
    Cube057_Material005_0: THREE.Mesh;
    Cylinder007_Material005_0: THREE.Mesh;
    Cylinder008_Material005_0: THREE.Mesh;
    Cylinder009_Material005_0: THREE.Mesh;
    Cylinder011_Material005_0: THREE.Mesh;
    Cylinder012_Material005_0: THREE.Mesh;
    Cylinder013_Material005_0: THREE.Mesh;
    Daisy001_Material005_0: THREE.Mesh;
    Daisy002_Material005_0: THREE.Mesh;
    Daisy003_Material005_0: THREE.Mesh;
    Daisy004_Material005_0: THREE.Mesh;
    Daisy005_Material005_0: THREE.Mesh;
    Daisy006_Material005_0: THREE.Mesh;
    Daisy007_Material005_0: THREE.Mesh;
    Daisy008_Material005_0: THREE.Mesh;
    Daisy009_Material005_0: THREE.Mesh;
    Daisy010_Material005_0: THREE.Mesh;
    Daisy011_Material005_0: THREE.Mesh;
    Daisy012_Material005_0: THREE.Mesh;
    Daisy013_Material005_0: THREE.Mesh;
    Daisy014_Material005_0: THREE.Mesh;
    Daisy015_Material005_0: THREE.Mesh;
    Daisy016_Material005_0: THREE.Mesh;
    Daisy017_Material005_0: THREE.Mesh;
    Daisy018_Material005_0: THREE.Mesh;
    Daisy019_Material005_0: THREE.Mesh;
    Daisy020_Material005_0: THREE.Mesh;
    Daisy021_Material005_0: THREE.Mesh;
    Daisy022_Material005_0: THREE.Mesh;
    Daisy023_Material005_0: THREE.Mesh;
    Daisy024_Material005_0: THREE.Mesh;
    Daisy025_Material005_0: THREE.Mesh;
    Daisy026_Material005_0: THREE.Mesh;
    Daisy027_Material005_0: THREE.Mesh;
    Daisy028_Material005_0: THREE.Mesh;
    Daisy029_Material005_0: THREE.Mesh;
    Daisy030_Material005_0: THREE.Mesh;
    Daisy031_Material005_0: THREE.Mesh;
    Daisy032_Material005_0: THREE.Mesh;
    Daisy033_Material005_0: THREE.Mesh;
    Farm_Cabbage001_Material005_0: THREE.Mesh;
    Farm_Cabbage002_Material005_0: THREE.Mesh;
    Farm_Cabbage003_Material005_0: THREE.Mesh;
    Farm_Cabbage004_Material005_0: THREE.Mesh;
    Farm_Cabbage005_Material005_0: THREE.Mesh;
    Farm_Cabbage006_Material005_0: THREE.Mesh;
    Farm_Cabbage007_Material005_0: THREE.Mesh;
    Farm_Cabbage008_Material005_0: THREE.Mesh;
    Farm_Cabbage009_Material005_0: THREE.Mesh;
    Farm_Cabbage010_Material005_0: THREE.Mesh;
    Farm_Cabbage011_Material005_0: THREE.Mesh;
    Farm_Cabbage012_Material005_0: THREE.Mesh;
    Farm_Cabbage013_Material005_0: THREE.Mesh;
    Farm_Cabbage014_Material005_0: THREE.Mesh;
    Farm_Cabbage015_Material005_0: THREE.Mesh;
    Farm_Carrot001_Material005_0: THREE.Mesh;
    Farm_Carrot002_Material005_0: THREE.Mesh;
    Farm_Carrot003_Material005_0: THREE.Mesh;
    Farm_Carrot004_Material005_0: THREE.Mesh;
    Farm_Carrot005_Material005_0: THREE.Mesh;
    Farm_Carrot006_Material005_0: THREE.Mesh;
    Farm_Carrot007_Material005_0: THREE.Mesh;
    Farm_Carrot008_Material005_0: THREE.Mesh;
    Farm_Wheat001_Material005_0: THREE.Mesh;
    Farm_Wheat002_Material005_0: THREE.Mesh;
    Farm_Wheat003_Material005_0: THREE.Mesh;
    Farm_Wheat004_Material005_0: THREE.Mesh;
    Farm_Wheat005_Material005_0: THREE.Mesh;
    Farm_Wheat006_Material005_0: THREE.Mesh;
    Farm_Wheat007_Material005_0: THREE.Mesh;
    Farm_Wheat008_Material005_0: THREE.Mesh;
    Farm_Wheat009_Material005_0: THREE.Mesh;
    Farm_Wheat010_Material005_0: THREE.Mesh;
    Farm_Wheat011_Material005_0: THREE.Mesh;
    Farm_Wheat012_Material005_0: THREE.Mesh;
    Farm_Wheat013_Material005_0: THREE.Mesh;
    Farm_Wheat014_Material005_0: THREE.Mesh;
    Farm_Wheat015_Material005_0: THREE.Mesh;
    Farm_Wheat016_Material005_0: THREE.Mesh;
    Farm_Wheat017_Material005_0: THREE.Mesh;
    Farm_Wheat018_Material005_0: THREE.Mesh;
    Fence001_Material005_0: THREE.Mesh;
    Fence003_Material005_0: THREE.Mesh;
    Fence004_Material005_0: THREE.Mesh;
    Fence005_Material005_0: THREE.Mesh;
    Fence006_Material005_0: THREE.Mesh;
    Fence007_Material005_0: THREE.Mesh;
    Fence008_Material005_0: THREE.Mesh;
    Fence009_Material005_0: THREE.Mesh;
    Fence010_Material005_0: THREE.Mesh;
    Fence011_Material005_0: THREE.Mesh;
    Fence012_Material005_0: THREE.Mesh;
    Fence013_Material005_0: THREE.Mesh;
    Fence014_Material005_0: THREE.Mesh;
    Fence015_Material005_0: THREE.Mesh;
    Fence016_Material005_0: THREE.Mesh;
    Fence017_Material005_0: THREE.Mesh;
    Fence018_Material005_0: THREE.Mesh;
    Fence019_Material005_0: THREE.Mesh;
    Fence020_Material005_0: THREE.Mesh;
    Fence021_Material005_0: THREE.Mesh;
    Fence022_Material005_0: THREE.Mesh;
    Fence023_Material005_0: THREE.Mesh;
    Fence024_Material005_0: THREE.Mesh;
    Fence025_Material005_0: THREE.Mesh;
    Fence026_Material005_0: THREE.Mesh;
    Fence027_Material005_0: THREE.Mesh;
    Fence028_Material005_0: THREE.Mesh;
    Fence029_Material005_0: THREE.Mesh;
    Fence030_Material005_0: THREE.Mesh;
    Fence031_Material005_0: THREE.Mesh;
    Fence032_Material005_0: THREE.Mesh;
    Fence033_Material005_0: THREE.Mesh;
    Fence034_Material005_0: THREE.Mesh;
    Fence035_Material005_0: THREE.Mesh;
    Fence036_Material005_0: THREE.Mesh;
    Fence037_Material005_0: THREE.Mesh;
    Fence038_Material005_0: THREE.Mesh;
    Fence039_Material005_0: THREE.Mesh;
    Fence040_Material005_0: THREE.Mesh;
    Fence041_Material005_0: THREE.Mesh;
    Fence042_Material005_0: THREE.Mesh;
    Fence043_Material005_0: THREE.Mesh;
    Fence044_Material005_0: THREE.Mesh;
    Fence045_Material005_0: THREE.Mesh;
    Fence046_Material005_0: THREE.Mesh;
    Fence047_Material005_0: THREE.Mesh;
    Fence048_Material005_0: THREE.Mesh;
    Fence049_Material005_0: THREE.Mesh;
    Fence050_Material005_0: THREE.Mesh;
    Fence051_Material005_0: THREE.Mesh;
    Fence052_Material005_0: THREE.Mesh;
    Fountain001_Material005_0: THREE.Mesh;
    Garland001_Material005_0: THREE.Mesh;
    Garland002_Material005_0: THREE.Mesh;
    Garland003_Material005_0: THREE.Mesh;
    Garland004_Material005_0: THREE.Mesh;
    Garland005_Material005_0: THREE.Mesh;
    Grave_1_Material005_0: THREE.Mesh;
    Grave_1002_Material005_0: THREE.Mesh;
    Grave_2_Material005_0: THREE.Mesh;
    Grave_2002_Material005_0: THREE.Mesh;
    Hay_Bale001_Material005_0: THREE.Mesh;
    Hay_Bale002_Material005_0: THREE.Mesh;
    Hay_Bale003_Material005_0: THREE.Mesh;
    Hay_Bale004_Material005_0: THREE.Mesh;
    Hay_Bale005_Material005_0: THREE.Mesh;
    Hay_Bale006_Material005_0: THREE.Mesh;
    Hay_Bale007_Material005_0: THREE.Mesh;
    Hay_Bale008_Material005_0: THREE.Mesh;
    Hay_Bale009_Material005_0: THREE.Mesh;
    Hay_Bale010_Material005_0: THREE.Mesh;
    Hay_Bale011_Material005_0: THREE.Mesh;
    Hay_Bale012_Material005_0: THREE.Mesh;
    Hay_Bale013_Material005_0: THREE.Mesh;
    Hay_Bale014_Material005_0: THREE.Mesh;
    Hay_Bale016_Material005_0: THREE.Mesh;
    Hay_Bale018_Material005_0: THREE.Mesh;
    Hay_Bale020_Material005_0: THREE.Mesh;
    Hay_Bale024_Material005_0: THREE.Mesh;
    Hay_Bale025_Material005_0: THREE.Mesh;
    Hay_Bale026_Material005_0: THREE.Mesh;
    Hay_Bale027_Material005_0: THREE.Mesh;
    Hay_Bale028_Material005_0: THREE.Mesh;
    Hay_Bale029_Material005_0: THREE.Mesh;
    Hay_Cart001_Material005_0: THREE.Mesh;
    Hay_Cart003_Material005_0: THREE.Mesh;
    Hay_Cart004_Material005_0: THREE.Mesh;
    Hay_Cart005_Material005_0: THREE.Mesh;
    Hay_Cart007_Material005_0: THREE.Mesh;
    Hay_Cart008_Material005_0: THREE.Mesh;
    Hay_Pile001_Material005_0: THREE.Mesh;
    Hay_Pile002_Material005_0: THREE.Mesh;
    Hay_Pile003_Material005_0: THREE.Mesh;
    Hay_Pile005_Material005_0: THREE.Mesh;
    Hay_Pile006_Material005_0: THREE.Mesh;
    Hay_Pile007_Material005_0: THREE.Mesh;
    House003_Material005_0: THREE.Mesh;
    House_2Story_Purple001_Material005_0: THREE.Mesh;
    House_2Story_Purple002_Material005_0: THREE.Mesh;
    House_2Story_Purple003_Material005_0: THREE.Mesh;
    House_2Story_Purple004_Material005_0: THREE.Mesh;
    House_2Story_Purple005_Material005_0: THREE.Mesh;
    House_2Story_Purple006_Material005_0: THREE.Mesh;
    House_2Story_Purple007_Material005_0: THREE.Mesh;
    House_2Story_Purple008_Material005_0: THREE.Mesh;
    House_2Story_Purple009_Material005_0: THREE.Mesh;
    House_Blue001_Material005_0: THREE.Mesh;
    House_Blue002_Material005_0: THREE.Mesh;
    House_Blue003_Material005_0: THREE.Mesh;
    House_Purple002_Material005_0: THREE.Mesh;
    House_Red001_Material005_0: THREE.Mesh;
    Market_Stall_Blue001_Material005_0: THREE.Mesh;
    Market_Stall_Blue002_Material005_0: THREE.Mesh;
    Market_Stall_Blue003_Material005_0: THREE.Mesh;
    Market_Stall_Blue004_Material005_0: THREE.Mesh;
    Market_Stall_Blue005_Material005_0: THREE.Mesh;
    Market_Stall_Red001_Material005_0: THREE.Mesh;
    Market_Stall_Red002_Material005_0: THREE.Mesh;
    Market_Stall_Red003_Material005_0: THREE.Mesh;
    Market_Stall_Red004_Material005_0: THREE.Mesh;
    Market_Stall_Red005_Material005_0: THREE.Mesh;
    Market_Stall_Red006_Material005_0: THREE.Mesh;
    Market_Stall_Red007_Material005_0: THREE.Mesh;
    Obelisk001_Material005_0: THREE.Mesh;
    Obelisk002_Material005_0: THREE.Mesh;
    Picnic_Table001_Material005_0: THREE.Mesh;
    Picnic_Table002_Material005_0: THREE.Mesh;
    Picnic_Table003_Material005_0: THREE.Mesh;
    Pillar001_Material005_0: THREE.Mesh;
    Pillar002_Material005_0: THREE.Mesh;
    Pillar003_Material005_0: THREE.Mesh;
    Pillar004_Material005_0: THREE.Mesh;
    Pillar005_Material005_0: THREE.Mesh;
    Pillar006_Material005_0: THREE.Mesh;
    Pillar007_Material005_0: THREE.Mesh;
    Pillar008_Material005_0: THREE.Mesh;
    Pillar009_Material005_0: THREE.Mesh;
    Pillar010_Material005_0: THREE.Mesh;
    Pillar011_Material005_0: THREE.Mesh;
    Pillar012_Material005_0: THREE.Mesh;
    Pillar013_Material005_0: THREE.Mesh;
    Pillar014_Material005_0: THREE.Mesh;
    Pillar015_Material005_0: THREE.Mesh;
    Pillar016_Material005_0: THREE.Mesh;
    Pillar017_Material005_0: THREE.Mesh;
    Pillar018_Material005_0: THREE.Mesh;
    Pillar019_Material005_0: THREE.Mesh;
    Pillar020_Material005_0: THREE.Mesh;
    Pillar021_Material005_0: THREE.Mesh;
    Pillar022_Material005_0: THREE.Mesh;
    Pillar023_Material005_0: THREE.Mesh;
    Pillar024_Material005_0: THREE.Mesh;
    Pillar025_Material005_0: THREE.Mesh;
    Pillar026_Material005_0: THREE.Mesh;
    Pillar027_Material005_0: THREE.Mesh;
    Pillar028_Material005_0: THREE.Mesh;
    Pillar029_Material005_0: THREE.Mesh;
    Pillar030_Material005_0: THREE.Mesh;
    Pillar031_Material005_0: THREE.Mesh;
    Pillar032_Material005_0: THREE.Mesh;
    Pillar033_Material005_0: THREE.Mesh;
    Pillar034_Material005_0: THREE.Mesh;
    Pillar035_Material005_0: THREE.Mesh;
    Pillar036_Material005_0: THREE.Mesh;
    Pillar037_Material005_0: THREE.Mesh;
    Pillar040_Material005_0: THREE.Mesh;
    Plane001_Material005_0: THREE.Mesh;
    Plane007_Material005_0: THREE.Mesh;
    Pond001_Material005_0: THREE.Mesh;
    Potted_Bush001_Material005_0: THREE.Mesh;
    Potted_Bush002_Material005_0: THREE.Mesh;
    Shroom001_Material005_0: THREE.Mesh;
    Shroom002_Material005_0: THREE.Mesh;
    Shroom003_Material005_0: THREE.Mesh;
    Shroom004_Material005_0: THREE.Mesh;
    Shroom005_Material005_0: THREE.Mesh;
    Shroom006_Material005_0: THREE.Mesh;
    Shroom007_Material005_0: THREE.Mesh;
    Shroom008_Material005_0: THREE.Mesh;
    Shroom009_Material005_0: THREE.Mesh;
    Shroom010_Material005_0: THREE.Mesh;
    Shroom011_Material005_0: THREE.Mesh;
    Sphere002_Material005_0: THREE.Mesh;
    StonePath001_Material005_0: THREE.Mesh;
    StonePath002_Material005_0: THREE.Mesh;
    StonePath003_Material005_0: THREE.Mesh;
    StonePath004_Material005_0: THREE.Mesh;
    StonePath005_Material005_0: THREE.Mesh;
    StonePath006_Material005_0: THREE.Mesh;
    StonePath007_Material005_0: THREE.Mesh;
    StonePath008_Material005_0: THREE.Mesh;
    StonePath009_Material005_0: THREE.Mesh;
    Streetlight001_Material005_0: THREE.Mesh;
    Streetlight002_Material005_0: THREE.Mesh;
    Streetlight003_Material005_0: THREE.Mesh;
    Streetlight004_Material005_0: THREE.Mesh;
    Streetlight005_Material005_0: THREE.Mesh;
    Streetlight006_Material005_0: THREE.Mesh;
    Streetlight007_Material005_0: THREE.Mesh;
    Streetlight008_Material005_0: THREE.Mesh;
    Streetlight009_Material005_0: THREE.Mesh;
    Streetlight010_Material005_0: THREE.Mesh;
    Streetlight011_Material005_0: THREE.Mesh;
    Streetlight012_Material005_0: THREE.Mesh;
    Streetlight013_Material005_0: THREE.Mesh;
    Streetlight014_Material005_0: THREE.Mesh;
    Streetlight016_Material005_0: THREE.Mesh;
    Streetlight017_Material005_0: THREE.Mesh;
    Tile002_Material005_0: THREE.Mesh;
    Tomb_Material005_0: THREE.Mesh;
    Tomb002_Material005_0: THREE.Mesh;
    Tomb003_Material005_0: THREE.Mesh;
    Tombstone_1_Material005_0: THREE.Mesh;
    Tombstone_1002_Material005_0: THREE.Mesh;
    Tombstone_1003_Material005_0: THREE.Mesh;
    Tombstone_1004_Material005_0: THREE.Mesh;
    Tombstone_2_Material005_0: THREE.Mesh;
    Tombstone_2002_Material005_0: THREE.Mesh;
    Tombstone_2003_Material005_0: THREE.Mesh;
    Tombstone_3_Material005_0: THREE.Mesh;
    Tombstone_3002_Material005_0: THREE.Mesh;
    Tombstone_3003_Material005_0: THREE.Mesh;
    Tree_Pine001_Material005_0: THREE.Mesh;
    Tree_Pine002_Material005_0: THREE.Mesh;
    Tree_Pine003_Material005_0: THREE.Mesh;
    Tree_Pine004_Material005_0: THREE.Mesh;
    Tree_Pine005_Material005_0: THREE.Mesh;
    Tree_Pine006_Material005_0: THREE.Mesh;
    Tree_Pine007_Material005_0: THREE.Mesh;
    Tree_Pine008_Material005_0: THREE.Mesh;
    Tree_Pine009_Material005_0: THREE.Mesh;
    Tree_Pine010_Material005_0: THREE.Mesh;
    Tree_Pine011_Material005_0: THREE.Mesh;
    Tree_Pine012_Material005_0: THREE.Mesh;
    Tree_Pine013_Material005_0: THREE.Mesh;
    Tree_Pine014_Material005_0: THREE.Mesh;
    Tree_Pine015_Material005_0: THREE.Mesh;
    Tree_Pine016_Material005_0: THREE.Mesh;
    Tree_Pine017_Material005_0: THREE.Mesh;
    Tree_Pine018_Material005_0: THREE.Mesh;
    Tree_Pine019_Material005_0: THREE.Mesh;
    Tree_Pine020_Material005_0: THREE.Mesh;
    Tree_Pine021_Material005_0: THREE.Mesh;
    Tree_Pine022_Material005_0: THREE.Mesh;
    Tree_Pine023_Material005_0: THREE.Mesh;
    Tree_Pine024_Material005_0: THREE.Mesh;
    Tree_Pine025_Material005_0: THREE.Mesh;
    Tree_Pine026_Material005_0: THREE.Mesh;
    Tree_Pine027_Material005_0: THREE.Mesh;
    Tree_Pine028_Material005_0: THREE.Mesh;
    Tree_Pine029_Material005_0: THREE.Mesh;
    Tree_Pine030_Material005_0: THREE.Mesh;
    Tree_Pine031_Material005_0: THREE.Mesh;
    Tree_Pine032_Material005_0: THREE.Mesh;
    Tree_Pine033_Material005_0: THREE.Mesh;
    Tree_Pine034_Material005_0: THREE.Mesh;
    Tree_Pine035_Material005_0: THREE.Mesh;
    Tree_Pine036_Material005_0: THREE.Mesh;
    Tree_Pine037_Material005_0: THREE.Mesh;
    Tree_Pine038_Material005_0: THREE.Mesh;
    Tree_Pine039_Material005_0: THREE.Mesh;
    Tree_Pine040_Material005_0: THREE.Mesh;
    Tree_Pine041_Material005_0: THREE.Mesh;
    Tree_Pine042_Material005_0: THREE.Mesh;
    Tree_Pine043_Material005_0: THREE.Mesh;
    Tree_Square001_Material005_0: THREE.Mesh;
    Tree_Square002_Material005_0: THREE.Mesh;
    Tree_Square003_Material005_0: THREE.Mesh;
    Tree_Square004_Material005_0: THREE.Mesh;
    TreeSquare005_Material005_0: THREE.Mesh;
    TreeSquare008_Material005_0: THREE.Mesh;
    TreeSquare009_Material005_0: THREE.Mesh;
    TreeSquare010_Material005_0: THREE.Mesh;
    TreeTall001_Material005_0: THREE.Mesh;
    TreeTall002_Material005_0: THREE.Mesh;
    TreeTall003_Material005_0: THREE.Mesh;
    TreeTall004_Material005_0: THREE.Mesh;
    TreeTall005_Material005_0: THREE.Mesh;
    TreeTall006_Material005_0: THREE.Mesh;
    TreeTall007_Material005_0: THREE.Mesh;
    TreeTall008_Material005_0: THREE.Mesh;
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
    TreeTall017_Material005_0: THREE.Mesh;
    TreeTall018_Material005_0: THREE.Mesh;
    Well001_Material005_0: THREE.Mesh;
    Windmill001_Material005_0: THREE.Mesh;
    Windmill002_Material005_0: THREE.Mesh;
    Windmill003_Material005_0: THREE.Mesh;
    World_Material005_0: THREE.Mesh;
  };
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
};

export function Farm(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/assets/field.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group>
        <group scale={0.01}>
          <group>
            <group
              position={[1043.116, -1.838, 403.069]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={123.407}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Arch001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1088.412, -1.838, -383.507]}
              rotation={[-Math.PI / 2, 0, -0.068]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barn001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-760.693, -1.838, -470.475]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-391.644, -1.838, 1344.743]}
              rotation={[-1.647, -0.058, 0.025]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1281.406, -1.838, -550.338]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1316.337, -1.838, -509.586]}
              rotation={[-Math.PI / 2, 0, 1.959]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1239.964, 18.785, -510.009]}
              rotation={[-0.083, -1.21, -0.034]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-389.853, -1.838, 342.919]}
              rotation={[-1.595, 0.006, 1.971]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-532.035, -1.838, 385.574]}
              rotation={[-1.837, -0.158, -1.007]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1249.799, -1.838, 135.856]}
              rotation={[-Math.PI / 2, 0, 1.959]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1233.984, -1.838, 190.251]}
              rotation={[-1.647, -0.058, 0.025]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1446.261, -1.838, 638.392]}
              rotation={[-1.647, -0.058, 0.025]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1401.201, -1.838, 670.611]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell011_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1016.36, -1.838, 857.344]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell012_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1016.36, 40.374, 857.344]}
              rotation={[-1.546, 0.097, -0.677]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell013_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1340.915, -1.838, 976.587]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrell014_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1271.193, -1.838, -513.815]}
              rotation={[-Math.PI / 2, 0, -3.062]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1267.889, -1.838, -263.128]}
              rotation={[-1.524, 0.002, 0.042]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1346.206, -1.838, -265.344]}
              rotation={[-1.612, 0.001, -0.026]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-91.2, -1.838, 1327.998]}
              rotation={[-Math.PI / 2, 0, -3.127]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-7.368, -1.838, 1327.998]}
              rotation={[-Math.PI / 2, 0, 3.129]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1164.927, -1.838, 558.092]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1049.354, -1.838, 451.953]}
              rotation={[-Math.PI / 2, 0, 1.572]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1275.783, -1.838, 451.953]}
              rotation={[-Math.PI / 2, 0, -1.588]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1162.569, -1.838, 336.38]}
              rotation={[-Math.PI / 2, 0, 3.139]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1079.23, -1.838, 853.249]}
              rotation={[-Math.PI / 2, 0, -1.588]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[794.616, -1.838, 696.901]}
              rotation={[-Math.PI / 2, 0, 1.269]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench011_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[671.65, -1.838, 825.435]}
              rotation={[-Math.PI / 2, 0, 1.05]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench012_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[965.596, -1.838, 1041.695]}
              rotation={[-Math.PI / 2, 0, -2.147]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench013_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1287.163, -1.838, 915.101]}
              rotation={[-Math.PI / 2, 0, -1.535]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench014_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1213.441, -1.838, 920.689]}
              rotation={[-Math.PI / 2, 0, 1.64]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench015_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1309.256, -1.838, 1296.423]}
              rotation={[-Math.PI / 2, 0, -1.535]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench016_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1235.534, -1.838, 1302.011]}
              rotation={[-Math.PI / 2, 0, 1.64]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench017_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1293.96, -1.838, 1053.323]}
              rotation={[-Math.PI / 2, 0, -1.535]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench018_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1220.238, -1.838, 1058.911]}
              rotation={[-Math.PI / 2, 0, 1.64]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bench019_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1638.525, -1.838, 349.542]}
              rotation={[-Math.PI / 2, 0, -0.791]}
              scale={91.794}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Boulder_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[866.425, -1.838, -634.793]}
              rotation={[-Math.PI / 2, 0, 0.61]}
              scale={106.47}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Boulder002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[916.982, -1.838, -642.231]}
              rotation={[-Math.PI / 2, 0, -2.633]}
              scale={76.247}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Boulder003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1139.065, -1.838, -669.823]}
              rotation={[-Math.PI / 2, 0, -2.164]}
              scale={36.673}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Boulder004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1002.158, -1.838, -622.257]}
              rotation={[-Math.PI / 2, 0, 1.614]}
              scale={36.673}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Boulder005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-767.479, -1.838, -39.076]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
              scale={91.794}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Boulder006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1278.463, -1.838, 804.781]}
              rotation={[-Math.PI / 2, 0, -0.323]}
              scale={109.792}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Boulder007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1289.968, -1.838, 746.128]}
              rotation={[-Math.PI / 2, 0, -1.876]}
              scale={73.064}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Boulder008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1280.377, -1.838, 714.443]}
              rotation={[-Math.PI / 2, 0, 0.296]}
              scale={73.064}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Boulder009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1014.543, -1.838, 655.196]}
              rotation={[-Math.PI / 2, 0, -2.396]}
              scale={39.462}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Boulder010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1524.509, -1.838, 351.137]}
              rotation={[-Math.PI / 2, 0, -1.79]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Coffin001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[904.029, -1.838, -144.5]}
              rotation={[-Math.PI / 2, 0, 1.502]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Coffin002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[865.841, -1.838, -538.448]}
              rotation={[-Math.PI / 2, 0, 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Coffin003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[865.841, 22.12, -538.448]}
              rotation={[-1.605, 0.018, 1.986]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Coffin004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[866.245, 44.763, -539.219]}
              rotation={[-1.524, -0.024, 1.909]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Coffin005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-903.992, -1.838, -536.101]}
              rotation={[-Math.PI / 2, 0, 1.464]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-882.97, -1.838, -495.673]}
              rotation={[-Math.PI / 2, 0, 1.698]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-861.947, -1.838, -536.101]}
              rotation={[-Math.PI / 2, 0, 1.581]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-882.97, 34.442, -517.504]}
              rotation={[-Math.PI / 2, 0, 1.58]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-443.34, -1.838, 1344.637]}
              rotation={[-Math.PI / 2, 0, -0.103]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-423.547, -1.838, 1391.211]}
              rotation={[-Math.PI / 2, 0, 1.706]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1336.654, -1.838, -261.363]}
              rotation={[-Math.PI / 2, 0, 1.706]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1294.738, -1.838, -252.048]}
              rotation={[-Math.PI / 2, 0, 1.637]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1335.489, -1.838, -220.611]}
              rotation={[-Math.PI / 2, 0, 0.054]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1271.451, -1.838, -213.625]}
              rotation={[-Math.PI / 2, 0, 0.054]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1304.052, -1.838, -185.681]}
              rotation={[-Math.PI / 2, 0, 0.665]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate011_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1321.046, 32.511, -246.02]}
              rotation={[-Math.PI / 2, 0, 1.331]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate012_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1315.755, 32.511, -203.429]}
              rotation={[-Math.PI / 2, 0, 2.807]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate013_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1283.482, 32.511, -233.322]}
              rotation={[-Math.PI / 2, 0, 2.807]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate014_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1307.819, 66.862, -224.592]}
              rotation={[-1.571, -0.005, -2.724]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate015_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-434.903, 6.305, 376.39]}
              rotation={[-Math.PI / 2, 0, Math.PI / 7]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate016_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-465.398, -1.838, 341.835]}
              rotation={[-Math.PI / 2, 0, 0.054]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate017_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-480.389, -1.838, 381.543]}
              rotation={[-Math.PI / 2, 0, 1.637]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate018_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-465.697, 32.511, 363.875]}
              rotation={[-Math.PI / 2, 0, 1.331]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate019_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-527.059, 6.305, 324.827]}
              rotation={[-Math.PI / 2, 0, 1.313]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate020_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1197.218, 6.305, 149.168]}
              rotation={[-Math.PI / 2, 0, 1.313]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate021_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1004.428, 6.305, 712.555]}
              rotation={[-Math.PI / 2, 0, Math.PI / 7]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate022_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1034.923, -1.838, 678]}
              rotation={[-Math.PI / 2, 0, 0.054]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate023_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1049.914, -1.838, 717.708]}
              rotation={[-Math.PI / 2, 0, 1.637]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate024_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1035.222, 32.511, 700.041]}
              rotation={[-Math.PI / 2, 0, 1.331]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate025_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-996.466, 6.305, 753.504]}
              rotation={[-Math.PI / 2, 0, 0.096]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate026_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1041.952, -1.838, 758.657]}
              rotation={[-Math.PI / 2, 0, 1.53]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate027_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1027.26, 32.511, 740.989]}
              rotation={[-Math.PI / 2, 0, -2.908]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate028_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-994.191, 6.305, 797.864]}
              rotation={[-Math.PI / 2, 0, 0.055]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate029_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1039.677, -1.838, 803.018]}
              rotation={[-Math.PI / 2, 0, 2.276]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate030_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1019.06, 32.511, 784.033]}
              rotation={[-Math.PI / 2, 0, 1.331]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate031_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1352.49, 6.305, 843.363]}
              rotation={[-Math.PI / 2, 0, Math.PI / 7]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate032_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1353.628, 6.305, 886.586]}
              rotation={[-Math.PI / 2, 0, 0.096]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate033_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1363.865, 6.305, 927.535]}
              rotation={[-Math.PI / 2, 0, 0.055]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate034_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1354.611, 32.511, 867.068]}
              rotation={[-Math.PI / 2, 0, 1.331]}
              scale={69.408}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate035_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[3062.797, -24.534, -111.908]}
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
              position={[3063.555, -24.534, -11.911]}
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
              position={[3064.312, -24.534, 88.086]}
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
              position={[3065.07, -24.534, 188.083]}
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
              position={[2962.042, -24.534, -211.148]}
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
              position={[2962.8, -24.534, -111.151]}
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
              position={[2963.557, -24.534, -11.153]}
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
              position={[2964.315, -24.534, 88.844]}
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
              position={[2965.073, -24.534, 188.841]}
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
              position={[2862.045, -24.534, -210.39]}
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
              position={[2862.803, -24.534, -110.393]}
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
              position={[2863.561, -24.534, -10.396]}
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
              position={[2864.318, -24.534, 89.601]}
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
              position={[2865.076, -24.534, 189.598]}
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
              position={[2762.048, -24.534, -209.632]}
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
              position={[2762.806, -24.534, -109.635]}
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
              position={[2763.563, -24.534, -9.638]}
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
              position={[2764.321, -24.534, 90.359]}
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
              position={[2765.079, -24.534, 190.356]}
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
              position={[2662.051, -24.534, -208.875]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube052_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[2662.808, -24.534, -108.878]}
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
            </group>
            <group
              position={[2663.566, -24.534, -8.88]}
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
                position={[0.01, 2.267, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube054_Material005_0003.geometry}
                material={materials["Material.005"]}
                position={[0.02, 3.569, 0]}
              />
            </group>
            <group
              position={[2664.324, -24.534, 91.117]}
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
            </group>
            <group
              position={[2665.081, -24.534, 191.114]}
              rotation={[-Math.PI / 2, 0, -1.563]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube056_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[2822.219, 28.466, -171.74]}
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
              position={[2799.37, 12.572, -49.325]}
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
              position={[2797.794, 12.572, -17.88]}
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
              position={[2769.998, 12.572, -36.108]}
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
              position={[2737.069, 12.572, 6.027]}
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
              position={[2768.359, 12.572, -3.284]}
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
              position={[2742.494, 12.572, -25.374]}
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
              position={[1570.902, -1.838, 326.037]}
              rotation={[-Math.PI / 2, 0, 2.775]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1428.742, -1.838, 41.545]}
              rotation={[-Math.PI / 2, 0, -2.222]}
              scale={[80.104, 80.103, 80.103]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1418.661, -1.838, 76.611]}
              rotation={[-Math.PI / 2, 0, -0.69]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1672.126, -1.838, -588.074]}
              rotation={[-Math.PI / 2, 0, -1.533]}
              scale={80.104}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1456.858, -1.838, -574.627]}
              rotation={[-Math.PI / 2, 0, -3.003]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1491.596, -1.838, -573.653]}
              rotation={[-2.097, 0.398, -3.008]}
              scale={78.781}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[2810.034, 26.261, 15.175]}
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
              position={[2777.312, 26.261, 28.254]}
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
              position={[2827.729, 26.261, -141.52]}
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
              position={[3051.495, 26.261, -225.642]}
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
              position={[3067.127, 26.261, -240.707]}
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
              position={[1328.344, -1.838, -512.138]}
              rotation={[-Math.PI / 2, 0, -2.066]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy012_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1352.385, -1.838, -503.983]}
              rotation={[-2.097, 0.398, -3.008]}
              scale={78.781}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy013_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1349.224, -1.838, -528.346]}
              rotation={[-2.071, -0.431, -1.766]}
              scale={69.052}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy014_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[871.037, -1.838, -315.71]}
              rotation={[-Math.PI / 2, 0, 0.77]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy015_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[876.981, -1.838, -345.66]}
              rotation={[-Math.PI / 2, 0, -2.222]}
              scale={[80.104, 80.103, 80.103]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy016_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1221.134, -1.838, -271.808]}
              rotation={[-0.979, -0.283, 0.328]}
              scale={78.781}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy017_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1369.609, -1.838, 586.234]}
              rotation={[-Math.PI / 2, 0, 1.735]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy018_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1320.471, -1.838, 821.006]}
              rotation={[-Math.PI / 2, 0, -2.495]}
              scale={74.817}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy019_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-952.734, -1.838, 246.816]}
              rotation={[-Math.PI / 2, 0, 1.35]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy020_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-964.186, -1.838, 218.511]}
              rotation={[-Math.PI / 2, 0, -1.641]}
              scale={80.103}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy021_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1035.378, -1.838, 685.171]}
              rotation={[-Math.PI / 2, 0, 1.634]}
              scale={76.626}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy022_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[980.478, -1.838, 881.723]}
              rotation={[-Math.PI / 2, 0, 1.033]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy023_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[985.489, -1.838, 848.169]}
              rotation={[-Math.PI / 2, 0, -2.346]}
              scale={126.013}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy024_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1008.651, -1.838, 864.123]}
              rotation={[-Math.PI / 2, 0, 1.64]}
              scale={82.022}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy025_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1174.619, -1.838, 709.649]}
              rotation={[-Math.PI / 2, 0, 1.033]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy026_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1204.176, -1.838, 701.458]}
              rotation={[-Math.PI / 2, 0, 3.093]}
              scale={84.279}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy027_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1231.031, -1.838, 713.222]}
              rotation={[-Math.PI / 2, 0, -1.986]}
              scale={87.14}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy028_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1298.509, -1.838, 666.241]}
              rotation={[-Math.PI / 2, 0, 3.093]}
              scale={84.279}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy029_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[703.248, -1.838, 1116.796]}
              rotation={[-Math.PI / 2, 0, 3.093]}
              scale={84.279}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy030_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1300.085, -1.838, 1209.505]}
              rotation={[-Math.PI / 2, 0, 1.64]}
              scale={82.022}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy031_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1271.437, -1.838, 1222.07]}
              rotation={[-Math.PI / 2, 0, 2.621]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy032_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1310.09, -1.838, 1383.613]}
              rotation={[-Math.PI / 2, 0, 1.64]}
              scale={82.022}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Daisy033_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-83.653, -1.838, -27.304]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-81.641, -1.838, -125.891]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-79.629, -1.838, -224.478]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[16.946, -1.838, -29.316]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[18.958, -1.838, -127.903]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[20.97, -1.838, -226.49]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[117.545, -1.838, -31.328]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[119.556, -1.838, -129.915]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[121.569, -1.838, -228.502]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[318.742, -1.838, -25.292]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[320.754, -1.838, -123.879]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage011_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[322.766, -1.838, -222.466]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage012_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[419.341, -1.838, -27.304]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage013_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[421.353, -1.838, -125.891]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage014_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[423.365, -1.838, -224.478]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Cabbage015_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-78.548, -1.838, -422.146]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Carrot001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-76.536, -1.838, -524.757]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Carrot002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[26.074, -1.838, -422.146]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Carrot003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[28.087, -1.838, -524.757]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Carrot004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[130.697, -1.838, -422.146]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Carrot005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[132.709, -1.838, -524.757]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Carrot006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[235.32, -1.838, -422.146]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Carrot007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[237.332, -1.838, -524.757]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Carrot008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-279.12, -1.838, -21.726]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-279.12, -1.838, -124.337]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-279.12, -1.838, -226.948]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-279.12, -1.838, -329.559]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-279.12, -1.838, -432.17]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-279.12, -1.838, -534.78]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-377.707, -1.838, -21.726]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-377.707, -1.838, -124.337]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-377.707, -1.838, -226.948]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-377.707, -1.838, -329.559]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-377.707, -1.838, -432.17]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat011_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-377.707, -1.838, -534.78]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat012_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-476.294, -1.838, -21.726]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat013_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-476.294, -1.838, -124.337]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat014_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-476.294, -1.838, -226.948]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat015_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-476.294, -1.838, -329.559]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat016_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-476.294, -1.838, -432.17]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat017_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-476.294, -1.838, -534.78]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wheat018_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1695.333, -1.838, 358.341]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1695.871, -1.838, 256.834]}
              rotation={[-Math.PI / 2, 0, 1.503]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1696.409, -1.838, 155.326]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1696.948, -1.838, 53.818]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1697.485, -1.838, -47.689]}
              rotation={[-1.572, -0.267, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1698.024, -1.838, -149.196]}
              rotation={[-1.569, 0.242, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1698.562, -1.838, -250.703]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1699.1, -1.838, -352.211]}
              rotation={[-Math.PI / 2, 0, 1.589]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1699.639, -1.838, -453.718]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1700.177, -1.838, -555.226]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence011_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1700.715, -1.838, -656.733]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence012_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[789.117, -1.838, 353.536]}
              rotation={[-Math.PI / 2, 0, 1.515]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence013_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[789.655, -1.838, 252.028]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence014_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[802.822, -1.838, 147.677]}
              rotation={[-Math.PI / 2, 0, 1.793]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence015_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[790.731, -1.838, 49.013]}
              rotation={[-Math.PI / 2, 0, 1.612]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence016_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[791.269, -1.838, -52.494]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence017_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[791.808, -1.838, -154.001]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence018_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[792.346, -1.838, -255.509]}
              rotation={[-Math.PI / 2, 0, 1.612]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence019_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[792.884, -1.838, -357.016]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence020_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[793.422, -1.838, -458.523]}
              rotation={[1.511, 1.482, -1.511]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence021_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[793.961, -1.838, -560.031]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence022_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[794.499, -1.838, -661.538]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence023_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1647.87, -1.838, 406.748]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence024_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1546.363, -1.838, 406.209]}
              rotation={[-Math.PI / 2, 0, 3.141]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence025_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1653.715, -1.838, -695.507]}
              rotation={[-Math.PI / 2, 0, 3.077]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence026_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1552.207, -1.838, -696.046]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence027_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1450.7, -1.838, -696.584]}
              rotation={[-Math.PI / 2, 0, 3.044]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence028_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1349.192, -1.838, -697.122]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence029_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1245.683, -1.838, -686.028]}
              rotation={[-Math.PI / 2, 0, 2.835]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence030_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1146.178, -1.838, -698.199]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence031_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1044.67, -1.838, -698.737]}
              rotation={[-1.135, -0.002, 3.137]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence032_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[943.163, -1.838, -699.275]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence033_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[841.655, -1.838, -699.813]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence034_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1444.855, -1.838, 405.671]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence035_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1344.313, -1.838, 406.108]}
              rotation={[-Math.PI / 2, 0, 3.079]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence036_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1241.841, -1.838, 404.594]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence037_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1140.333, -1.838, 404.056]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence038_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[138.298, 11.632, 1117.18]}
              rotation={[-Math.PI / 2, 0, 1.552]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence039_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[944.477, -1.838, 403.018]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence040_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[840.476, -1.838, 402.466]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence041_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[343.765, 11.632, 1315.699]}
              rotation={[-Math.PI / 2, 0, 1.552]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence042_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[345.731, 11.632, 1421.837]}
              rotation={[-Math.PI / 2, 0, 1.491]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence043_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-357.929, 11.632, 1419.872]}
              rotation={[-Math.PI / 2, 0, 1.491]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence044_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-556.447, 11.632, 417.452]}
              rotation={[-Math.PI / 2, 0, 1.63]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence045_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-988.252, -1.838, 242.004]}
              rotation={[-Math.PI / 2, 0, -1.283]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence046_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1396.296, -1.838, 600.516]}
              rotation={[-Math.PI / 2, 0, -0.787]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence047_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1311.385, -1.838, 661.841]}
              rotation={[-Math.PI / 2, 0, -0.118]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence048_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1078.797, -1.838, 658.565]}
              rotation={[-Math.PI / 2, 0, 0.105]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence049_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1072.245, -1.838, 768.307]}
              rotation={[-Math.PI / 2, 0, 1.558]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence050_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1070.608, -1.838, 1022.188]}
              rotation={[-Math.PI / 2, 0, 1.558]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence051_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1272.165, -1.838, 225.193]}
              rotation={[-Math.PI / 2, 0, -0.021]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fence052_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1161.507, -1.838, 448.114]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fountain001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1472.82, -1.838, 500.756]}
              rotation={[-Math.PI / 2, 0, 1.572]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Garland001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1356.526, -1.838, 20.184]}
              rotation={[-Math.PI / 2, 0, -0.002]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Garland002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-665.771, -1.838, 738.239]}
              rotation={[-Math.PI / 2, 0, 1.575]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Garland003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-664.133, -1.838, 523.668]}
              rotation={[-Math.PI / 2, 0, -1.582]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Garland004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-665.771, -1.838, 314.012]}
              rotation={[-Math.PI / 2, 0, 1.591]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Garland005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1370.957, -1.838, -144.928]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Grave_1_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[898.968, -1.838, 54.46]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Grave_1002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1625.441, -1.838, -144.733]}
              rotation={[-Math.PI / 2, 0, 1.58]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Grave_2_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[892.441, -1.838, 256.015]}
              rotation={[-Math.PI / 2, 0, 1.58]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Grave_2002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-569.241, -1.838, -152.103]}
              rotation={[-Math.PI / 2, 0, 1.879]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-586.706, -1.838, -103.589]}
              rotation={[-Math.PI / 2, 0, 1.55]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-566.33, -1.838, -63.807]}
              rotation={[-Math.PI / 2, 0, 1.55]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-618.725, -1.838, -41.491]}
              rotation={[-Math.PI / 2, 0, 0.083]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-576.032, -1.838, -10.442]}
              rotation={[-Math.PI / 2, 0, 0.083]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-597.931, 27.171, -34.587]}
              rotation={[-Math.PI / 2, 0, 0.083]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-586.139, 27.171, -127.235]}
              rotation={[-Math.PI / 2, 0, -0.302]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-562.556, 27.171, -56.485]}
              rotation={[-Math.PI / 2, 0, 0.011]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-587.263, 54.901, -44.132]}
              rotation={[-Math.PI / 2, 0, 1.966]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1109.825, -1.838, -948.466]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale010_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[1.678, -0.224, 0]}
              />
            </group>
            <group
              position={[-969.116, -1.838, -755.309]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale011_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-0.514, 0.475, 0.22]}
                rotation={[0.731, 0.096, -0.037]}
              />
            </group>
            <group
              position={[-820.233, -1.838, -881.338]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale012_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-1.477, -0.628, 0]}
                rotation={[0, 0, -0.747]}
              />
            </group>
            <group
              position={[-699.573, -1.838, -695.293]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale013_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[1.427, 1.822, 0.272]}
                rotation={[0, 0, 0.199]}
              />
            </group>
            <group
              position={[-533.531, -1.838, -852.566]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale014_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-216.228, -1.838, -773.004]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale016_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-2.961, -0.283, 0]}
                rotation={[0, 0, 1.089]}
              />
            </group>
            <group
              position={[69.831, -1.838, -710.601]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale018_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-5.469, 0.223, 0]}
                rotation={[0, 0, 0.374]}
              />
            </group>
            <group
              position={[343.596, -1.838, -708.99]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale020_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-3.014, 2.221, 0.268]}
                rotation={[0, 0, -0.072]}
              />
            </group>
            <group
              position={[877.683, -1.838, -787.801]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale024_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[1.571, 3.165, 0]}
                rotation={[0, 0, 2.342]}
              />
            </group>
            <group
              position={[520.832, -1.838, -1034.207]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale025_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[5.457, 1.283, 0.264]}
                rotation={[0, 0, -0.81]}
              />
            </group>
            <group
              position={[318.642, -1.838, -973.946]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale026_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-2.345, -0.339, 0]}
                rotation={[0, 0, -0.502]}
              />
            </group>
            <group
              position={[517.718, -1.838, -1304.439]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale027_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[5.829, -1.253, 0.581]}
                rotation={[0, 0, -0.182]}
              />
            </group>
            <group
              position={[733.395, -1.838, -1134.175]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale028_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[3.637, 0.525, 0]}
              />
            </group>
            <group
              position={[916.504, -1.838, -1263.69]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Bale029_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[1.947, -1.023, 0.297]}
              />
            </group>
            <group
              position={[1357.733, -1.838, -66.42]}
              rotation={[-Math.PI / 2, 0, -1.492]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Cart001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[848.188, -1.838, -39.559]}
              rotation={[-Math.PI / 2, 0, 0.437]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Cart003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-578.439, -1.838, -330.287]}
              rotation={[-Math.PI / 2, 0, -1.473]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Cart004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-610.626, -1.838, -884.919]}
              rotation={[-Math.PI / 2, 0, -1.616]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Cart005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1103.722, -1.838, -1287.367]}
              rotation={[-Math.PI / 2, 0, -0.426]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Cart007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1519.912, -1.838, 358.863]}
              rotation={[-Math.PI / 2, 0, -2.822]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Cart008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-583.509, -1.838, -419.924]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Pile001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-471, -1.838, -630.457]}
              rotation={[-Math.PI / 2, 0, 2.007]}
              scale={92.198}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Pile002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1016.099, -1.838, -887.346]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Pile003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1013.213, -1.838, -1223.215]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Pile005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1018.993, -1.838, -1146.504]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={[130.252, 130.253, 130.253]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Pile006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1064.549, -1.838, -843.761]}
              rotation={[-Math.PI / 2, 0, -0.143]}
              scale={[130.252, 130.253, 130.253]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hay_Pile007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[2913.18, 28.466, -60.773]}
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
              position={[238.633, -1.838, 1313.538]}
              rotation={[-Math.PI / 2, 0, 3.132]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_2Story_Purple001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[226.592, -1.838, 912.752]}
              rotation={[-Math.PI / 2, 0, 1.588]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_2Story_Purple002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[226.592, -1.838, 717.188]}
              rotation={[-Math.PI / 2, 0, 1.543]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_2Story_Purple003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[26.199, -1.838, 717.188]}
              rotation={[-Math.PI / 2, 0, -1.581]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_2Story_Purple004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[26.199, -1.838, 514.381]}
              rotation={[-Math.PI / 2, 0, -1.581]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_2Story_Purple005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[28.614, -1.838, 318.817]}
              rotation={[-Math.PI / 2, 0, 1.591]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_2Story_Purple006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-463.949, -1.838, 514.381]}
              rotation={[-Math.PI / 2, 0, 1.558]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_2Story_Purple007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-466.363, -1.838, 924.824]}
              rotation={[-Math.PI / 2, 0, 1.529]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_2Story_Purple008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-461.534, -1.838, 1219.377]}
              rotation={[-Math.PI / 2, 0, 1.631]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_2Story_Purple009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[26.254, -1.838, 919.641]}
              rotation={[-Math.PI / 2, 0, -1.546]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_Blue001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-263.501, -1.838, 318.463]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_Blue002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-468.723, -1.838, 721.663]}
              rotation={[-Math.PI / 2, 0, 1.583]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_Blue003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1396.818, -1.838, -395.118]}
              rotation={[-Math.PI / 2, 0, -1.528]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_Purple002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[226.029, -1.838, 518.855]}
              rotation={[-Math.PI / 2, 0, 3.114]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_Red001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-733.034, -1.838, 313.841]}
              rotation={[-Math.PI / 2, 0, -1.584]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Market_Stall_Blue001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-735.392, -1.838, 511.966]}
              rotation={[-Math.PI / 2, 0, -1.516]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Market_Stall_Blue002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1261.368, -1.838, 771.416]}
              rotation={[-Math.PI / 2, 0, 1.567]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Market_Stall_Blue003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-931.159, -1.838, 898.782]}
              rotation={[-Math.PI / 2, 0, 1.567]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Market_Stall_Blue004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-874.552, -1.838, 1252.578]}
              rotation={[-Math.PI / 2, 0, -3.13]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Market_Stall_Blue005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[33.045, -1.838, 1074.446]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Market_Stall_Red001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1071.419, -1.838, 207.843]}
              rotation={[-Math.PI / 2, 0, -0.12]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Market_Stall_Red002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1363.103, -1.838, 74.974]}
              rotation={[-Math.PI / 2, 0, 0.069]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Market_Stall_Red003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1415.779, -1.838, 497.955]}
              rotation={[-Math.PI / 2, 0, 1.625]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Market_Stall_Red004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1264.827, -1.838, 986.193]}
              rotation={[-Math.PI / 2, 0, 1.625]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Market_Stall_Red005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-636.051, -1.838, 929.698]}
              rotation={[-Math.PI / 2, 0, -1.556]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Market_Stall_Red006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-630.155, -1.838, 1233.167]}
              rotation={[-Math.PI / 2, 0, -1.583]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Market_Stall_Red007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1157.062, -1.838, 254.42]}
              rotation={[-1.547, -0.027, 1.566]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Obelisk001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[841.895, -1.838, -351.03]}
              rotation={[-1.547, -0.027, 1.566]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Obelisk002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1248.51, -1.838, 916.307]}
              rotation={[-Math.PI / 2, 0, 1.634]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Picnic_Table001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1270.603, -1.838, 1297.629]}
              rotation={[-Math.PI / 2, 0, 1.634]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Picnic_Table002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1255.307, -1.838, 1054.529]}
              rotation={[-Math.PI / 2, 0, 1.634]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Picnic_Table003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1693.699, -1.838, 407.083]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1694.237, -1.838, 305.576]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1694.775, -1.838, 204.069]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1695.313, -1.838, 102.561]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1695.852, -1.838, 1.054]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1696.39, -1.838, -100.454]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1696.928, -1.838, -201.961]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1697.466, -1.838, -303.468]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1698.004, -1.838, -404.976]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1698.543, -1.838, -506.483]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1699.081, -1.838, -607.99]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar011_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1699.538, -1.838, -694.206]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar012_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[787.482, -1.838, 402.278]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar013_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[788.021, -1.838, 300.771]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar014_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[788.559, -1.838, 199.263]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar015_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[789.097, -1.838, 97.756]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar016_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[789.635, -1.838, -3.751]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar017_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[790.174, -1.838, -105.259]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar018_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[790.711, -1.838, -206.766]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar019_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[791.25, -1.838, -308.274]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar020_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[791.788, -1.838, -409.781]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar021_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[792.326, -1.838, -511.288]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar022_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[792.864, -1.838, -612.796]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar023_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[793.322, -1.838, -699.012]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar024_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1595.105, -1.838, 407.844]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar025_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1493.598, -1.838, 407.306]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar026_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1392.09, -1.838, 406.767]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar027_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1600.95, -1.838, -694.411]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar028_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1499.443, -1.838, -694.949]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar029_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1397.935, -1.838, -695.488]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar030_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1296.428, -1.838, -696.026]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar031_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1194.92, -1.838, -696.564]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar032_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1093.413, -1.838, -697.102]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar033_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[991.905, -1.838, -697.641]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar034_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[890.398, -1.838, -698.179]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar035_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1290.583, -1.838, 406.229]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar036_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1189.076, -1.838, 405.691]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar037_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[891.713, -1.838, 404.114]}
              rotation={[-Math.PI / 2, 0, 3.136]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pillar040_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1160.837, 1, 446.528]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[2677.128, 25.466, -196.695]}
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
              position={[965.48, -1.838, 759.247]}
              rotation={[-Math.PI / 2, 0, 1.634]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pond001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1127.883, -1.838, 353.572]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Potted_Bush001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[955.938, -1.838, 352.66]}
              rotation={[-Math.PI / 2, 0, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Potted_Bush002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1606.611, -1.838, -220.944]}
              rotation={[-1.572, -0.252, -0.137]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shroom001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1669.044, -1.838, -528.566]}
              rotation={[-1.612, 0.249, -3.107]}
              scale={81.36}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shroom002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1602.675, -1.838, -521.022]}
              rotation={[-1.798, -0.042, -0.847]}
              scale={55.99}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shroom003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[961.176, -1.838, -678.7]}
              rotation={[-1.798, -0.042, -0.847]}
              scale={55.99}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shroom004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[822.201, -1.838, -570.898]}
              rotation={[-1.612, 0.249, -3.107]}
              scale={81.36}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shroom005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1265.288, -1.838, 657.186]}
              rotation={[-Math.PI / 2, 0, -1.613]}
              scale={71.318}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shroom006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1065.412, -1.838, 1253.802]}
              rotation={[-Math.PI / 2, 0, -1.613]}
              scale={80.374}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shroom007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1091.876, -1.838, 1271.921]}
              rotation={[-Math.PI / 2, 0, 0.87]}
              scale={67}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shroom008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[637.981, -1.838, 1290.192]}
              rotation={[-Math.PI / 2, 0, 0.87]}
              scale={67}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shroom009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[736.325, -1.838, 1067.165]}
              rotation={[-Math.PI / 2, 0, 1.937]}
              scale={60.792}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shroom010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[724.66, -1.838, 1095.598]}
              rotation={[-Math.PI / 2, 0, -0.267]}
              scale={67.879}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shroom011_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-839.483, -1.838, -386.986]}
              rotation={[-Math.PI / 2, 0, 0.017]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1036.848, -1.838, 335.834]}
              rotation={[-Math.PI / 2, 0, 3.021]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.StonePath001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1033.017, -1.838, 232.656]}
              rotation={[-Math.PI / 2, 0, 3.021]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.StonePath002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1039.083, -1.838, 131.11]}
              rotation={[-Math.PI / 2, 0, 2.814]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.StonePath003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1063.142, -1.838, 31.309]}
              rotation={[-Math.PI / 2, 0, 2.63]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.StonePath004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1098.69, -1.838, -59.325]}
              rotation={[-Math.PI / 2, 0, -0.445]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.StonePath005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1116.438, -1.838, -161.889]}
              rotation={[-Math.PI / 2, 0, -0.294]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.StonePath006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1179.025, -1.838, -353.141]}
              rotation={[-Math.PI / 2, 0, 2.302]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.StonePath007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1130.62, -1.838, -265.904]}
              rotation={[-Math.PI / 2, 0, 2.679]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.StonePath008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1333.747, -1.838, 183.423]}
              rotation={[-Math.PI / 2, 0, -2.913]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.StonePath009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1361.976, -1.838, -574.931]}
              rotation={[-Math.PI / 2, 0, -0.005]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1664.281, -1.838, 281.898]}
              rotation={[-Math.PI / 2, 0, -0.005]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1177.329, -1.838, 384.336]}
              rotation={[-Math.PI / 2, 0, -0.005]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[910.444, -1.838, 382.921]}
              rotation={[-Math.PI / 2, 0, -0.005]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1117.795, -1.838, 94.248]}
              rotation={[-Math.PI / 2, 0, -0.005]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1181.746, -1.838, -438.105]}
              rotation={[-Math.PI / 2, 0, -0.005]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1045.135, -1.838, -109.9]}
              rotation={[-Math.PI / 2, 0, -0.005]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1198.496, -1.838, -303.145]}
              rotation={[-Math.PI / 2, 0, -0.005]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-149.699, -1.838, 1329.661]}
              rotation={[-Math.PI / 2, 0, 1.461]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-76.061, -1.838, 1040.729]}
              rotation={[-Math.PI / 2, 0, 1.553]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1077.278, -1.838, 791.494]}
              rotation={[-Math.PI / 2, 0, 1.461]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight011_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-1075.64, -1.838, 907.788]}
              rotation={[-Math.PI / 2, 0, -3.056]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight012_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1004.38, -1.838, 981.594]}
              rotation={[-Math.PI / 2, 0, 0.063]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight013_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[625.677, -1.838, 884.736]}
              rotation={[-Math.PI / 2, 0, 0.063]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight014_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1252.513, -1.838, 985.925]}
              rotation={[-Math.PI / 2, 0, 0.063]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight016_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1275.85, -1.838, 1371.917]}
              rotation={[-Math.PI / 2, 0, 0.063]}
              scale={75}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Streetlight017_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[3062.04, -24.534, -211.905]}
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
              position={[1634.774, -1.838, 52.689]}
              rotation={[-Math.PI / 2, 0, 1.542]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tomb_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1342.029, -1.838, 256.42]}
              rotation={[-Math.PI / 2, 0, 1.584]}
              scale={110.536}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tomb002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1028.104, -1.838, -255.342]}
              rotation={[-Math.PI / 2, 0, 1.552]}
              scale={110.536}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tomb003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1461.133, -1.838, 51.703]}
              rotation={[-Math.PI / 2, 0, 1.606]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tombstone_1_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[819.744, -1.838, -146.135]}
              rotation={[-Math.PI / 2, 0, 1.606]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tombstone_1002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[962.882, -1.838, -405.037]}
              rotation={[-Math.PI / 2, 0, 1.606]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tombstone_1003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1062.462, -1.838, -519.974]}
              rotation={[-Math.PI / 2, 0, 1.601]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tombstone_1004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1446.918, -1.838, -147.965]}
              rotation={[-1.57, 0.162, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tombstone_2_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[806.894, -1.838, 254.571]}
              rotation={[-1.57, 0.162, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tombstone_2002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1052.428, -1.838, -410.096]}
              rotation={[-1.57, 0.162, 1.565]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tombstone_2003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1625.903, -1.838, 246.969]}
              rotation={[-1.589, -0.099, 1.385]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tombstone_3_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[818.478, -1.838, 53.936]}
              rotation={[-Math.PI / 2, -0.101, 1.571]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tombstone_3002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[968.199, -1.838, -514.319]}
              rotation={[-1.575, -0.101, 1.534]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tombstone_3003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1644.689, -1.838, -275.69]}
              rotation={[-Math.PI / 2, 0, 1.419]}
              scale={91.878}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1641.083, -1.838, -366.663]}
              rotation={[-Math.PI / 2, 0, 2.134]}
              scale={[100, 100, 116.412]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1641.54, -1.838, -466.15]}
              rotation={[-Math.PI / 2, 0, 1.494]}
              scale={[122.813, 122.813, 135.741]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1627.179, -1.838, -558.969]}
              rotation={[-Math.PI / 2, 0, 2.551]}
              scale={[77.162, 77.161, 77.161]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1647.31, -1.838, -635.981]}
              rotation={[-Math.PI / 2, 0, -0.267]}
              scale={[83.708, 83.708, 66.927]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1563.382, -1.838, -620.713]}
              rotation={[-Math.PI / 2, 0, -1.983]}
              scale={113.936}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1475.221, -1.838, -634.412]}
              rotation={[-Math.PI / 2, 0, 2.45]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1407.925, -1.838, -602.245]}
              rotation={[-Math.PI / 2, 0, 2.742]}
              scale={65.709}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1402.717, -1.838, -662.284]}
              rotation={[-Math.PI / 2, 0, -2.708]}
              scale={50.687}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine009_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1349.583, -1.838, -625.191]}
              rotation={[-Math.PI / 2, 0, 2.551]}
              scale={[77.162, 77.161, 67.123]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine010_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[997.296, -1.838, -651.718]}
              rotation={[-Math.PI / 2, 0, 2.551]}
              scale={[77.162, 77.161, 67.123]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine011_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1050.555, -1.838, -619.584]}
              rotation={[-Math.PI / 2, 0, -3.101]}
              scale={[67.081, 67.081, 58.355]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine012_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1090.854, -1.838, -662.525]}
              rotation={[-Math.PI / 2, 0, 2.568]}
              scale={[56.284, 56.284, 48.962]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine013_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1126.63, -1.838, -627.401]}
              rotation={[-Math.PI / 2, 0, -2.202]}
              scale={[52.468, 52.468, 45.643]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine014_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1196.338, -1.838, -649.059]}
              rotation={[-Math.PI / 2, 0, 2.742]}
              scale={65.709}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine015_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[676.293, -1.838, 1069.425]}
              rotation={[-Math.PI / 2, 0, 1.178]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine016_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[584.927, -1.838, 1065.13]}
              rotation={[-Math.PI / 2, 0, 1.709]}
              scale={77.646}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine017_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[626.165, -1.838, 1142.094]}
              rotation={[-Math.PI / 2, 0, 2.522]}
              scale={107.298}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine018_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[353.246, -1.838, 1039.413]}
              rotation={[-Math.PI / 2, 0, 1.336]}
              scale={66.21}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine019_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-1.728, -3.771, 0]}
              />
            </group>
            <group
              position={[642.237, -1.838, 1234.529]}
              rotation={[-Math.PI / 2, 0, 1.932]}
              scale={79.109}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine020_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[596.285, -1.838, 1283.004]}
              rotation={[-Math.PI / 2, 0, 1.663]}
              scale={63.837}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine021_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[679.647, -1.838, 1285.737]}
              rotation={[-Math.PI / 2, 0, -2.725]}
              scale={66.21}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine022_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-0.157, 0.069, 0]}
              />
            </group>
            <group
              position={[743.911, -1.838, 1237.343]}
              rotation={[-Math.PI / 2, 0, 2.953]}
              scale={71.233}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine023_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[726.199, -1.838, 1338.221]}
              rotation={[-Math.PI / 2, 0, 2.73]}
              scale={77.292}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine024_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[781.749, -1.838, 1314.64]}
              rotation={[-Math.PI / 2, 0, -1.332]}
              scale={77.292}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine025_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[0.035, 0.143, 0]}
              />
            </group>
            <group
              position={[630.011, -1.838, 1365.13]}
              rotation={[-Math.PI / 2, 0, 0.747]}
              scale={92.873}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine026_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1009.118, -1.838, 1287.798]}
              rotation={[-Math.PI / 2, 0, 2.522]}
              scale={107.298}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine027_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[970.708, -1.838, 1220.7]}
              rotation={[-Math.PI / 2, 0, 2.522]}
              scale={59.64}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine028_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1040.799, -1.838, 1211.732]}
              rotation={[-Math.PI / 2, 0, 1.773]}
              scale={81.176}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine029_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1094.911, -1.838, 1166.162]}
              rotation={[-Math.PI / 2, 0, 0.101]}
              scale={70.413}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine030_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1102.53, -1.838, 1232.919]}
              rotation={[-Math.PI / 2, 0, 2.234]}
              scale={57.933}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine031_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1086.534, -1.838, 1322.813]}
              rotation={[-Math.PI / 2, 0, -1.632]}
              scale={88.453}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine032_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[998.932, -1.838, 1361.373]}
              rotation={[-Math.PI / 2, 0, 1.26]}
              scale={57.933}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine033_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1036.763, -1.838, 1401.157]}
              rotation={[-Math.PI / 2, 0, 2.752]}
              scale={52.261}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine034_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1274.05, -1.838, 1169.705]}
              rotation={[-Math.PI / 2, 0, 1.773]}
              scale={81.176}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine035_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[1197.609, -1.838, 751.727]}
              rotation={[-Math.PI / 2, 0, -0.083]}
              scale={81.176}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine036_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[620.495, -1.838, 792.375]}
              rotation={[-Math.PI / 2, 0, 1.709]}
              scale={77.646}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine037_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[612.82, -1.838, 719.409]}
              rotation={[-Math.PI / 2, 0, -0.392]}
              scale={77.646}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine038_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[650.688, -1.838, 638.93]}
              rotation={[-Math.PI / 2, 0, -0.392]}
              scale={71.283}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine039_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[684.357, -1.838, 700.514]}
              rotation={[-Math.PI / 2, 0, 1.352]}
              scale={58.217}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine040_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-0.038, 0.171, 0]}
              />
            </group>
            <group
              position={[597.329, -1.838, 650.593]}
              rotation={[-Math.PI / 2, 0, -0.546]}
              scale={38.673}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine041_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[730.203, -1.838, 621.721]}
              rotation={[-Math.PI / 2, 0, -0.392]}
              scale={97.307}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine042_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[911.57, -1.838, 1097.832]}
              rotation={[-Math.PI / 2, 0, -2.725]}
              scale={66.21}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Pine043_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[79.673, -1.838, 1366.898]}
              rotation={[-Math.PI / 2, 0, -0.511]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Square001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[5.621, -1.838, 1387.856]}
              rotation={[-Math.PI / 2, 0, 0.139]}
              scale={54.057}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Square002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-79.609, -1.838, 1389.254]}
              rotation={[-Math.PI / 2, 0, -0.025]}
              scale={69.017}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Square003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-139.688, -1.838, 1389.254]}
              rotation={[-Math.PI / 2, 0, 0.138]}
              scale={58.175}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_Square004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[3085.296, 26.466, -235.001]}
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
              position={[3042.629, 26.466, -186.345]}
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
              position={[3044.261, 26.466, 59.465]}
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
              position={[2981.686, 26.466, 115.673]}
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
              position={[-621.661, -1.838, 790.1]}
              rotation={[-1.596, -0.029, 0.425]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-621.661, -1.838, 729.87]}
              rotation={[-Math.PI / 2, 0, -0.655]}
              scale={93.359}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-622.121, -1.838, 665.961]}
              rotation={[-1.599, -0.032, -1.148]}
              scale={106.579}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-621.201, -1.838, 607.11]}
              rotation={[-Math.PI / 2, 0, -0.185]}
              scale={106.054}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall004_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-621.201, -1.838, 544.122]}
              rotation={[-1.58, -0.01, 0.602]}
              scale={92.687}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall005_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-619.822, -1.838, 480.673]}
              rotation={[-Math.PI / 2, 0, -0.185]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall006_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-618.902, -1.838, 415.845]}
              rotation={[-1.562, 0.01, -1.63]}
              scale={107.288}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall007_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-617.983, -1.838, 351.477]}
              rotation={[-1.586, 0.009, -0.22]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall008_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[2709.108, 27.293, 203.309]}
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
              position={[2773.011, 27.293, 202.365]}
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
              position={[2831.867, 27.293, 202.839]}
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
              position={[2894.854, 27.293, 202.361]}
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
              position={[2958.311, 27.293, 203.26]}
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
              position={[3023.144, 27.293, 203.688]}
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
              position={[3087.517, 27.293, 204.12]}
              rotation={[-1.562, 0.015, -1.783]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall016_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-618.931, -1.838, 290.58]}
              rotation={[-1.596, -0.029, 0.425]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall017_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-618.931, -1.838, 230.35]}
              rotation={[-Math.PI / 2, 0, -0.655]}
              scale={93.359}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.TreeTall018_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-896.474, -1.838, -259.337]}
              rotation={[-Math.PI / 2, 0, -1.771]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Well001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-788.636, -1.838, -1299.91]}
              rotation={[-1.578, -0.052, -0.218]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Windmill001_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[-84.57, -1.838, -1038.015]}
              rotation={[-1.572, 0, -0.143]}
              scale={103.821}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Windmill002_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              position={[593.954, -1.838, -1284.181]}
              rotation={[-1.566, 0.031, -0.064]}
              scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Windmill003_Material005_0.geometry}
                material={materials["Material.005"]}
              />
            </group>
            <group
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[62.859, 62.859, 100]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.World_Material005_0.geometry}
                material={materials["Material.005"]}
                scale={1.173}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/field.glb");
