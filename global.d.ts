declare module '@splinetool/react-spline/next' {
  import type React from 'react';

  type SplineProps = {
    scene?: string;
    className?: string;
    style?: React.CSSProperties;
    onLoad?: () => void;
    onMouseDown?: (e: any) => void;
    [key: string]: any;
  };

  const Spline: React.FC<SplineProps>;
  export default Spline;
}

declare module '@splinetool/react-spline' {
  import type React from 'react';
  const Spline: React.FC<any>;
  export default Spline;
}
