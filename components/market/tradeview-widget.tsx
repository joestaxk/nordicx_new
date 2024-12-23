// components/TradingViewWidget.tsx
import { useEffect, useRef } from 'react';

interface TradingViewWidgetProps {
  symbol?: string;
  colorTheme?: 'light' | 'dark';
  isTransparent?: boolean;
  height?: string;
  width?: string;
}

const TradingViewWidget = ({
  symbol = 'FX:EURUSD',
  colorTheme = 'dark',
  isTransparent = false,
  height = '100%',
  width = '100%'
}: TradingViewWidgetProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up previous script if it exists
    const existingScript = container.current?.querySelector('script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: width,
      height: height,
      locale: 'en',
      dateRange: '12M',
      colorTheme: colorTheme,
      isTransparent: isTransparent,
      autosize: true,
      largeChartUrl: ''
    });

    if (container.current) {
      container.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (script) {
        script.remove();
      }
    };
  }, [symbol, colorTheme, isTransparent, height, width]);

  return (
    <div className="tradingview-widget-container h-full" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a 
          href="https://www.tradingview.com/" 
          rel="noopener nofollow" 
          target="_blank"
        >
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;