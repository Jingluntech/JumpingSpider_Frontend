export default function SearchInput({ search, placeholder }) {
  return (
    <form className='flex h-12 w-full gap-2'>
      <input
        type='text'
        placeholder={placeholder}
        className=' h-full w-full rounded-md border-2 border-grey-700 bg-grey-800 px-[14px] py-[11px] font-medium placeholder:text-grey-400'
      />
      <button className='flex h-full w-[124px] items-center justify-center rounded bg-primary-blue-500 px-[18px] py-3 font-medium'>
        {search}
      </button>
    </form>
  );
}
