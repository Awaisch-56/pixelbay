import React, { Suspense } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useFBX } from "../hook/UseFbxLoader";
import DownloadIcon from "@mui/icons-material/Download";

const modelsData = {
  tozzo98: {
    fbxPath: "/models/source/Tozzo98.fbx",
    zipPath: "/models/tozzo-98-low-poly-model.zip",
    name: "Tozzo 98",
  },
  carx: {
    fbxPath: "/models/source/Tozzo98.fbx",
    zipPath: "/models/carx-model.zip",
    name: "Car X",
  },
  // add more models here
};

function Loader() {
  return (
    <Html center>
      <div style={{ color: "gray", fontSize: "18px" }}>Loading 3D Model...</div>
    </Html>
  );
}

function ModelViewer({ fbxPath }) {
  const fbx = useFBX(fbxPath);
  return <primitive object={fbx} scale={1} />;
}

function ModelDetail() {
  const { modelId } = useParams();
  const navigate = useNavigate();
  const model = modelsData[modelId];

  if (!model) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" color="error" sx={{ mb: 2 }}>
          Model not found
        </Typography>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Back to Gallery
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // center horizontally
        textAlign: "center", // center text inside children
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
        {model.name}
      </Typography>

      <Box
        sx={{
          width: {
            xs: "100%",   // 100% width on extra-small (mobile) screens
            md: "70%",    // 70% width on medium and up screens
          },
          maxWidth: 800,
          height: 500,
          border: "3px dotted #888",
          borderRadius: 2,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          mb: 4,
        }}
      >
        <Canvas
          camera={{ position: [3, 3, 3], fov: 50 }}
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 10]} />
          <OrbitControls enableZoom />
          <Suspense fallback={<Loader />}>
            <ModelViewer fbxPath={model.fbxPath} />
          </Suspense>
        </Canvas>
      </Box>

      <Button
        variant="contained"
        color="primary"
        href={model.zipPath}
        download
        startIcon={<DownloadIcon />}
      >
        Download Model ZIP
      </Button>
    </Box>
  );
}

export default ModelDetail;
