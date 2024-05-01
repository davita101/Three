import { BufferGeometry, BufferAttribute, TextureLoader } from 'three';
import textureImage from '/avatar.jpg'

const PyramidGeometry = () => {

    const textureImage = new TextureLoader().load("./avatar.jpg")

    const geometry = new BufferGeometry();

    const vertices = new Float32Array([
        0, 1, 0,   // apex
        -1, -1, 1, // front-left
        1, -1, 1,  // front-right
        1, -1, -1, // back-right
        -1, -1, -1 // back-left
    ]);

    const indices = new Uint16Array([
        0, 1, 2, // front face
        0, 2, 3, // right face
        0, 3, 4, // back face
        0, 4, 1, // left face
        1, 3, 2, // bottom-right face
        1, 4, 3  // bottom-left face
    ]);

    const uvs = new Float32Array([
        0.5, 1,   // apex
        0, 0,     // front-left
        1, 0,     // front-right
        1, 1,     // back-right
        0, 1      // back-left
    ]);

    geometry.setAttribute('position', new BufferAttribute(vertices, 3));
    geometry.setIndex(new BufferAttribute(indices, 1));
    geometry.setAttribute('uv', new BufferAttribute(uvs, 2));


    return (
        <mesh geometry={geometry} castShadow>
            <meshStandardMaterial attach='material' color={'lightYellow'} map={textureImage} />
        </mesh>
    )


};

export default PyramidGeometry;
