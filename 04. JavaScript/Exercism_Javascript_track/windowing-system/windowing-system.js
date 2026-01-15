// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size{
  
  constructor(width=80,height=60)
  {
    this.width = width;
    this.height = height;
  }

  resize(newWidth,newHeight)
  {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x=0,y=0) {
    this.x = x;
    this.y = y;
  }

  move(newX,newY)
  {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size();
    this.position = new Position();
  }
  
  resize(newSize)
  {
    const width = Math.max(1, newSize.width);
    const height = Math.max(1, newSize.height);
  
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;
  
    this.size.resize(Math.min(width, maxWidth),Math.min(height, maxHeight));
  }

  move(newPosition)
  {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    
    const newX = Math.max(0, Math.min(newPosition.x, maxX))
    const newY = Math.max(0, Math.min(newPosition.y, maxY))
    
    this.position.move(newX, newY); 
  }
}

export function changeWindow(currentWindow) {
  currentWindow.size = new Size(400,300);
  currentWindow.position = new Position(100,150);

  return currentWindow;
}