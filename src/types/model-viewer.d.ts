declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': {
        ref?: any;
        src?: string;
        ar?: boolean;
        'ar-modes'?: string;
        'camera-controls'?: boolean;
        'touch-action'?: string;
        loading?: string;
        reveal?: string;
        style?: React.CSSProperties;
        'ios-src'?: string;
        onClick?: () => void;
        children?: React.ReactNode;
      };
    }
  }
}

export {};