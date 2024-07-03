import React, { ReactNode } from 'react';


interface BaseProps {
  children: ReactNode;
}
type ScrollbarWidth = "auto" | "thin" | "none";
type MsOverflowStyle = "auto" | "none";
type WebkitOverflowScrolling = "auto" | "touch";

const myCanvasStyle = {
  border: 'black 3px solid',
  width: '200%',
  height: '100%',
  display: 'flex',
  backgroundColor: 'dodgerblue',
  msOverflowStyle: "none" as MsOverflowStyle,
  scrollbarWidth: "none" as ScrollbarWidth,
  WebkitOverflowScrolling: "auto" as WebkitOverflowScrolling,
  overflow:"hidden",
  top : 0,

}


const Base: React.FC<BaseProps> = ({ children }) => {
  return (
    
      <canvas className='myCanvas' style={myCanvasStyle}>
       {children}
      </canvas>
    
  );
}

export default Base;
