const CastModal = ({ selectedCast, onClose }) => {
  if (!selectedCast) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-xl max-w-md w-full relative text-center">
        <button onClick={onClose} className="absolute top-3 right-4 text-white text-2xl">✖</button>
        <img src={selectedCast.photo} className="w-32 h-32 rounded-full mx-auto mb-4 border border-white object-cover" alt={selectedCast.name} />
        <h3 className="text-xl font-bold mb-1">{selectedCast.name}</h3>
        <p className="text-sm text-zinc-300">{selectedCast.bio}</p>
      </div>
    </div>
  )
}

export default CastModal