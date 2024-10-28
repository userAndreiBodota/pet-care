const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-gray-500" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 text-black placeholder-gray-500 transition duration-200"
      />
    </div>
  );
};

export default Input;
