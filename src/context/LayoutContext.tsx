"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

interface LayoutContextType {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  toggleDrawer: () => void;
  drawerWidth: number;
  topBarHeight: number;
  isMobile: boolean;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = useState(isMdUp);

  const drawerWidth = 280;
  const topBarHeight = 64;

  // Efecto para manejar el cambio de tamaño de pantalla
  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(true);
    } else {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <LayoutContext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
        toggleDrawer,
        drawerWidth,
        topBarHeight,
        isMobile: !isMdUp,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};