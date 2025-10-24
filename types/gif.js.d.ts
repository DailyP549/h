// types/gif.js.d.ts

declare module 'gif.js' {
  interface GIFOptions {
    workers?: number;
    quality?: number;
    width?: number;
    height?: number;
    workerScript?: string;
    background?: string;
    dither?: boolean;
    debug?: boolean;
  }

  interface AddFrameOptions {
    delay?: number;
    copy?: boolean;
    dispose?: number;
  }

  class GIF {
    constructor(options: GIFOptions);
    addFrame(image: CanvasImageSource, options?: AddFrameOptions): void;
    on(event: 'finished', callback: (blob: Blob) => void): void;
    on(event: 'progress', callback: (percent: number) => void): void;
    on(event: 'abort', callback: () => void): void;
    render(): void;
    abort(): void;
  }

  export default GIF;
}
