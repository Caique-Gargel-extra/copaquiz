import { useRef, useEffect } from 'react';

function ImagemPixelada({ img, width, height,fatorReducao }) {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    console.log("tentativa objeto:"+fatorReducao);
    // Define o tamanho real do canvas (resolução interna)
    canvas.width = width;
    canvas.height = height;
    
    // Carrega a imagem original
    const imagemOriginal = new Image();
    imagemOriginal.src = img;
    if(fatorReducao<1)
        fatorReducao=1;
    imagemOriginal.onload = () => {
      // Calcula as dimensões da baixa resolução
      // Mantém a proporção da imagem original
      
      const larguraBaixaRes = Math.max(1, Math.floor(width / fatorReducao));
      const alturaBaixaRes = Math.max(1, Math.floor(height / fatorReducao));
      
      // Cria um canvas temporário para a versão de baixa resolução
      const canvasTemp = document.createElement('canvas');
      canvasTemp.width = larguraBaixaRes;
      canvasTemp.height = alturaBaixaRes;
      const ctxTemp = canvasTemp.getContext('2d');
      
      // Desenha a imagem reduzida no canvas temporário
      ctxTemp.drawImage(
        imagemOriginal, 
        0, 0, 
        imagemOriginal.width, 
        imagemOriginal.height,
        0, 0, 
        larguraBaixaRes, 
        alturaBaixaRes
      );
      
      // Desabilita suavização para manter os pixels nítidos
      ctx.imageSmoothingEnabled = false;
      
      // Desenha a imagem pixelada no canvas principal
      ctx.drawImage(canvasTemp, 0, 0, width, height);
    };
  }, [img, width, height,fatorReducao]); // Adicione as dependências aqui
  
  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width:'100%', 
        height: 'auto',
        imageRendering: 'pixelated' // Isso ajuda em alguns navegadores
      }} 
    />
  );
}

export default ImagemPixelada;