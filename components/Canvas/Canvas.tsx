import React, {useEffect, useRef} from 'react';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const image = new Image()

    const canvas = canvasRef.current as HTMLCanvasElement
    const context = canvas?.getContext('2d') as CanvasRenderingContext2D

    image.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context?.drawImage(image, 0, 0);

      import("@silvia-odwyer/photon").then(photon => {
      //here we can use photon library

        let pimage = photon.open_image(canvas, context);
        photon.fliph(pimage);
        //photon.flipv(pimage);
        photon.putImageData(canvas, context, pimage);
      });

    }

    image.src = "./next.svg"
  }, [])

  return (
    <div style={{backgroundColor: "#ffffff", padding: "10px"}}>
      <canvas ref={canvasRef}/>
    </div>
  );
};

export default Canvas;