import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export function useFBX(url) {
  return useLoader(FBXLoader, url);
}
