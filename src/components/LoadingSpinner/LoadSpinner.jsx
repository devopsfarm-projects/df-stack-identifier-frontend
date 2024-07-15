function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
    <div className="flex space-x-1">
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
    </div>
  </div>
  )
}

export default LoadingSpinner