import imagenNube from '../assets/images/archivos-nube.jpg'


function HomePage() {
  return (
    <div className="bg-blue-500 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a CloudArch</h1>
      <img
        src={imagenNube}
        alt="Imagen de bienvenida"
        className="max-w-full h-auto rounded-lg"
      />
    </div>
  );
}

export default HomePage;