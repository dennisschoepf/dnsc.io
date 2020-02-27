export default () => {
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  return (
    <footer className="bg-black text-white mt-40 sm:mt-56">
      <div className="container mx-auto p-10 text-center">
      © Dennis Schoepf {currentYear}, All Rights Reserved
      </div>
    </footer>
  );
};