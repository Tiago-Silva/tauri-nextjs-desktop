'use client'
import Link from "next/link";
import { 
  Close,
  Container, 
  ContentMenu, 
  Maximize, 
  Minimize, 
  NavLinks, 
  TitlebarButton, 
  WrapperBasicIcons
} from "./styles";
import { useEffect, useState } from "react";
import { WebviewWindow } from "@tauri-apps/api/window";


export const TitleBar = () => {
  const [appWindow, setAppWindow] = useState<WebviewWindow>()

  async function setupAppWindow() {
    const app = (await import('@tauri-apps/api/window')).appWindow
    setAppWindow(app);
  }

  useEffect(() => {
    setupAppWindow()
  }, []) 

  const handleMinimizeClick = () => appWindow?.minimize();
  const handleMaximizeClick = () => appWindow?.toggleMaximize();
  const handleCloseClick = () => appWindow?.close();

  return (
    <Container data-tauri-drag-region>
      <ContentMenu>
        <NavLinks>
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </NavLinks>
      </ContentMenu>
      <WrapperBasicIcons >
        <TitlebarButton onClick={handleMinimizeClick}>
          <Minimize />
        </TitlebarButton>
        <TitlebarButton onClick={handleMaximizeClick}>
          <Maximize />
        </TitlebarButton>
        <TitlebarButton onClick={handleCloseClick}>
          <Close />
        </TitlebarButton>
      </WrapperBasicIcons>
    </Container>
  );
}