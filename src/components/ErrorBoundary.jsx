import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-[#F4F0EA] flex items-center justify-center p-6 text-center">
          <div className="card-editorial p-10 max-w-lg border border-[#C4924A]/60 space-y-6">
            <span className="font-script-lujo text-4xl text-[#C4924A] block">PÚA Brasa y Vino</span>
            <h2 className="font-serif-corp text-2xl font-bold tracking-widest text-[#F4F0EA]">
              RENOVANDO CARTA & CATÁLOGOS
            </h2>
            <p className="text-xs text-[#F4F0EA]/70 leading-relaxed font-light">
              Estamos actualizando la experiencia digital. Por favor recarga la página o intenta nuevamente.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="btn-luxury-gold py-3 px-8 text-xs font-bold uppercase tracking-widest"
            >
              Recargar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
