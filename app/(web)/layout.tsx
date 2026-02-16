"use client";

import AppLayout from "@/src/components/site/containers/AppLayout";
import CustomThemeProvider from "../theme";
import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {


  
  // return  children ;
   return (
    <CustomThemeProvider>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          "&::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/image00001.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "40%", // Ajusta el tamaño según necesites
            opacity: 0.2, // Ajusta la transparencia (0.05 = muy sutil)
            pointerEvents: "none",
            zIndex: 0,
          },
        }}
      >
        <AppLayout mode={undefined} setMode={undefined}>
          {children}
        </AppLayout>
      </Box>
    </CustomThemeProvider>
   )
}
