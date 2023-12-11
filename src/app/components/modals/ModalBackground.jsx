export default function ModalBackground({ onClick }) {
  return (
    <div
      className='fixed inset-0 z-40 bg-grey-600 opacity-80'
      onClick={onClick}
    ></div>
  );
}
