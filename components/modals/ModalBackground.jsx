export default function ModalBackground({ onClick }) {
  return (
    <div
      className='fixed inset-0 z-10 bg-grey-300 opacity-80'
      onClick={onClick}
    ></div>
  );
}
